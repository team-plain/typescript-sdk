import { describe, expect, test } from 'vitest';

import { PlainClient } from '..';
import { testHelpers } from './test-helpers';

describe('error handling', () => {
  test('should return an unknown error when something unexpected is returned', async () => {
    const { fetchSpy } = testHelpers.createFetch({
      responseStatus: 500,
      responseBody: '🌶️',
      responseHeaders: { 'apigw-requestid': 'req_4' },
    });

    const client = new PlainClient({ apiKey: '123', fetch: fetchSpy });

    const result = await client.getCustomerById({ customerId: 'c_123' });

    expect(result.error).toEqual({
      type: 'internal_server_error',
      message: 'Internal server error.',
      requestId: 'req_4',
    });
  });

  test('should return a forbidden error when API 401s', async () => {
    const { fetchSpy } = testHelpers.createFetch({
      responseStatus: 401,
      responseBody: 'unauthorized',
      responseHeaders: { 'apigw-requestid': 'req_5' },
    });

    const client = new PlainClient({ apiKey: '123', fetch: fetchSpy });

    const result = await client.getCustomerById({ customerId: 'c_123' });

    expect(result.error).toEqual({
      type: 'forbidden',
      message: expect.stringContaining('Authentication failed'),
      requestId: 'req_5',
    });
  });

  test('should return a forbidden error when API 403s', async () => {
    const { fetchSpy } = testHelpers.createFetch({
      responseStatus: 403,
      responseBody: 'forbidden',
      responseHeaders: { 'apigw-requestid': 'req_6' },
    });

    const client = new PlainClient({ apiKey: '123', fetch: fetchSpy });

    const result = await client.getCustomerById({ customerId: 'c_123' });

    expect(result.error).toEqual({
      type: 'forbidden',
      message: expect.stringContaining('Authentication failed'),
      requestId: 'req_6',
    });
  });

  test('should return a forbidden error when API responds with mutation error', async () => {
    const { fetchSpy } = testHelpers.createFetch({
      responseStatus: 200,
      responseBody: {
        data: {
          updateCustomerGroup: {
            customerGroup: null,
            error: {
              __typename: 'MutationError',
              message: 'Insufficient permissions, missing "customerGroup:edit".',
              type: 'FORBIDDEN',
              code: 'forbidden',
              fields: [],
            },
          },
        },
      },
      responseHeaders: {
        'apigw-requestid': 'req_7',
      },
    });

    const client = new PlainClient({ apiKey: '123', fetch: fetchSpy });

    const result = await client.getCustomerById({ customerId: 'c_123' });

    expect(result.error).toEqual({
      type: 'forbidden',
      message: 'Insufficient permissions, missing "customerGroup:edit".',
      requestId: 'req_7',
    });
  });
});
