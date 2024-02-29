import { describe, test } from 'vitest';

import { webhooksSchemaDefinitionSchema } from '../../webhook-model';
import customerCreatedPayload from './webhook-payloads/customer-created';
import emailReceivedPayload from './webhook-payloads/email-received';
import emailSentPayload from './webhook-payloads/email-sent';
import threadAssignmentTransitionedPayload from './webhook-payloads/thread-assignment-transitioned';
import threadCreatedPayload from './webhook-payloads/thread-created';
import threadStatusTransitionedPayload from './webhook-payloads/thread-status-transitioned';

describe('Webhook model tests', () => {
  [
    customerCreatedPayload,
    emailReceivedPayload,
    emailSentPayload,
    threadAssignmentTransitionedPayload,
    threadCreatedPayload,
    threadStatusTransitionedPayload,
  ].forEach((payload) => {
    test(`should parse the ${payload.type} payload`, () => {
      webhooksSchemaDefinitionSchema.parse(payload);
    });
  });
});
