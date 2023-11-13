import type { VariablesOf } from '@graphql-typed-document-node/core';

import type { Context } from './context';
import type { PlainSDKError } from './error';
import {
  AddCustomerToCustomerGroupsDocument,
  AddLabelsDocument,
  ArchiveLabelTypeDocument,
  AssignThreadDocument,
  type AttachmentUploadUrlPartsFragment,
  ChangeThreadPriorityDocument,
  CreateAttachmentUploadUrlDocument,
  CreateCustomerCardConfigDocument,
  CreateCustomerEventDocument,
  CreateThreadDocument,
  CreateThreadEventDocument,
  CustomerByEmailDocument,
  CustomerByIdDocument,
  type CustomerCardConfigPartsFragment,
  type CustomerEventPartsFragment,
  CustomerGroupByIdDocument,
  type CustomerGroupMembershipPartsFragment,
  type CustomerGroupPartsFragment,
  CustomerGroupsDocument,
  type CustomerPartsFragment,
  CustomersDocument,
  DeleteCustomerCardConfigDocument,
  DeleteCustomerDocument,
  type EmailPartsFragment,
  type LabelPartsFragment,
  LabelTypeDocument,
  type LabelTypePartsFragment,
  LabelTypesDocument,
  MarkThreadAsDoneDocument,
  MarkThreadAsTodoDocument,
  MyWorkspaceDocument,
  type PageInfo,
  type PageInfoPartsFragment,
  RemoveCustomerFromCustomerGroupsDocument,
  RemoveLabelsDocument,
  ReplyToEmailDocument,
  ReplyToThreadDocument,
  SendNewEmailDocument,
  SnoozeThreadDocument,
  ThreadByExternalIdDocument,
  ThreadDocument,
  type ThreadEventPartsFragment,
  type ThreadPartsFragment,
  ThreadsDocument,
  UnassignThreadDocument,
  UpdateCustomerCardConfigDocument,
  UpsertCustomerDocument,
  type UpsertResult,
  UserByEmailDocument,
  type UserPartsFragment,
  type WorkspacePartsFragment,
} from './graphql/types';
import { request } from './request';
import type { Result } from './result';

type SDKResult<T> = Promise<Result<Transform<T>, PlainSDKError>>;

// Transform takes a GraphQL Fragment and transforms it into a type in which
// all of its connection-like fields (e.g. fields which have an `edges`) property
// are flattened into an array. For example:
//
// Given the type:
//
// type Fragment = {
//     customerGroupMemberships: {
//        edges: Array<{ node: CustomerGroupMembershipPartsFragment }>
//     }
// }
//
// When we apply Transform to it, we get:
//
// type Transform<Fragment> = {
// {
//     customerGroupMemberships: Array<CustomerGroupMembershipPartsFragment>
// }
//
type Transform<T> = T extends { edges: Array<{ node: infer E }> }
  ? Array<Transform<E>>
  : T extends object
  ? { [K in keyof T]: Transform<T[K]> }
  : T;

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

type ConstructorOptions = {
  // The Plain API key
  apiKey: string;

  // Useful if you want to point to a different Plain environment
  // as a Plain team-member
  apiUrl?: string;
};

export class PlainClient {
  #ctx: Context;

  constructor(options: ConstructorOptions) {
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
   * @deprecated "use `getUserByEmail" instead
   */
  async userByEmail(
    variables: VariablesOf<typeof UserByEmailDocument>
  ): SDKResult<UserPartsFragment | null> {
    const res = await request(this.#ctx, {
      query: UserByEmailDocument,
      variables,
    });

    return unwrapData(res, (q) => q.userByEmail || null);
  }

  /**
   * Get a paginated list of customers.
   */
  async getUserByEmail(
    variables: VariablesOf<typeof UserByEmailDocument>
  ): SDKResult<UserPartsFragment | null> {
    const res = await request(this.#ctx, {
      query: UserByEmailDocument,
      variables,
    });

    return unwrapData(res, (q) => q.userByEmail || null);
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
      customers: q.customers.edges.map((edge) => ({
        ...edge.node,
        customerGroupMemberships: edge.node.customerGroupMemberships.edges.map((e) => e.node),
      })),
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

    return unwrapData(res, (q) => {
      if (!q.customer) {
        return null;
      }
      return {
        ...q.customer,
        customerGroupMemberships: q.customer.customerGroupMemberships.edges.map((e) => e.node),
      };
    });
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

