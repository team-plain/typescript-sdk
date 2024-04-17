import type { VariablesOf } from '@graphql-typed-document-node/core';

import type { Context } from './context';
import type { PlainSDKError } from './error';
import {
  AddCustomerToCustomerGroupsDocument,
  AddCustomerToTenantsDocument,
  AddLabelsDocument,
  AddMembersToTierDocument,
  ArchiveLabelTypeDocument,
  AssignThreadDocument,
  type AttachmentUploadUrlPartsFragment,
  ChangeThreadPriorityDocument,
  CompaniesDocument,
  type CompanyPartsFragment,
  CreateAttachmentUploadUrlDocument,
  CreateCustomerCardConfigDocument,
  CreateCustomerEventDocument,
  CreateNoteDocument,
  CreateThreadDocument,
  CreateThreadEventDocument,
  CreateWebhookTargetDocument,
  CustomerByEmailDocument,
  CustomerByIdDocument,
  type CustomerCardConfigPartsFragment,
  CustomerCustomerGroupsDocument,
  type CustomerEventPartsFragment,
  CustomerGroupByIdDocument,
  type CustomerGroupMembershipPartsFragment,
  type CustomerGroupPartsFragment,
  CustomerGroupsDocument,
  type CustomerPartsFragment,
  CustomersDocument,
  type CustomerTenantMembershipPartsFragment,
  CustomerTenantsDocument,
  DeleteCustomerCardConfigDocument,
  DeleteCustomerDocument,
  DeleteWebhookTargetDocument,
  type EmailPartsFragment,
  type LabelPartsFragment,
  LabelTypeDocument,
  type LabelTypePartsFragment,
  LabelTypesDocument,
  MarkThreadAsDoneDocument,
  MarkThreadAsTodoDocument,
  MyWorkspaceDocument,
  type NotePartsFragment,
  type PageInfo,
  type PageInfoPartsFragment,
  RemoveCustomerFromCustomerGroupsDocument,
  RemoveCustomerFromTenantsDocument,
  RemoveLabelsDocument,
  RemoveMembersFromTierDocument,
  ReplyToEmailDocument,
  ReplyToThreadDocument,
  SearchCompaniesDocument,
  SearchTenantsDocument,
  SendNewEmailDocument,
  SetCustomerTenantsDocument,
  SnoozeThreadDocument,
  TenantDocument,
  type TenantPartsFragment,
  TenantsDocument,
  ThreadByExternalIdDocument,
  ThreadDocument,
  type ThreadEventPartsFragment,
  type ThreadPartsFragment,
  ThreadsDocument,
  TierDocument,
  type TierPartsFragment,
  TiersDocument,
  UnassignThreadDocument,
  UpdateCustomerCardConfigDocument,
  UpdateCustomerCompanyDocument,
  UpdateWebhookTargetDocument,
  UpsertCustomerDocument,
  type UpsertResult,
  UpsertTenantDocument,
  UserByEmailDocument,
  type UserPartsFragment,
  WebhookTargetDocument,
  type WebhookTargetPartsFragment,
  WebhookTargetsDocument,
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

    return unwrapData(res, (q) => {
      if (!q.customer) {
        return null;
      }
      return q.customer;
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

      return q.customerByEmail;
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
        customer,
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

  async getCustomerCustomerGroupMemberships(
    variables: VariablesOf<typeof CustomerCustomerGroupsDocument>
  ): SDKResult<{
    customerGroupMemberships: CustomerGroupMembershipPartsFragment[];
    pageInfo: PageInfo | null;
  }> {
    const res = await request(this.#ctx, {
      query: CustomerCustomerGroupsDocument,
      variables,
    });

    return unwrapData(res, (q) => {
      return {
        customerGroupMemberships: q.customer
          ? q.customer.customerGroupMemberships.edges.map((e) => e.node)
          : [],
        pageInfo: q.customer ? q.customer.customerGroupMemberships.pageInfo : null,
      };
    });
  }

  async getCustomerTenantMemberships(
    variables: VariablesOf<typeof CustomerTenantsDocument>
  ): SDKResult<{
    tenantMemberships: CustomerTenantMembershipPartsFragment[];
    pageInfo: PageInfo | null;
  }> {
    const res = await request(this.#ctx, {
      query: CustomerTenantsDocument,
      variables,
    });

    return unwrapData(res, (q) => {
      return {
        tenantMemberships: q.customer ? q.customer.tenantMemberships.edges.map((e) => e.node) : [],
        pageInfo: q.customer ? q.customer.tenantMemberships.pageInfo : null,
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

  async createWebhookTarget(
    input: VariablesOf<typeof CreateWebhookTargetDocument>['input']
  ): SDKResult<WebhookTargetPartsFragment> {
    const res = await request(this.#ctx, {
      query: CreateWebhookTargetDocument,
      variables: {
        input,
      },
    });

    return unwrapData(res, (q) => nonNullable(q.createWebhookTarget.webhookTarget));
  }

  async updateWebhookTarget(
    input: VariablesOf<typeof UpdateWebhookTargetDocument>['input']
  ): SDKResult<WebhookTargetPartsFragment> {
    const res = await request(this.#ctx, {
      query: UpdateWebhookTargetDocument,
      variables: {
        input,
      },
    });

    return unwrapData(res, (q) => nonNullable(q.updateWebhookTarget.webhookTarget));
  }

  async deleteWebhookTarget(
    input: VariablesOf<typeof DeleteWebhookTargetDocument>['input']
  ): SDKResult<null> {
    const res = await request(this.#ctx, {
      query: DeleteWebhookTargetDocument,
      variables: {
        input,
      },
    });

    return unwrapData(res, () => null);
  }

  async getWebhookTargets(variables: VariablesOf<typeof WebhookTargetsDocument>): SDKResult<{
    webhookTargets: WebhookTargetPartsFragment[];
    pageInfo: PageInfoPartsFragment;
  }> {
    const res = await request(this.#ctx, {
      query: WebhookTargetsDocument,
      variables,
    });

    return unwrapData(res, (q) => ({
      pageInfo: q.webhookTargets.pageInfo,
      webhookTargets: q.webhookTargets.edges.map((edge) => edge.node),
    }));
  }

  /**
   * If the webhook target is not found it will return null
   */
  async getWebhookTargetById(
    variables: VariablesOf<typeof WebhookTargetDocument>
  ): SDKResult<WebhookTargetPartsFragment | null> {
    const res = await request(this.#ctx, {
      query: WebhookTargetDocument,
      variables,
    });

    return unwrapData(res, (q) => {
      return q.webhookTarget;
    });
  }

  /** Create a note on a thread */
  async createNote(
    input: VariablesOf<typeof CreateNoteDocument>['input']
  ): SDKResult<NotePartsFragment> {
    const res = await request(this.#ctx, {
      query: CreateNoteDocument,
      variables: { input },
    });

    return unwrapData(res, (d) => nonNullable(d.createNote.note));
  }
  async getTenantById(
    variables: VariablesOf<typeof TenantDocument>
  ): SDKResult<TenantPartsFragment | null> {
    const res = await request(this.#ctx, {
      query: TenantDocument,
      variables,
    });

    return unwrapData(res, (q) => {
      return q.tenant;
    });
  }

  async getTenants(variables: VariablesOf<typeof TenantsDocument>): SDKResult<{
    tenants: TenantPartsFragment[];
    pageInfo: PageInfoPartsFragment;
  }> {
    const res = await request(this.#ctx, {
      query: TenantsDocument,
      variables,
    });

    return unwrapData(res, (q) => ({
      tenants: q.tenants.edges.map((edge) => edge.node),
      pageInfo: q.tenants.pageInfo,
    }));
  }

  async searchTenants(variables: VariablesOf<typeof SearchTenantsDocument>): SDKResult<{
    tenants: TenantPartsFragment[];
    pageInfo: PageInfoPartsFragment;
  }> {
    const res = await request(this.#ctx, {
      query: SearchTenantsDocument,
      variables,
    });

    return unwrapData(res, (q) => ({
      tenants: q.searchTenants.edges.map((edge) => edge.node.tenant),
      pageInfo: q.searchTenants.pageInfo,
    }));
  }

  async upsertTenant(
    input: VariablesOf<typeof UpsertTenantDocument>['input']
  ): SDKResult<TenantPartsFragment> {
    const res = await request(this.#ctx, {
      query: UpsertTenantDocument,
      variables: {
        input,
      },
    });

    return unwrapData(res, (q) => nonNullable(q.upsertTenant.tenant));
  }

  async setCustomerTenants(
    input: VariablesOf<typeof SetCustomerTenantsDocument>['input']
  ): SDKResult<null> {
    const res = await request(this.#ctx, {
      query: SetCustomerTenantsDocument,
      variables: {
        input,
      },
    });

    return unwrapData(res, () => null);
  }

  async addCustomerToTenants(
    input: VariablesOf<typeof AddCustomerToTenantsDocument>['input']
  ): SDKResult<null> {
    const res = await request(this.#ctx, {
      query: AddCustomerToTenantsDocument,
      variables: {
        input,
      },
    });

    return unwrapData(res, () => null);
  }

  async removeCustomerFromTenants(
    input: VariablesOf<typeof RemoveCustomerFromTenantsDocument>['input']
  ): SDKResult<null> {
    const res = await request(this.#ctx, {
      query: RemoveCustomerFromTenantsDocument,
      variables: {
        input,
      },
    });

    return unwrapData(res, () => null);
  }

  async getCompanies(variables: VariablesOf<typeof CompaniesDocument>): SDKResult<{
    companies: CompanyPartsFragment[];
    pageInfo: PageInfoPartsFragment;
  }> {
    const res = await request(this.#ctx, {
      query: CompaniesDocument,
      variables,
    });

    return unwrapData(res, (q) => ({
      companies: q.companies.edges.map((edge) => edge.node),
      pageInfo: q.companies.pageInfo,
    }));
  }

  async searchCompanies(variables: VariablesOf<typeof SearchCompaniesDocument>): SDKResult<{
    tenants: CompanyPartsFragment[];
    pageInfo: PageInfoPartsFragment;
  }> {
    const res = await request(this.#ctx, {
      query: SearchCompaniesDocument,
      variables,
    });

    return unwrapData(res, (q) => ({
      tenants: q.searchCompanies.edges.map((edge) => edge.node.company),
      pageInfo: q.searchCompanies.pageInfo,
    }));
  }

  async updateCustomerCompany(
    input: VariablesOf<typeof UpdateCustomerCompanyDocument>['input']
  ): SDKResult<CustomerPartsFragment> {
    const res = await request(this.#ctx, {
      query: UpdateCustomerCompanyDocument,
      variables: {
        input,
      },
    });

    return unwrapData(res, (res) => nonNullable(res.updateCustomerCompany.customer));
  }

  async getTierById(
    variables: VariablesOf<typeof TierDocument>
  ): SDKResult<TierPartsFragment | null> {
    const res = await request(this.#ctx, {
      query: TierDocument,
      variables,
    });

    return unwrapData(res, (q) => {
      return q.tier;
    });
  }

  async getTiers(variables: VariablesOf<typeof TiersDocument>): SDKResult<{
    tiers: TierPartsFragment[];
    pageInfo: PageInfoPartsFragment;
  }> {
    const res = await request(this.#ctx, {
      query: TiersDocument,
      variables,
    });

    return unwrapData(res, (q) => ({
      tiers: q.tiers.edges.map((edge) => edge.node),
      pageInfo: q.tiers.pageInfo,
    }));
  }

  async addMembersToTier(
    input: VariablesOf<typeof AddMembersToTierDocument>['input']
  ): SDKResult<null> {
    const res = await request(this.#ctx, {
      query: AddMembersToTierDocument,
      variables: {
        input,
      },
    });

    return unwrapData(res, () => null);
  }

  async removeMembersFromTier(
    input: VariablesOf<typeof RemoveMembersFromTierDocument>['input']
  ): SDKResult<null> {
    const res = await request(this.#ctx, {
      query: RemoveMembersFromTierDocument,
      variables: {
        input,
      },
    });

    return unwrapData(res, () => null);
  }
}
