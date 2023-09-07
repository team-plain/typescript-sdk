import { print } from 'graphql';
import nock from 'nock';
import { describe, expect, test } from 'vitest';

import { PlainClient } from '..';
import type { PlainSDKError } from '../error';
import { CustomerByIdDocument } from '../graphql/types';
import { PlainGraphQLError } from '../graphql-utlities';

describe('query test - customer by id', () => {
  test('should return a valid customer', async () => {
    const customerId = 'c_123';

    const response = {
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
            verifiedAt: { __typename: 'DateTime', iso8601: '2023-03-20T13:06:37.918Z' },
          },
          status: 'ACTIVE',
          statusChangedAt: { __typename: 'DateTime', iso8601: '2023-05-01T09:54:51.715Z' },
          assignedToUser: { __typename: 'UserActor', userId: 'u_123' },
          assignedAt: { __typename: 'DateTime', iso8601: '2023-04-10T15:01:54.499Z' },
          updatedAt: { __typename: 'DateTime', iso8601: '2023-05-01T09:54:51.715Z' },
          lastIdleAt: { __typename: 'DateTime', iso8601: '2023-03-20T13:06:47.492Z' },
          createdAt: { __typename: 'DateTime', iso8601: '2023-03-20T13:06:37.961Z' },
          createdBy: {},
          markedAsSpamAt: null,
        },
      },
    };

    const scope = nock('https://core-api.uk.plain.com')
      .post('/graphql/v1', {
        query: print(CustomerByIdDocument),
        variables: { customerId: customerId },
      })
      .matchHeader('Authorization', `Bearer abc`)
      .reply(200, response);

    const client = new PlainClient({ apiKey: 'abc' });
    const result = await client.getCustomerById({ customerId: customerId });

    expect(result.error).toBeUndefined();
    expect(result.data).toEqual(response.data.customer);
    scope.done();
  });

  test('should accept a null customer when not found', async () => {
    const customerId = 'c_123';

    const scope = nock('https://core-api.uk.plain.com')
      .post('/graphql/v1', {
        query: print(CustomerByIdDocument),
        variables: { customerId: customerId },
      })
      .matchHeader('Authorization', `Bearer 123`)
      .reply(200, {
        data: {
          customer: null,
        },
      });

    const client = new PlainClient({ apiKey: '123' });
    const result = await client.getCustomerById({ customerId: customerId });

    expect(result.error).toBeUndefined();
    expect(result.data).toEqual(null);
    scope.done();
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

    const scope = nock('https://core-api.uk.plain.com')
      .post('/graphql/v1', {
        query: print(CustomerByIdDocument),
        variables: {},
      })
      .matchHeader('Authorization', `Bearer 456`)
      .reply(
        400,
        {
          errors: graphqlErrors,
        },
        {
          'Apigw-Requestid': 'req_1',
        }
      );

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

    expect(result.data).toBeUndefined();
    expect(result.error).toEqual(err);

    scope.done();
  });
});
