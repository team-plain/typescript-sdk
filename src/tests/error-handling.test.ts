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

    globalThis.fetch = fetchSpy;

    const client = new PlainClient({ apiKey: '123' });

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

    globalThis.fetch = fetchSpy;

    const client = new PlainClient({ apiKey: '123' });

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

    globalThis.fetch = fetchSpy;

    const client = new PlainClient({ apiKey: '123' });

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

    globalThis.fetch = fetchSpy;

    const client = new PlainClient({ apiKey: '123' });

    const result = await client.getCustomerById({ customerId: 'c_123' });

    expect(result.error).toEqual({
      type: 'forbidden',
      message: 'Insufficient permissions, missing "customerGroup:edit".',
      requestId: 'req_7',
    });
  });

  test('should return info about missing permissions when API provides it', async () => {
    const { fetchSpy } = testHelpers.createFetch({
      responseStatus: 401,
      responseBody: {
        errors: [
          {
            message: 'Insufficient permissions, missing "customer:read".',
            locations: [
              {
                line: 2,
                column: 3,
              },
            ],
            path: ['customers'],
            extensions: {
              code: 'FORBIDDEN',
            },
          },
        ],
        data: null,
      },
      responseHeaders: { 'apigw-requestid': 'req_8' },
    });

    globalThis.fetch = fetchSpy;

    const client = new PlainClient({ apiKey: '123' });

    const result = await client.getCustomers({});

    expect(result.error).toEqual({
      type: 'forbidden',
      message: expect.stringContaining('Insufficient permissions, missing "customer:read".'),
      requestId: 'req_8',
    });
  });
});
