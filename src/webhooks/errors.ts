export abstract class PlainWebhookError extends Error {}

export class PlainWebhookSignatureVerificationError extends PlainWebhookError {}

export class PlainWebhookVersionMismatchError extends PlainWebhookError {
  constructor(error: string, payloadVersion: string) {
    super(
      `The webhook payload (version=${payloadVersion}) is incompatible with the current version of the SDK. Please upgrade both the SDK and the webhook target to the latest version. Refer to https://www.plain.com/docs/api-reference/webhooks/versions for more information. Original error: ${error}`
    );
  }
}

export class PlainWebhookPayloadError extends PlainWebhookError {}
