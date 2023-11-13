import { print } from 'graphql';
import { describe, expect, test } from 'vitest';

import { PlainClient } from '..';
import type { PlainSDKError } from '../error';
import { CustomerByIdDocument, type CustomerPartsFragment } from '../graphql/types';
import { PlainGraphQLError } from '../graphql-utlities';
import { testHelpers } from './test-helpers';

describe('query test - customer by id', () => {
  test('should return a valid customer', async () => {
    const customerId = 'c_123';

    const response: { data: { customer: CustomerPartsFragment } } = {
      data: {
        customer: {
          __typename: 'Customer',
          id: customerId,
          fullName: 'Ike Torphy',
          shortName: 'Ike',
          externalId: 'ike-torphy',
          email: {
            email: 'test@gmail.com',
            isVerified: true,
            verifiedAt: {
              __typename: 'DateTime',
              iso8601: '2023-03-20T13:06:37.918Z',
              unixTimestamp: '1699890305',
            },
          },
          updatedAt: {
            __typename: 'DateTime',
            iso8601: '2023-05-01T09:54:51.715Z',
            unixTimestamp: '1699890305',
          },
          createdAt: {
            __typename: 'DateTime',
            iso8601: '2023-03-20T13:06:37.961Z',
            unixTimestamp: '1699890305',
          },
          createdBy: {},
          markedAsSpamAt: null,
          customerGroupMemberships: {
            edges: [],
          },
        },
      },
    };

    const { fetchSpy, expectRequest } = testHelpers.createFetch({
      responseStatus: 200,
      responseBody: response,
    });

    globalThis.fetch = fetchSpy;

    const client = new PlainClient({ apiKey: 'abc' });
    const result = await client.getCustomerById({ customerId: customerId });

    expectRequest({
      apiKey: 'abc',
      responseBody: {
        query: print(CustomerByIdDocument),
        variables: { customerId: customerId },
      },
    });

    expect(result.error).toBeUndefined();
    expect(result.data).toEqual({
      ...response.data.customer,
      customerGroupMemberships: [],
    });
  });

  test('should accept a null customer when not found', async () => {
    const customerId = 'c_123';

    const { fetchSpy, expectRequest } = testHelpers.createFetch({
      responseStatus: 200,
      responseBody: {
        data: {
          customer: null,
        },
      },
    });

    globalThis.fetch = fetchSpy;

    const client = new PlainClient({ apiKey: '123' });
    const result = await client.getCustomerById({ customerId: customerId });

    expectRequest({
      apiKey: '123',
      responseBody: {
        query: print(CustomerByIdDocument),
        variables: { customerId: customerId },
      },
    });

    expect(result.error).toBeUndefined();
    expect(result.data).toEqual(null);
  });

  test('should handle missing inputs/variables', async () => {
    const graphqlErrors: PlainGraphQLError[] = [
      {
        message: 'Variable "$customerId" of required type "ID!" was not provided.',
        locations: [{ line: 1, column: 20 }],
        extensions: { code: 'BAD_USER_INPUT' },
        path: ['a', 1],
      },
    ];

    const { fetchSpy, expectRequest } = testHelpers.createFetch({
      responseStatus: 400,
      responseBody: {
        errors: graphqlErrors,
      },
      responseHeaders: {
        'Apigw-Requestid': 'req_1',
      },
    });

    globalThis.fetch = fetchSpy;

    const client = new PlainClient({ apiKey: '456' });

    // We're testing a broken input here for users who don't use typescript
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-explicit-any
    const result = await client.getCustomerById({} as any);

    const err: PlainSDKError = {
      type: 'bad_request',
      message: 'Malformed query, missing or invalid arguments provided.',
      graphqlErrors,
      requestId: 'req_1',
    };

    expectRequest({
      apiKey: '456',
      responseBody: {
        query: print(CustomerByIdDocument),
        variables: {},
      },
    });

    expect(result.data).toBeUndefined();
    expect(result.error).toEqual(err);
  });
});
