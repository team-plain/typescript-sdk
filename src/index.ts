import { UpsertResult, UserStatus, IssuesSortField } from './graphql/types';
import {
  CustomerStatus,
  CustomersSortField,
  IssueStatus,
  MutationErrorType,
  MutationFieldError,
  MutationFieldErrorType,
} from './graphql/types';
import {
  CustomerGroupMembershipPartsFragment,
  DateTimePartsFragment,
  DeletedCustomerActorPartsFragment,
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
import {
  ActorPartsFragment,
  CustomerActorPartsFragment,
  ComponentSpacerSize,
  ComponentTextSize,
  ComponentBadgeColor,
  ComponentDividerSpacingSize,
  ComponentPlainTextSize,
  ComponentPlainTextColor,
  ComponentTextColor,
} from './graphql/types';
import {
  UpsertCustomerInput,
  UpsertCustomTimelineEntryInput,
  CreateIssueInput,
} from './graphql/types';
export { PlainClient } from './client';

export {
  // Input types
  UpsertCustomerInput,
  UpsertCustomTimelineEntryInput,
  CreateIssueInput,

  // Fragments:
  ActorPartsFragment,
  CustomerActorPartsFragment,
  CustomerGroupMembershipPartsFragment,
  DateTimePartsFragment,
  DeletedCustomerActorPartsFragment,
  InternalActorPartsFragment,
  IssuePartsFragment,
  IssuePriorityPartsFragment,
  IssueTypePartsFragment,
  MachineUserActorPartsFragment,
  MutationErrorPartsFragment,
  SystemActorPartsFragment,
  TimelineEntryPartsFragment,
  UserActorPartsFragment,

  // Enums
  ComponentBadgeColor,
  ComponentDividerSpacingSize,
  ComponentPlainTextColor,
  ComponentPlainTextSize,
  ComponentSpacerSize,
  ComponentTextColor,
  ComponentTextSize,
  CustomerStatus,
  CustomersSortField,
  IssueStatus,
  MutationErrorType,
  MutationFieldErrorType,
  UpsertResult,
  UserStatus,
};
