import type { TypedDocumentNode } from '@graphql-typed-document-node/core';
import { print } from 'graphql';

import type { Context } from './context';
import type { PlainSDKError } from './error';
import {
  getMutationErrorFromResponse,
  isPlainFailedGraphQLResponse,
  isPlainSuccessfulGraphQLResponse,
} from './graphql-utlities';
import type { Result } from './result';

const defaultUrl = 'https://core-api.uk.plain.com/graphql/v1';

function getRequestId(headers: Headers): string | undefined {
  const reqId: unknown = headers.get('apigw-requestid');

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

    const result = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        query: query,
        variables: args.variables || null,
      }),
    });

    const status = result.status;
    const responseHeaders = result.headers;

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const response = await result.json();

    if (!isPlainSuccessfulGraphQLResponse(response)) {
      throw new Error('Unexpected response received');
    }

    if (status === 401 || status === 403) {
      return {
        error: {
          type: 'forbidden',
          message: 'Authentication failed. Please check the provided API key.',
          requestId: getRequestId(responseHeaders),
        },
      };
    }

    if (status === 400 && isPlainFailedGraphQLResponse(response)) {
      return {
        error: {
          type: 'bad_request',
          message: 'Malformed query, missing or invalid arguments provided.',
          graphqlErrors: response.errors || [],
          requestId: getRequestId(responseHeaders),
        },
      };
    }

    if (status === 500) {
      return {
        error: {
          type: 'internal_server_error',
          message: 'Internal server error.',
          requestId: getRequestId(responseHeaders),
        },
      };
    }

    const mutationError = getMutationErrorFromResponse(response);
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
      data: response as Query,
    };
  } catch (err) {
    return {
      error: {
        type: 'unknown',
        message: 'Unknown error',
        err,
      },
    };
  }
}
