import { describe, expect, test } from 'vitest';

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
});
