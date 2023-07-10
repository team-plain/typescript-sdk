/* eslint-disable simple-import-sort/exports */

export { PlainClient } from './client';

export {
  // Enums
  AttachmentType,
  ComponentBadgeColor,
  ComponentDividerSpacingSize,
  ComponentPlainTextColor,
  ComponentPlainTextSize,
  ComponentSpacerSize,
  ComponentTextColor,
  ComponentTextSize,
  CustomersSortField,
  CustomerStatus,
  IssueStatus,
  MutationErrorType,
  MutationFieldErrorType,
  UpsertResult,
  UserStatus,
} from './graphql/types';

export type {
  // Query arguments
  CustomersFilter,
  CustomersSort,
  IssuesFilter,
  IssuesSort,

  // Input types
  AddCustomerToCustomerGroupsInput,
  ChangeCustomerStatusInput,
  CommunicationChannelInput,
  CreateCustomerCardConfigInput,
  CreateIssueInput,
  DeleteCustomerCardConfigInput,
  RemoveCustomerFromCustomerGroupsInput,
  ReplyToEmailInput,
  ResolveIssueInput,
  SendNewEmailInput,
  UpdateCustomerCardConfigInput,
  UpsertCustomerInput,
  UpsertCustomTimelineEntryInput,

  // Fragment types
  ActorPartsFragment,
  AttachmentPartsFragment,
  CustomerActorPartsFragment,
  CustomerGroupMembershipPartsFragment,
  CustomerGroupPartsFragment,
  CustomerPartsFragment,
  DateTimePartsFragment,
  DeletedCustomerActorPartsFragment,
  EmailActorPartsFragment,
  EmailParticipantPartsFragment,
  EmailPartsFragment,
  FileSizePartsFragment,
  InternalActorPartsFragment,
  IssuePartsFragment,
  IssuePriorityPartsFragment,
  IssueTypePartsFragment,
  MachineUserActorPartsFragment,
  MutationErrorPartsFragment,
  PageInfoPartsFragment,
  SystemActorPartsFragment,
  TimelineEntryPartsFragment,
  UserActorPartsFragment,
  WorkspacePartsFragment,
} from './graphql/types';

export type {
  BadRequestError,
  ForbiddenError,
  InternalServerError,
  MutationError,
  PlainSDKError,
  UnknownError,
} from './error';
