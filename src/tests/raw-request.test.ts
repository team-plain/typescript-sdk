import { describe, expect, test } from 'vitest';

import { PlainClient } from '..';
import type { PlainSDKError } from '../error';
import { testHelpers } from './test-helpers';

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

    const { fetchSpy, expectRequest } = testHelpers.createFetch({
      responseStatus: 200,
      responseBody: response,
    });

    const client = new PlainClient({ apiKey: 'abc', __fetch: fetchSpy });
    const result = await client.rawRequest({
      query,
      variables,
    });

    expectRequest({
      apiKey: 'abc',
      body: {
        query,
        variables,
      },
    });

    expect(result.error).toBeUndefined();
    expect(result.data).toEqual(response.data);
  });

  test('uses custom url if provided', async () => {
    const query = '';
    const variables = {};

    const { fetchSpy, expectRequest } = testHelpers.createFetch({
      responseStatus: 200,
      responseBody: {},
    });

    const client = new PlainClient({
      apiKey: 'abc',
      apiUrl: 'https://core-api.uk.getresolve.io/graphql/v1',
      __fetch: fetchSpy,
    });

    await client.rawRequest({
      query,
      variables,
    });

    expectRequest({
      apiKey: 'abc',
      url: 'https://core-api.uk.getresolve.io/graphql/v1',
      body: {
        query,
        variables,
      },
    });
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

    const { fetchSpy, expectRequest } = testHelpers.createFetch({
      responseStatus: 400,
      responseBody: {
        errors,
      },
      responseHeaders: {
        'apigw-requestid': 'req_2',
      },
    });

    const client = new PlainClient({ apiKey: 'abc', __fetch: fetchSpy });
    const result = await client.rawRequest({
      query,
      variables,
    });

    expectRequest({
      apiKey: 'abc',
      body: {
        query,
        variables,
      },
    });

    const err: PlainSDKError = {
      type: 'bad_request',
      message: 'Malformed query, missing or invalid arguments provided.',
      graphqlErrors: errors,
      requestId: 'req_2',
    };

    expect(result.data).toBeUndefined();
    expect(result.error).toEqual(err);
  });
});
