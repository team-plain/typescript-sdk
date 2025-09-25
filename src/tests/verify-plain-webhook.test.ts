import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import {
  PlainWebhookPayloadError,
  PlainWebhookSignatureVerificationError,
} from '../webhooks/errors';
import { verifyPlainWebhook } from '../webhooks/verify';
import threadCreatedPayload from './webhook-payloads/thread-created';

describe('verifyPlainWebhook', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('returns an error when the payload is empty', () => {
    const result = verifyPlainWebhook('', 'signature', 'secret');

    expect(result.error).instanceOf(PlainWebhookSignatureVerificationError);
    expect(result.error?.message).toBe('No webhook payload was provided.');
  });

  it('returns an error when the signature is empty', () => {
    const result = verifyPlainWebhook('payload', '', 'secret');

    expect(result.error).instanceOf(PlainWebhookSignatureVerificationError);
    expect(result.error?.message).toBe(
      'No signature header value was provided. Please pass the value of the "Plain-Request-Signature" header.'
    );
  });

  it('returns an error when the secret is empty', () => {
    const result = verifyPlainWebhook('payload', 'signature', '');

    expect(result.error).instanceOf(PlainWebhookSignatureVerificationError);
    expect(result.error?.message).toBe(
      'No webhook secret was provided. You can find your webhook secret in your workspace settings.'
    );
  });

  it('returns an error when the signature does not match', () => {
    const result = verifyPlainWebhook('payload', 'signature', 'secret');

    expect(result.error).instanceOf(PlainWebhookSignatureVerificationError);
    expect(result.error?.message).toBe('The signature provided is invalid.');
  });

  it('returns an error when the signature matches but the timestamp is too far in the past', () => {
    const result = verifyPlainWebhook(
      JSON.stringify(threadCreatedPayload),
      '3d8627428b7dd12c590c963d3522b07800de718a08704a52cd45e20a14f95f75',
      'secret'
    );

    expect(result.error).instanceOf(PlainWebhookSignatureVerificationError);
    expect(result.error?.message).toBe(
      'The timestamp provided in the webhook payload is too far in the past. The maximum allowed difference is 300 seconds.'
    );
  });

  it("doesn't return an error when the signature matches and the timestamp is within the tolerance", () => {
    // +5 minutes - 1 second
    vi.setSystemTime(new Date(Date.UTC(2023, 9, 19, 14, 17, 26)));

    const result = verifyPlainWebhook(
      JSON.stringify(threadCreatedPayload),
      '3d8627428b7dd12c590c963d3522b07800de718a08704a52cd45e20a14f95f75',
      'secret'
    );

    expect(result.error).toBeUndefined();
    expect(result.data?.type).toBe('thread.thread_created');
  });

  it('returns an error when the payload is not a valid JSON object', () => {
    const result = verifyPlainWebhook(
      'hello-world',
      '1bff4699de4fb5202a4b1e6cefd7b5fdfb02d19a67a1eb371dd417a45b0a47df',
      'secret'
    );

    expect(result.error).instanceOf(PlainWebhookPayloadError);
    expect(result.error?.message).toBe('The webhook payload is not a valid JSON object.');
  });

  it('returns an error when the payload is not a valid webhook payload', () => {
    const invalidPayload = {
      ...threadCreatedPayload,
      payload: {
        ...threadCreatedPayload.payload,
        thread: {
          ...threadCreatedPayload.payload.thread,
          title: undefined,
        },
      },
    };

    const result = verifyPlainWebhook(
      JSON.stringify(invalidPayload),
      '1c526c694a3e2f25ebfec5daa642101e2ce9618a84a1515d04f85b5e714910d8',
      'secret'
    );

    expect(result.error).instanceOf(PlainWebhookPayloadError);
    expect(result.error?.message).toBe("data/payload/thread must have required property 'title'");
  });
});
