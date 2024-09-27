import { describe, expect, it, test } from 'vitest';

import { PlainWebhookPayloadError, PlainWebhookVersionMismatchError } from '../webhooks/errors';
import { parsePlainWebhook } from '../webhooks/parse';
import customerCreatedPayload from './webhook-payloads/customer-created';
import emailReceivedPayload from './webhook-payloads/email-received';
import invalidWebhook from './webhook-payloads/invalid';
import threadAssignmentTransitionedPayload from './webhook-payloads/thread-assignment-transitioned';
import threadCreatedPayload from './webhook-payloads/thread-created';
import threadStatusTransitionedPayload from './webhook-payloads/thread-status-transitioned';

describe('Parse webhook', () => {
  [
    customerCreatedPayload,
    emailReceivedPayload,
    threadAssignmentTransitionedPayload,
    threadCreatedPayload,
    threadStatusTransitionedPayload,
  ].forEach((payload: { type: string }) => {
    test(`should validate the ${payload?.type} payload successfully`, () => {
      expect(parsePlainWebhook(payload).data).toBeTruthy();
    });
  });

  test('should fail to validate an invalid payload', () => {
    expect(parsePlainWebhook(invalidWebhook).error).toBeTruthy();
  });

  it('accepts a stringified payload', () => {
    const result = parsePlainWebhook(JSON.stringify(threadCreatedPayload));
    expect(result.data).toBeTruthy();
  });

  it('returns a human-readable error message when the payload is not a valid webhook payload', () => {
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

    const result = parsePlainWebhook(invalidPayload);

    expect(result.error).instanceOf(PlainWebhookPayloadError);
    expect(result.error?.message).toBe("data/payload/thread must have required property 'title'");
  });

  it('returns a version mismatch error', () => {
    const invalidWebhook = {
      ...threadCreatedPayload,

      webhookMetadata: {
        ...threadCreatedPayload.webhookMetadata,
        webhookTargetVersion: 'NEW_VERSION',
      },
    };

    const result = parsePlainWebhook(invalidWebhook);

    expect(result.error).instanceOf(PlainWebhookVersionMismatchError);
    expect(result.error?.message).toBe(
      'The webhook payload (version=NEW_VERSION) is incompatible with the current version of the SDK. Please upgrade both the SDK and the webhook target to the latest version. Refer to https://www.plain.com/docs/api-reference/webhooks/versions for more information. Original error: data/webhookMetadata/webhookTargetVersion must be equal to constant'
    );
  });
});
