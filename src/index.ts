/* eslint-disable simple-import-sort/exports */

export { PlainClient } from './client';

export { uiComponent } from './ui-components';

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
  MutationErrorType,
  MutationFieldErrorType,
  SortDirection,
  UpsertResult,
  ThreadStatus,
  ThreadsSortField,
  UserStatus,
} from './graphql/types';

export type {
  // Query arguments
  CustomersFilter,
  CustomersSort,

  // Input types
  AddLabelsInput,
  AddCustomerToCustomerGroupsInput,
  ArchiveLabelTypeInput,
  ChangeThreadPriorityInput,
  CommunicationChannelInput,
  CreateAttachmentDownloadUrlInput,
  CreateCustomerCardConfigInput,
  CreateCustomerEventInput,
  CreateThreadInput,
  CreateThreadEventInput,
  DeleteCustomerCardConfigInput,
  DeleteCustomerInput,
  MarkThreadAsDoneInput,
  MarkThreadAsTodoInput,
  RemoveCustomerFromCustomerGroupsInput,
  ReplyToEmailInput,
  ReplyToThreadInput,
  SendChatInput,
  SendNewEmailInput,
  SnoozeThreadInput,
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
  MachineUserActorPartsFragment,
  MutationErrorPartsFragment,
  PageInfoPartsFragment,
  SystemActorPartsFragment,
  TimelineEntryPartsFragment,
  UserActorPartsFragment,
  WorkspacePartsFragment,
  ThreadPartsFragment,
  LabelTypePartsFragment,
  LabelPartsFragment,
  CustomerEventPartsFragment,
  ThreadEventPartsFragment,
} from './graphql/types';

export type {
  BadRequestError,
  ForbiddenError,
  InternalServerError,
  MutationError,
  PlainSDKError,
  UnknownError,
} from './error';
