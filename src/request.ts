import type { TypedDocumentNode } from '@graphql-typed-document-node/core';
import type { Result } from './result';
import { print } from 'graphql';
import axios, { type AxiosResponseHeaders, type RawAxiosResponseHeaders } from 'axios';
import type { Context } from './context';
import type { PlainSDKError } from './error';
import { getMutationErrorFromResponse, isPlainGraphQLResponse } from './graphql-utlities';

const defaultUrl = 'https://core-api.uk.plain.com/graphql/v1';

function getRequestId(headers: AxiosResponseHeaders | RawAxiosResponseHeaders): string | undefined {
  const reqId: unknown = headers['apigw-requestid'];

  if (reqId && typeof reqId === 'string') {
    return reqId;
  }
}

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

    const url = ctx.apiUrl || defaultUrl;

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const { data: res, headers: responseHeaders } = await axios.post(
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
      if (mutationError.code === 'forbidden') {
        return {
          error: {
            type: 'forbidden',
            message: mutationError.message,
            requestId: getRequestId(responseHeaders),
          },
        };
      }

      return {
        error: {
          type: 'mutation_error',
          message: mutationError.message,
          errorDetails: mutationError,
          requestId: getRequestId(responseHeaders),
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
        if (err.response.status === 401 || err.response.status === 403) {
          return {
            error: {
              type: 'forbidden',
              message: 'Authentication failed. Please check the provided API key.',
              requestId: getRequestId(err.response.headers),
            },
          };
        }

        if (err.response.status === 400 && isPlainGraphQLResponse(err.response.data)) {
          return {
            error: {
              type: 'bad_request',
              message: 'Missing or invalid arguments provided.',
              graphqlErrors: err.response.data.errors || [],
              requestId: getRequestId(err.response.headers),
            },
          };
        }

        if (err.response.status === 500) {
          return {
            error: {
              type: 'internal_server_error',
              message: 'Internal server error.',
              requestId: getRequestId(err.response.headers),
            },
          };
        }
      }

      if (err.request) {
        return {
          error: {
            type: 'unknown',
            message: err.message,
          },
        };
      }
    }

    // Case 3: Something completely unhandled happened
    return {
      error: {
        type: 'unknown',
        message: 'Unknown error',
        err,
      },
    };
  }
}
