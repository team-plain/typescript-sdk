import { TypedDocumentNode } from '@graphql-typed-document-node/core';
import { Result } from './result';
import { print } from 'graphql';
import axios from 'axios';
import { Context } from './context';
import { PlainSDKError } from './error';
import { getMutationErrorFromResponse, isPlainGraphQLResponse } from './graphql-utlities';

export async function request<Query, Variables>(
  ctx: Context,
  args: {
    query: TypedDocumentNode<Query, Variables> | string;
    variables?: Variables;
  }
): Promise<Result<Query, PlainSDKError>> {
  const query = typeof args.query === 'string' ? args.query : print(args.query);

  try {
    const headers = {
      Authorization: `Bearer ${ctx.apiKey}`,
    };

    const url = 'https://core-api.uk.plain.com/graphql/v1';

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const { data: res } = await axios.post(
      url,
      {
        query: query,
        variables: args.variables || null,
      },
      {
        headers,
      }
    );

    if (!isPlainGraphQLResponse(res)) {
      throw new Error('Unexpected response received');
    }

    const mutationError = getMutationErrorFromResponse(res.data);
    if (mutationError) {
      return {
        error: {
          code: 'mutation_error',
          message: mutationError.message,
          errorDetails: mutationError,
        },
      };
    }

    return {
      data: res.data as Query,
    };
  } catch (err) {
    if (axios.isAxiosError(err)) {
      // Case 1: We got a response back that was > 299 in status code
      if (err.response) {
        if (err.response.status === 401) {
          return {
            error: {
              code: 'forbidden',
              message: 'Authentication failed. Please check the provided API key.',
            },
          };
        }

        if (err.response.status === 400 && isPlainGraphQLResponse(err.response.data)) {
          return {
            error: {
              code: 'bad_request',
              message: 'Missing or invalid arguments provided.',
              graphqlErrors: err.response.data.errors || [],
            },
          };
        }

        if (err.response.status === 500) {
          return {
            error: {
              code: 'internal_server_error',
              message: 'Internal server error.',
            },
          };
        }
      }

      if (err.request) {
        return {
          error: {
            code: 'unknown',
            message: err.message,
          },
        };
      }
    }

    // Case 3: Something completely unhandled happened
    return {
      error: {
        code: 'unknown',
        message: 'Unknown error',
        err,
      },
    };
  }
}
