import { Context } from './context';
import { PlainSDKError } from './error';
import {
  CreateIssueDocument,
  CustomerByIdDocument,
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

export class PlainSDKClient {
  #ctx: Context;

  constructor(props: { apiKey: string }) {
    this.#ctx = {
      apiKey: props.apiKey,
    };
  }

  async getCustomerById(args: { customerId: string }): SDKResult<CustomerPartsFragment | null> {
    return request(this.#ctx, {
      query: CustomerByIdDocument,
      variables: {
        customerId: args.customerId,
      },
      unwrapFn: (q) => q.customer,
    });
  }

  async createIssue(args: {
    issueTypeId: string;
    customerId: string;
    priorityValue: 0 | 1 | 2 | 3;
  }): SDKResult<IssuePartsFragment> {
    return request(this.#ctx, {
      query: CreateIssueDocument,
      variables: {
        input: args,
      },
      unwrapFn: (q) => nonNullable(q.createIssue.issue),
    });
  }
}
