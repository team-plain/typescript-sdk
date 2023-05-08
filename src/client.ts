import { Context } from './context';
import { PlainSDKError } from './error';
import {
  CreateIssueDocument,
  CreateIssueInput,
  CustomerByIdDocument,
  CustomerByIdQueryVariables,
  CustomerPartsFragment,
  IssuePartsFragment,
} from './graphql/types';
import { request } from './request';
import { Result } from './result';

type SDKResult<T> = Promise<Result<T, PlainSDKError>>;

function nonNullable<T>(x: T | null): T {
  if (x === null) {
    throw new Error(`Expected value to be non nullable`);
  }

  return x;
}

function unwrapData<T, X>(
  result: Result<T, PlainSDKError>,
  unwrapFn: (data: T) => X
): Result<X, PlainSDKError> {
  if (result.error) {
    return {
      error: result.error,
    };
  } else {
    return {
      data: unwrapFn(result.data),
    };
  }
}

export class PlainSDKClient {
  #ctx: Context;

  constructor(props: { apiKey: string }) {
    this.#ctx = {
      apiKey: props.apiKey,
    };
  }

  async rawRequest(args: {
    query: string;
    variables: Record<string, unknown>;
  }): SDKResult<unknown> {
    return request(this.#ctx, {
      query: args.query,
      variables: args.variables,
    });
  }

  async getCustomerById(args: CustomerByIdQueryVariables): SDKResult<CustomerPartsFragment | null> {
    const res = await request(this.#ctx, {
      query: CustomerByIdDocument,
      variables: {
        customerId: args.customerId,
      },
    });

    return unwrapData(res, (q) => q.customer);
  }

  async createIssue(input: CreateIssueInput): SDKResult<IssuePartsFragment> {
    const res = await request(this.#ctx, {
      query: CreateIssueDocument,
      variables: {
        input,
      },
    });

    return unwrapData(res, (q) => nonNullable(q.createIssue.issue));
  }
}
