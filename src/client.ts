import { Context } from './context';
import { PlainSDKError } from './error';
import {
  CreateIssueDocument,
  CreateIssueInput,
  CustomerByIdDocument,
  CustomerByIdQueryVariables,
  CustomerPartsFragment,
  IssuePartsFragment,
  UpsertCustomerDocument,
  UpsertCustomerInput,
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

  constructor(options: { apiKey: string }) {
    this.#ctx = {
      apiKey: options.apiKey,
    };
  }

  /**
   * If you need to do something custom you can use this method to do
   */
  async rawRequest(args: {
    query: string;
    variables: Record<string, unknown>;
  }): SDKResult<unknown> {
    return request(this.#ctx, {
      query: args.query,
      variables: args.variables,
    });
  }

  /**
   * If the customer is not found this will return null.
   */
  async getCustomerById(args: CustomerByIdQueryVariables): SDKResult<CustomerPartsFragment | null> {
    const res = await request(this.#ctx, {
      query: CustomerByIdDocument,
      variables: {
        customerId: args.customerId,
      },
    });

    return unwrapData(res, (q) => q.customer);
  }

  /**
   * Allows you to create or update a customer. If you need to get the customer id
   * for a customer in Plain, this is typically your first step.
   */
  async upsertCustomer(input: UpsertCustomerInput): SDKResult<CustomerPartsFragment | null> {
    const res = await request(this.#ctx, {
      query: UpsertCustomerDocument,
      variables: {
        input,
      },
    });

    return unwrapData(res, (q) => nonNullable(q.upsertCustomer.customer));
  }

  /**
   * Create an issue for a customer. If you want you can override the default issue priority
   * in your settings by specifying a priority manually here.
   */
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