    return unwrapData(res, (q) => {
      if (!q.customerByEmail) {
        return null;
      }

      return {
        ...q.customerByEmail,
        customerGroupMemberships: q.customerByEmail.customerGroupMemberships.edges.map(
          (e) => e.node
        ),
      };
    });
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
      const customer = nonNullable(q.upsertCustomer.customer);
      return {
        result: nonNullable(q.upsertCustomer.result),
        customer: {
          ...customer,
          customerGroupMemberships: customer.customerGroupMemberships.edges.map((e) => e.node),
        },
      };
    });
  }

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

  async replyToThread(input: VariablesOf<typeof ReplyToThreadDocument>['input']): SDKResult<null> {
    const res = await request(this.#ctx, {
      query: ReplyToThreadDocument,
      variables: {
        input,
      },
    });

    return unwrapData(res, () => null);
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
   * Get a paginated list of threads
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
   * Get a single thread by id
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
   * Get a single thread by external id. A thread's external id is unique per customer,
   * hence why the customer id is also required.
   */
  async getThreadByExternalId(
    variables: VariablesOf<typeof ThreadByExternalIdDocument>
  ): SDKResult<ThreadPartsFragment | null> {
    const res = await request(this.#ctx, {
      query: ThreadByExternalIdDocument,
      variables,
    });

    return unwrapData(res, (q) => q.threadByExternalId);
  }

  /**
   * Create a thread (e.g. when a contact form is submitted)
   */
  async createThread(
    input: VariablesOf<typeof CreateThreadDocument>['input']
  ): SDKResult<ThreadPartsFragment> {
    const res = await request(this.#ctx, {
      query: CreateThreadDocument,
      variables: {
        input,
      },
    });

    return unwrapData(res, (q) => nonNullable(q.createThread.thread));
  }

  /**
   * Assign a thread to a user or machine user
   */
  async assignThread(
    input: VariablesOf<typeof AssignThreadDocument>['input']
  ): SDKResult<ThreadPartsFragment> {
    const res = await request(this.#ctx, {
      query: AssignThreadDocument,
      variables: {
        input,
      },
    });

    return unwrapData(res, (q) => nonNullable(q.assignThread.thread));
  }

  /**
   * Unassign a thread
   */
  async unassignThread(
    input: VariablesOf<typeof UnassignThreadDocument>['input']
  ): SDKResult<ThreadPartsFragment> {
    const res = await request(this.#ctx, {
      query: UnassignThreadDocument,
      variables: {
        input,
      },
    });

    return unwrapData(res, (q) => nonNullable(q.unassignThread.thread));
  }

  /**
   * Change a thread's priority
   */
  async changeThreadPriority(
    input: VariablesOf<typeof ChangeThreadPriorityDocument>['input']
  ): SDKResult<ThreadPartsFragment> {
    const res = await request(this.#ctx, {
      query: ChangeThreadPriorityDocument,
      variables: {
        input,
      },
    });

    return unwrapData(res, (q) => nonNullable(q.changeThreadPriority.thread));
  }

  /**
   * Add labels to a thread
   */
  async addLabels(
    input: VariablesOf<typeof AddLabelsDocument>['input']
  ): SDKResult<LabelPartsFragment[]> {
    const res = await request(this.#ctx, {
      query: AddLabelsDocument,
      variables: {
        input,
      },
    });

    return unwrapData(res, (q) => q.addLabels.labels);
  }

  /**
   * Remove labels from a thread
   */
  async removeLabels(input: VariablesOf<typeof RemoveLabelsDocument>['input']): SDKResult<null> {
    const res = await request(this.#ctx, {
      query: RemoveLabelsDocument,
      variables: {
        input,
      },
    });

    return unwrapData(res, () => null);
  }

  /**
   * Mark a thread as done
   */
  async markThreadAsDone(
    input: VariablesOf<typeof MarkThreadAsDoneDocument>['input']
  ): SDKResult<ThreadPartsFragment> {
    const res = await request(this.#ctx, {
      query: MarkThreadAsDoneDocument,
      variables: {
        input,
      },
    });

    return unwrapData(res, (d) => nonNullable(d.markThreadAsDone.thread));
  }

  /**
   * Snooze thread for a duration defined in seconds
   */
  async snoozeThread(
    input: VariablesOf<typeof SnoozeThreadDocument>['input']
  ): SDKResult<ThreadPartsFragment> {
    const res = await request(this.#ctx, {
      query: SnoozeThreadDocument,
      variables: {
        input,
      },
    });

    return unwrapData(res, (d) => nonNullable(d.snoozeThread.thread));
  }

  /**
   * Mark a thread as Todo (e.g. Unsnooze)
   */
  async markThreadAsTodo(
    input: VariablesOf<typeof MarkThreadAsTodoDocument>['input']
  ): SDKResult<ThreadPartsFragment> {
    const res = await request(this.#ctx, {
      query: MarkThreadAsTodoDocument,
      variables: {
        input,
      },
    });

    return unwrapData(res, (d) => nonNullable(d.markThreadAsTodo.thread));
  }

  /**
   * Archive a label type
   */
  async archiveLabelType(
    input: VariablesOf<typeof ArchiveLabelTypeDocument>['input']
  ): SDKResult<LabelTypePartsFragment> {
    const res = await request(this.#ctx, {
      query: ArchiveLabelTypeDocument,
      variables: {
        input,
      },
    });

    return unwrapData(res, (q) => nonNullable(q.archiveLabelType.labelType));
  }

  /**
   * Get a paginated list of label types
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
   * Get a label type by id
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

  /** Create a Customer Event */
  async createCustomerEvent(
    input: VariablesOf<typeof CreateCustomerEventDocument>['input']
  ): SDKResult<CustomerEventPartsFragment> {
    const res = await request(this.#ctx, {
      query: CreateCustomerEventDocument,
      variables: {
        input,
      },
    });

    return unwrapData(res, (q) => nonNullable(q.createCustomerEvent.customerEvent));
  }

  /** Create a Thread Event */
  async createThreadEvent(
    input: VariablesOf<typeof CreateThreadEventDocument>['input']
  ): SDKResult<ThreadEventPartsFragment> {
    const res = await request(this.#ctx, {
      query: CreateThreadEventDocument,
      variables: {
        input,
      },
    });

    return unwrapData(res, (q) => nonNullable(q.createThreadEvent.threadEvent));
  }
}
