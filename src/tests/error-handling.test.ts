import { beforeEach, describe, expect, test } from 'vitest';
import nock from 'nock';
import { PlainSDKClient } from '..';

describe('error handling', () => {
  let interceptor: nock.Interceptor;

  beforeEach(() => {
    interceptor = nock('https://core-api.uk.plain.com').post('/graphql/v1');
  });

  test('should return an unknown error when something unexpected is returned', async () => {
    const scope = interceptor.reply(500, '🌶️');

    const client = new PlainSDKClient({ apiKey: '123' });

    const result = await client.getCustomerById({ customerId: 'c_123' });

    expect(result.error).toEqual({
      type: 'internal_server_error',
      message: 'Internal server error.',
    });

    scope.done();
  });

  test('should return a forbidden error when API 401s', async () => {
    const scope = interceptor.matchHeader('Authorization', 'Bearer 123').reply(401, 'unauthorized');

    const client = new PlainSDKClient({ apiKey: '123' });

    const result = await client.getCustomerById({ customerId: 'c_123' });

    expect(result.error).toEqual({
      type: 'forbidden',
      message: expect.stringContaining('Authentication failed'),
    });

    scope.done();
  });

  test('should return a forbidden error when API 403s', async () => {
    const scope = interceptor.matchHeader('Authorization', 'Bearer 123').reply(403, 'forbidden');

    const client = new PlainSDKClient({ apiKey: '123' });

    const result = await client.getCustomerById({ customerId: 'c_123' });

    expect(result.error).toEqual({
      type: 'forbidden',
      message: expect.stringContaining('Authentication failed'),
    });

    scope.done();
  });

  test('should return a forbidden error when API responds with mutation error', async () => {
    const scope = interceptor.matchHeader('Authorization', 'Bearer 123').reply(200, {
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
    });

    const client = new PlainSDKClient({ apiKey: '123' });

    const result = await client.getCustomerById({ customerId: 'c_123' });

    expect(result.error).toEqual({
      type: 'forbidden',
      message: 'Insufficient permissions, missing "customerGroup:edit".',
    });

    scope.done();
  });
});
