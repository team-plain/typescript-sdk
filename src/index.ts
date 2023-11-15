/* eslint-disable simple-import-sort/exports */

import type { Public } from './client';
import {
  type ActorPartsFragment as OriginalActorPartsFragment,
  type AttachmentPartsFragment as OriginalAttachmentPartsFragment,
  type CustomerActorPartsFragment as OriginalCustomerActorPartsFragment,
  type CustomerEventPartsFragment as OriginalCustomerEventPartsFragment,
  type CustomerGroupMembershipPartsFragment as OriginalCustomerGroupMembershipPartsFragment,
  type CustomerGroupPartsFragment as OriginalCustomerGroupPartsFragment,
  type CustomerPartsFragment as OriginalCustomerPartsFragment,
  type DateTimePartsFragment as OriginalDateTimePartsFragment,
  type DeletedCustomerActorPartsFragment as OriginalDeletedCustomerActorPartsFragment,
  type EmailActorPartsFragment as OriginalEmailActorPartsFragment,
  type EmailParticipantPartsFragment as OriginalEmailParticipantPartsFragment,
  type EmailPartsFragment as OriginalEmailPartsFragment,
  type FileSizePartsFragment as OriginalFileSizePartsFragment,
  type InternalActorPartsFragment as OriginalInternalActorPartsFragment,
  type LabelPartsFragment as OriginalLabelPartsFragment,
  type LabelTypePartsFragment as OriginalLabelTypePartsFragment,
  type MachineUserActorPartsFragment as OriginalMachineUserActorPartsFragment,
  type MutationErrorPartsFragment as OriginalMutationErrorPartsFragment,
  type PageInfoPartsFragment as OriginalPageInfoPartsFragment,
  type SystemActorPartsFragment as OriginalSystemActorPartsFragment,
  type ThreadEventPartsFragment as OriginalThreadEventPartsFragment,
  type ThreadPartsFragment as OriginalThreadPartsFragment,
  type TimelineEntryPartsFragment as OriginalTimelineEntryPartsFragment,
  type UserActorPartsFragment as OriginalUserActorPartsFragment,
  type WorkspacePartsFragment as OriginalWorkspacePartsFragment,
} from './graphql/types';

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

// Export *Public* fragment types
export type ActorPartsFragment = Public<OriginalActorPartsFragment>;
export type AttachmentPartsFragment = Public<OriginalAttachmentPartsFragment>;
export type CustomerActorPartsFragment = Public<OriginalCustomerActorPartsFragment>;
export type CustomerGroupMembershipPartsFragment =
  Public<OriginalCustomerGroupMembershipPartsFragment>;
export type CustomerGroupPartsFragment = Public<OriginalCustomerGroupPartsFragment>;
export type CustomerPartsFragment = Public<OriginalCustomerPartsFragment>;
export type DateTimePartsFragment = Public<OriginalDateTimePartsFragment>;
export type DeletedCustomerActorPartsFragment = Public<OriginalDeletedCustomerActorPartsFragment>;
export type EmailActorPartsFragment = Public<OriginalEmailActorPartsFragment>;
export type EmailParticipantPartsFragment = Public<OriginalEmailParticipantPartsFragment>;
export type EmailPartsFragment = Public<OriginalEmailPartsFragment>;
export type FileSizePartsFragment = Public<OriginalFileSizePartsFragment>;
export type InternalActorPartsFragment = Public<OriginalInternalActorPartsFragment>;
export type MachineUserActorPartsFragment = Public<OriginalMachineUserActorPartsFragment>;
export type MutationErrorPartsFragment = Public<OriginalMutationErrorPartsFragment>;
export type PageInfoPartsFragment = Public<OriginalPageInfoPartsFragment>;
export type SystemActorPartsFragment = Public<OriginalSystemActorPartsFragment>;
export type TimelineEntryPartsFragment = Public<OriginalTimelineEntryPartsFragment>;
export type UserActorPartsFragment = Public<OriginalUserActorPartsFragment>;
export type WorkspacePartsFragment = Public<OriginalWorkspacePartsFragment>;
export type ThreadPartsFragment = Public<OriginalThreadPartsFragment>;
export type LabelTypePartsFragment = Public<OriginalLabelTypePartsFragment>;
export type LabelPartsFragment = Public<OriginalLabelPartsFragment>;
export type CustomerEventPartsFragment = Public<OriginalCustomerEventPartsFragment>;
export type ThreadEventPartsFragment = Public<OriginalThreadEventPartsFragment>;

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
} from './graphql/types';

export type {
  BadRequestError,
  ForbiddenError,
  InternalServerError,
  MutationError,
  PlainSDKError,
  UnknownError,
} from './error';
