import { Context } from './context';
import { PlainSDKError } from './error';
import {
  CustomerGroupMembershipPartsFragment,
  RemoveCustomerFromCustomerGroupsDocument,
  RemoveCustomerFromCustomerGroupsInput,
} from './graphql/types';
import { AddCustomerToCustomerGroupsDocument } from './graphql/types';
import { AddCustomerToCustomerGroupsInput } from './graphql/types';
import {
  CreateIssueDocument,
  CreateIssueInput,
  CustomerByIdDocument,
  CustomerByIdQueryVariables,
  CustomerPartsFragment,
  IssuePartsFragment,
  TimelineEntryPartsFragment,
  UpsertCustomTimelineEntryDocument,
  UpsertCustomTimelineEntryInput,
  UpsertCustomerDocument,
  UpsertCustomerInput,
  UpsertResult,
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

  /**
   * Adds a customer to a customer groups.
   */
  async addCustomerToCustomerGroups(
    input: AddCustomerToCustomerGroupsInput
  ): SDKResult<CustomerGroupMembershipPartsFragment[]> {
    const res = await request(this.#ctx, {
      query: AddCustomerToCustomerGroupsDocument,
      variables: {
        input,
      },
    });

    return unwrapData(res, (q) =>
      nonNullable(q.addCustomerToCustomerGroups.customerGroupMemberships)
    );
  }

  /**
   * Remove a customer from customer groups.
   */
  async removeCustomerFromCustomerGroups(
    input: RemoveCustomerFromCustomerGroupsInput
  ): SDKResult<null> {
    const res = await request(this.#ctx, {
      query: RemoveCustomerFromCustomerGroupsDocument,
      variables: {
        input,
      },
    });

    return unwrapData(res, () => null);
  }

  /**
   * Add a custom timeline entry to a customer's timeline.
   *
   * This can be used to power custom contact forms, log events from your own systems and much more.
   */
  async upsertCustomTimelineEntry(
    input: UpsertCustomTimelineEntryInput
  ): SDKResult<{ result: UpsertResult; timelineEntry: TimelineEntryPartsFragment }> {
    const res = await request(this.#ctx, {
      query: UpsertCustomTimelineEntryDocument,
      variables: {
        input,
      },
    });

    return unwrapData(res, (q) => {
      return {
        result: nonNullable(q.upsertCustomTimelineEntry.result),
        timelineEntry: nonNullable(q.upsertCustomTimelineEntry.timelineEntry),
      };
    });
  }
}
