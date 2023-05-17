import { describe, expect, test } from 'vitest';
import nock from 'nock';
import { PlainClient } from '..';
import { print } from 'graphql';
import {
  CreateIssueDocument,
  type MutationErrorPartsFragment,
  MutationErrorType,
  MutationFieldErrorType,
} from '../graphql/types';
import type { PlainSDKError } from '../error';

describe('mutation test - create an issue', () => {
  test('should handle an succesful mutation response', async () => {
    const customerId = 'c_123';
    const issueTypeId = 'it_123';

    const issue = {
      __typename: 'Issue',
      id: 'i_01GZTC622DM8G4RFS8KXG62EGK',
      issueKey: 'I-806',
      status: 'OPEN',
      customer: { id: customerId },
      priority: { __typename: 'IssuePriority', label: 'High', value: 1 },
      updatedAt: { __typename: 'DateTime', iso8601: '2023-05-07T05:50:35.085Z' },
      updatedBy: { __typename: 'UserActor', userId: 'u_01FN4BEVKY3EQQ5BFC24M8JTJH' },
      createdBy: { __typename: 'UserActor', userId: 'u_01FN4BEVKY3EQQ5BFC24M8JTJH' },
      createdAt: { __typename: 'DateTime', iso8601: '2023-05-07T05:50:35.085Z' },
      issueType: {
        __typename: 'IssueType',
        id: issueTypeId,
        publicName: '$123',
        isArchived: true,
        defaultIssuePriority: { __typename: 'IssuePriority', label: 'High', value: 1 },
      },
      deletedAt: null,
    };

    const response = {
      data: {
        createIssue: {
          issue,
          error: null,
        },
      },
    };

    const scope = nock('https://core-api.uk.plain.com')
      .post('/graphql/v1', {
        query: print(CreateIssueDocument),
        variables: {
          input: {
            issueTypeId: issueTypeId,
            customerId: customerId,
            priorityValue: 1,
          },
        },
      })
      .matchHeader('Authorization', `Bearer abc`)
      .reply(200, response);

    const client = new PlainClient({ apiKey: 'abc' });
    const result = await client.createIssue({
      issueTypeId: issueTypeId,
      customerId: customerId,
      priorityValue: 1,
    });

    expect(result.error).toBeUndefined();
    expect(result.data).toStrictEqual(issue);
    scope.done();
  });

  test('should handle an error mutation response', async () => {
    const graphqlError: MutationErrorPartsFragment = {
      __typename: 'MutationError',
      message: 'There was a validation error.',
      type: MutationErrorType.Validation,
      code: 'input_validation',
      fields: [
        {
          field: 'issueTypeId',
          message: 'Required',
          type: MutationFieldErrorType.Required,
        },
        {
          field: 'customerId',
          message: 'Required',
          type: MutationFieldErrorType.Required,
        },
      ],
    };

    const response = {
      data: {
        createIssue: {
          issue: null,
          error: graphqlError,
        },
      },
    };

    const scope = nock('https://core-api.uk.plain.com')
      .post('/graphql/v1', {
        query: print(CreateIssueDocument),
        variables: {
          input: {
            issueTypeId: '',
            customerId: '',
            priorityValue: 1,
          },
        },
      })
      .matchHeader('Authorization', `Bearer 123`)
      .reply(200, response);

    const client = new PlainClient({ apiKey: '123' });
    const result = await client.createIssue({ customerId: '', issueTypeId: '', priorityValue: 1 });

    const err: PlainSDKError = {
      type: 'mutation_error',
      message: 'There was a validation error.',
      errorDetails: graphqlError,
    };

    expect(result.error).toEqual(err);
    expect(result.data).toBeUndefined();
    scope.done();
  });
});
