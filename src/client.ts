import type { VariablesOf } from '@graphql-typed-document-node/core';

import type { Context } from './context';
import type { PlainSDKError } from './error';
import {
  AddCustomerToCustomerGroupsDocument,
  AddLabelsDocument,
  type AttachmentUploadUrlPartsFragment,
  ChangeCustomerStatusDocument,
  type ChatPartsFragment,
  CreateAttachmentUploadUrlDocument,
  CreateCustomerCardConfigDocument,
  CreateIssueDocument,
  CreateThreadDocument,
  CustomerByEmailDocument,
  CustomerByIdDocument,
  type CustomerCardConfigPartsFragment,
  CustomerGroupByIdDocument,
  type CustomerGroupMembershipPartsFragment,
  type CustomerGroupPartsFragment,
  CustomerGroupsDocument,
  type CustomerPartsFragment,
  CustomersDocument,
  DeleteCustomerCardConfigDocument,
  DeleteIssueDocument,
  type EmailPartsFragment,
  type IssuePartsFragment,
  IssuesDocument,
  type LabelPartsFragment,
  LabelTypeDocument,
  type LabelTypePartsFragment,
  LabelTypesDocument,
  MyWorkspaceDocument,
  type PageInfo,
  type PageInfoPartsFragment,
  RemoveCustomerFromCustomerGroupsDocument,
  ReplyToEmailDocument,
  ResolveIssueDocument,
  SendChatDocument,
  SendNewEmailDocument,
  ThreadDocument,
  type ThreadPartsFragment,
  ThreadsDocument,
  type TimelineEntryPartsFragment,
  UpdateCustomerCardConfigDocument,
  UpsertCustomerDocument,
  UpsertCustomTimelineEntryDocument,
  type UpsertResult,
  type WorkspacePartsFragment,
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
   * Get a paginated list of customers.
   */
  async getCustomers(variables: VariablesOf<typeof CustomersDocument>): SDKResult<{
    customers: CustomerPartsFragment[];
    pageInfo: PageInfoPartsFragment;
    totalCount: number;
  }> {
    const res = await request(this.#ctx, {
      query: CustomersDocument,
      variables,
    });

    return unwrapData(res, (q) => ({
      pageInfo: q.customers.pageInfo,
      customers: q.customers.edges.map((edge) => edge.node),
      totalCount: q.customers.totalCount,
    }));
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

  async changeCustomerStatus(
    input: VariablesOf<typeof ChangeCustomerStatusDocument>['input']
  ): SDKResult<{ customer: CustomerPartsFragment }> {
    const res = await request(this.#ctx, {
      query: ChangeCustomerStatusDocument,
      variables: {
        input,
      },
    });

    return unwrapData(res, (q) => {
      return {
        customer: nonNullable(q.changeCustomerStatus.customer),
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
   * Resolve an issue for a customer.
   */
  async resolveIssue(
    input: VariablesOf<typeof ResolveIssueDocument>['input']
  ): SDKResult<IssuePartsFragment> {
    const res = await request(this.#ctx, {
      query: ResolveIssueDocument,
      variables: {
        input,
      },
    });

    return unwrapData(res, (q) => nonNullable(q.resolveIssue.issue));
  }

  async deleteIssue(
    input: VariablesOf<typeof DeleteIssueDocument>['input']
  ): SDKResult<IssuePartsFragment> {
    const res = await request(this.#ctx, {
      query: DeleteIssueDocument,
      variables: {
        input,
      },
    });

    return unwrapData(res, (q) => nonNullable(q.deleteIssue.issue));
  }

  async getIssues(variables: VariablesOf<typeof IssuesDocument>): SDKResult<{
    issues: IssuePartsFragment[];
    pageInfo: PageInfoPartsFragment;
  }> {
    const res = await request(this.#ctx, {
      query: IssuesDocument,
      variables,
    });

    return unwrapData(res, (q) => ({
      pageInfo: q.issues.pageInfo,
      issues: q.issues.edges.map((edge) => edge.node),
    }));
  }

  /**
   * If the customer group is not found this will return null.
   */
  async getCustomerGroupById(
    variables: VariablesOf<typeof CustomerGroupByIdDocument>
  ): SDKResult<CustomerGroupPartsFragment | null> {
    const res = await request(this.#ctx, {
      query: CustomerGroupByIdDocument,
      variables,
    });

    return unwrapData(res, (q) => q.customerGroup);
  }

  /**
   * Get a paginated list of customer groups.
   */
  async getCustomerGroups(
    variables: VariablesOf<typeof CustomerGroupsDocument>
  ): SDKResult<{ customerGroups: CustomerGroupPartsFragment[]; pageInfo: PageInfo }> {
    const res = await request(this.#ctx, {
      query: CustomerGroupsDocument,
      variables,
    });

    return unwrapData(res, (q) => ({
      pageInfo: q.customerGroups.pageInfo,
      customerGroups: q.customerGroups.edges.map((edge) => edge.node),
    }));
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

  async sendChat(
    input: VariablesOf<typeof SendChatDocument>['input']
  ): SDKResult<ChatPartsFragment> {
    const res = await request(this.#ctx, {
      query: SendChatDocument,
      variables: {
        input,
      },
    });

    return unwrapData(res, (q) => {
      return nonNullable(q.sendChat.chat);
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

  /**
   * Fetch the workspace for the authenticated API key.
   */
  async getMyWorkspace(): SDKResult<WorkspacePartsFragment> {
    const res = await request(this.#ctx, {
      query: MyWorkspaceDocument,
    });

    return unwrapData(res, (q) => {
      return nonNullable(q.myWorkspace);
    });
  }

  /**
   * Creates the configuration for a Customer Card. Useful if you want
   * to programatically set up a customer card vs using the settings UI
   */
  async createCustomerCardConfig(
    input: VariablesOf<typeof CreateCustomerCardConfigDocument>['input']
  ): SDKResult<CustomerCardConfigPartsFragment> {
    const res = await request(this.#ctx, {
      query: CreateCustomerCardConfigDocument,
      variables: {
        input,
      },
    });

    return unwrapData(res, (q) => {
      return nonNullable(q.createCustomerCardConfig.customerCardConfig);
    });
  }

  /**
   * Updates the configuration for a Customer Card.
   */
  async updateCustomerCardConfig(
    input: VariablesOf<typeof UpdateCustomerCardConfigDocument>['input']
  ): SDKResult<CustomerCardConfigPartsFragment> {
    const res = await request(this.#ctx, {
      query: UpdateCustomerCardConfigDocument,
      variables: {
        input,
      },
    });

    return unwrapData(res, (q) => {
      return nonNullable(q.updateCustomerCardConfig.customerCardConfig);
    });
  }

  /**
   * Delete the configuration for a Customer Card.
   */
  async deleteCustomerCardConfig(
    input: VariablesOf<typeof DeleteCustomerCardConfigDocument>['input']
  ): SDKResult<null> {
    const res = await request(this.#ctx, {
      query: DeleteCustomerCardConfigDocument,
      variables: {
        input,
      },
    });

    return unwrapData(res, () => null);
  }

  /**
   * WARNING: This is experimental and subject to change at any time without
   * a major version bump.
   */
  async getThreads(variables: VariablesOf<typeof ThreadsDocument>): SDKResult<{
    threads: ThreadPartsFragment[];
    pageInfo: PageInfoPartsFragment;
  }> {
    const res = await request(this.#ctx, {
      query: ThreadsDocument,
      variables,
    });

    return unwrapData(res, (q) => ({
      threads: q.threads.edges.map((edge) => edge.node),
      pageInfo: q.threads.pageInfo,
    }));
  }

  /**
   * WARNING: This is experimental and subject to change at any time without
   * a major version bump.
   */
  async getThread(
    variables: VariablesOf<typeof ThreadDocument>
  ): SDKResult<ThreadPartsFragment | null> {
    const res = await request(this.#ctx, {
      query: ThreadDocument,
      variables,
    });

    return unwrapData(res, (q) => q.thread);
  }

  /**
   * WARNING: This is experimental and subject to change at any time without
   * a major version bump.
   */
  async createThread(input: VariablesOf<typeof CreateThreadDocument>['input']): SDKResult<{
    thread: ThreadPartsFragment;
  }> {
    const res = await request(this.#ctx, {
      query: CreateThreadDocument,
      variables: {
        input,
      },
    });

    return unwrapData(res, (q) => {
      return {
        thread: nonNullable(q.createThread.thread),
      };
    });
  }

  /**
   * WARNING: This is experimental and subject to change at any time without
   * a major version bump.
   */
  async changeThreadPriority(input: VariablesOf<typeof CreateThreadDocument>['input']): SDKResult<{
    thread: ThreadPartsFragment;
  }> {
    const res = await request(this.#ctx, {
      query: CreateThreadDocument,
      variables: {
        input,
      },
    });

    return unwrapData(res, (q) => {
      return {
        thread: nonNullable(q.createThread.thread),
      };
    });
  }

  /**
   * WARNING: This is experimental and subject to change at any time without
   * a major version bump.
   */
  async getLabelTypes(variables: VariablesOf<typeof LabelTypesDocument>): SDKResult<{
    labelTypes: LabelTypePartsFragment[];
    pageInfo: PageInfoPartsFragment;
  }> {
    const res = await request(this.#ctx, {
      query: LabelTypesDocument,
      variables,
    });

    return unwrapData(res, (q) => ({
      labelTypes: q.labelTypes.edges.map((edge) => edge.node),
      pageInfo: q.labelTypes.pageInfo,
    }));
  }

  /**
   * WARNING: This is experimental and subject to change at any time without
   * a major version bump.
   */
  async getLabelType(
    variables: VariablesOf<typeof LabelTypeDocument>
  ): SDKResult<LabelTypePartsFragment | null> {
    const res = await request(this.#ctx, {
      query: LabelTypeDocument,
      variables,
    });

    return unwrapData(res, (q) => q.labelType);
  }

  /**
   * WARNING: This is experimental and subject to change at any time without
   * a major version bump.
   */
  async addLabels(input: VariablesOf<typeof AddLabelsDocument>['input']): SDKResult<{
    labels: LabelPartsFragment[];
  }> {
    const res = await request(this.#ctx, {
      query: AddLabelsDocument,
      variables: {
        input,
      },
    });

    return unwrapData(res, (q) => {
      return {
        labels: q.addLabels.labels,
      };
    });
  }
}
