import nock from 'nock';
import { beforeEach, describe, expect, test } from 'vitest';

import { PlainClient } from '..';

describe('error handling', () => {
  let interceptor: nock.Interceptor;

  beforeEach(() => {
    interceptor = nock('https://core-api.uk.plain.com').post('/graphql/v1');
  });

  test('should return an unknown error when something unexpected is returned', async () => {
    const scope = interceptor.reply(500, '🌶️', { 'apigw-requestid': 'req_4' });

    const client = new PlainClient({ apiKey: '123' });

    const result = await client.getCustomerById({ customerId: 'c_123' });

    expect(result.error).toEqual({
      type: 'internal_server_error',
      message: 'Internal server error.',
      requestId: 'req_4',
    });

    scope.done();
  });

  test('should return a forbidden error when API 401s', async () => {
    const scope = interceptor
      .matchHeader('Authorization', 'Bearer 123')
      .reply(401, 'unauthorized', {
        'apigw-requestid': 'req_5',
      });

    const client = new PlainClient({ apiKey: '123' });

    const result = await client.getCustomerById({ customerId: 'c_123' });

    expect(result.error).toEqual({
      type: 'forbidden',
      message: expect.stringContaining('Authentication failed'),
      requestId: 'req_5',
    });

    scope.done();
  });

  test('should return a forbidden error when API 403s', async () => {
    const scope = interceptor.matchHeader('Authorization', 'Bearer 123').reply(403, 'forbidden', {
      'apigw-requestid': 'req_6',
    });

    const client = new PlainClient({ apiKey: '123' });

    const result = await client.getCustomerById({ customerId: 'c_123' });

    expect(result.error).toEqual({
      type: 'forbidden',
      message: expect.stringContaining('Authentication failed'),
      requestId: 'req_6',
    });

    scope.done();
  });

  test('should return a forbidden error when API responds with mutation error', async () => {
    const scope = interceptor.matchHeader('Authorization', 'Bearer 123').reply(
      200,
      {
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
      {
        'apigw-requestid': 'req_7',
      }
    );

    const client = new PlainClient({ apiKey: '123' });

    const result = await client.getCustomerById({ customerId: 'c_123' });

    expect(result.error).toEqual({
      type: 'forbidden',
      message: 'Insufficient permissions, missing "customerGroup:edit".',
      requestId: 'req_7',
    });

    scope.done();
  });
});
