import nock from 'nock';
import { describe, expect, test } from 'vitest';

import { PlainClient } from '..';
import type { PlainSDKError } from '../error';

describe('raw request', () => {
  test('make a request as defined', async () => {
    const response = {
      data: {
        customer: {
          id: 'abc',
        },
      },
    };

    const query = 'query customer { customer(customerId: "abc") { id }}';
    const variables = { foo: 'bar' };

    const scope = nock('https://core-api.uk.plain.com')
      .post('/graphql/v1', {
        query,
        variables,
      })
      .matchHeader('Authorization', `Bearer abc`)
      .reply(200, response);

    const client = new PlainClient({ apiKey: 'abc' });
    const result = await client.rawRequest({
      query,
      variables,
    });

    expect(result.error).toBeUndefined();
    expect(result.data).toEqual(response.data);
    scope.done();
  });

  test('uses custom url if provided', async () => {
    const query = '';
    const variables = {};
    const scope = nock('https://core-api.uk.getresolve.io')
      .post('/graphql/v1', {
        query,
        variables,
      })
      .reply(200, {});

    const client = new PlainClient({
      apiKey: 'abc',
      apiUrl: 'https://core-api.uk.getresolve.io/graphql/v1',
    });

    await client.rawRequest({
      query,
      variables,
    });

    scope.done();
  });

  test.each([
    [
      {
        name: 'with path',
        errors: [
          {
            message: 'Variable "$customerId" of required type "ID!" was not provided.',
            locations: [{ line: 1, column: 20 }],
            extensions: { code: 'BAD_USER_INPUT' },
            path: ['a', 1],
          },
        ],
      },
    ],
    [
      {
        name: 'without path',
        errors: [
          {
            message: 'Variable "$customerId" of required type "ID!" was not provided.',
            locations: [{ line: 1, column: 20 }],
            extensions: { code: 'BAD_USER_INPUT' },
          },
        ],
      },
    ],
  ])('handles graphql errors ($testCase.name)', async (testCase) => {
    const { errors } = testCase;
    const query = 'query customer { customer() { id }}';
    const variables = {};

    const scope = nock('https://core-api.uk.plain.com')
      .post('/graphql/v1', {
        query,
        variables,
      })
      .matchHeader('Authorization', `Bearer abc`)
      .reply(
        400,
        {
          errors,
        },
        {
          'apigw-requestid': 'req_2',
        }
      );

    const client = new PlainClient({ apiKey: 'abc' });
    const result = await client.rawRequest({
      query,
      variables,
    });

    const err: PlainSDKError = {
      type: 'bad_request',
      message: 'Malformed query, missing or invalid arguments provided.',
      graphqlErrors: errors,
      requestId: 'req_2',
    };

    expect(result.data).toBeUndefined();
    expect(result.error).toEqual(err);
    scope.done();
  });
});
