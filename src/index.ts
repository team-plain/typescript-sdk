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
  // Input types
  AddCustomerToCustomerGroupsInput,
  CreateIssueInput,
  RemoveCustomerFromCustomerGroupsInput,
  ReplyToEmailInput,
  SendNewEmailInput,
  UpsertCustomerInput,
  UpsertCustomTimelineEntryInput,

  // Fragment types
  ActorPartsFragment,
  AttachmentPartsFragment,
  CustomerActorPartsFragment,
  CustomerGroupMembershipPartsFragment,
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
  SystemActorPartsFragment,
  TimelineEntryPartsFragment,
  UserActorPartsFragment,
} from './graphql/types';
