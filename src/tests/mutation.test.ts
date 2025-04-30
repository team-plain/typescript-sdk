import { print } from 'graphql';
import { describe, expect, test } from 'vitest';

import { PlainClient } from '..';
import type { PlainSDKError } from '../error';
import {
  CreateThreadDocument,
  type MutationErrorPartsFragment,
  MutationErrorType,
  MutationFieldErrorType,
  type ThreadPartsFragment,
  ThreadStatus,
} from '../graphql/types';
import { testHelpers } from './test-helpers';

describe('mutation test - create an issue', () => {
  test('should handle an succesful mutation response', async () => {
    const customerId = 'c_123';
    const threadTitle = 'Test thread';

    const thread: ThreadPartsFragment = {
      __typename: 'Thread',
      id: 'th_01HD47ZH1A14GH0HDYBQ9KHGKZ',
      ref: 'T-12345',
      title: threadTitle,
      assignedAt: null,
      assignedTo: null,
      createdBy: { __typename: 'UserActor', userId: 'u_01FN4BEVKY3EQQ5BFC24M8JTJH' },
      createdAt: {
        __typename: 'DateTime',
        iso8601: '2023-05-07T05:50:35.085Z',
        unixTimestamp: '1683438635085',
      },
      customer: {
        id: customerId,
        __typename: 'Customer',
      },
      description: null,
      externalId: null,
      labels: [],
      threadFields: [],
      tenant: null,
      previewText: null,
      priority: 1,
      status: ThreadStatus.Todo,
      statusDetail: {
        __typename: 'ThreadStatusDetailNewReply',
        statusChangedAt: {
          __typename: 'DateTime',
          iso8601: '2023-05-07T05:50:35.085Z',
          unixTimestamp: '1683438635085',
        },
      },
      statusChangedAt: {
        __typename: 'DateTime',
        iso8601: '2023-05-07T05:50:35.085Z',
        unixTimestamp: '1683438635085',
      },
      updatedBy: { __typename: 'UserActor', userId: 'u_01FN4BEVKY3EQQ5BFC24M8JTJH' },
      updatedAt: {
        __typename: 'DateTime',
        iso8601: '2023-05-07T05:50:35.085Z',
        unixTimestamp: '1683438635085',
      },
    };

    const response = {
      data: {
        createThread: {
          thread,
          error: null,
        },
      },
    };

    const { fetchSpy, expectRequest } = testHelpers.createFetch({
      responseStatus: 200,
      responseBody: response,
    });

    globalThis.fetch = fetchSpy;

    const client = new PlainClient({ apiKey: 'abc' });
    const result = await client.createThread({
      components: [{ componentBadge: { badgeLabel: 'Badge' } }],
      title: threadTitle,
      customerIdentifier: {
        customerId: customerId,
      },
    });

    expectRequest({
      apiKey: 'abc',
      responseBody: {
        query: print(CreateThreadDocument),
        variables: {
          input: {
            components: [{ componentBadge: { badgeLabel: 'Badge' } }],
            title: threadTitle,
            customerIdentifier: {
              customerId: customerId,
            },
          },
        },
      },
    });

    expect(result.error).toBeUndefined();
    expect(result.data).toStrictEqual(thread);
  });

  test('should handle an error mutation response', async () => {
    const graphqlError: MutationErrorPartsFragment = {
      __typename: 'MutationError',
      message: 'There was a validation error.',
      type: MutationErrorType.Validation,
      code: 'input_validation',
      fields: [
        {
          field: 'customerIdentifier.customerId',
          message: 'Required',
          type: MutationFieldErrorType.Required,
        },
        {
          field: 'title',
          message: 'Required',
          type: MutationFieldErrorType.Required,
        },
        {
          field: 'components',
          message: 'Array must contain at least 1 element(s)',
          type: MutationFieldErrorType.Validation,
        },
      ],
    };

    const response = {
      data: {
        createThread: {
          issue: null,
          error: graphqlError,
        },
      },
    };

    const { fetchSpy, expectRequest } = testHelpers.createFetch({
      responseStatus: 200,
      responseBody: response,
      responseHeaders: {
        'APIGW-REQUESTID': 'req_3',
      },
    });

    globalThis.fetch = fetchSpy;

    const client = new PlainClient({ apiKey: '123' });
    const result = await client.createThread({
      customerIdentifier: {
        customerId: '',
      },
      title: '',
      components: [],
    });

    const err: PlainSDKError = {
      type: 'mutation_error',
      message: 'There was a validation error.',
      errorDetails: graphqlError,
      requestId: 'req_3',
    };

    expectRequest({
      apiKey: '123',
      responseBody: {
        query: print(CreateThreadDocument),
        variables: {
          input: {
            customerIdentifier: {
              customerId: '',
            },
            title: '',
            components: [],
          },
        },
      },
    });

    expect(result.error).toEqual(err);
    expect(result.data).toBeUndefined();
  });
});
