import type { VariablesOf } from '@graphql-typed-document-node/core';

import type { Context } from './context';
import type { PlainSDKError } from './error';
import {
  AddCustomerToCustomerGroupsDocument,
  type AttachmentUploadUrlPartsFragment,
  CreateAttachmentUploadUrlDocument,
  CreateIssueDocument,
  CustomerByEmailDocument,
  CustomerByExternalIdDocument,
  CustomerByIdDocument,
  type CustomerGroupMembershipPartsFragment,
  type CustomerPartsFragment,
  DeleteCustomerDocument,
  type EmailPartsFragment,
  type IssuePartsFragment,
  RemoveCustomerFromCustomerGroupsDocument,
  ReplyToEmailDocument,
  SendNewEmailDocument,
  type TimelineEntryPartsFragment,
  UpsertCustomerDocument,
  UpsertCustomTimelineEntryDocument,
  type UpsertResult,
} from './graphql/types';
import { request } from './request';
import type { Result } from './result';

type SDKResult<T> = Promise<Result<T, PlainSDKError>>;

function nonNullable<T>(x: T | null | undefined): T {
  if (x === null || x === undefined) {
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

export class PlainClient {
  #ctx: Context;

  constructor(options: { apiKey: string; apiUrl?: string }) {
    this.#ctx = {
      apiKey: options.apiKey,
      apiUrl: options.apiUrl,
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
  async getCustomerById(
    variables: VariablesOf<typeof CustomerByIdDocument>
  ): SDKResult<CustomerPartsFragment | null> {
    const res = await request(this.#ctx, {
      query: CustomerByIdDocument,
      variables,
    });

    return unwrapData(res, (q) => q.customer);
  }

  /**
   * If the customer is not found this will return null.
   */
  async getCustomerByEmail(
    variables: VariablesOf<typeof CustomerByEmailDocument>
  ): SDKResult<CustomerPartsFragment | null> {
    const res = await request(this.#ctx, {
      query: CustomerByEmailDocument,
      variables,
    });

    return unwrapData(res, (q) => q.customerByEmail);
  }

  /**
   * If the customer is not found this will return null.
   */
  async getCustomerByExternalId(
    variables: VariablesOf<typeof CustomerByExternalIdDocument>
  ): SDKResult<CustomerPartsFragment | null> {
    const res = await request(this.#ctx, {
      query: CustomerByExternalIdDocument,
      variables,
    });

    return unwrapData(res, (q) => q.customerByExternalId);
  }

  /**
   * Allows you to create or update a customer. If you need to get the customer id
   * for a customer in Plain, this is typically your first step.
   */
  async upsertCustomer(
    input: VariablesOf<typeof UpsertCustomerDocument>['input']
  ): SDKResult<{ result: UpsertResult; customer: CustomerPartsFragment }> {
    const res = await request(this.#ctx, {
      query: UpsertCustomerDocument,
      variables: {
        input,
      },
    });

    return unwrapData(res, (q) => {
      return {
        result: nonNullable(q.upsertCustomer.result),
        customer: nonNullable(q.upsertCustomer.customer),
      };
    });
  }

  /**
   * Create an issue for a customer. If you want you can override the default issue priority
   * in your settings by specifying a priority manually here.
   */
  async createIssue(
    input: VariablesOf<typeof CreateIssueDocument>['input']
  ): SDKResult<IssuePartsFragment> {
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
    input: VariablesOf<typeof AddCustomerToCustomerGroupsDocument>['input']
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
    input: VariablesOf<typeof RemoveCustomerFromCustomerGroupsDocument>['input']
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
   * Deletes a customer and all of their data stored on Plain. This action cannot be reversed.
   */
  async deleteCustomer(
    input: VariablesOf<typeof DeleteCustomerDocument>['input']
  ): SDKResult<null> {
    const res = await request(this.#ctx, {
      query: DeleteCustomerDocument,
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
    input: VariablesOf<typeof UpsertCustomTimelineEntryDocument>['input']
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

  async sendNewEmail(
    input: VariablesOf<typeof SendNewEmailDocument>['input']
  ): SDKResult<EmailPartsFragment> {
    const res = await request(this.#ctx, {
      query: SendNewEmailDocument,
      variables: {
        input,
      },
    });

    return unwrapData(res, (q) => {
      return nonNullable(q.sendNewEmail.email);
    });
  }

  async replyToEmail(
    input: VariablesOf<typeof ReplyToEmailDocument>['input']
  ): SDKResult<EmailPartsFragment> {
    const res = await request(this.#ctx, {
      query: ReplyToEmailDocument,
      variables: {
        input,
      },
    });

    return unwrapData(res, (q) => {
      return nonNullable(q.replyToEmail.email);
    });
  }

  async createAttachmentUploadUrl(
    input: VariablesOf<typeof CreateAttachmentUploadUrlDocument>['input']
  ): SDKResult<AttachmentUploadUrlPartsFragment> {
    const res = await request(this.#ctx, {
      query: CreateAttachmentUploadUrlDocument,
      variables: {
        input,
      },
    });

    return unwrapData(res, (q) => {
      return nonNullable(q.createAttachmentUploadUrl.attachmentUploadUrl);
    });
  }
}
