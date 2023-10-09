import type { TypedDocumentNode } from '@graphql-typed-document-node/core';
import { print } from 'graphql';

import type { Context } from './context';
import type { PlainSDKError } from './error';
import { getMutationErrorFromResponse, isPlainFailedGraphQLResponse } from './graphql-utlities';
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
      'Content-Type': 'application/json',
    };

    const url = ctx.apiUrl || defaultUrl;

    const result = await ctx.fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        query: query,
        variables: args.variables || null,
      }),
    });

    const status = result.status;
    const responseHeaders = result.headers;

    let response;
    try {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      response = await result.json();
    } catch {
      // This is probably indicative of downtime
      throw new Error('Invalid JSON received as response.');
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

    if (status === 400) {
      return {
        error: {
          type: 'bad_request',
          message: 'Malformed query, missing or invalid arguments provided.',
          graphqlErrors: isPlainFailedGraphQLResponse(response) ? response.errors : [],
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

    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    const mutationError = getMutationErrorFromResponse(response.data);
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
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      data: response.data as Query,
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
