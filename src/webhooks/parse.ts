import Ajv from 'ajv';
import addFormats from 'ajv-formats';

import type { Result } from '../result';
import type { WebhooksSchemaDefinition } from './webhook-schema';
import webhookSchema from './webhook-schema.json';

export function parsePlainWebhook(payload: unknown): Result<WebhooksSchemaDefinition, Error> {
  const ajv = new Ajv({
    unicodeRegExp: false,
  });
  addFormats(ajv);

  try {
    if (ajv.validate<WebhooksSchemaDefinition>(webhookSchema, payload)) {
      return {
        data: payload,
      };
    }
  } catch (e) {
    console.log(e);
    return {
      error:
        e instanceof Error
          ? e
          : new Error('An unknown error occurred while parsing the Plain webhook payload'),
    };
  }

  return {
    error: new Error('Plain webhook payload failed to parse: ' + ajv.errorsText()),
  };
}
