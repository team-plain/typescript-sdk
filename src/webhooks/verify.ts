import * as crypto from 'node:crypto';

import { type Result, isErr } from '../result';
import {
  type PlainWebhookError,
  PlainWebhookPayloadError,
  PlainWebhookSignatureVerificationError,
} from './errors';
import { parsePlainWebhook } from './parse';
import type { WebhooksSchemaDefinition } from './webhook-schema';

/**
 * Verifies and validates a Plain webhook payload.
 *
 * @param payload - The raw request body.
 * @param signature - The value of the 'Plain-Request-Signature' header.
 * @param secret - Your Plain webhook signing secret.
 * @param tolerance - (Optional) Maximum allowed difference in seconds between the timestamp and the current time. Defaults to 300 seconds. This is helpful to prevent replay attacks.
 * @returns A Result object containing the validated payload or an error.
 */
export function verifyPlainWebhook(
  payloadRaw: string,
  signature: string,
  secret: string,
  tolerance = 300 // 5 minutes
): Result<WebhooksSchemaDefinition, PlainWebhookError> {
  const signatureVerificationResult = verifyWebhookSignature(payloadRaw, signature, secret);
  if (isErr(signatureVerificationResult)) {
    return signatureVerificationResult;
  }

  const payloadResult = parsePlainWebhook(payloadRaw);
  if (isErr(payloadResult)) {
    return payloadResult;
  }

  const payload = payloadResult.data;
  const timestamp = Date.parse(payload.webhookMetadata.webhookDeliveryAttemptTimestamp);

  if (Number.isNaN(timestamp)) {
    return {
      error: new PlainWebhookPayloadError(
        `Invalid timestamp provided in the webhook payload: ${timestamp}. This is likely a bug in the Plain API (eventId: ${payload.id}).`
      ),
    };
  }

  const currentTime = Date.now();
  if (Math.abs(currentTime - timestamp) > tolerance * 1000) {
    return {
      error: new PlainWebhookSignatureVerificationError(
        `The timestamp provided in the webhook payload is too far in the past. The maximum allowed difference is ${tolerance} seconds.`
      ),
    };
  }

  return { data: payload };
}

function verifyWebhookSignature(
  payload: string,
  signature: string,
  secret: string
): Result<true, PlainWebhookSignatureVerificationError> {
  if (payload.length === 0) {
    return {
      error: new PlainWebhookSignatureVerificationError('No webhook payload was provided.'),
    };
  }

  if (signature.length === 0) {
    return {
      error: new PlainWebhookSignatureVerificationError(
        'No signature header value was provided. Please pass the value of the "Plain-Request-Signature" header.'
      ),
    };
  }

  if (secret.length === 0) {
    return {
      error: new PlainWebhookSignatureVerificationError(
        'No webhook secret was provided. You can find your webhook secret in your workspace settings.'
      ),
    };
  }

  const expectedSignature = crypto
    .createHmac('sha256', secret)
    .update(payload, 'utf8')
    .digest('hex');

  if (signature !== expectedSignature) {
    return {
      error: new PlainWebhookSignatureVerificationError('The signature provided is invalid.'),
    };
  }

  return { data: true };
}
