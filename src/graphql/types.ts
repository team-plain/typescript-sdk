/* THIS FILE IS GENERATED */
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type AcceptWorkspaceInviteInput = {
  inviteId: Scalars['ID'];
};

export type AcceptWorkspaceInviteOutput = {
  __typename?: 'AcceptWorkspaceInviteOutput';
  error: Maybe<MutationError>;
  invite: Maybe<WorkspaceInvite>;
};

export type Actor = CustomerActor | DeletedCustomerActor | MachineUserActor | SystemActor | UserActor;

export type AddCustomerToCustomerGroupsInput = {
  customerGroupIdentifiers: Array<CustomerGroupIdentifier>;
  customerId: Scalars['ID'];
};

export type AddCustomerToCustomerGroupsOutput = {
  __typename?: 'AddCustomerToCustomerGroupsOutput';
  customerGroupMemberships: Maybe<Array<CustomerGroupMembership>>;
  error: Maybe<MutationError>;
};

export type AddLabelsInput = {
  labelTypeIds: Array<Scalars['ID']>;
  threadId: Scalars['ID'];
};

export type AddLabelsOutput = {
  __typename?: 'AddLabelsOutput';
  error: Maybe<MutationError>;
  labels: Array<Label>;
};

export type AddWorkspaceAlternateSupportEmailAddressInput = {
  alternateSupportEmailAddress: Scalars['String'];
};

export type AddWorkspaceAlternateSupportEmailAddressOutput = {
  __typename?: 'AddWorkspaceAlternateSupportEmailAddressOutput';
  error: Maybe<MutationError>;
  workspaceEmailDomainSettings: Maybe<WorkspaceEmailDomainSettings>;
};

export type ApiKey = {
  __typename?: 'ApiKey';
  createdAt: DateTime;
  createdBy: InternalActor;
  deletedAt: Maybe<DateTime>;
  deletedBy: Maybe<Actor>;
  description: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  isDeleted: Scalars['Boolean'];
  permissions: Array<Scalars['String']>;
  updatedAt: DateTime;
  updatedBy: InternalActor;
};

export type ApiKeyConnection = {
  __typename?: 'ApiKeyConnection';
  edges: Array<ApiKeyEdge>;
  pageInfo: PageInfo;
};

export type ApiKeyEdge = {
  __typename?: 'ApiKeyEdge';
  cursor: Scalars['String'];
  node: ApiKey;
};

export type ArchiveIssueTypeInput = {
  issueTypeId: Scalars['ID'];
};

export type ArchiveIssueTypeOutput = {
  __typename?: 'ArchiveIssueTypeOutput';
  error: Maybe<MutationError>;
  issueType: Maybe<IssueType>;
};

export type ArchiveLabelTypeInput = {
  labelTypeId: Scalars['ID'];
};

export type ArchiveLabelTypeOutput = {
  __typename?: 'ArchiveLabelTypeOutput';
  error: Maybe<MutationError>;
  labelType: Maybe<LabelType>;
};

export type AssignCustomerToUserInput = {
  /**
   * Should the mutation change the customer's status to Active.
   *
   * Defaults to true.
   */
  changeCustomerStatusToActive?: InputMaybe<Scalars['Boolean']>;
  customerId: Scalars['ID'];
  userId?: InputMaybe<Scalars['ID']>;
};

export type AssignCustomerToUserOutput = {
  __typename?: 'AssignCustomerToUserOutput';
  customer: Maybe<Customer>;
  error: Maybe<MutationError>;
};

export type AssignRolesToUserInput = {
  roleIds: Array<Scalars['ID']>;
  userId: Scalars['ID'];
};

export type AssignRolesToUserOutput = {
  __typename?: 'AssignRolesToUserOutput';
  error: Maybe<MutationError>;
};

export type AssignThreadInput = {
  machineUserId?: InputMaybe<Scalars['ID']>;
  threadId: Scalars['ID'];
  userId?: InputMaybe<Scalars['ID']>;
};

export type AssignThreadOutput = {
  __typename?: 'AssignThreadOutput';
  error: Maybe<MutationError>;
  thread: Maybe<Thread>;
};

export type Attachment = {
  __typename?: 'Attachment';
  createdAt: DateTime;
  createdBy: Actor;
  fileExtension: Maybe<Scalars['String']>;
  fileMimeType: Scalars['String'];
  fileName: Scalars['String'];
  fileSize: FileSize;
  id: Scalars['ID'];
  type: AttachmentType;
  updatedAt: DateTime;
  updatedBy: Actor;
};

export type AttachmentDownloadUrl = {
  __typename?: 'AttachmentDownloadUrl';
  attachment: Attachment;
  downloadUrl: Scalars['String'];
  expiresAt: DateTime;
};

export enum AttachmentType {
  Chat = 'CHAT',
  CustomTimelineEntry = 'CUSTOM_TIMELINE_ENTRY',
  Email = 'EMAIL'
}

export type AttachmentUploadUrl = {
  __typename?: 'AttachmentUploadUrl';
  attachment: Attachment;
  expiresAt: DateTime;
  uploadFormData: Array<UploadFormData>;
  uploadFormUrl: Scalars['String'];
};

export type BooleanInput = {
  value: Scalars['Boolean'];
};

/** A boolean setting */
export type BooleanSetting = {
  __typename?: 'BooleanSetting';
  /** The value of the setting. This is named uniquely (instead of just `value`) so that the union has unique fields. */
  booleanValue: Scalars['Boolean'];
  /** The setting code. */
  code: Scalars['String'];
  /** The scope of the setting. */
  scope: SettingScope;
};

export type ChangeCustomerStatusAsyncInput = {
  customerId: Scalars['ID'];
  status: CustomerStatus;
};

export type ChangeCustomerStatusAsyncOutput = {
  __typename?: 'ChangeCustomerStatusAsyncOutput';
  error: Maybe<MutationError>;
};

export type ChangeCustomerStatusInput = {
  customerId: Scalars['ID'];
  status: CustomerStatus;
};

export type ChangeCustomerStatusOutput = {
  __typename?: 'ChangeCustomerStatusOutput';
  customer: Maybe<Customer>;
  error: Maybe<MutationError>;
};

export type ChangeIssueIssueTypeInput = {
  issueId: Scalars['ID'];
  issueTypeId: Scalars['ID'];
};

export type ChangeIssueIssueTypeOutput = {
  __typename?: 'ChangeIssueIssueTypeOutput';
  error: Maybe<MutationError>;
  issue: Maybe<Issue>;
};

export type ChangeIssuePriorityInput = {
  issueId: Scalars['ID'];
  priorityValue: Scalars['Int'];
};

export type ChangeIssuePriorityOutput = {
  __typename?: 'ChangeIssuePriorityOutput';
  error: Maybe<MutationError>;
  issue: Maybe<Issue>;
};

export type ChangeThreadPriorityInput = {
  priority: Scalars['Int'];
  threadId: Scalars['ID'];
};

export type ChangeThreadPriorityOutput = {
  __typename?: 'ChangeThreadPriorityOutput';
  error: Maybe<MutationError>;
  thread: Maybe<Thread>;
};

export enum ChangeType {
  Added = 'ADDED',
  Removed = 'REMOVED',
  Updated = 'UPDATED'
}

export type ChangeUserStatusInput = {
  status: UserStatus;
  userId: Scalars['ID'];
};

export type ChangeUserStatusOutput = {
  __typename?: 'ChangeUserStatusOutput';
  error: Maybe<MutationError>;
  user: Maybe<User>;
};

export type Chat = {
  __typename?: 'Chat';
  attachments: Array<Attachment>;
  createdAt: DateTime;
  createdBy: Actor;
  customerReadAt: Maybe<DateTime>;
  id: Scalars['ID'];
  text: Maybe<Scalars['String']>;
  updatedAt: DateTime;
  updatedBy: Actor;
};

export type ChatEntry = {
  __typename?: 'ChatEntry';
  attachments: Array<Attachment>;
  chatId: Scalars['ID'];
  customerReadAt: Maybe<DateTime>;
  text: Maybe<Scalars['String']>;
};

export enum CommunicationChannel {
  Chat = 'CHAT',
  Email = 'EMAIL'
}

export enum CommunicationChannelInput {
  Chat = 'CHAT',
  Email = 'EMAIL',
  None = 'NONE'
}

export type ComponentBadge = {
  __typename?: 'ComponentBadge';
  badgeColor: Maybe<ComponentBadgeColor>;
  badgeLabel: Scalars['String'];
};

export enum ComponentBadgeColor {
  Blue = 'BLUE',
  Green = 'GREEN',
  Grey = 'GREY',
  Red = 'RED',
  Yellow = 'YELLOW'
}

export type ComponentBadgeInput = {
  badgeColor?: InputMaybe<ComponentBadgeColor>;
  badgeLabel: Scalars['String'];
};

export type ComponentContainer = {
  __typename?: 'ComponentContainer';
  containerContent: Array<ComponentContainerContent>;
};

export type ComponentContainerContent = ComponentBadge | ComponentCopyButton | ComponentDivider | ComponentLinkButton | ComponentPlainText | ComponentRow | ComponentSpacer | ComponentText;

export type ComponentContainerContentInput = {
  componentBadge?: InputMaybe<ComponentBadgeInput>;
  componentCopyButton?: InputMaybe<ComponentCopyButtonInput>;
  componentDivider?: InputMaybe<ComponentDividerInput>;
  componentLinkButton?: InputMaybe<ComponentLinkButtonInput>;
  componentPlainText?: InputMaybe<ComponentPlainTextInput>;
  componentRow?: InputMaybe<ComponentRowInput>;
  componentSpacer?: InputMaybe<ComponentSpacerInput>;
  componentText?: InputMaybe<ComponentTextInput>;
};

export type ComponentContainerInput = {
  containerContent: Array<ComponentContainerContentInput>;
};

export type ComponentCopyButton = {
  __typename?: 'ComponentCopyButton';
  copyButtonTooltipLabel: Maybe<Scalars['String']>;
  copyButtonValue: Scalars['String'];
};

export type ComponentCopyButtonInput = {
  copyButtonTooltipLabel?: InputMaybe<Scalars['String']>;
  copyButtonValue: Scalars['String'];
};

export type ComponentDivider = {
  __typename?: 'ComponentDivider';
  dividerSpacingSize: Maybe<ComponentDividerSpacingSize>;
  /** @deprecated use dividerSpacingSize instead */
  spacingSize: Maybe<ComponentDividerSpacingSize>;
};

export type ComponentDividerInput = {
  dividerSpacingSize?: InputMaybe<ComponentDividerSpacingSize>;
  /** @deprecated use dividerSpacingSize instead */
  spacingSize?: InputMaybe<ComponentDividerSpacingSize>;
};

export enum ComponentDividerSpacingSize {
  L = 'L',
  M = 'M',
  S = 'S',
  Xl = 'XL',
  Xs = 'XS'
}

export type ComponentInput = {
  componentBadge?: InputMaybe<ComponentBadgeInput>;
  componentContainer?: InputMaybe<ComponentContainerInput>;
  componentCopyButton?: InputMaybe<ComponentCopyButtonInput>;
  componentDivider?: InputMaybe<ComponentDividerInput>;
  componentLinkButton?: InputMaybe<ComponentLinkButtonInput>;
  componentPlainText?: InputMaybe<ComponentPlainTextInput>;
  componentRow?: InputMaybe<ComponentRowInput>;
  componentSpacer?: InputMaybe<ComponentSpacerInput>;
  componentText?: InputMaybe<ComponentTextInput>;
};

export type ComponentLinkButton = {
  __typename?: 'ComponentLinkButton';
  /** @deprecated use linkButtonLabel instead */
  label: Scalars['String'];
  linkButtonLabel: Scalars['String'];
  linkButtonUrl: Scalars['String'];
  /** @deprecated use linkButtonUrl instead */
  url: Scalars['String'];
};

export type ComponentLinkButtonInput = {
  /** @deprecated use linkButtonLabel instead */
  label?: InputMaybe<Scalars['String']>;
  /** Required input, will be made required after deprecated fields are removed. */
  linkButtonLabel?: InputMaybe<Scalars['String']>;
  /** Required input, will be made required after deprecated fields are removed. */
  linkButtonUrl?: InputMaybe<Scalars['String']>;
  /** @deprecated use linkButtonUrl instead */
  url?: InputMaybe<Scalars['String']>;
};

export type ComponentPlainText = {
  __typename?: 'ComponentPlainText';
  plainText: Scalars['String'];
  plainTextColor: Maybe<ComponentPlainTextColor>;
  plainTextSize: Maybe<ComponentPlainTextSize>;
};

export enum ComponentPlainTextColor {
  Error = 'ERROR',
  Muted = 'MUTED',
  Normal = 'NORMAL',
  Success = 'SUCCESS',
  Warning = 'WARNING'
}

export type ComponentPlainTextInput = {
  plainText: Scalars['String'];
  plainTextColor?: InputMaybe<ComponentPlainTextColor>;
  plainTextSize?: InputMaybe<ComponentPlainTextSize>;
};

export enum ComponentPlainTextSize {
  L = 'L',
  M = 'M',
  S = 'S'
}

export type ComponentRow = {
  __typename?: 'ComponentRow';
  rowAsideContent: Array<ComponentRowContent>;
  rowMainContent: Array<ComponentRowContent>;
};

export type ComponentRowContent = ComponentBadge | ComponentCopyButton | ComponentDivider | ComponentLinkButton | ComponentPlainText | ComponentSpacer | ComponentText;

export type ComponentRowContentInput = {
  componentBadge?: InputMaybe<ComponentBadgeInput>;
  componentCopyButton?: InputMaybe<ComponentCopyButtonInput>;
  componentDivider?: InputMaybe<ComponentDividerInput>;
  componentLinkButton?: InputMaybe<ComponentLinkButtonInput>;
  componentPlainText?: InputMaybe<ComponentPlainTextInput>;
  componentSpacer?: InputMaybe<ComponentSpacerInput>;
  componentText?: InputMaybe<ComponentTextInput>;
};

export type ComponentRowInput = {
  rowAsideContent: Array<ComponentRowContentInput>;
  rowMainContent: Array<ComponentRowContentInput>;
};

export type ComponentSpacer = {
  __typename?: 'ComponentSpacer';
  /** @deprecated Use spacerSize instead, which has the same type */
  size: ComponentSpacerSize;
  spacerSize: ComponentSpacerSize;
};

export type ComponentSpacerInput = {
  /** @deprecated user spacerSize instead */
  size?: InputMaybe<ComponentSpacerSize>;
  /** Required input, will be made required after deprecated fields are removed. */
  spacerSize?: InputMaybe<ComponentSpacerSize>;
};

export enum ComponentSpacerSize {
  L = 'L',
  M = 'M',
  S = 'S',
  Xl = 'XL',
  Xs = 'XS'
}

export type ComponentText = {
  __typename?: 'ComponentText';
  /** @deprecated Use textColor instead, which has the same type */
  color: Maybe<ComponentTextColor>;
  /** @deprecated Use textSize instead, which has the same type */
  size: Maybe<ComponentTextSize>;
  text: Scalars['String'];
  textColor: Maybe<ComponentTextColor>;
  textSize: Maybe<ComponentTextSize>;
};

export enum ComponentTextColor {
  Error = 'ERROR',
  Muted = 'MUTED',
  Normal = 'NORMAL',
  Success = 'SUCCESS',
  Warning = 'WARNING'
}

export type ComponentTextInput = {
  /** @deprecated use textColor instead */
  color?: InputMaybe<ComponentTextColor>;
  /** @deprecated use textSize instead */
  size?: InputMaybe<ComponentTextSize>;
  text: Scalars['String'];
  textColor?: InputMaybe<ComponentTextColor>;
  textSize?: InputMaybe<ComponentTextSize>;
};

export enum ComponentTextSize {
  L = 'L',
  M = 'M',
  S = 'S'
}

export type CreateApiKeyInput = {
  description?: InputMaybe<Scalars['String']>;
  machineUserId: Scalars['ID'];
  permissions: Array<Scalars['String']>;
};

export type CreateApiKeyOutput = {
  __typename?: 'CreateApiKeyOutput';
  apiKey: Maybe<ApiKey>;
  apiKeySecret: Maybe<Scalars['String']>;
  error: Maybe<MutationError>;
};

export type CreateAttachmentDownloadUrlInput = {
  attachmentId: Scalars['ID'];
};

export type CreateAttachmentDownloadUrlOutput = {
  __typename?: 'CreateAttachmentDownloadUrlOutput';
  attachmentDownloadUrl: Maybe<AttachmentDownloadUrl>;
  error: Maybe<MutationError>;
};

export type CreateAttachmentUploadUrlInput = {
  attachmentType: AttachmentType;
  customerId: Scalars['ID'];
  fileName: Scalars['String'];
  fileSizeBytes: Scalars['Int'];
};

export type CreateAttachmentUploadUrlOutput = {
  __typename?: 'CreateAttachmentUploadUrlOutput';
  attachmentUploadUrl: Maybe<AttachmentUploadUrl>;
  error: Maybe<MutationError>;
};

/**
 * Input type to create a new customer card config.
 *
 * By default new customer cards will have an ordering of 100000 (to place them at the bottom).
 */
export type CreateCustomerCardConfigInput = {
  /** An array of headers name-value pairs (maximum length of array: 20). */
  apiHeaders: Array<CustomerCardConfigApiHeaderInput>;
  /** The URL from which this card should be loaded (must start with `https://` and be a valid URL, max length: 600 characters). */
  apiUrl: Scalars['String'];
  /** The default time the card should be cached for if no TTL is provided in the card response. (minimum: 15 seconds, maximum: 1 year or  31,536,000 seconds). */
  defaultTimeToLiveSeconds: Scalars['Int'];
  /** The key of the card (must be unique in a workspace, max length: 500 characters, must match regex: `[a-zA-Z0-9_-]+`). */
  key: Scalars['String'];
  /** The title of the card (max length: 500 characters). */
  title: Scalars['String'];
};

export type CreateCustomerCardConfigOutput = {
  __typename?: 'CreateCustomerCardConfigOutput';
  /** The created customer card config. */
  customerCardConfig: Maybe<CustomerCardConfig>;
  error: Maybe<MutationError>;
};

export type CreateCustomerGroupInput = {
  color: Scalars['String'];
  key: Scalars['String'];
  name: Scalars['String'];
};

export type CreateCustomerGroupOutput = {
  __typename?: 'CreateCustomerGroupOutput';
  customerGroup: Maybe<CustomerGroup>;
  error: Maybe<MutationError>;
};

export type CreateEmailPreviewUrlInput = {
  customerId: Scalars['ID'];
  emailId: Scalars['ID'];
};

export type CreateEmailPreviewUrlOutput = {
  __typename?: 'CreateEmailPreviewUrlOutput';
  emailPreviewUrl: Maybe<EmailPreviewUrl>;
  error: Maybe<MutationError>;
};

export type CreateIssueInput = {
  customerId: Scalars['ID'];
  issueTypeId: Scalars['ID'];
  /**
   * The priority value for this issue. Overrides the issue's issue type's default priority value.
   *
   * Valid values are 0, 1, 2 and 3.
   */
  priorityValue?: InputMaybe<Scalars['Int']>;
};

export type CreateIssueLinkInput = {
  issueId: Scalars['ID'];
  linearIssue?: InputMaybe<LinearIssueIssueLinkInput>;
};

export type CreateIssueLinkOutput = {
  __typename?: 'CreateIssueLinkOutput';
  error: Maybe<MutationError>;
  issueLink: Maybe<IssueLink>;
};

export type CreateIssueOutput = {
  __typename?: 'CreateIssueOutput';
  error: Maybe<MutationError>;
  issue: Maybe<Issue>;
};

export type CreateIssueTypeInput = {
  /**
   * The priority value for issues created with this issue type.
   *
   * Valid values are 0, 1, 2 and 3.
   */
  defaultIssuePriorityValue?: InputMaybe<Scalars['Int']>;
  /**
   * The icon to use for this issue type. The maximum length is 50 characters.
   *
   * Only lowercase alphanumeric characters, '-' and '_' are allowed.
   */
  icon?: InputMaybe<Scalars['String']>;
  publicName: Scalars['String'];
};

export type CreateIssueTypeOutput = {
  __typename?: 'CreateIssueTypeOutput';
  error: Maybe<MutationError>;
  issueType: Maybe<IssueType>;
};

export type CreateLabelTypeInput = {
  icon?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};

export type CreateLabelTypeOutput = {
  __typename?: 'CreateLabelTypeOutput';
  error: Maybe<MutationError>;
  labelType: Maybe<LabelType>;
};

export type CreateMachineUserInput = {
  description?: InputMaybe<Scalars['String']>;
  fullName: Scalars['String'];
  publicName: Scalars['String'];
};

export type CreateMachineUserOutput = {
  __typename?: 'CreateMachineUserOutput';
  error: Maybe<MutationError>;
  machineUser: Maybe<MachineUser>;
};

export type CreateMyLinearIntegrationInput = {
  authCode: Scalars['String'];
  redirectUrl: Scalars['String'];
};

export type CreateMyLinearIntegrationOutput = {
  __typename?: 'CreateMyLinearIntegrationOutput';
  error: Maybe<MutationError>;
  integration: Maybe<UserLinearIntegration>;
};

export type CreateMySlackIntegrationInput = {
  authCode: Scalars['String'];
  redirectUrl: Scalars['String'];
};

export type CreateMySlackIntegrationOutput = {
  __typename?: 'CreateMySlackIntegrationOutput';
  error: Maybe<MutationError>;
  integration: Maybe<UserSlackIntegration>;
};

export type CreateNoteInput = {
  customerId: Scalars['ID'];
  markdown?: InputMaybe<Scalars['String']>;
  text: Scalars['String'];
};

export type CreateNoteOutput = {
  __typename?: 'CreateNoteOutput';
  error: Maybe<MutationError>;
  note: Maybe<Note>;
};

export type CreateSnippetInput = {
  markdown?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  text: Scalars['String'];
};

export type CreateSnippetOutput = {
  __typename?: 'CreateSnippetOutput';
  error: Maybe<MutationError>;
  snippet: Maybe<Snippet>;
};

/** Only one of the fields can be set. */
export type CreateThreadAssignedToInput = {
  machineUserId?: InputMaybe<Scalars['ID']>;
  userId?: InputMaybe<Scalars['ID']>;
};

/** Only one of the fields can be set. */
export type CreateThreadCustomerIdentifierInput = {
  customerId?: InputMaybe<Scalars['ID']>;
  emailAddress?: InputMaybe<Scalars['String']>;
  externalId?: InputMaybe<Scalars['ID']>;
};

export type CreateThreadInput = {
  /** User or machine user this thread should be assigned to. */
  assignedTo?: InputMaybe<CreateThreadAssignedToInput>;
  /** An array of attachments for the first timeline entry in the thread. */
  attachmentIds?: InputMaybe<Array<Scalars['ID']>>;
  /** The components used to create the first timeline entry in the thread. */
  components: Array<ComponentInput>;
  /** The identifier of the customer being either the existing customer ID, the customer's email address or and external ID. */
  customerIdentifier: CreateThreadCustomerIdentifierInput;
  /** The external ID of this thread. You can use this field to store your own unique identifier for this thread. */
  externalId?: InputMaybe<Scalars['ID']>;
  /** An array of label types to attach to the thread upon creation. */
  labelTypeIds?: InputMaybe<Array<Scalars['ID']>>;
  /**
   * The optional preview text for this thread. This is used to display a preview of the thread in the UI.
   * If not provided, text from components will extracted and used instead.
   */
  previewText?: InputMaybe<Scalars['String']>;
  /** The priority of the thread. Valid values are 0, 1, 2, 3, from most to least urgent, defaults to 2. */
  priority?: InputMaybe<Scalars['Int']>;
  /** The title of the thread. */
  title: Scalars['String'];
};

export type CreateThreadLinkInput = {
  linearIssue?: InputMaybe<LinearIssueThreadLinkInput>;
  threadId: Scalars['ID'];
};

export type CreateThreadLinkOutput = {
  __typename?: 'CreateThreadLinkOutput';
  error: Maybe<MutationError>;
  threadLink: Maybe<ThreadLink>;
};

export type CreateThreadOutput = {
  __typename?: 'CreateThreadOutput';
  error: Maybe<MutationError>;
  thread: Maybe<Thread>;
};

export type CreateUserAccountInput = {
  fullName: Scalars['String'];
  publicName: Scalars['String'];
};

export type CreateUserAccountOutput = {
  __typename?: 'CreateUserAccountOutput';
  error: Maybe<MutationError>;
  userAccount: Maybe<UserAccount>;
};

export type CreateWebhookTargetInput = {
  description: Scalars['String'];
  eventSubscriptions: Array<WebhookTargetEventSubscriptionInput>;
  isEnabled: Scalars['Boolean'];
  url: Scalars['String'];
};

export type CreateWebhookTargetOutput = {
  __typename?: 'CreateWebhookTargetOutput';
  error: Maybe<MutationError>;
  webhookTarget: Maybe<WebhookTarget>;
};

export type CreateWorkspaceAppInput = {
  name: Scalars['String'];
  publicName: Scalars['String'];
};

export type CreateWorkspaceAppOutput = {
  __typename?: 'CreateWorkspaceAppOutput';
  error: Maybe<MutationError>;
  workspaceApp: Maybe<WorkspaceApp>;
};

export type CreateWorkspaceAppPublicKeyInput = {
  name: Scalars['String'];
  value: Scalars['String'];
  workspaceAppId: Scalars['ID'];
};

export type CreateWorkspaceAppPublicKeyOutput = {
  __typename?: 'CreateWorkspaceAppPublicKeyOutput';
  error: Maybe<MutationError>;
  workspaceAppPublicKey: Maybe<WorkspaceAppPublicKey>;
};

export type CreateWorkspaceDiscordIntegrationInput = {
  name: Scalars['String'];
  webhookUrl: Scalars['String'];
};

export type CreateWorkspaceDiscordIntegrationOutput = {
  __typename?: 'CreateWorkspaceDiscordIntegrationOutput';
  error: Maybe<MutationError>;
  integration: Maybe<WorkspaceDiscordIntegration>;
};

export type CreateWorkspaceEmailDomainSettingsInput = {
  supportEmailAddress: Scalars['String'];
};

export type CreateWorkspaceEmailDomainSettingsOutput = {
  __typename?: 'CreateWorkspaceEmailDomainSettingsOutput';
  error: Maybe<MutationError>;
  workspaceEmailDomainSettings: Maybe<WorkspaceEmailDomainSettings>;
};

export type CreateWorkspaceInput = {
  name: Scalars['String'];
  publicName: Scalars['String'];
};

export type CreateWorkspaceOutput = {
  __typename?: 'CreateWorkspaceOutput';
  error: Maybe<MutationError>;
  workspace: Maybe<Workspace>;
};

export type CreateWorkspaceSlackIntegrationInput = {
  authCode: Scalars['String'];
  redirectUrl: Scalars['String'];
};

export type CreateWorkspaceSlackIntegrationOutput = {
  __typename?: 'CreateWorkspaceSlackIntegrationOutput';
  error: Maybe<MutationError>;
  integration: Maybe<WorkspaceSlackIntegration>;
};

export type CustomEntry = {
  __typename?: 'CustomEntry';
  attachments: Array<Attachment>;
  components: Array<CustomTimelineEntryComponent>;
  externalId: Maybe<Scalars['ID']>;
  title: Scalars['String'];
  type: Maybe<Scalars['String']>;
};

export type CustomTimelineEntryComponent = ComponentBadge | ComponentContainer | ComponentCopyButton | ComponentDivider | ComponentLinkButton | ComponentPlainText | ComponentRow | ComponentSpacer | ComponentText;

/**
 * The core customer entity. A customer only exists (ideally) once.
 * Uniqueness is guaranteed on both of these fields:
 * 1. `externalId` if provided
 * 2. `email`
 */
export type Customer = {
  __typename?: 'Customer';
  /** When the customer was assigned to a user. */
  assignedAt: Maybe<DateTime>;
  /** The user the customer is assigned to. */
  assignedToUser: Maybe<UserActor>;
  createdAt: DateTime;
  createdBy: Actor;
  /** A subquery to fetch the customer's group memberships. */
  customerGroupMemberships: CustomerGroupMembershipConnection;
  /** The customer's email address. */
  email: EmailAddress;
  /** Your system's ID for this customer. */
  externalId: Maybe<Scalars['ID']>;
  /** The full name of the customer. */
  fullName: Scalars['String'];
  /** Uniquely identifies a customer in Plain. */
  id: Scalars['ID'];
  /** A subquery to fetch the customer's issues. */
  issues: IssueConnection;
  /** When the customer was last in the `IDLE` status. */
  lastIdleAt: Maybe<DateTime>;
  markedAsSpamAt: Maybe<DateTime>;
  markedAsSpamBy: Maybe<InternalActor>;
  /** An optional short name of the customer, typically their first name. */
  shortName: Maybe<Scalars['String']>;
  /** The customer's status. */
  status: CustomerStatus;
  /** When the customer's status was last changed. */
  statusChangedAt: DateTime;
  /** Metadata about the customer's timeline. This is eventually consistent with the timeline. */
  timelineInfo: TimelineInfo;
  updatedAt: DateTime;
  updatedBy: Actor;
};


/**
 * The core customer entity. A customer only exists (ideally) once.
 * Uniqueness is guaranteed on both of these fields:
 * 1. `externalId` if provided
 * 2. `email`
 */
export type CustomerCustomerGroupMembershipsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/**
 * The core customer entity. A customer only exists (ideally) once.
 * Uniqueness is guaranteed on both of these fields:
 * 1. `externalId` if provided
 * 2. `email`
 */
export type CustomerIssuesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filters?: InputMaybe<CustomerIssuesFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<IssuesSort>;
};

export type CustomerActor = {
  __typename?: 'CustomerActor';
  customer: Customer;
  customerId: Scalars['ID'];
};

export type CustomerAssignmentTransitionedEntry = {
  __typename?: 'CustomerAssignmentTransitionedEntry';
  nextUser: Maybe<User>;
  nextUserId: Maybe<Scalars['ID']>;
  previousUser: Maybe<User>;
  previousUserId: Maybe<Scalars['ID']>;
};

export type CustomerCardComponent = ComponentBadge | ComponentContainer | ComponentCopyButton | ComponentDivider | ComponentLinkButton | ComponentPlainText | ComponentRow | ComponentSpacer | ComponentText;

/**
 * The configuration of a customer card that defines four important things:
 *
 * - The title of the card
 * - The key of the card, which will be used in the request payload to the API URL
 * - The order in which the cards should appear
 * - Which API the card should be loaded from (and the required authentication headers)
 *
 * Configs that have the same API URL and API Headers will be loaded in batch. API header names are treated case insensitively.
 *
 * A maximum of 25 customer cards can be configured.
 */
export type CustomerCardConfig = {
  __typename?: 'CustomerCardConfig';
  /** An array of headers name-value pairs (maximum length of array: 20). Requires the `customerCardConfigApiDetails:read` permission. */
  apiHeaders: Array<CustomerCardConfigApiHeader>;
  /** The URL from which this card should be loaded (must start with `https://` and be a valid URL, max length: 600 characters). Requires the `customerCardConfigApiDetails:read` permission. */
  apiUrl: Scalars['String'];
  createdAt: DateTime;
  createdBy: InternalActor;
  /** The default time the card should be cached for if no TTL is provided in the card response. (minimum: 15 seconds, maximum: 1 year or  31,536,000 seconds). */
  defaultTimeToLiveSeconds: Scalars['Int'];
  /** The ID of the customer card config. */
  id: Scalars['ID'];
  /** Indicates if the customer card is enabled or not. Disabled customer card configs are not loaded or displayed for customers. */
  isEnabled: Scalars['Boolean'];
  /** The key of the card (must be unique in a workspace, max length: 500 characters, must match regex: `[a-zA-Z0-9_-]+`). */
  key: Scalars['String'];
  /**
   * The order in which this customer card config should be shown.
   *
   * Duplicate order numbers are allowed, in case the order is the same they will be sorted based on `id`. The minimum is 0 and the maximum is 100000.
   */
  order: Scalars['Int'];
  /** The title of the card (max length: 500 characters). */
  title: Scalars['String'];
  updatedAt: DateTime;
  updatedBy: InternalActor;
};

/** An API header that will be sent to the configured API URL. */
export type CustomerCardConfigApiHeader = {
  __typename?: 'CustomerCardConfigApiHeader';
  /** The name of the header, trimmed and treated case insensitively for deduplication purposes (min length: 1, max length: 100). Not all header names are allowed. */
  name: Scalars['String'];
  /** The value of the header, treated case sensitively for deduplication purposes (min length: 1, max length: 500). */
  value: Scalars['String'];
};

/** An API header that will be sent to the configured API URL. */
export type CustomerCardConfigApiHeaderInput = {
  /** The name of the header, trimmed and treated case insensitively for deduplication purposes (min length: 1, max length: 100). Not all header names are allowed. */
  name: Scalars['String'];
  /** The value of the header, treated case sensitively for deduplication purposes (min length: 1, max length: 500). */
  value: Scalars['String'];
};

export type CustomerCardConfigOrderInput = {
  /** The ID of the customer card config to be reordered. */
  customerCardConfigId: Scalars['ID'];
  /** The order the customer card config should have. */
  order: Scalars['Int'];
};

/**
 * A shared interface for all common properties customer card instances can have.
 * A customer can only have one customer card instance for each customer card config at any point in time.
 *
 * Has 3 implementations:
 * - `CustomerCardInstanceLoading`
 * - `CustomerCardInstanceLoaded`
 * - `CustomerCardInstanceError`
 */
export type CustomerCardInstance = {
  createdAt: DateTime;
  createdBy: Actor;
  /** The customer card config this instance is for. */
  customerCardConfig: CustomerCardConfig;
  /** The customer the instance is for. */
  customerId: Scalars['ID'];
  /** The ID of the customer card instance. A new ID is generated for each load. */
  id: Scalars['ID'];
  updatedAt: DateTime;
  updatedBy: Actor;
};

export type CustomerCardInstanceChange = {
  __typename?: 'CustomerCardInstanceChange';
  changeType: ChangeType;
  customerCardInstance: CustomerCardInstance;
};

export type CustomerCardInstanceChangesResult = CustomerCardInstanceChange | SubscriptionAcknowledgement;

export type CustomerCardInstanceError = CustomerCardInstance & {
  __typename?: 'CustomerCardInstanceError';
  createdAt: DateTime;
  createdBy: Actor;
  /** The customer card config this instance is for. */
  customerCardConfig: CustomerCardConfig;
  /** The customer the instance is for. */
  customerId: Scalars['ID'];
  /** The details of the customer card load error. */
  errorDetail: CustomerCardInstanceErrorDetail;
  /** The ID of the customer card instance. A new ID is generated for each load. */
  id: Scalars['ID'];
  updatedAt: DateTime;
  updatedBy: Actor;
};

/** Details for the reasons why the customer card failed to load. */
export type CustomerCardInstanceErrorDetail = CustomerCardInstanceMissingCardErrorDetail | CustomerCardInstanceRequestErrorDetail | CustomerCardInstanceResponseBodyErrorDetail | CustomerCardInstanceStatusCodeErrorDetail | CustomerCardInstanceTimeoutErrorDetail | CustomerCardInstanceUnknownErrorDetail;

/** A loaded customer card. */
export type CustomerCardInstanceLoaded = CustomerCardInstance & {
  __typename?: 'CustomerCardInstanceLoaded';
  /** The list of components of the customer card. If this is null it means the customer card was returned on the API, but the components array was empty. */
  components: Maybe<Array<CustomerCardComponent>>;
  createdAt: DateTime;
  createdBy: Actor;
  /** The customer card config this instance is for. */
  customerCardConfig: CustomerCardConfig;
  /** The customer the instance is for. */
  customerId: Scalars['ID'];
  expiresAt: DateTime;
  /** The ID of the customer card instance. A new ID is generated for each load. */
  id: Scalars['ID'];
  /** When the customer card was received from the API. */
  loadedAt: DateTime;
  updatedAt: DateTime;
  updatedBy: Actor;
};

/**
 * A loading customer card. The createdAt timestamp indicates when the load was started.
 * Will be updated to be a CustomerCardInstanceLoaded or CustomerCardInstanceError.
 */
export type CustomerCardInstanceLoading = CustomerCardInstance & {
  __typename?: 'CustomerCardInstanceLoading';
  createdAt: DateTime;
  createdBy: Actor;
  /** The customer card config this instance is for. */
  customerCardConfig: CustomerCardConfig;
  /** The customer the instance is for. */
  customerId: Scalars['ID'];
  /** The ID of the customer card instance. A new ID is generated for each load. */
  id: Scalars['ID'];
  updatedAt: DateTime;
  updatedBy: Actor;
};

/** The configured API URL didn't return a requested card key. */
export type CustomerCardInstanceMissingCardErrorDetail = {
  __typename?: 'CustomerCardInstanceMissingCardErrorDetail';
  cardKey: Scalars['String'];
  message: Scalars['String'];
};

/** Plain failed to make the request to the configured API URL. */
export type CustomerCardInstanceRequestErrorDetail = {
  __typename?: 'CustomerCardInstanceRequestErrorDetail';
  errorCode: Scalars['String'];
  message: Scalars['String'];
};

/** An invalid response body was returned from the configured API URL. */
export type CustomerCardInstanceResponseBodyErrorDetail = {
  __typename?: 'CustomerCardInstanceResponseBodyErrorDetail';
  message: Scalars['String'];
  responseBody: Scalars['String'];
};

/** A non-200 status code was returned from the configured API URL. */
export type CustomerCardInstanceStatusCodeErrorDetail = {
  __typename?: 'CustomerCardInstanceStatusCodeErrorDetail';
  message: Scalars['String'];
  responseBody: Scalars['String'];
  statusCode: Scalars['Int'];
};

/** The card failed to load within the timeout. */
export type CustomerCardInstanceTimeoutErrorDetail = {
  __typename?: 'CustomerCardInstanceTimeoutErrorDetail';
  message: Scalars['String'];
  timeoutSeconds: Scalars['Int'];
};

/** An unknown error occurred. If this error is persistent, please contact our support. */
export type CustomerCardInstanceUnknownErrorDetail = {
  __typename?: 'CustomerCardInstanceUnknownErrorDetail';
  message: Scalars['String'];
};

export type CustomerChange = {
  __typename?: 'CustomerChange';
  changeType: ChangeType;
  customer: Customer;
};

export type CustomerChangesFilter = {
  assignedToUser?: InputMaybe<Array<Scalars['ID']>>;
};

export type CustomerConnection = {
  __typename?: 'CustomerConnection';
  edges: Array<CustomerEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type CustomerEdge = {
  __typename?: 'CustomerEdge';
  cursor: Scalars['String'];
  node: Customer;
};

export type CustomerEmailActor = {
  __typename?: 'CustomerEmailActor';
  customer: Customer;
  customerId: Scalars['ID'];
};

export type CustomerGroup = {
  __typename?: 'CustomerGroup';
  color: Scalars['String'];
  createdAt: DateTime;
  createdBy: InternalActor;
  id: Scalars['ID'];
  key: Scalars['String'];
  name: Scalars['String'];
  updatedAt: DateTime;
  updatedBy: InternalActor;
};

export type CustomerGroupConnection = {
  __typename?: 'CustomerGroupConnection';
  edges: Array<CustomerGroupEdge>;
  pageInfo: PageInfo;
};

export type CustomerGroupEdge = {
  __typename?: 'CustomerGroupEdge';
  cursor: Scalars['String'];
  node: CustomerGroup;
};

export type CustomerGroupIdentifier = {
  customerGroupId?: InputMaybe<Scalars['ID']>;
  customerGroupKey?: InputMaybe<Scalars['String']>;
};

export type CustomerGroupMembership = {
  __typename?: 'CustomerGroupMembership';
  createdAt: DateTime;
  createdBy: InternalActor;
  customerGroup: CustomerGroup;
  customerId: Scalars['ID'];
  updatedAt: DateTime;
  updatedBy: InternalActor;
};

export type CustomerGroupMembershipConnection = {
  __typename?: 'CustomerGroupMembershipConnection';
  edges: Array<CustomerGroupMembershipEdge>;
  pageInfo: PageInfo;
};

export type CustomerGroupMembershipEdge = {
  __typename?: 'CustomerGroupMembershipEdge';
  cursor: Scalars['String'];
  node: CustomerGroupMembership;
};

export type CustomerIssuesFilter = {
  statuses?: InputMaybe<Array<IssueStatus>>;
};

/**
 * The customer attributes available for search, each of them mapped to a search expression.
 * Exactly one of them must be provided in a single search condition.
 */
export type CustomerSearchCondition = {
  /** Search expression on the customer's email address. */
  email?: InputMaybe<StringSearchExpression>;
  /** Search expression on the customer's external id. */
  externalId?: InputMaybe<StringSearchExpression>;
  /** Search expression on the customer's full name. */
  fullName?: InputMaybe<StringSearchExpression>;
  /** Search expression on the customer's short name. */
  shortName?: InputMaybe<StringSearchExpression>;
  /**
   * Search expression on specific timeline entries' text (email, chat) sent or received by the customer.
   * Common English stop-words will be removed from the text to search.
   */
  timelineEntryText?: InputMaybe<StringSearchExpression>;
};

export type CustomerSearchConnection = {
  __typename?: 'CustomerSearchConnection';
  edges: Array<CustomerSearchEdge>;
  pageInfo: PageInfo;
};

export type CustomerSearchEdge = {
  __typename?: 'CustomerSearchEdge';
  cursor: Scalars['String'];
  node: Customer;
};

/** The core customer life cycle. */
export enum CustomerStatus {
  /** The customer is currently either waiting for help or being helped, depending on if they're assigned to a user or not. */
  Active = 'ACTIVE',
  /** The default status of a customer when they don't have any open issues. Any activity on their timeline will move them into `ACTIVE`. */
  Idle = 'IDLE',
  /** Indicates that a user is waiting for a customer to get back. Any activity on their timeline will move them into `ACTIVE`. */
  Snoozed = 'SNOOZED'
}

export type CustomerStatusTransitionedEntry = {
  __typename?: 'CustomerStatusTransitionedEntry';
  nextStatus: Maybe<CustomerStatus>;
  previousStatus: Maybe<CustomerStatus>;
};

export type CustomersFilter = {
  assignedToUser?: InputMaybe<Array<Scalars['ID']>>;
  /**
   * Filters customers to those with at least one of the given customer group IDs.
   * Customers with no groups will not be included.
   * Can be combined with other group filters.
   */
  customerGroupIds?: InputMaybe<Array<Scalars['ID']>>;
  /**
   * Filters customers to those with at least one of the given customer group keys.
   * Customers with no groups will not be included.
   * Can be combined with other group filters.
   */
  customerGroupKeys?: InputMaybe<Array<Scalars['String']>>;
  isAssigned?: InputMaybe<Scalars['Boolean']>;
  /**
   * When true, filters customers to those with at least one open issue. If false, only customers
   * who have not been marked as spam will be included.
   */
  isMarkedAsSpam?: InputMaybe<Scalars['Boolean']>;
  /**
   * Filters customers to those with at least one issue of the given issue priority values.
   * Customers with no issues will not be included.
   * Can be combined with other issue filters.
   */
  issuePriorityValues?: InputMaybe<Array<Scalars['Int']>>;
  /**
   * Filters customers to those with at least one issue of the given issue statuses (OPEN or RESOLVED).
   * Customers with no issues will not be included.
   * Can be combined with other issue filters.
   */
  issueStatuses?: InputMaybe<Array<IssueStatus>>;
  /**
   * Filters customers to those with at least one issue of the given issue type IDs.
   * Customers with no issues will not be included.
   * Can be combined with other issue filters.
   */
  issueTypeIds?: InputMaybe<Array<Scalars['ID']>>;
  lastCommunicationChannels?: InputMaybe<Array<CommunicationChannelInput>>;
  statuses?: InputMaybe<Array<CustomerStatus>>;
};

/**
 * A query to search for customers. Search queries are combinations of search conditions, as defined
 * below. At least one search condition must be provided.
 */
export type CustomersSearchQuery = {
  /** An array of search conditions that will be combined using a 'logical OR' to search for customers. */
  or?: InputMaybe<Array<CustomerSearchCondition>>;
};

export type CustomersSort = {
  direction: SortDirection;
  field: CustomersSortField;
};

export enum CustomersSortField {
  FullName = 'FULL_NAME',
  LastIdleAt = 'LAST_IDLE_AT',
  /**
   * Sort based on the minimum value amongst all the customer's open issues' priorities.
   *
   * When sorting ascending, most urgent issues will be first. Otherwise, last.
   */
  OpenIssuesPrioritiesMinValue = 'OPEN_ISSUES_PRIORITIES_MIN_VALUE',
  StatusChangedAt = 'STATUS_CHANGED_AT',
  TimelineInfoCustomerWaitingForReplySince = 'TIMELINE_INFO_CUSTOMER_WAITING_FOR_REPLY_SINCE'
}

export type DateTime = {
  __typename?: 'DateTime';
  iso8601: Scalars['String'];
  unixTimestamp: Scalars['String'];
};

export type DeleteApiKeyInput = {
  apiKeyId: Scalars['ID'];
};

export type DeleteApiKeyOutput = {
  __typename?: 'DeleteApiKeyOutput';
  apiKey: Maybe<ApiKey>;
  error: Maybe<MutationError>;
};

export type DeleteCustomerCardConfigInput = {
  /** The customer card config ID to delete. */
  customerCardConfigId: Scalars['ID'];
};

export type DeleteCustomerCardConfigOutput = {
  __typename?: 'DeleteCustomerCardConfigOutput';
  error: Maybe<MutationError>;
};

export type DeleteCustomerGroupInput = {
  customerGroupId: Scalars['ID'];
};

export type DeleteCustomerGroupOutput = {
  __typename?: 'DeleteCustomerGroupOutput';
  error: Maybe<MutationError>;
};

export type DeleteCustomerInput = {
  customerId: Scalars['ID'];
};

export type DeleteCustomerOutput = {
  __typename?: 'DeleteCustomerOutput';
  error: Maybe<MutationError>;
};

export type DeleteIssueInput = {
  issueId: Scalars['ID'];
};

export type DeleteIssueLinkInput = {
  issueLinkId: Scalars['ID'];
};

export type DeleteIssueLinkOutput = {
  __typename?: 'DeleteIssueLinkOutput';
  error: Maybe<MutationError>;
  issueLink: Maybe<IssueLink>;
};

export type DeleteIssueOutput = {
  __typename?: 'DeleteIssueOutput';
  error: Maybe<MutationError>;
  issue: Maybe<Issue>;
};

export type DeleteLabelsInput = {
  labelIds: Array<Scalars['ID']>;
};

export type DeleteLabelsOutput = {
  __typename?: 'DeleteLabelsOutput';
  error: Maybe<MutationError>;
};

export type DeleteMachineUserInput = {
  machineUserId: Scalars['ID'];
};

export type DeleteMachineUserOutput = {
  __typename?: 'DeleteMachineUserOutput';
  error: Maybe<MutationError>;
  machineUser: Maybe<MachineUser>;
};

export type DeleteMyLinearIntegrationOutput = {
  __typename?: 'DeleteMyLinearIntegrationOutput';
  error: Maybe<MutationError>;
};

export type DeleteMySlackIntegrationOutput = {
  __typename?: 'DeleteMySlackIntegrationOutput';
  error: Maybe<MutationError>;
};

export type DeleteNoteInput = {
  noteId: Scalars['ID'];
};

export type DeleteNoteOutput = {
  __typename?: 'DeleteNoteOutput';
  error: Maybe<MutationError>;
  note: Maybe<Note>;
};

export type DeleteSnippetInput = {
  snippetId: Scalars['ID'];
};

export type DeleteSnippetOutput = {
  __typename?: 'DeleteSnippetOutput';
  error: Maybe<MutationError>;
  snippet: Maybe<Snippet>;
};

export type DeleteThreadLinkInput = {
  threadLinkId: Scalars['ID'];
};

export type DeleteThreadLinkOutput = {
  __typename?: 'DeleteThreadLinkOutput';
  error: Maybe<MutationError>;
};

export type DeleteUserInput = {
  userId: Scalars['ID'];
};

export type DeleteUserOutput = {
  __typename?: 'DeleteUserOutput';
  error: Maybe<MutationError>;
};

export type DeleteWebhookTargetInput = {
  webhookTargetId: Scalars['ID'];
};

export type DeleteWebhookTargetOutput = {
  __typename?: 'DeleteWebhookTargetOutput';
  error: Maybe<MutationError>;
};

export type DeleteWorkspaceAppInput = {
  workspaceAppId: Scalars['ID'];
};

export type DeleteWorkspaceAppOutput = {
  __typename?: 'DeleteWorkspaceAppOutput';
  error: Maybe<MutationError>;
  workspaceApp: Maybe<WorkspaceApp>;
};

export type DeleteWorkspaceAppPublicKeyInput = {
  workspaceAppPublicKeyId: Scalars['ID'];
};

export type DeleteWorkspaceAppPublicKeyOutput = {
  __typename?: 'DeleteWorkspaceAppPublicKeyOutput';
  error: Maybe<MutationError>;
  workspaceAppPublicKey: Maybe<WorkspaceAppPublicKey>;
};

export type DeleteWorkspaceDiscordIntegrationInput = {
  integrationId: Scalars['ID'];
};

export type DeleteWorkspaceDiscordIntegrationOutput = {
  __typename?: 'DeleteWorkspaceDiscordIntegrationOutput';
  error: Maybe<MutationError>;
  integration: Maybe<WorkspaceDiscordIntegration>;
};

export type DeleteWorkspaceEmailDomainSettingsOutput = {
  __typename?: 'DeleteWorkspaceEmailDomainSettingsOutput';
  error: Maybe<MutationError>;
};

export type DeleteWorkspaceInviteInput = {
  inviteId: Scalars['ID'];
};

export type DeleteWorkspaceInviteOutput = {
  __typename?: 'DeleteWorkspaceInviteOutput';
  error: Maybe<MutationError>;
  invite: Maybe<WorkspaceInvite>;
};

export type DeleteWorkspaceSlackIntegrationInput = {
  integrationId: Scalars['ID'];
};

export type DeleteWorkspaceSlackIntegrationOutput = {
  __typename?: 'DeleteWorkspaceSlackIntegrationOutput';
  error: Maybe<MutationError>;
  integration: Maybe<WorkspaceSlackIntegration>;
};

export type DeletedCustomerActor = {
  __typename?: 'DeletedCustomerActor';
  customerId: Scalars['ID'];
};

export type DeletedCustomerEmailActor = {
  __typename?: 'DeletedCustomerEmailActor';
  customerId: Scalars['ID'];
};

export type DnsRecord = {
  __typename?: 'DnsRecord';
  isVerified: Scalars['Boolean'];
  lastCheckedAt: Maybe<DateTime>;
  name: Scalars['String'];
  type: Scalars['String'];
  value: Scalars['String'];
  verifiedAt: Maybe<DateTime>;
};

export type Email = {
  __typename?: 'Email';
  additionalRecipients: Array<EmailParticipant>;
  attachments: Array<Attachment>;
  createdAt: DateTime;
  createdBy: Actor;
  customer: Customer;
  from: EmailParticipant;
  hiddenRecipients: Array<EmailParticipant>;
  id: Scalars['ID'];
  inReplyToEmailId: Maybe<Scalars['ID']>;
  markdownContent: Maybe<Scalars['String']>;
  subject: Maybe<Scalars['String']>;
  textContent: Maybe<Scalars['String']>;
  to: EmailParticipant;
  updatedAt: DateTime;
  updatedBy: Actor;
};

export type EmailActor = CustomerEmailActor | DeletedCustomerEmailActor | SupportEmailAddressEmailActor | UserEmailActor;

/** An object modelling an email address and if it's been verified. */
export type EmailAddress = {
  __typename?: 'EmailAddress';
  /** The email address. */
  email: Scalars['String'];
  /** If the email address ownership has been verified (e.g. via sending an email with a code). If the email is not verified, Plain may not email this address. */
  isVerified: Scalars['Boolean'];
  /** When the email became verified in Plain. */
  verifiedAt: Maybe<DateTime>;
};

export type EmailAddressInput = {
  email: Scalars['String'];
  isVerified: Scalars['Boolean'];
};

export enum EmailAuthenticity {
  Fail = 'FAIL',
  Pass = 'PASS',
  Unknown = 'UNKNOWN'
}

export type EmailEntry = {
  __typename?: 'EmailEntry';
  additionalRecipients: Array<EmailParticipant>;
  attachments: Array<Attachment>;
  authenticity: EmailAuthenticity;
  emailId: Scalars['ID'];
  from: EmailParticipant;
  /** The full email's markdown content, including all replies. */
  fullMarkdownContent: Maybe<Scalars['String']>;
  /** The full email's text content, including all replies. */
  fullTextContent: Maybe<Scalars['String']>;
  /** Boolean indicating whether there is more markdown content available that can be resolved via the `fullMarkdownContent` field. */
  hasMoreMarkdownContent: Scalars['Boolean'];
  /** Boolean indicating whether there is more text content available that can be resolved via the `fullTextContent` field. */
  hasMoreTextContent: Scalars['Boolean'];
  hiddenRecipients: Array<EmailParticipant>;
  /** Whether this email entry is the start of a new thread in Plain. Can be used to show the full email content. */
  isStartOfThread: Scalars['Boolean'];
  /** The most recent email's markdown content. */
  markdownContent: Maybe<Scalars['String']>;
  /** When the email was received by Plain. */
  receivedAt: Maybe<DateTime>;
  /** When the email was sent. Initially set to null while the email is being processed. */
  sentAt: Maybe<DateTime>;
  subject: Maybe<Scalars['String']>;
  /** The most recent email's text content. */
  textContent: Maybe<Scalars['String']>;
  to: EmailParticipant;
};

export type EmailParticipant = {
  __typename?: 'EmailParticipant';
  email: Scalars['String'];
  emailActor: Maybe<EmailActor>;
  name: Maybe<Scalars['String']>;
};

export type EmailParticipantInput = {
  email: Scalars['String'];
  name?: InputMaybe<Scalars['String']>;
};

export type EmailPreviewUrl = {
  __typename?: 'EmailPreviewUrl';
  expiresAt: DateTime;
  previewUrl: Scalars['String'];
};

export type EmailSignature = {
  __typename?: 'EmailSignature';
  createdAt: DateTime;
  createdBy: InternalActor;
  markdown: Maybe<Scalars['String']>;
  text: Scalars['String'];
  updatedAt: DateTime;
  updatedBy: InternalActor;
};

/** A union of all possible entries that can appear in a timeline. */
export type Entry = ChatEntry | CustomEntry | CustomerAssignmentTransitionedEntry | CustomerStatusTransitionedEntry | EmailEntry | IssueDeletedEntry | IssueIssueTypeChangedEntry | IssuePriorityChangedEntry | IssueStatusTransitionedEntry | LinearIssueLinkStateTransitionedEntry | LinearIssueThreadLinkStateTransitionedEntry | NoteEntry;

export type FileSize = {
  __typename?: 'FileSize';
  bytes: Scalars['Int'];
  kiloBytes: Scalars['Float'];
  megaBytes: Scalars['Float'];
};

export type IntInput = {
  value: Scalars['Int'];
};

export type InternalActor = MachineUserActor | SystemActor | UserActor;

export type InviteUserToWorkspaceInput = {
  email: Scalars['String'];
  roleIds: Array<Scalars['ID']>;
};

export type InviteUserToWorkspaceOutput = {
  __typename?: 'InviteUserToWorkspaceOutput';
  error: Maybe<MutationError>;
  invite: Maybe<WorkspaceInvite>;
};

export type Issue = {
  __typename?: 'Issue';
  createdAt: DateTime;
  createdBy: Actor;
  customer: Customer;
  deletedAt: Maybe<DateTime>;
  deletedBy: Maybe<Actor>;
  id: Scalars['ID'];
  isDeleted: Scalars['Boolean'];
  issueKey: Scalars['String'];
  issueType: IssueType;
  links: IssueLinkConnection;
  /** The priority of the issue. May be different to the default priority of the issue type. */
  priority: IssuePriority;
  status: IssueStatus;
  updatedAt: DateTime;
  updatedBy: Actor;
};


export type IssueLinksArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type IssueChange = {
  __typename?: 'IssueChange';
  changeType: ChangeType;
  issue: Issue;
};

export type IssueConnection = {
  __typename?: 'IssueConnection';
  edges: Array<IssueEdge>;
  pageInfo: PageInfo;
};

export type IssueDeletedEntry = {
  __typename?: 'IssueDeletedEntry';
  issueId: Scalars['ID'];
  issueKey: Scalars['String'];
  issueTypeIcon: Maybe<Scalars['String']>;
  issueTypeId: Scalars['ID'];
  issueTypePublicName: Scalars['String'];
  priority: IssuePriority;
  status: IssueStatus;
};

export type IssueEdge = {
  __typename?: 'IssueEdge';
  cursor: Scalars['String'];
  node: Issue;
};

export type IssueIssueTypeChangedEntry = {
  __typename?: 'IssueIssueTypeChangedEntry';
  issueId: Scalars['ID'];
  issueKey: Scalars['String'];
  nextIssueTypeIcon: Maybe<Scalars['String']>;
  nextIssueTypeId: Scalars['ID'];
  nextIssueTypePublicName: Scalars['String'];
  previousIssueTypeIcon: Maybe<Scalars['String']>;
  previousIssueTypeId: Scalars['ID'];
  previousIssueTypePublicName: Scalars['String'];
  priority: IssuePriority;
  status: IssueStatus;
};

export type IssueLink = {
  createdAt: DateTime;
  createdBy: InternalActor;
  id: Scalars['ID'];
  issue: Issue;
  updatedAt: DateTime;
  updatedBy: InternalActor;
};

export type IssueLinkConnection = {
  __typename?: 'IssueLinkConnection';
  edges: Array<IssueLinkEdge>;
  pageInfo: PageInfo;
};

export type IssueLinkEdge = {
  __typename?: 'IssueLinkEdge';
  cursor: Scalars['String'];
  node: IssueLink;
};

/** The priority of an issue. */
export type IssuePriority = {
  __typename?: 'IssuePriority';
  /** The display name of the priority. */
  label: Scalars['String'];
  /**
   * The value of the priority. Lower values are higher priority.
   *
   * Valid values are 0, 1, 2 and 3. 0 is the highest priority.
   */
  value: Scalars['Int'];
};

/** Added to the timeline when an issue's priority changes. */
export type IssuePriorityChangedEntry = {
  __typename?: 'IssuePriorityChangedEntry';
  /** The ID of the issue that changed priority. */
  issueId: Scalars['ID'];
  /** The key of the issue that changed priority. */
  issueKey: Scalars['String'];
  /** The icon of the issue type of the issue that changed priority. */
  issueTypeIcon: Maybe<Scalars['String']>;
  /** The ID of the issue type of the issue that changed priority. */
  issueTypeId: Scalars['ID'];
  /** The public name of the issue type of the issue that changed priority. */
  issueTypePublicName: Scalars['String'];
  /** The current issue priority. */
  nextPriority: IssuePriority;
  /** The previous issue priority. */
  previousPriority: IssuePriority;
  /** The current issue status. */
  status: IssueStatus;
};

export enum IssueStatus {
  Open = 'OPEN',
  Resolved = 'RESOLVED'
}

export type IssueStatusTransitionedEntry = {
  __typename?: 'IssueStatusTransitionedEntry';
  issueId: Scalars['ID'];
  issueKey: Scalars['String'];
  issueTypeIcon: Maybe<Scalars['String']>;
  issueTypeId: Scalars['ID'];
  issueTypePublicName: Scalars['String'];
  nextStatus: IssueStatus;
  previousStatus: Maybe<IssueStatus>;
  priority: IssuePriority;
};

export type IssueType = {
  __typename?: 'IssueType';
  archivedAt: Maybe<DateTime>;
  archivedBy: Maybe<InternalActor>;
  createdAt: DateTime;
  createdBy: InternalActor;
  /** The default priority for issues of this type. */
  defaultIssuePriority: IssuePriority;
  /** The icon for this issue type. */
  icon: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  isArchived: Scalars['Boolean'];
  publicName: Scalars['String'];
  updatedAt: DateTime;
  updatedBy: InternalActor;
};

export type IssueTypeConnection = {
  __typename?: 'IssueTypeConnection';
  edges: Array<IssueTypeEdge>;
  pageInfo: PageInfo;
};

export type IssueTypeEdge = {
  __typename?: 'IssueTypeEdge';
  cursor: Scalars['String'];
  node: IssueType;
};

export type IssueTypeFilter = {
  isArchived?: InputMaybe<Scalars['Boolean']>;
};

export type IssuesFilter = {
  customerId?: InputMaybe<Scalars['ID']>;
  issueTypeIds?: InputMaybe<Array<Scalars['ID']>>;
  /** Filters issues to those with the given issue priority values. */
  priorityValues?: InputMaybe<Array<Scalars['Int']>>;
  statuses?: InputMaybe<Array<IssueStatus>>;
};

export type IssuesSort = {
  direction: SortDirection;
  field: IssuesSortField;
};

export enum IssuesSortField {
  /** Sort by the issue's priority value. */
  PriorityValue = 'PRIORITY_VALUE'
}

export type Label = {
  __typename?: 'Label';
  createdAt: DateTime;
  createdBy: InternalActor;
  id: Scalars['ID'];
  labelType: LabelType;
  updatedAt: DateTime;
  updatedBy: InternalActor;
};

export type LabelType = {
  __typename?: 'LabelType';
  archivedAt: Maybe<DateTime>;
  archivedBy: Maybe<InternalActor>;
  createdAt: DateTime;
  createdBy: InternalActor;
  icon: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  isArchived: Scalars['Boolean'];
  name: Scalars['String'];
  updatedAt: DateTime;
  updatedBy: InternalActor;
};

export type LabelTypeConnection = {
  __typename?: 'LabelTypeConnection';
  edges: Array<LabelTypeEdge>;
  pageInfo: PageInfo;
};

export type LabelTypeEdge = {
  __typename?: 'LabelTypeEdge';
  cursor: Scalars['String'];
  node: LabelType;
};

export type LabelTypeFilter = {
  isArchived?: InputMaybe<Scalars['Boolean']>;
};

export type LinearIntegrationToken = {
  __typename?: 'LinearIntegrationToken';
  token: Scalars['String'];
};

export type LinearIssueIssueLink = IssueLink & {
  __typename?: 'LinearIssueIssueLink';
  createdAt: DateTime;
  createdBy: InternalActor;
  id: Scalars['ID'];
  issue: Issue;
  linearIssueId: Scalars['ID'];
  linearIssueUrl: Scalars['String'];
  updatedAt: DateTime;
  updatedBy: InternalActor;
};

export type LinearIssueIssueLinkInput = {
  linearIssueId: Scalars['ID'];
  linearIssueUrl: Scalars['String'];
};

export type LinearIssueLinkStateTransitionedEntry = {
  __typename?: 'LinearIssueLinkStateTransitionedEntry';
  issueId: Scalars['ID'];
  issueKey: Scalars['String'];
  issueTypeIcon: Maybe<Scalars['String']>;
  issueTypeId: Scalars['ID'];
  issueTypePublicName: Scalars['String'];
  linearIssueId: Scalars['ID'];
  nextLinearStateId: Scalars['ID'];
  previousLinearStateId: Scalars['ID'];
};

export type LinearIssueThreadLink = ThreadLink & {
  __typename?: 'LinearIssueThreadLink';
  createdAt: DateTime;
  createdBy: InternalActor;
  id: Scalars['ID'];
  linearIssueId: Scalars['ID'];
  linearIssueUrl: Scalars['String'];
  threadId: Scalars['ID'];
  updatedAt: DateTime;
  updatedBy: InternalActor;
};

export type LinearIssueThreadLinkInput = {
  linearIssueId: Scalars['ID'];
  linearIssueUrl: Scalars['String'];
};

export type LinearIssueThreadLinkStateTransitionedEntry = {
  __typename?: 'LinearIssueThreadLinkStateTransitionedEntry';
  linearIssueId: Scalars['ID'];
  nextLinearStateId: Scalars['ID'];
  previousLinearStateId: Scalars['ID'];
  threadId: Scalars['ID'];
};

export type MachineUser = {
  __typename?: 'MachineUser';
  apiKey: Maybe<ApiKey>;
  apiKeys: ApiKeyConnection;
  createdAt: DateTime;
  createdBy: InternalActor;
  deletedAt: Maybe<DateTime>;
  deletedBy: Maybe<Actor>;
  description: Maybe<Scalars['String']>;
  fullName: Scalars['String'];
  id: Scalars['ID'];
  isDeleted: Scalars['Boolean'];
  publicName: Scalars['String'];
  updatedAt: DateTime;
  updatedBy: InternalActor;
};


export type MachineUserApiKeyArgs = {
  apiKeyId: Scalars['ID'];
};


export type MachineUserApiKeysArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type MachineUserActor = {
  __typename?: 'MachineUserActor';
  machineUser: MachineUser;
  machineUserId: Scalars['ID'];
};

export type MachineUserConnection = {
  __typename?: 'MachineUserConnection';
  edges: Array<MachineUserEdge>;
  pageInfo: PageInfo;
};

export type MachineUserEdge = {
  __typename?: 'MachineUserEdge';
  cursor: Scalars['String'];
  node: MachineUser;
};

export type MarkCustomerAsSpamInput = {
  customerId: Scalars['ID'];
};

export type MarkCustomerAsSpamOutput = {
  __typename?: 'MarkCustomerAsSpamOutput';
  customer: Maybe<Customer>;
  error: Maybe<MutationError>;
};

export type MarkThreadAsDoneInput = {
  threadId: Scalars['ID'];
};

export type MarkThreadAsDoneOutput = {
  __typename?: 'MarkThreadAsDoneOutput';
  error: Maybe<MutationError>;
  thread: Maybe<Thread>;
};

export type MarkThreadAsTodoInput = {
  threadId: Scalars['ID'];
};

export type MarkThreadAsTodoOutput = {
  __typename?: 'MarkThreadAsTodoOutput';
  error: Maybe<MutationError>;
  thread: Maybe<Thread>;
};

export type MarkTimelineAsReadInput = {
  customerId: Scalars['ID'];
  lastTimelineEntryId: Scalars['ID'];
};

export type MarkTimelineAsReadOutput = {
  __typename?: 'MarkTimelineAsReadOutput';
  error: Maybe<MutationError>;
};

export enum MessageSource {
  Api = 'API',
  Chat = 'CHAT',
  Email = 'EMAIL'
}

export type MonthlyUsage = {
  __typename?: 'MonthlyUsage';
  activeUniqueCustomerCount: Scalars['Int'];
};

export type Mutation = {
  __typename?: 'Mutation';
  acceptWorkspaceInvite: AcceptWorkspaceInviteOutput;
  /** Add a customer to a customer group. */
  addCustomerToCustomerGroups: AddCustomerToCustomerGroupsOutput;
  addLabels: AddLabelsOutput;
  addWorkspaceAlternateSupportEmailAddress: AddWorkspaceAlternateSupportEmailAddressOutput;
  archiveIssueType: ArchiveIssueTypeOutput;
  archiveLabelType: ArchiveLabelTypeOutput;
  assignCustomerToUser: AssignCustomerToUserOutput;
  assignRolesToUser: AssignRolesToUserOutput;
  assignThread: AssignThreadOutput;
  /** Changes a customer's status to the provided status. */
  changeCustomerStatus: ChangeCustomerStatusOutput;
  /**
   * Changes a customer's status to the provided status asynchronously.
   *
   * Note: This mutation fires events that will eventually cause the customers status to update if applicable. See changeCustomerStatus for a sync version of this mutation.
   * @deprecated Endpoint is being phased out and deleted in the future. Please use changeCustomerStatus instead.
   */
  changeCustomerStatusAsync: ChangeCustomerStatusAsyncOutput;
  changeIssueIssueType: ChangeIssueIssueTypeOutput;
  changeIssuePriority: ChangeIssuePriorityOutput;
  changeThreadPriority: ChangeThreadPriorityOutput;
  changeUserStatus: ChangeUserStatusOutput;
  createApiKey: CreateApiKeyOutput;
  createAttachmentDownloadUrl: CreateAttachmentDownloadUrlOutput;
  createAttachmentUploadUrl: CreateAttachmentUploadUrlOutput;
  /** Creates a customer card config. A maximum of 25 card configs can be created. */
  createCustomerCardConfig: CreateCustomerCardConfigOutput;
  /** Create a new customer group. */
  createCustomerGroup: CreateCustomerGroupOutput;
  createEmailPreviewUrl: CreateEmailPreviewUrlOutput;
  createIssue: CreateIssueOutput;
  createIssueLink: CreateIssueLinkOutput;
  createIssueType: CreateIssueTypeOutput;
  createLabelType: CreateLabelTypeOutput;
  createMachineUser: CreateMachineUserOutput;
  createMyLinearIntegration: CreateMyLinearIntegrationOutput;
  createMySlackIntegration: CreateMySlackIntegrationOutput;
  createNote: CreateNoteOutput;
  createSnippet: CreateSnippetOutput;
  createThread: CreateThreadOutput;
  createThreadLink: CreateThreadLinkOutput;
  createUserAccount: CreateUserAccountOutput;
  /** Creates a webhook target. */
  createWebhookTarget: CreateWebhookTargetOutput;
  createWorkspace: CreateWorkspaceOutput;
  createWorkspaceApp: CreateWorkspaceAppOutput;
  createWorkspaceAppPublicKey: CreateWorkspaceAppPublicKeyOutput;
  createWorkspaceDiscordIntegration: CreateWorkspaceDiscordIntegrationOutput;
  createWorkspaceEmailDomainSettings: CreateWorkspaceEmailDomainSettingsOutput;
  createWorkspaceSlackIntegration: CreateWorkspaceSlackIntegrationOutput;
  deleteApiKey: DeleteApiKeyOutput;
  /** Deletes a customer and all of their data stored on Plain. This action cannot be reversed. */
  deleteCustomer: DeleteCustomerOutput;
  /** Deletes a customer card config. */
  deleteCustomerCardConfig: DeleteCustomerCardConfigOutput;
  /** Delete a customer group by ID. */
  deleteCustomerGroup: DeleteCustomerGroupOutput;
  deleteIssue: DeleteIssueOutput;
  deleteIssueLink: DeleteIssueLinkOutput;
  deleteLabels: DeleteLabelsOutput;
  deleteMachineUser: DeleteMachineUserOutput;
  deleteMyLinearIntegration: DeleteMyLinearIntegrationOutput;
  deleteMySlackIntegration: DeleteMySlackIntegrationOutput;
  deleteNote: DeleteNoteOutput;
  deleteSnippet: DeleteSnippetOutput;
  deleteThreadLink: DeleteThreadLinkOutput;
  deleteUser: DeleteUserOutput;
  /** Deletes a webhook target. */
  deleteWebhookTarget: DeleteWebhookTargetOutput;
  deleteWorkspaceApp: DeleteWorkspaceAppOutput;
  deleteWorkspaceAppPublicKey: DeleteWorkspaceAppPublicKeyOutput;
  deleteWorkspaceDiscordIntegration: DeleteWorkspaceDiscordIntegrationOutput;
  deleteWorkspaceEmailDomainSettings: DeleteWorkspaceEmailDomainSettingsOutput;
  deleteWorkspaceInvite: DeleteWorkspaceInviteOutput;
  deleteWorkspaceSlackIntegration: DeleteWorkspaceSlackIntegrationOutput;
  inviteUserToWorkspace: InviteUserToWorkspaceOutput;
  /** Marks a customer as spam. */
  markCustomerAsSpam: MarkCustomerAsSpamOutput;
  markThreadAsDone: MarkThreadAsDoneOutput;
  markThreadAsTodo: MarkThreadAsTodoOutput;
  markTimelineAsRead: MarkTimelineAsReadOutput;
  /**
   * Reloads a customer card for a customer.
   *
   * Will discard whatever is in the cache and reload it from the configured API URL.
   */
  reloadCustomerCardInstance: ReloadCustomerCardInstanceOutput;
  /** Remove a customer from a customer group. */
  removeCustomerFromCustomerGroups: RemoveCustomerFromCustomerGroupsOutput;
  removeWorkspaceAlternateSupportEmailAddress: RemoveWorkspaceAlternateSupportEmailAddressOutput;
  reopenIssue: ReopenIssueOutput;
  /**
   * Reorders customer card configs.
   *
   * The input can be a partial input and in that case not all configs will be reordered.
   * For example this allows two configs to be swapped with each other.
   *
   * Note: Duplicate orders are allowed by the API.
   */
  reorderCustomerCardConfigs: ReorderCustomerCardConfigsOutput;
  replyToEmail: ReplyToEmailOutput;
  resolveIssue: ResolveIssueOutput;
  sendBulkEmail: SendBulkEmailOutput;
  sendChat: SendChatOutput;
  sendNewEmail: SendNewEmailOutput;
  snoozeThread: SnoozeThreadOutput;
  unarchiveIssueType: UnarchiveIssueTypeOutput;
  unarchiveLabelType: UnarchiveLabelTypeOutput;
  unassignAllCustomers: UnassignAllCustomersOutput;
  unassignThread: UnassignThreadOutput;
  /** Removes the spam mark from a customer. */
  unmarkCustomerAsSpam: UnmarkCustomerAsSpamOutput;
  /** Partially updates a customer card config. */
  updateCustomerCardConfig: UpdateCustomerCardConfigOutput;
  /** Update a customer group. */
  updateCustomerGroup: UpdateCustomerGroupOutput;
  updateIssueType: UpdateIssueTypeOutput;
  updateLabelType: UpdateLabelTypeOutput;
  updateMachineUser: UpdateMachineUserOutput;
  /** Updates a setting. */
  updateSetting: UpdateSettingOutput;
  updateSnippet: UpdateSnippetOutput;
  /** Updates a webhook target. */
  updateWebhookTarget: UpdateWebhookTargetOutput;
  updateWorkspace: UpdateWorkspaceOutput;
  updateWorkspaceChatSettings: UpdateWorkspaceChatSettingsOutput;
  updateWorkspaceEmailSettings: UpdateWorkspaceEmailSettingsOutput;
  upsertCustomTimelineEntry: UpsertCustomTimelineEntryOutput;
  upsertCustomer: UpsertCustomerOutput;
  upsertMyEmailSignature: UpsertMyEmailSignatureOutput;
  verifyWorkspaceEmailDnsSettings: VerifyWorkspaceEmailDnsSettingsOutput;
  verifyWorkspaceEmailForwardingSettings: VerifyWorkspaceEmailForwardingSettingsOutput;
};


export type MutationAcceptWorkspaceInviteArgs = {
  input: AcceptWorkspaceInviteInput;
};


export type MutationAddCustomerToCustomerGroupsArgs = {
  input: AddCustomerToCustomerGroupsInput;
};


export type MutationAddLabelsArgs = {
  input: AddLabelsInput;
};


export type MutationAddWorkspaceAlternateSupportEmailAddressArgs = {
  input: AddWorkspaceAlternateSupportEmailAddressInput;
};


export type MutationArchiveIssueTypeArgs = {
  input: ArchiveIssueTypeInput;
};


export type MutationArchiveLabelTypeArgs = {
  input: ArchiveLabelTypeInput;
};


export type MutationAssignCustomerToUserArgs = {
  input: AssignCustomerToUserInput;
};


export type MutationAssignRolesToUserArgs = {
  input: AssignRolesToUserInput;
};


export type MutationAssignThreadArgs = {
  input: AssignThreadInput;
};


export type MutationChangeCustomerStatusArgs = {
  input: ChangeCustomerStatusInput;
};


export type MutationChangeCustomerStatusAsyncArgs = {
  input: ChangeCustomerStatusAsyncInput;
};


export type MutationChangeIssueIssueTypeArgs = {
  input: ChangeIssueIssueTypeInput;
};


export type MutationChangeIssuePriorityArgs = {
  input: ChangeIssuePriorityInput;
};


export type MutationChangeThreadPriorityArgs = {
  input: ChangeThreadPriorityInput;
};


export type MutationChangeUserStatusArgs = {
  input: ChangeUserStatusInput;
};


export type MutationCreateApiKeyArgs = {
  input: CreateApiKeyInput;
};


export type MutationCreateAttachmentDownloadUrlArgs = {
  input: CreateAttachmentDownloadUrlInput;
};


export type MutationCreateAttachmentUploadUrlArgs = {
  input: CreateAttachmentUploadUrlInput;
};


export type MutationCreateCustomerCardConfigArgs = {
  input: CreateCustomerCardConfigInput;
};


export type MutationCreateCustomerGroupArgs = {
  input: CreateCustomerGroupInput;
};


export type MutationCreateEmailPreviewUrlArgs = {
  input: CreateEmailPreviewUrlInput;
};


export type MutationCreateIssueArgs = {
  input: CreateIssueInput;
};


export type MutationCreateIssueLinkArgs = {
  input: CreateIssueLinkInput;
};


export type MutationCreateIssueTypeArgs = {
  input: CreateIssueTypeInput;
};


export type MutationCreateLabelTypeArgs = {
  input: CreateLabelTypeInput;
};


export type MutationCreateMachineUserArgs = {
  input: CreateMachineUserInput;
};


export type MutationCreateMyLinearIntegrationArgs = {
  input: CreateMyLinearIntegrationInput;
};


export type MutationCreateMySlackIntegrationArgs = {
  input: CreateMySlackIntegrationInput;
};


export type MutationCreateNoteArgs = {
  input: CreateNoteInput;
};


export type MutationCreateSnippetArgs = {
  input: CreateSnippetInput;
};


export type MutationCreateThreadArgs = {
  input: CreateThreadInput;
};


export type MutationCreateThreadLinkArgs = {
  input: CreateThreadLinkInput;
};


export type MutationCreateUserAccountArgs = {
  input: CreateUserAccountInput;
};


export type MutationCreateWebhookTargetArgs = {
  input: CreateWebhookTargetInput;
};


export type MutationCreateWorkspaceArgs = {
  input: CreateWorkspaceInput;
};


export type MutationCreateWorkspaceAppArgs = {
  input: CreateWorkspaceAppInput;
};


export type MutationCreateWorkspaceAppPublicKeyArgs = {
  input: CreateWorkspaceAppPublicKeyInput;
};


export type MutationCreateWorkspaceDiscordIntegrationArgs = {
  input: CreateWorkspaceDiscordIntegrationInput;
};


export type MutationCreateWorkspaceEmailDomainSettingsArgs = {
  input: CreateWorkspaceEmailDomainSettingsInput;
};


export type MutationCreateWorkspaceSlackIntegrationArgs = {
  input: CreateWorkspaceSlackIntegrationInput;
};


export type MutationDeleteApiKeyArgs = {
  input: DeleteApiKeyInput;
};


export type MutationDeleteCustomerArgs = {
  input: DeleteCustomerInput;
};


export type MutationDeleteCustomerCardConfigArgs = {
  input: DeleteCustomerCardConfigInput;
};


export type MutationDeleteCustomerGroupArgs = {
  input: DeleteCustomerGroupInput;
};


export type MutationDeleteIssueArgs = {
  input: DeleteIssueInput;
};


export type MutationDeleteIssueLinkArgs = {
  input: DeleteIssueLinkInput;
};


export type MutationDeleteLabelsArgs = {
  input: DeleteLabelsInput;
};


export type MutationDeleteMachineUserArgs = {
  input: DeleteMachineUserInput;
};


export type MutationDeleteNoteArgs = {
  input: DeleteNoteInput;
};


export type MutationDeleteSnippetArgs = {
  input: DeleteSnippetInput;
};


export type MutationDeleteThreadLinkArgs = {
  input: DeleteThreadLinkInput;
};


export type MutationDeleteUserArgs = {
  input: DeleteUserInput;
};


export type MutationDeleteWebhookTargetArgs = {
  input: DeleteWebhookTargetInput;
};


export type MutationDeleteWorkspaceAppArgs = {
  input: DeleteWorkspaceAppInput;
};


export type MutationDeleteWorkspaceAppPublicKeyArgs = {
  input: DeleteWorkspaceAppPublicKeyInput;
};


export type MutationDeleteWorkspaceDiscordIntegrationArgs = {
  input: DeleteWorkspaceDiscordIntegrationInput;
};


export type MutationDeleteWorkspaceInviteArgs = {
  input: DeleteWorkspaceInviteInput;
};


export type MutationDeleteWorkspaceSlackIntegrationArgs = {
  input: DeleteWorkspaceSlackIntegrationInput;
};


export type MutationInviteUserToWorkspaceArgs = {
  input: InviteUserToWorkspaceInput;
};


export type MutationMarkCustomerAsSpamArgs = {
  input: MarkCustomerAsSpamInput;
};


export type MutationMarkThreadAsDoneArgs = {
  input: MarkThreadAsDoneInput;
};


export type MutationMarkThreadAsTodoArgs = {
  input: MarkThreadAsTodoInput;
};


export type MutationMarkTimelineAsReadArgs = {
  input: MarkTimelineAsReadInput;
};


export type MutationReloadCustomerCardInstanceArgs = {
  input: ReloadCustomerCardInstanceInput;
};


export type MutationRemoveCustomerFromCustomerGroupsArgs = {
  input: RemoveCustomerFromCustomerGroupsInput;
};


export type MutationRemoveWorkspaceAlternateSupportEmailAddressArgs = {
  input: RemoveWorkspaceAlternateSupportEmailAddressInput;
};


export type MutationReopenIssueArgs = {
  input: ReopenIssueInput;
};


export type MutationReorderCustomerCardConfigsArgs = {
  input: ReorderCustomerCardConfigsInput;
};


export type MutationReplyToEmailArgs = {
  input: ReplyToEmailInput;
};


export type MutationResolveIssueArgs = {
  input: ResolveIssueInput;
};


export type MutationSendBulkEmailArgs = {
  input: SendBulkEmailInput;
};


export type MutationSendChatArgs = {
  input: SendChatInput;
};


export type MutationSendNewEmailArgs = {
  input: SendNewEmailInput;
};


export type MutationSnoozeThreadArgs = {
  input: SnoozeThreadInput;
};


export type MutationUnarchiveIssueTypeArgs = {
  input: UnarchiveIssueTypeInput;
};


export type MutationUnarchiveLabelTypeArgs = {
  input: UnarchiveLabelTypeInput;
};


export type MutationUnassignAllCustomersArgs = {
  input: UnassignAllCustomersInput;
};


export type MutationUnassignThreadArgs = {
  input: UnassignThreadInput;
};


export type MutationUnmarkCustomerAsSpamArgs = {
  input: UnmarkCustomerAsSpamInput;
};


export type MutationUpdateCustomerCardConfigArgs = {
  input: UpdateCustomerCardConfigInput;
};


export type MutationUpdateCustomerGroupArgs = {
  input: UpdateCustomerGroupInput;
};


export type MutationUpdateIssueTypeArgs = {
  input: UpdateIssueTypeInput;
};


export type MutationUpdateLabelTypeArgs = {
  input: UpdateLabelTypeInput;
};


export type MutationUpdateMachineUserArgs = {
  input: UpdateMachineUserInput;
};


export type MutationUpdateSettingArgs = {
  input: UpdateSettingInput;
};


export type MutationUpdateSnippetArgs = {
  input: UpdateSnippetInput;
};


export type MutationUpdateWebhookTargetArgs = {
  input: UpdateWebhookTargetInput;
};


export type MutationUpdateWorkspaceArgs = {
  input: UpdateWorkspaceInput;
};


export type MutationUpdateWorkspaceChatSettingsArgs = {
  input: UpdateWorkspaceChatSettingsInput;
};


export type MutationUpdateWorkspaceEmailSettingsArgs = {
  input: UpdateWorkspaceEmailSettingsInput;
};


export type MutationUpsertCustomTimelineEntryArgs = {
  input: UpsertCustomTimelineEntryInput;
};


export type MutationUpsertCustomerArgs = {
  input: UpsertCustomerInput;
};


export type MutationUpsertMyEmailSignatureArgs = {
  input: UpsertMyEmailSignatureInput;
};


export type MutationVerifyWorkspaceEmailForwardingSettingsArgs = {
  input: VerifyWorkspaceEmailForwardingSettingsInput;
};

/** A type indicating an error has occurred while making a mutation. */
export type MutationError = {
  __typename?: 'MutationError';
  /** A fixed error code that can be used to handle this error, see https://www.plain.com/docs/graphql-api/error-codes for a description of each code. */
  code: Scalars['String'];
  /** The array of fields that are impacted by this error. */
  fields: Array<MutationFieldError>;
  /** An English technical description of the error. This error is usually meant to be read by a developer and not an end user. */
  message: Scalars['String'];
  /** The type of error. Can be used to display a user friendly error message. */
  type: MutationErrorType;
};

/** An enum for why the mutation failed overall. */
export enum MutationErrorType {
  /** The user is not authorized to do this mutation. See `message` for details on which permissions are missing. */
  Forbidden = 'FORBIDDEN',
  /** An unknown internal server error occurred. Retry the mutation and if it persists, please email help@plain.com */
  Internal = 'INTERNAL',
  /** Input validation failed, see the `fields` for details on why the input was invalid. */
  Validation = 'VALIDATION'
}

/** A type indicating an error has occurred with a specific field in the input. */
export type MutationFieldError = {
  __typename?: 'MutationFieldError';
  /** The name of the field for which the error happened. */
  field: Scalars['String'];
  /** An English technical description of the error. This error is usually meant to be read by a developer and not an end user. */
  message: Scalars['String'];
  /** The type of the error. Can be used to display a user friendly error message. */
  type: MutationFieldErrorType;
};

/** An enum specific to each field, explaining why validation failed. */
export enum MutationFieldErrorType {
  /** The input field referenced an entity that wasn't found. */
  NotFound = 'NOT_FOUND',
  /** The field is required to be provided. String inputs may be trimmed and checked for emptiness. */
  Required = 'REQUIRED',
  /** The field was provided, but didn't pass the requirements of the field. See `message` for details on why. */
  Validation = 'VALIDATION'
}

export type Note = {
  __typename?: 'Note';
  createdAt: DateTime;
  createdBy: Actor;
  customer: Customer;
  deletedAt: Maybe<DateTime>;
  deletedBy: Maybe<Actor>;
  id: Scalars['ID'];
  isDeleted: Scalars['Boolean'];
  markdown: Maybe<Scalars['String']>;
  text: Scalars['String'];
  updatedAt: DateTime;
  updatedBy: Actor;
};

export type NoteEntry = {
  __typename?: 'NoteEntry';
  markdown: Maybe<Scalars['String']>;
  noteId: Scalars['ID'];
  text: Scalars['String'];
};

export type OptionalStringInput = {
  value?: InputMaybe<Scalars['String']>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor: Maybe<Scalars['String']>;
};

export type Permissions = {
  __typename?: 'Permissions';
  permissions: Array<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  customer: Maybe<Customer>;
  customerByEmail: Maybe<Customer>;
  customerByExternalId: Maybe<Customer>;
  customerCardConfig: Maybe<CustomerCardConfig>;
  customerCardConfigs: Array<CustomerCardConfig>;
  /**
   * Loads the customer's card instances.
   *
   * This query will return any cards that are loaded and within their expiry time.
   * For cards that are past their expiry or are errored it will request a load of the cards and
   * return a `CustomerCardInstanceLoading`.
   *
   * A maximum of 25 card instances will be returned, due to only allowing 25 customer card configs.
   */
  customerCardInstances: Array<CustomerCardInstance>;
  /** Get a customer group by ID. */
  customerGroup: Maybe<CustomerGroup>;
  /** Get a paginated list of customer groups. */
  customerGroups: CustomerGroupConnection;
  customers: CustomerConnection;
  issue: Maybe<Issue>;
  /**
   * Returns an issue type by ID or null if the issue type is not found.
   *
   * Archived issue types are also returned, see isArchived, archivedAt and archivedBy fields on the IssueType type.
   */
  issueType: Maybe<IssueType>;
  issueTypes: IssueTypeConnection;
  issues: IssueConnection;
  labelType: Maybe<LabelType>;
  labelTypes: LabelTypeConnection;
  machineUser: Maybe<MachineUser>;
  machineUsers: MachineUserConnection;
  /**
   * **Deprecated**: This field is deprecated and the result will always return 0. This query will be removed in a future release.
   *
   * Gets usage for a given month for the current workspace.
   * @deprecated This query is deprecated and will be removed in a future release
   */
  monthlyUsage: MonthlyUsage;
  myEmailSignature: Maybe<EmailSignature>;
  myLinearInstallationInfo: UserLinearInstallationInfo;
  myLinearIntegration: Maybe<UserLinearIntegration>;
  myLinearIntegrationToken: Maybe<LinearIntegrationToken>;
  myMachineUser: Maybe<MachineUser>;
  myPermissions: Permissions;
  mySlackInstallationInfo: UserSlackInstallationInfo;
  mySlackIntegration: Maybe<UserSlackIntegration>;
  myUser: Maybe<User>;
  myUserAccount: Maybe<UserAccount>;
  myWorkspace: Maybe<Workspace>;
  myWorkspaceInvites: WorkspaceInviteConnection;
  myWorkspaces: WorkspaceConnection;
  permissions: Permissions;
  roles: RoleConnection;
  /**
   * Search for customers based on the provided query. Returned customers are sorted by how recently
   * they changed status (most recent first).
   */
  searchCustomers: CustomerSearchConnection;
  searchThreads: ThreadSearchResultConnection;
  /** Gets a single setting based on the code and the scope. */
  setting: Maybe<Setting>;
  snippet: Maybe<Snippet>;
  snippets: SnippetConnection;
  /** List all the events types you can subscribe to. */
  subscriptionEventTypes: Array<SubscriptionEventType>;
  /** Get a thread by ID. */
  thread: Maybe<Thread>;
  threads: ThreadConnection;
  timelineEntries: TimelineEntryConnection;
  timelineEntry: Maybe<TimelineEntry>;
  user: Maybe<User>;
  /**
   * Returns a user by email or null if the user is not found.
   *
   * Deleted users are also returned, see isDeleted, deletedAt and deletedBy fields on the User type.
   */
  userByEmail: Maybe<User>;
  users: UserConnection;
  /** Gets a webhook target. */
  webhookTarget: Maybe<WebhookTarget>;
  /** List webhook targets. */
  webhookTargets: WebhookTargetConnection;
  workspace: Maybe<Workspace>;
  workspaceApp: Maybe<WorkspaceApp>;
  workspaceAppPublicKeys: WorkspaceAppPublicKeyConnection;
  workspaceApps: WorkspaceAppConnection;
  workspaceChatSettings: WorkspaceChatSettings;
  workspaceDiscordIntegration: Maybe<WorkspaceDiscordIntegration>;
  workspaceDiscordIntegrations: WorkspaceDiscordIntegrationConnection;
  workspaceEmailSettings: WorkspaceEmailSettings;
  workspaceInvites: WorkspaceInviteConnection;
  workspaceSlackInstallationInfo: WorkspaceSlackInstallationInfo;
  workspaceSlackIntegration: Maybe<WorkspaceSlackIntegration>;
  workspaceSlackIntegrations: WorkspaceSlackIntegrationConnection;
};


export type QueryCustomerArgs = {
  customerId: Scalars['ID'];
};


export type QueryCustomerByEmailArgs = {
  email: Scalars['String'];
};


export type QueryCustomerByExternalIdArgs = {
  externalId: Scalars['ID'];
};


export type QueryCustomerCardConfigArgs = {
  customerCardConfigId: Scalars['ID'];
};


export type QueryCustomerCardInstancesArgs = {
  customerId: Scalars['ID'];
};


export type QueryCustomerGroupArgs = {
  customerGroupId: Scalars['ID'];
};


export type QueryCustomerGroupsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type QueryCustomersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filters?: InputMaybe<CustomersFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<CustomersSort>;
};


export type QueryIssueArgs = {
  issueId: Scalars['ID'];
};


export type QueryIssueTypeArgs = {
  issueTypeId: Scalars['ID'];
};


export type QueryIssueTypesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filters?: InputMaybe<IssueTypeFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type QueryIssuesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filters?: InputMaybe<IssuesFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<IssuesSort>;
};


export type QueryLabelTypeArgs = {
  labelTypeId: Scalars['ID'];
};


export type QueryLabelTypesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filters?: InputMaybe<LabelTypeFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type QueryMachineUserArgs = {
  machineUserId: Scalars['ID'];
};


export type QueryMachineUsersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type QueryMonthlyUsageArgs = {
  month: Scalars['String'];
};


export type QueryMyLinearInstallationInfoArgs = {
  redirectUrl: Scalars['String'];
};


export type QueryMySlackInstallationInfoArgs = {
  redirectUrl: Scalars['String'];
};


export type QueryMyWorkspaceInvitesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type QueryMyWorkspacesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type QueryRolesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type QuerySearchCustomersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  searchQuery: CustomersSearchQuery;
};


export type QuerySearchThreadsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  searchQuery: ThreadsSearchQuery;
};


export type QuerySettingArgs = {
  code: Scalars['String'];
  scope: SettingScopeInput;
};


export type QuerySnippetArgs = {
  snippetId: Scalars['ID'];
};


export type QuerySnippetsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type QueryThreadArgs = {
  threadId: Scalars['ID'];
};


export type QueryThreadsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filters?: InputMaybe<ThreadsFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  sortBy?: InputMaybe<ThreadsSort>;
};


export type QueryTimelineEntriesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  customerId: Scalars['ID'];
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type QueryTimelineEntryArgs = {
  customerId: Scalars['ID'];
  timelineEntryId: Scalars['ID'];
};


export type QueryUserArgs = {
  userId: Scalars['ID'];
};


export type QueryUserByEmailArgs = {
  email: Scalars['String'];
};


export type QueryUsersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filters?: InputMaybe<UsersFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type QueryWebhookTargetArgs = {
  webhookTargetId: Scalars['ID'];
};


export type QueryWebhookTargetsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type QueryWorkspaceArgs = {
  workspaceId: Scalars['ID'];
};


export type QueryWorkspaceAppArgs = {
  workspaceAppId: Scalars['ID'];
};


export type QueryWorkspaceAppPublicKeysArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  workspaceAppId: Scalars['ID'];
};


export type QueryWorkspaceAppsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type QueryWorkspaceDiscordIntegrationArgs = {
  integrationId: Scalars['ID'];
};


export type QueryWorkspaceDiscordIntegrationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type QueryWorkspaceInvitesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type QueryWorkspaceSlackInstallationInfoArgs = {
  redirectUrl: Scalars['String'];
};


export type QueryWorkspaceSlackIntegrationArgs = {
  integrationId: Scalars['ID'];
};


export type QueryWorkspaceSlackIntegrationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type ReloadCustomerCardInstanceInput = {
  customerCardConfigId: Scalars['ID'];
  customerId: Scalars['ID'];
};

export type ReloadCustomerCardInstanceOutput = {
  __typename?: 'ReloadCustomerCardInstanceOutput';
  /** The reloaded customer card instance. Currently this will always be a `CustomerCardInstanceLoading` type. */
  customerCardInstance: Maybe<CustomerCardInstance>;
  error: Maybe<MutationError>;
};

export type RemoveCustomerFromCustomerGroupsInput = {
  customerGroupIdentifiers: Array<CustomerGroupIdentifier>;
  customerId: Scalars['ID'];
};

export type RemoveCustomerFromCustomerGroupsOutput = {
  __typename?: 'RemoveCustomerFromCustomerGroupsOutput';
  error: Maybe<MutationError>;
};

export type RemoveWorkspaceAlternateSupportEmailAddressInput = {
  alternateSupportEmailAddress: Scalars['String'];
};

export type RemoveWorkspaceAlternateSupportEmailAddressOutput = {
  __typename?: 'RemoveWorkspaceAlternateSupportEmailAddressOutput';
  error: Maybe<MutationError>;
  workspaceEmailDomainSettings: Maybe<WorkspaceEmailDomainSettings>;
};

export type ReopenIssueInput = {
  issueId: Scalars['ID'];
};

export type ReopenIssueOutput = {
  __typename?: 'ReopenIssueOutput';
  error: Maybe<MutationError>;
  issue: Maybe<Issue>;
};

export type ReorderCustomerCardConfigsInput = {
  /** An array of ordering updates. */
  customerCardConfigOrders: Array<CustomerCardConfigOrderInput>;
};

export type ReorderCustomerCardConfigsOutput = {
  __typename?: 'ReorderCustomerCardConfigsOutput';
  /** The reordered customer card configs. */
  customerCardConfigs: Maybe<Array<CustomerCardConfig>>;
  error: Maybe<MutationError>;
};

export type ReplyToEmailInput = {
  additionalRecipients?: InputMaybe<Array<EmailParticipantInput>>;
  attachmentIds?: InputMaybe<Array<Scalars['ID']>>;
  customerId: Scalars['ID'];
  /**
   * Optional field for alternate from email address. If provided, it will be used as the from address in the email.
   * It must match one of the workspace support email addresses (default or alternate).
   */
  fromAlternateSupportEmail?: InputMaybe<EmailParticipantInput>;
  hiddenRecipients?: InputMaybe<Array<EmailParticipantInput>>;
  inReplyToEmailId: Scalars['ID'];
  markdownContent?: InputMaybe<Scalars['String']>;
  textContent: Scalars['String'];
};

export type ReplyToEmailOutput = {
  __typename?: 'ReplyToEmailOutput';
  email: Maybe<Email>;
  error: Maybe<MutationError>;
};

export type ResolveIssueInput = {
  issueId: Scalars['ID'];
};

export type ResolveIssueOutput = {
  __typename?: 'ResolveIssueOutput';
  error: Maybe<MutationError>;
  issue: Maybe<Issue>;
};

export type Role = {
  __typename?: 'Role';
  description: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  isAssignableToCustomer: Scalars['Boolean'];
  isAssignableToThread: Scalars['Boolean'];
  name: Scalars['String'];
  permissions: Array<Scalars['String']>;
};

export type RoleConnection = {
  __typename?: 'RoleConnection';
  edges: Array<RoleEdge>;
  pageInfo: PageInfo;
};

export type RoleEdge = {
  __typename?: 'RoleEdge';
  cursor: Scalars['String'];
  node: Role;
};

export type SendBulkEmailInput = {
  markdownContent?: InputMaybe<Scalars['String']>;
  textContent: Scalars['String'];
  threadIds: Array<Scalars['ID']>;
};

export type SendBulkEmailOutput = {
  __typename?: 'SendBulkEmailOutput';
  error: Maybe<MutationError>;
};

export type SendChatInput = {
  attachmentIds?: InputMaybe<Array<Scalars['ID']>>;
  customerId: Scalars['ID'];
  text?: InputMaybe<Scalars['String']>;
};

export type SendChatOutput = {
  __typename?: 'SendChatOutput';
  chat: Maybe<Chat>;
  error: Maybe<MutationError>;
};

export type SendNewEmailInput = {
  additionalRecipients?: InputMaybe<Array<EmailParticipantInput>>;
  attachmentIds?: InputMaybe<Array<Scalars['ID']>>;
  customerId: Scalars['ID'];
  /**
   * Optional field for alternate from email address. If provided, it will be used as the from address in the email.
   * It must match one of the workspace support email addresses (default or alternate).
   */
  fromAlternateSupportEmail?: InputMaybe<EmailParticipantInput>;
  hiddenRecipients?: InputMaybe<Array<EmailParticipantInput>>;
  markdownContent?: InputMaybe<Scalars['String']>;
  subject: Scalars['String'];
  textContent: Scalars['String'];
};

export type SendNewEmailOutput = {
  __typename?: 'SendNewEmailOutput';
  email: Maybe<Email>;
  error: Maybe<MutationError>;
};

/** A union of different types of settings. */
export type Setting = BooleanSetting;

export type SettingScope = {
  __typename?: 'SettingScope';
  id: Maybe<Scalars['ID']>;
  scopeType: SettingScopeType;
};

/** An input to specify the scope for a setting. */
export type SettingScopeInput = {
  /** An optional ID input. Depends on the type of scope if this is required. */
  id?: InputMaybe<Scalars['ID']>;
  /** Determines the type of the scope. */
  scopeType: SettingScopeType;
};

/** An enum to describe the type of scope the setting is for. */
export enum SettingScopeType {
  /**
   * Scope for any user level settings
   * An `id` is not needed as it will implicitly be the authenticated user's id.
   */
  User = 'USER',
  /**
   * Scope for the authenticated user's email notification settings.
   * An `id` is not needed as it will implicitly be the authenticated user's id.
   */
  UserEmailNotifications = 'USER_EMAIL_NOTIFICATIONS',
  /**
   * Scope for the authenticated user's slack notification settings.
   * An `id` is not needed as it will implicitly be the authenticated user's id.
   */
  UserSlackNotifications = 'USER_SLACK_NOTIFICATIONS',
  /**
   * Scope for workspace level settings for the whole workspace.
   * An `id` is not needed as it will implicitly be the current workspace id.
   */
  Workspace = 'WORKSPACE',
  /**
   * Scope for discord notifications configured for the whole workspace.
   * An `id` is mandatory and should be a workspace discord integration id (`wsDiscordInt_123`)
   */
  WorkspaceDiscordNotifications = 'WORKSPACE_DISCORD_NOTIFICATIONS',
  /**
   * Scope for slack notifications configured for the whole workspace.
   * An `id` is mandatory and should be a workspace slack integration id (`wsSlackInt_123`)
   */
  WorkspaceSlackNotifications = 'WORKSPACE_SLACK_NOTIFICATIONS'
}

/**
 * An input "union" where exactly one field may be be provided as an input.
 * Current API only supports booleans but as the API expands more optional fields will be added.
 */
export type SettingValueInput = {
  /** If the setting is a boolean value then this field should be set. */
  boolean?: InputMaybe<Scalars['Boolean']>;
};

export type Snippet = {
  __typename?: 'Snippet';
  createdAt: DateTime;
  createdBy: InternalActor;
  deletedAt: Maybe<DateTime>;
  deletedBy: Maybe<InternalActor>;
  id: Scalars['ID'];
  isDeleted: Scalars['Boolean'];
  markdown: Maybe<Scalars['String']>;
  name: Scalars['String'];
  text: Scalars['String'];
  updatedAt: DateTime;
  updatedBy: InternalActor;
};

export type SnippetConnection = {
  __typename?: 'SnippetConnection';
  edges: Array<SnippetEdge>;
  pageInfo: PageInfo;
};

export type SnippetEdge = {
  __typename?: 'SnippetEdge';
  cursor: Scalars['String'];
  node: Snippet;
};

export type SnoozeThreadInput = {
  durationSeconds: Scalars['Int'];
  threadId: Scalars['ID'];
};

export type SnoozeThreadOutput = {
  __typename?: 'SnoozeThreadOutput';
  error: Maybe<MutationError>;
  thread: Maybe<Thread>;
};

export enum SortDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type StringInput = {
  value: Scalars['String'];
};

/**
 * The different ways in which a string is matched.
 * Exactly one of these must be provided in a single search expression.
 */
export type StringSearchExpression = {
  /** Case-insensitive match values containing the provided string. */
  caseInsensitiveContains?: InputMaybe<Scalars['String']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  customerCardInstanceChanges: CustomerCardInstanceChangesResult;
  customerChanges: CustomerChange;
  issueChanges: IssueChange;
  threadChanges: ThreadChange;
  threadTimelineChanges: TimelineEntryChange;
  timelineChanges: TimelineEntryChange;
  userChanges: UserChange;
};


export type SubscriptionCustomerCardInstanceChangesArgs = {
  customerId: Scalars['ID'];
};


export type SubscriptionCustomerChangesArgs = {
  filters?: InputMaybe<CustomerChangesFilter>;
};


export type SubscriptionThreadTimelineChangesArgs = {
  threadId: Scalars['ID'];
};


export type SubscriptionTimelineChangesArgs = {
  customerId: Scalars['ID'];
};

export type SubscriptionAcknowledgement = {
  __typename?: 'SubscriptionAcknowledgement';
  subscriptionId: Scalars['ID'];
};

export type SubscriptionEventType = {
  __typename?: 'SubscriptionEventType';
  description: Scalars['String'];
  eventType: Scalars['String'];
};

export type SupportEmailAddressEmailActor = {
  __typename?: 'SupportEmailAddressEmailActor';
  supportEmailAddress: Scalars['String'];
};

export type SystemActor = {
  __typename?: 'SystemActor';
  systemId: Scalars['ID'];
};

/** A thread represents a conversation with a customer, around a specific topic. */
export type Thread = {
  __typename?: 'Thread';
  /** The datetime when this thread was last assigned to someone or something. */
  assignedAt: Maybe<DateTime>;
  /** Who or what this thread is assigned to. */
  assignedTo: Maybe<InternalActor>;
  /** The datetime when this thread was created. */
  createdAt: DateTime;
  /** The actor who created this thread. */
  createdBy: Actor;
  /** The customer involved in this thread. */
  customer: Customer;
  /** The external ID of this thread. You can use this field to store your own unique identifier for this thread. */
  externalId: Maybe<Scalars['ID']>;
  /** First inbound message on the thread. */
  firstInboundMessageInfo: Maybe<ThreadMessageInfo>;
  /** First outbound message on the thread. */
  firstOutboundMessageInfo: Maybe<ThreadMessageInfo>;
  /** The unique identifier of the thread. */
  id: Scalars['ID'];
  /** The labels attached to this thread. */
  labels: Array<Label>;
  /** Last inbound message received. */
  lastInboundMessageInfo: Maybe<ThreadMessageInfo>;
  /** Last outbound message received. */
  lastOutboundMessageInfo: Maybe<ThreadMessageInfo>;
  /** The links attached to this thread. */
  links: ThreadLinkConnection;
  /** The preview text of this thread. */
  previewText: Maybe<Scalars['String']>;
  /** The priority of the thread. Valid values are 0, 1, 2, 3, from most to least urgent. */
  priority: Scalars['Int'];
  /** The status of this thread. */
  status: ThreadStatus;
  /** The datetime when the status of this thread was last changed. */
  statusChangedAt: DateTime;
  /** The actor who last changed the status of this thread. */
  statusChangedBy: Actor;
  /** Additional details about the current thread status. For instance, how long it will be snoozed for. */
  statusDetail: Maybe<ThreadStatusDetail>;
  /**
   * The support email addresses involved in this thread.
   * A support email address is either the default support email address or an alternate support email address.
   * A support email address is considered to be involved in a thread when any participant in the thread uses it as their email recipient.
   */
  supportEmailAddresses: Array<Scalars['String']>;
  /** All of the timeline entries in this thread. */
  timelineEntries: TimelineEntryConnection;
  /** The title of this thread, which allows to quickly identify what it is about. */
  title: Scalars['String'];
  /** The datetime when this thread was last updated. */
  updatedAt: DateTime;
  /** The actor who last updated this thread. */
  updatedBy: Actor;
};


/** A thread represents a conversation with a customer, around a specific topic. */
export type ThreadLinksArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/** A thread represents a conversation with a customer, around a specific topic. */
export type ThreadTimelineEntriesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type ThreadChange = {
  __typename?: 'ThreadChange';
  changeType: ChangeType;
  thread: Thread;
};

export type ThreadConnection = {
  __typename?: 'ThreadConnection';
  edges: Array<ThreadEdge>;
  pageInfo: PageInfo;
};

export type ThreadEdge = {
  __typename?: 'ThreadEdge';
  cursor: Scalars['String'];
  node: Thread;
};

export type ThreadLink = {
  createdAt: DateTime;
  createdBy: InternalActor;
  id: Scalars['ID'];
  threadId: Scalars['ID'];
  updatedAt: DateTime;
  updatedBy: InternalActor;
};

export type ThreadLinkConnection = {
  __typename?: 'ThreadLinkConnection';
  edges: Array<ThreadLinkEdge>;
  pageInfo: PageInfo;
};

export type ThreadLinkEdge = {
  __typename?: 'ThreadLinkEdge';
  cursor: Scalars['String'];
  node: ThreadLink;
};

export type ThreadMessageInfo = {
  __typename?: 'ThreadMessageInfo';
  /** The source through which the message came through. */
  messageSource: MessageSource;
  /** The datetime when the last message was received. */
  timestamp: DateTime;
};

export type ThreadSearchResult = {
  __typename?: 'ThreadSearchResult';
  thread: Thread;
};

export type ThreadSearchResultConnection = {
  __typename?: 'ThreadSearchResultConnection';
  edges: Array<ThreadSearchResultEdge>;
  pageInfo: PageInfo;
};

export type ThreadSearchResultEdge = {
  __typename?: 'ThreadSearchResultEdge';
  cursor: Scalars['String'];
  node: ThreadSearchResult;
};

export enum ThreadStatus {
  Done = 'DONE',
  Snoozed = 'SNOOZED',
  Todo = 'TODO'
}

export type ThreadStatusDetail = ThreadStatusDetailCreated | ThreadStatusDetailLinearUpdated | ThreadStatusDetailNewReply | ThreadStatusDetailSnoozed | ThreadStatusDetailUnsnoozed;

export type ThreadStatusDetailCreated = {
  __typename?: 'ThreadStatusDetailCreated';
  createdAt: DateTime;
};

export type ThreadStatusDetailLinearUpdated = ThreadStatusDetailThreadLinkUpdated & {
  __typename?: 'ThreadStatusDetailLinearUpdated';
  linearIssueId: Scalars['ID'];
  updatedAt: DateTime;
};

export type ThreadStatusDetailNewReply = {
  __typename?: 'ThreadStatusDetailNewReply';
  newReplyAt: DateTime;
};

export type ThreadStatusDetailSnoozed = {
  __typename?: 'ThreadStatusDetailSnoozed';
  snoozedAt: DateTime;
  snoozedUntil: DateTime;
};

export type ThreadStatusDetailThreadLinkUpdated = {
  updatedAt: DateTime;
};

export type ThreadStatusDetailUnsnoozed = {
  __typename?: 'ThreadStatusDetailUnsnoozed';
  snoozedAt: DateTime;
};

export type ThreadsFilter = {
  assignedToUser?: InputMaybe<Array<Scalars['ID']>>;
  customerGroupIdentifiers?: InputMaybe<Array<CustomerGroupIdentifier>>;
  customerIds?: InputMaybe<Array<Scalars['ID']>>;
  isAssigned?: InputMaybe<Scalars['Boolean']>;
  isMarkedAsSpam?: InputMaybe<Scalars['Boolean']>;
  labelTypeIds?: InputMaybe<Array<Scalars['ID']>>;
  priorities?: InputMaybe<Array<Scalars['Int']>>;
  statuses?: InputMaybe<Array<ThreadStatus>>;
  supportEmailAddresses?: InputMaybe<Array<Scalars['String']>>;
  threadIds?: InputMaybe<Array<Scalars['ID']>>;
};

/**
 * Query to search for threads. The search term provided is used to match against different parts of the thread:
 * - its title
 * - its messages
 * - the customer's name
 * - the customer's email
 */
export type ThreadsSearchQuery = {
  /** The term to search for. It must be at least 3 characters long. The search is case-insensitive. */
  term: Scalars['String'];
};

export type ThreadsSort = {
  direction: SortDirection;
  field: ThreadsSortField;
};

export enum ThreadsSortField {
  StatusChangedAt = 'STATUS_CHANGED_AT'
}

export type TimelineEntry = {
  __typename?: 'TimelineEntry';
  actor: Actor;
  customerId: Scalars['ID'];
  entry: Entry;
  id: Scalars['ID'];
  threadId: Maybe<Scalars['ID']>;
  timestamp: DateTime;
};

export type TimelineEntryChange = {
  __typename?: 'TimelineEntryChange';
  changeType: ChangeType;
  timelineEntry: TimelineEntry;
};

export type TimelineEntryConnection = {
  __typename?: 'TimelineEntryConnection';
  edges: Array<TimelineEntryEdge>;
  pageInfo: PageInfo;
};

export type TimelineEntryEdge = {
  __typename?: 'TimelineEntryEdge';
  cursor: Scalars['String'];
  node: TimelineEntry;
};

export type TimelineEntryPreview = {
  __typename?: 'TimelineEntryPreview';
  actor: Actor;
  previewText: Maybe<Scalars['String']>;
  timestamp: DateTime;
};

export type TimelineInfo = {
  __typename?: 'TimelineInfo';
  assignedUserUnreadCount: Scalars['Int'];
  createdAt: DateTime;
  createdBy: Actor;
  customerWaitingForReplySince: Maybe<DateTime>;
  lastCommunication: Maybe<TimelineInfoCommunication>;
  lastCommunicationDetail: Maybe<TimelineInfoLastCommunicationDetail>;
  lastTimelineEntryPreview: Maybe<TimelineEntryPreview>;
  updatedAt: DateTime;
  updatedBy: Actor;
};

export type TimelineInfoCommunication = {
  __typename?: 'TimelineInfoCommunication';
  actor: Actor;
  communicationChannel: CommunicationChannel;
  previewText: Maybe<Scalars['String']>;
  timestamp: DateTime;
};

export type TimelineInfoCustomEntryCommunicationDetail = {
  __typename?: 'TimelineInfoCustomEntryCommunicationDetail';
  title: Scalars['String'];
};

export type TimelineInfoEmailCommunicationDetail = {
  __typename?: 'TimelineInfoEmailCommunicationDetail';
  additionalRecipients: Array<EmailParticipant>;
  emailId: Scalars['ID'];
  from: EmailParticipant;
  subject: Maybe<Scalars['String']>;
  to: EmailParticipant;
};

export type TimelineInfoLastCommunicationDetail = TimelineInfoCustomEntryCommunicationDetail | TimelineInfoEmailCommunicationDetail;

export type UnarchiveIssueTypeInput = {
  issueTypeId: Scalars['ID'];
};

export type UnarchiveIssueTypeOutput = {
  __typename?: 'UnarchiveIssueTypeOutput';
  error: Maybe<MutationError>;
  issueType: Maybe<IssueType>;
};

export type UnarchiveLabelTypeInput = {
  labelTypeId: Scalars['ID'];
};

export type UnarchiveLabelTypeOutput = {
  __typename?: 'UnarchiveLabelTypeOutput';
  error: Maybe<MutationError>;
  labelType: Maybe<LabelType>;
};

export type UnassignAllCustomersInput = {
  userId: Scalars['ID'];
};

export type UnassignAllCustomersOutput = {
  __typename?: 'UnassignAllCustomersOutput';
  error: Maybe<MutationError>;
  unassignedCustomerCount: Maybe<Scalars['Int']>;
};

export type UnassignThreadInput = {
  threadId: Scalars['ID'];
};

export type UnassignThreadOutput = {
  __typename?: 'UnassignThreadOutput';
  error: Maybe<MutationError>;
  thread: Maybe<Thread>;
};

export type UnmarkCustomerAsSpamInput = {
  customerId: Scalars['ID'];
};

export type UnmarkCustomerAsSpamOutput = {
  __typename?: 'UnmarkCustomerAsSpamOutput';
  customer: Maybe<Customer>;
  error: Maybe<MutationError>;
};

/** For constraints and details on the fields see the `CustomerCardConfig` type. */
export type UpdateCustomerCardConfigInput = {
  /** If provided, will replace the existing API headers. Requires the `customerCardConfigApiDetails:edit` permission. */
  apiHeaders?: InputMaybe<Array<CustomerCardConfigApiHeaderInput>>;
  /** If provided, will update the API URL. Requires the `customerCardConfigApiDetails:edit` permission. */
  apiUrl?: InputMaybe<StringInput>;
  /** The customer card config to update. */
  customerCardConfigId: Scalars['ID'];
  /** If provided, will update the default time to live seconds. */
  defaultTimeToLiveSeconds?: InputMaybe<IntInput>;
  /** If provided, will update the enabled flag. */
  isEnabled?: InputMaybe<BooleanInput>;
  /** If provided, will update the key. Keys must be unique in a workspace. */
  key?: InputMaybe<StringInput>;
  /** If provided, will update the order. */
  order?: InputMaybe<IntInput>;
  /** If provided, will update the title. */
  title?: InputMaybe<StringInput>;
};

export type UpdateCustomerCardConfigOutput = {
  __typename?: 'UpdateCustomerCardConfigOutput';
  /** The updated customer card config. */
  customerCardConfig: Maybe<CustomerCardConfig>;
  error: Maybe<MutationError>;
};

export type UpdateCustomerGroupInput = {
  color?: InputMaybe<StringInput>;
  customerGroupId: Scalars['ID'];
  key?: InputMaybe<StringInput>;
  name?: InputMaybe<StringInput>;
};

export type UpdateCustomerGroupOutput = {
  __typename?: 'UpdateCustomerGroupOutput';
  customerGroup: Maybe<CustomerGroup>;
  error: Maybe<MutationError>;
};

export type UpdateIssueTypeInput = {
  /**
   * The priority value for issues created with this issue type.
   *
   * Valid values are 0, 1, 2 and 3.
   */
  defaultIssuePriorityValue?: InputMaybe<IntInput>;
  /**
   * The icon to use for this issue type. The maximum length is 50 characters.
   *
   * Only lowercase alphanumeric characters, '-' and '_' are allowed.
   */
  icon?: InputMaybe<StringInput>;
  issueTypeId: Scalars['ID'];
  publicName?: InputMaybe<StringInput>;
};

export type UpdateIssueTypeOutput = {
  __typename?: 'UpdateIssueTypeOutput';
  error: Maybe<MutationError>;
  issueType: Maybe<IssueType>;
};

export type UpdateLabelTypeInput = {
  icon?: InputMaybe<OptionalStringInput>;
  labelTypeId: Scalars['ID'];
  name?: InputMaybe<StringInput>;
};

export type UpdateLabelTypeOutput = {
  __typename?: 'UpdateLabelTypeOutput';
  error: Maybe<MutationError>;
  labelType: Maybe<LabelType>;
};

export type UpdateMachineUserInput = {
  description?: InputMaybe<StringInput>;
  fullName?: InputMaybe<StringInput>;
  machineUserId: Scalars['ID'];
  publicName?: InputMaybe<StringInput>;
};

export type UpdateMachineUserOutput = {
  __typename?: 'UpdateMachineUserOutput';
  error: Maybe<MutationError>;
  machineUser: Maybe<MachineUser>;
};

/** An input provided to the `updateSetting` mutation. */
export type UpdateSettingInput = {
  /** A code for the setting. */
  code: Scalars['String'];
  /** A valid scope for the setting code. */
  scope: SettingScopeInput;
  /** The setting value. */
  value: SettingValueInput;
};

/**
 * An output type provided by the `updateSetting` mutation.
 * Returns the updated setting or an error.
 */
export type UpdateSettingOutput = {
  __typename?: 'UpdateSettingOutput';
  error: Maybe<MutationError>;
  /** The updated setting. */
  setting: Maybe<Setting>;
};

export type UpdateSnippetInput = {
  markdown?: InputMaybe<StringInput>;
  name?: InputMaybe<StringInput>;
  snippetId: Scalars['ID'];
  text?: InputMaybe<StringInput>;
};

export type UpdateSnippetOutput = {
  __typename?: 'UpdateSnippetOutput';
  error: Maybe<MutationError>;
  snippet: Maybe<Snippet>;
};

export type UpdateWebhookTargetInput = {
  description?: InputMaybe<StringInput>;
  eventSubscriptions?: InputMaybe<Array<WebhookTargetEventSubscriptionInput>>;
  isEnabled?: InputMaybe<BooleanInput>;
  url?: InputMaybe<StringInput>;
  webhookTargetId: Scalars['ID'];
};

export type UpdateWebhookTargetOutput = {
  __typename?: 'UpdateWebhookTargetOutput';
  error: Maybe<MutationError>;
  webhookTarget: Maybe<WebhookTarget>;
};

export type UpdateWorkspaceChatSettingsInput = {
  isEnabled: Scalars['Boolean'];
};

export type UpdateWorkspaceChatSettingsOutput = {
  __typename?: 'UpdateWorkspaceChatSettingsOutput';
  error: Maybe<MutationError>;
  workspaceChatSettings: Maybe<WorkspaceChatSettings>;
};

export type UpdateWorkspaceEmailSettingsInput = {
  isEnabled: Scalars['Boolean'];
};

export type UpdateWorkspaceEmailSettingsOutput = {
  __typename?: 'UpdateWorkspaceEmailSettingsOutput';
  error: Maybe<MutationError>;
  workspaceEmailSettings: Maybe<WorkspaceEmailSettings>;
};

export type UpdateWorkspaceInput = {
  name?: InputMaybe<StringInput>;
  publicName?: InputMaybe<StringInput>;
};

export type UpdateWorkspaceOutput = {
  __typename?: 'UpdateWorkspaceOutput';
  error: Maybe<MutationError>;
  workspace: Maybe<Workspace>;
};

export type UploadFormData = {
  __typename?: 'UploadFormData';
  key: Scalars['String'];
  value: Scalars['String'];
};

export type UpsertCustomTimelineEntryInput = {
  attachmentIds?: InputMaybe<Array<Scalars['ID']>>;
  /**
   * When true, this will change the customer's status to "Active". This is useful if you are using custom timeline
   * entries for contact form submissions or other events which require some attention.
   *
   * Defaults to false.
   */
  changeCustomerStatusToActive?: InputMaybe<Scalars['Boolean']>;
  components: Array<ComponentInput>;
  customerId: Scalars['ID'];
  expiresAt?: InputMaybe<Scalars['String']>;
  externalId?: InputMaybe<Scalars['ID']>;
  /**
   * When true, this will send a notification for the customer when the custom timeline entry is created. It will only
   * send the notification if the user has enabled the matching notification setting.
   *
   * Defaults to false.
   */
  sendCustomTimelineEntryCreatedNotification?: InputMaybe<Scalars['Boolean']>;
  timestamp?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
  type?: InputMaybe<Scalars['String']>;
};

export type UpsertCustomTimelineEntryOutput = {
  __typename?: 'UpsertCustomTimelineEntryOutput';
  error: Maybe<MutationError>;
  result: Maybe<UpsertResult>;
  timelineEntry: Maybe<TimelineEntry>;
};

export type UpsertCustomerIdentifierInput = {
  customerId?: InputMaybe<Scalars['ID']>;
  emailAddress?: InputMaybe<Scalars['String']>;
  externalId?: InputMaybe<Scalars['ID']>;
};

export type UpsertCustomerInput = {
  identifier: UpsertCustomerIdentifierInput;
  onCreate: UpsertCustomerOnCreateInput;
  onUpdate: UpsertCustomerOnUpdateInput;
};

export type UpsertCustomerOnCreateInput = {
  customerGroupIdentifiers?: InputMaybe<Array<CustomerGroupIdentifier>>;
  email: EmailAddressInput;
  externalId?: InputMaybe<Scalars['ID']>;
  fullName: Scalars['String'];
  shortName?: InputMaybe<Scalars['String']>;
};

export type UpsertCustomerOnUpdateInput = {
  email?: InputMaybe<EmailAddressInput>;
  externalId?: InputMaybe<OptionalStringInput>;
  fullName?: InputMaybe<StringInput>;
  shortName?: InputMaybe<OptionalStringInput>;
};

export type UpsertCustomerOutput = {
  __typename?: 'UpsertCustomerOutput';
  customer: Maybe<Customer>;
  error: Maybe<MutationError>;
  result: Maybe<UpsertResult>;
};

export type UpsertMyEmailSignatureInput = {
  markdown?: InputMaybe<Scalars['String']>;
  text: Scalars['String'];
};

export type UpsertMyEmailSignatureOutput = {
  __typename?: 'UpsertMyEmailSignatureOutput';
  emailSignature: Maybe<EmailSignature>;
  error: Maybe<MutationError>;
  result: Maybe<UpsertResult>;
};

export enum UpsertResult {
  Created = 'CREATED',
  Noop = 'NOOP',
  Updated = 'UPDATED'
}

export type User = {
  __typename?: 'User';
  createdAt: DateTime;
  createdBy: InternalActor;
  deletedAt: Maybe<DateTime>;
  deletedBy: Maybe<Actor>;
  /** The email associated with this user. Email is unique per user. */
  email: Scalars['String'];
  /** The full name e.g. Grace Hopper. */
  fullName: Scalars['String'];
  id: Scalars['ID'];
  isDeleted: Scalars['Boolean'];
  /** A short name for use in UI e.g. Grace. */
  publicName: Scalars['String'];
  /** Retrieve roles for a specific workspace + user. */
  roles: Array<Role>;
  status: UserStatus;
  statusChangedAt: DateTime;
  updatedAt: DateTime;
  updatedBy: InternalActor;
};

export type UserAccount = {
  __typename?: 'UserAccount';
  /** The email associated with this user. Email is unique per user. */
  email: Scalars['String'];
  /** The full name e.g. Grace Hopper. */
  fullName: Scalars['String'];
  id: Scalars['ID'];
  /** A short name for use in UI e.g. Grace. */
  publicName: Scalars['String'];
};

export type UserActor = {
  __typename?: 'UserActor';
  user: User;
  userId: Scalars['ID'];
};

export type UserChange = {
  __typename?: 'UserChange';
  changeType: ChangeType;
  user: User;
};

export type UserConnection = {
  __typename?: 'UserConnection';
  edges: Array<UserEdge>;
  pageInfo: PageInfo;
};

export type UserEdge = {
  __typename?: 'UserEdge';
  cursor: Scalars['String'];
  node: User;
};

export type UserEmailActor = {
  __typename?: 'UserEmailActor';
  user: User;
  userId: Scalars['ID'];
};

export type UserLinearInstallationInfo = {
  __typename?: 'UserLinearInstallationInfo';
  installationUrl: Scalars['String'];
};

export type UserLinearIntegration = {
  __typename?: 'UserLinearIntegration';
  createdAt: DateTime;
  createdBy: InternalActor;
  integrationId: Scalars['ID'];
  linearOrganisationId: Scalars['ID'];
  linearOrganisationName: Scalars['String'];
  updatedAt: DateTime;
  updatedBy: InternalActor;
};

export type UserSlackInstallationInfo = {
  __typename?: 'UserSlackInstallationInfo';
  installationUrl: Scalars['String'];
};

export type UserSlackIntegration = {
  __typename?: 'UserSlackIntegration';
  createdAt: DateTime;
  createdBy: InternalActor;
  integrationId: Scalars['ID'];
  isReinstallRequired: Scalars['Boolean'];
  slackTeamName: Scalars['String'];
  updatedAt: DateTime;
  updatedBy: InternalActor;
};

export enum UserStatus {
  Break = 'BREAK',
  Offline = 'OFFLINE',
  Online = 'ONLINE'
}

export type UsersFilter = {
  isAssignableToCustomer?: InputMaybe<Scalars['Boolean']>;
  isAssignableToThread?: InputMaybe<Scalars['Boolean']>;
};

export type VerifyWorkspaceEmailDnsSettingsOutput = {
  __typename?: 'VerifyWorkspaceEmailDnsSettingsOutput';
  error: Maybe<MutationError>;
  workspaceEmailDomainSettings: Maybe<WorkspaceEmailDomainSettings>;
};

export type VerifyWorkspaceEmailForwardingSettingsInput = {
  isForwardingConfigured: Scalars['Boolean'];
};

export type VerifyWorkspaceEmailForwardingSettingsOutput = {
  __typename?: 'VerifyWorkspaceEmailForwardingSettingsOutput';
  error: Maybe<MutationError>;
  workspaceEmailDomainSettings: Maybe<WorkspaceEmailDomainSettings>;
};

export type WebhookTarget = {
  __typename?: 'WebhookTarget';
  createdAt: DateTime;
  createdBy: InternalActor;
  description: Scalars['String'];
  eventSubscriptions: Array<WebhookTargetEventSubscription>;
  id: Scalars['ID'];
  isEnabled: Scalars['Boolean'];
  updatedAt: DateTime;
  updatedBy: InternalActor;
  url: Scalars['String'];
};

export type WebhookTargetConnection = {
  __typename?: 'WebhookTargetConnection';
  edges: Array<WebhookTargetEdge>;
  pageInfo: PageInfo;
};

export type WebhookTargetEdge = {
  __typename?: 'WebhookTargetEdge';
  cursor: Scalars['String'];
  node: WebhookTarget;
};

export type WebhookTargetEventSubscription = {
  __typename?: 'WebhookTargetEventSubscription';
  eventType: Scalars['String'];
};

export type WebhookTargetEventSubscriptionInput = {
  eventType: Scalars['String'];
};

export type Workspace = {
  __typename?: 'Workspace';
  createdAt: DateTime;
  createdBy: InternalActor;
  id: Scalars['ID'];
  isDemoWorkspace: Scalars['Boolean'];
  name: Scalars['String'];
  publicName: Scalars['String'];
  updatedAt: DateTime;
  updatedBy: InternalActor;
  workspaceChatSettings: WorkspaceChatSettings;
  workspaceEmailSettings: WorkspaceEmailSettings;
};

export type WorkspaceApp = {
  __typename?: 'WorkspaceApp';
  appKey: Scalars['String'];
  createdAt: DateTime;
  createdBy: InternalActor;
  id: Scalars['ID'];
  name: Scalars['String'];
  publicName: Scalars['String'];
  updatedAt: DateTime;
  updatedBy: InternalActor;
};

export type WorkspaceAppConnection = {
  __typename?: 'WorkspaceAppConnection';
  edges: Array<WorkspaceAppEdge>;
  pageInfo: PageInfo;
};

export type WorkspaceAppEdge = {
  __typename?: 'WorkspaceAppEdge';
  cursor: Scalars['String'];
  node: WorkspaceApp;
};

export type WorkspaceAppPublicKey = {
  __typename?: 'WorkspaceAppPublicKey';
  createdAt: DateTime;
  createdBy: InternalActor;
  fingerprint: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  updatedAt: DateTime;
  updatedBy: InternalActor;
};

export type WorkspaceAppPublicKeyConnection = {
  __typename?: 'WorkspaceAppPublicKeyConnection';
  edges: Array<WorkspaceAppPublicKeyEdge>;
  pageInfo: PageInfo;
};

export type WorkspaceAppPublicKeyEdge = {
  __typename?: 'WorkspaceAppPublicKeyEdge';
  cursor: Scalars['String'];
  node: WorkspaceAppPublicKey;
};

export type WorkspaceChatSettings = {
  __typename?: 'WorkspaceChatSettings';
  isEnabled: Scalars['Boolean'];
};

export type WorkspaceConnection = {
  __typename?: 'WorkspaceConnection';
  edges: Array<WorkspaceEdge>;
  pageInfo: PageInfo;
};

export type WorkspaceDiscordIntegration = {
  __typename?: 'WorkspaceDiscordIntegration';
  createdAt: DateTime;
  createdBy: InternalActor;
  integrationId: Scalars['ID'];
  name: Scalars['String'];
  updatedAt: DateTime;
  updatedBy: InternalActor;
  webhookUrl: Scalars['String'];
};

export type WorkspaceDiscordIntegrationConnection = {
  __typename?: 'WorkspaceDiscordIntegrationConnection';
  edges: Array<WorkspaceDiscordIntegrationEdge>;
  pageInfo: PageInfo;
};

export type WorkspaceDiscordIntegrationEdge = {
  __typename?: 'WorkspaceDiscordIntegrationEdge';
  cursor: Scalars['String'];
  node: WorkspaceDiscordIntegration;
};

export type WorkspaceEdge = {
  __typename?: 'WorkspaceEdge';
  cursor: Scalars['String'];
  node: Workspace;
};

export type WorkspaceEmailDomainSettings = {
  __typename?: 'WorkspaceEmailDomainSettings';
  /**
   * The list of alternate email addresses that can be used to send emails to and from the workspace.
   * Limited to 5.
   *
   * e.g. [info@plain.com, help@plain.com].
   */
  alternateSupportEmailAddresses: Array<Scalars['String']>;
  dkimDnsRecord: DnsRecord;
  domainName: Scalars['String'];
  inboundForwardingEmail: Scalars['String'];
  isDomainConfigured: Scalars['Boolean'];
  isForwardingConfigured: Scalars['Boolean'];
  returnPathDnsRecord: DnsRecord;
  supportEmailAddress: Scalars['String'];
};

export type WorkspaceEmailSettings = {
  __typename?: 'WorkspaceEmailSettings';
  bccEmail: Maybe<Scalars['String']>;
  isEnabled: Scalars['Boolean'];
  workspaceEmailDomainSettings: Maybe<WorkspaceEmailDomainSettings>;
};

export type WorkspaceInvite = {
  __typename?: 'WorkspaceInvite';
  /** When the invite was created. */
  createdAt: DateTime;
  /** Who sent this invite. */
  createdBy: InternalActor;
  /** The email that is being invited. */
  email: Scalars['String'];
  id: Scalars['ID'];
  /** Whether the person has accepted the invite. */
  isAccepted: Scalars['Boolean'];
  /** The roles that the invite will assign on workspace joining. */
  roles: Array<Role>;
  /** When the invite was updated. */
  updatedAt: DateTime;
  /** Who updated this invite. */
  updatedBy: InternalActor;
  /** The workspace they are being invited to. */
  workspace: Workspace;
};

export type WorkspaceInviteConnection = {
  __typename?: 'WorkspaceInviteConnection';
  edges: Array<WorkspaceInviteEdge>;
  pageInfo: PageInfo;
};

export type WorkspaceInviteEdge = {
  __typename?: 'WorkspaceInviteEdge';
  cursor: Scalars['String'];
  node: WorkspaceInvite;
};

export type WorkspaceSlackInstallationInfo = {
  __typename?: 'WorkspaceSlackInstallationInfo';
  installationUrl: Scalars['String'];
};

export type WorkspaceSlackIntegration = {
  __typename?: 'WorkspaceSlackIntegration';
  createdAt: DateTime;
  createdBy: InternalActor;
  integrationId: Scalars['ID'];
  isReinstallRequired: Scalars['Boolean'];
  slackChannelName: Scalars['String'];
  slackTeamName: Scalars['String'];
  updatedAt: DateTime;
  updatedBy: InternalActor;
};

export type WorkspaceSlackIntegrationConnection = {
  __typename?: 'WorkspaceSlackIntegrationConnection';
  edges: Array<WorkspaceSlackIntegrationEdge>;
  pageInfo: PageInfo;
};

export type WorkspaceSlackIntegrationEdge = {
  __typename?: 'WorkspaceSlackIntegrationEdge';
  cursor: Scalars['String'];
  node: WorkspaceSlackIntegration;
};

type ActorParts_CustomerActor_Fragment = { __typename: 'CustomerActor', customerId: string };

type ActorParts_DeletedCustomerActor_Fragment = { __typename: 'DeletedCustomerActor', customerId: string };

type ActorParts_MachineUserActor_Fragment = { __typename: 'MachineUserActor', machineUserId: string };

type ActorParts_SystemActor_Fragment = { __typename: 'SystemActor', systemId: string };

type ActorParts_UserActor_Fragment = { __typename: 'UserActor', userId: string };

export type ActorPartsFragment = ActorParts_CustomerActor_Fragment | ActorParts_DeletedCustomerActor_Fragment | ActorParts_MachineUserActor_Fragment | ActorParts_SystemActor_Fragment | ActorParts_UserActor_Fragment;

export type AttachmentPartsFragment = { __typename: 'Attachment', id: string, fileName: string, fileExtension: string | null, fileSize: { __typename: 'FileSize', kiloBytes: number, megaBytes: number }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string } };

export type AttachmentUploadUrlPartsFragment = { __typename: 'AttachmentUploadUrl', uploadFormUrl: string, attachment: { __typename: 'Attachment', id: string, fileName: string, fileExtension: string | null, fileSize: { __typename: 'FileSize', kiloBytes: number, megaBytes: number }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string } }, uploadFormData: Array<{ __typename?: 'UploadFormData', key: string, value: string }>, expiresAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string } };

export type ChatPartsFragment = { __typename?: 'Chat', id: string, text: string | null, customerReadAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string } | null, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, attachments: Array<{ __typename: 'Attachment', id: string, fileName: string, fileExtension: string | null, fileSize: { __typename: 'FileSize', kiloBytes: number, megaBytes: number }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string } }> };

export type CustomerActorPartsFragment = { __typename: 'CustomerActor', customerId: string };

export type CustomerCardConfigPartsFragment = { __typename?: 'CustomerCardConfig', id: string, title: string, key: string, defaultTimeToLiveSeconds: number, apiUrl: string, order: number, isEnabled: boolean, apiHeaders: Array<{ __typename?: 'CustomerCardConfigApiHeader', name: string, value: string }>, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string } };

export type CustomerGroupMembershipPartsFragment = { __typename?: 'CustomerGroupMembership', customerId: string, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, createdBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, updatedBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, customerGroup: { __typename?: 'CustomerGroup', id: string, name: string, key: string, color: string } };

export type CustomerGroupPartsFragment = { __typename?: 'CustomerGroup', id: string, name: string, key: string, color: string };

export type CustomerPartsFragment = { __typename: 'Customer', id: string, fullName: string, shortName: string | null, externalId: string | null, status: CustomerStatus, email: { __typename?: 'EmailAddress', email: string, isVerified: boolean, verifiedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string } | null }, statusChangedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, assignedToUser: { __typename: 'UserActor', userId: string } | null, assignedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string } | null, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, lastIdleAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string } | null, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, createdBy: { __typename?: 'CustomerActor' } | { __typename?: 'DeletedCustomerActor' } | { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, markedAsSpamAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string } | null };

export type DateTimePartsFragment = { __typename: 'DateTime', iso8601: string, unixTimestamp: string };

export type DeletedCustomerActorPartsFragment = { __typename: 'DeletedCustomerActor', customerId: string };

type EmailActorParts_CustomerEmailActor_Fragment = { __typename: 'CustomerEmailActor', customerId: string };

type EmailActorParts_DeletedCustomerEmailActor_Fragment = { __typename: 'DeletedCustomerEmailActor', customerId: string };

type EmailActorParts_SupportEmailAddressEmailActor_Fragment = { __typename: 'SupportEmailAddressEmailActor', supportEmailAddress: string };

type EmailActorParts_UserEmailActor_Fragment = { __typename: 'UserEmailActor', userId: string };

export type EmailActorPartsFragment = EmailActorParts_CustomerEmailActor_Fragment | EmailActorParts_DeletedCustomerEmailActor_Fragment | EmailActorParts_SupportEmailAddressEmailActor_Fragment | EmailActorParts_UserEmailActor_Fragment;

export type EmailParticipantPartsFragment = { __typename: 'EmailParticipant', name: string | null, email: string, emailActor: { __typename: 'CustomerEmailActor', customerId: string } | { __typename: 'DeletedCustomerEmailActor', customerId: string } | { __typename: 'SupportEmailAddressEmailActor', supportEmailAddress: string } | { __typename: 'UserEmailActor', userId: string } | null };

export type EmailPartsFragment = { __typename?: 'Email', id: string, inReplyToEmailId: string | null, subject: string | null, textContent: string | null, markdownContent: string | null, from: { __typename: 'EmailParticipant', name: string | null, email: string, emailActor: { __typename: 'CustomerEmailActor', customerId: string } | { __typename: 'DeletedCustomerEmailActor', customerId: string } | { __typename: 'SupportEmailAddressEmailActor', supportEmailAddress: string } | { __typename: 'UserEmailActor', userId: string } | null }, to: { __typename: 'EmailParticipant', name: string | null, email: string, emailActor: { __typename: 'CustomerEmailActor', customerId: string } | { __typename: 'DeletedCustomerEmailActor', customerId: string } | { __typename: 'SupportEmailAddressEmailActor', supportEmailAddress: string } | { __typename: 'UserEmailActor', userId: string } | null }, additionalRecipients: Array<{ __typename: 'EmailParticipant', name: string | null, email: string, emailActor: { __typename: 'CustomerEmailActor', customerId: string } | { __typename: 'DeletedCustomerEmailActor', customerId: string } | { __typename: 'SupportEmailAddressEmailActor', supportEmailAddress: string } | { __typename: 'UserEmailActor', userId: string } | null }>, hiddenRecipients: Array<{ __typename: 'EmailParticipant', name: string | null, email: string, emailActor: { __typename: 'CustomerEmailActor', customerId: string } | { __typename: 'DeletedCustomerEmailActor', customerId: string } | { __typename: 'SupportEmailAddressEmailActor', supportEmailAddress: string } | { __typename: 'UserEmailActor', userId: string } | null }>, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, attachments: Array<{ __typename: 'Attachment', id: string, fileName: string, fileExtension: string | null, fileSize: { __typename: 'FileSize', kiloBytes: number, megaBytes: number }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string } }> };

export type FileSizePartsFragment = { __typename: 'FileSize', kiloBytes: number, megaBytes: number };

type InternalActorParts_CustomerActor_Fragment = { __typename?: 'CustomerActor' };

type InternalActorParts_DeletedCustomerActor_Fragment = { __typename?: 'DeletedCustomerActor' };

type InternalActorParts_MachineUserActor_Fragment = { __typename: 'MachineUserActor', machineUserId: string };

type InternalActorParts_SystemActor_Fragment = { __typename: 'SystemActor', systemId: string };

type InternalActorParts_UserActor_Fragment = { __typename: 'UserActor', userId: string };

export type InternalActorPartsFragment = InternalActorParts_CustomerActor_Fragment | InternalActorParts_DeletedCustomerActor_Fragment | InternalActorParts_MachineUserActor_Fragment | InternalActorParts_SystemActor_Fragment | InternalActorParts_UserActor_Fragment;

export type IssuePartsFragment = { __typename: 'Issue', id: string, issueKey: string, status: IssueStatus, customer: { __typename?: 'Customer', id: string }, priority: { __typename: 'IssuePriority', label: string, value: number }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, updatedBy: { __typename: 'CustomerActor', customerId: string } | { __typename: 'DeletedCustomerActor', customerId: string } | { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, createdBy: { __typename: 'CustomerActor', customerId: string } | { __typename: 'DeletedCustomerActor', customerId: string } | { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, issueType: { __typename: 'IssueType', id: string, publicName: string, isArchived: boolean, defaultIssuePriority: { __typename: 'IssuePriority', label: string, value: number } }, deletedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string } | null };

export type IssuePriorityPartsFragment = { __typename: 'IssuePriority', label: string, value: number };

export type IssueTypePartsFragment = { __typename: 'IssueType', id: string, publicName: string, isArchived: boolean, defaultIssuePriority: { __typename: 'IssuePriority', label: string, value: number } };

export type LabelPartsFragment = { __typename: 'Label', id: string, labelType: { __typename: 'LabelType', id: string, name: string, icon: string | null, isArchived: boolean, archivedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string } | null, archivedBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } | null, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, createdBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, updatedBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } }, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, createdBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, updatedBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } };

export type LabelTypePartsFragment = { __typename: 'LabelType', id: string, name: string, icon: string | null, isArchived: boolean, archivedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string } | null, archivedBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } | null, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, createdBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, updatedBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } };

export type MachineUserActorPartsFragment = { __typename: 'MachineUserActor', machineUserId: string };

export type MutationErrorPartsFragment = { __typename: 'MutationError', message: string, type: MutationErrorType, code: string, fields: Array<{ __typename?: 'MutationFieldError', field: string, message: string, type: MutationFieldErrorType }> };

export type PageInfoPartsFragment = { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor: string | null, endCursor: string | null };

export type SystemActorPartsFragment = { __typename: 'SystemActor', systemId: string };

export type ThreadPartsFragment = { __typename: 'Thread', id: string, externalId: string | null, status: ThreadStatus, title: string, previewText: string | null, priority: number, customer: { __typename?: 'Customer', id: string }, statusChangedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, labels: Array<{ __typename: 'Label', id: string, labelType: { __typename: 'LabelType', id: string, name: string, icon: string | null, isArchived: boolean, archivedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string } | null, archivedBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } | null, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, createdBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, updatedBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } }, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, createdBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, updatedBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } }>, assignedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string } | null, assignedTo: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } | null, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, createdBy: { __typename: 'CustomerActor', customerId: string } | { __typename: 'DeletedCustomerActor', customerId: string } | { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, updatedBy: { __typename: 'CustomerActor', customerId: string } | { __typename: 'DeletedCustomerActor', customerId: string } | { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } };

export type TimelineEntryPartsFragment = { __typename?: 'TimelineEntry', id: string, customerId: string, timestamp: { __typename?: 'DateTime', iso8601: string }, actor: { __typename: 'CustomerActor', customerId: string } | { __typename: 'DeletedCustomerActor', customerId: string } | { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, entry: { __typename: 'ChatEntry' } | { __typename: 'CustomEntry' } | { __typename: 'CustomerAssignmentTransitionedEntry' } | { __typename: 'CustomerStatusTransitionedEntry' } | { __typename: 'EmailEntry' } | { __typename: 'IssueDeletedEntry' } | { __typename: 'IssueIssueTypeChangedEntry' } | { __typename: 'IssuePriorityChangedEntry' } | { __typename: 'IssueStatusTransitionedEntry' } | { __typename: 'LinearIssueLinkStateTransitionedEntry' } | { __typename: 'LinearIssueThreadLinkStateTransitionedEntry' } | { __typename: 'NoteEntry' } };

export type UserActorPartsFragment = { __typename: 'UserActor', userId: string };

export type WorkspacePartsFragment = { __typename: 'Workspace', id: string, name: string, publicName: string, isDemoWorkspace: boolean, createdBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, updatedBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string } };

export type AddCustomerToCustomerGroupsMutationVariables = Exact<{
  input: AddCustomerToCustomerGroupsInput;
}>;


export type AddCustomerToCustomerGroupsMutation = { __typename?: 'Mutation', addCustomerToCustomerGroups: { __typename?: 'AddCustomerToCustomerGroupsOutput', customerGroupMemberships: Array<{ __typename?: 'CustomerGroupMembership', customerId: string, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, createdBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, updatedBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, customerGroup: { __typename?: 'CustomerGroup', id: string, name: string, key: string, color: string } }> | null, error: { __typename: 'MutationError', message: string, type: MutationErrorType, code: string, fields: Array<{ __typename?: 'MutationFieldError', field: string, message: string, type: MutationFieldErrorType }> } | null } };

export type AddLabelsMutationVariables = Exact<{
  input: AddLabelsInput;
}>;


export type AddLabelsMutation = { __typename?: 'Mutation', addLabels: { __typename?: 'AddLabelsOutput', labels: Array<{ __typename: 'Label', id: string, labelType: { __typename: 'LabelType', id: string, name: string, icon: string | null, isArchived: boolean, archivedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string } | null, archivedBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } | null, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, createdBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, updatedBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } }, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, createdBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, updatedBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } }>, error: { __typename: 'MutationError', message: string, type: MutationErrorType, code: string, fields: Array<{ __typename?: 'MutationFieldError', field: string, message: string, type: MutationFieldErrorType }> } | null } };

export type ArchiveLabelTypeMutationVariables = Exact<{
  input: ArchiveLabelTypeInput;
}>;


export type ArchiveLabelTypeMutation = { __typename?: 'Mutation', archiveLabelType: { __typename?: 'ArchiveLabelTypeOutput', labelType: { __typename: 'LabelType', id: string, name: string, icon: string | null, isArchived: boolean, archivedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string } | null, archivedBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } | null, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, createdBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, updatedBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } } | null, error: { __typename?: 'MutationError', message: string } | null } };

export type AssignThreadMutationVariables = Exact<{
  input: AssignThreadInput;
}>;


export type AssignThreadMutation = { __typename?: 'Mutation', assignThread: { __typename?: 'AssignThreadOutput', thread: { __typename: 'Thread', id: string, externalId: string | null, status: ThreadStatus, title: string, previewText: string | null, priority: number, customer: { __typename?: 'Customer', id: string }, statusChangedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, labels: Array<{ __typename: 'Label', id: string, labelType: { __typename: 'LabelType', id: string, name: string, icon: string | null, isArchived: boolean, archivedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string } | null, archivedBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } | null, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, createdBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, updatedBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } }, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, createdBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, updatedBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } }>, assignedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string } | null, assignedTo: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } | null, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, createdBy: { __typename: 'CustomerActor', customerId: string } | { __typename: 'DeletedCustomerActor', customerId: string } | { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, updatedBy: { __typename: 'CustomerActor', customerId: string } | { __typename: 'DeletedCustomerActor', customerId: string } | { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } } | null, error: { __typename: 'MutationError', message: string, type: MutationErrorType, code: string, fields: Array<{ __typename?: 'MutationFieldError', field: string, message: string, type: MutationFieldErrorType }> } | null } };

export type ChangeCustomerStatusMutationVariables = Exact<{
  input: ChangeCustomerStatusInput;
}>;


export type ChangeCustomerStatusMutation = { __typename?: 'Mutation', changeCustomerStatus: { __typename?: 'ChangeCustomerStatusOutput', customer: { __typename: 'Customer', id: string, fullName: string, shortName: string | null, externalId: string | null, status: CustomerStatus, email: { __typename?: 'EmailAddress', email: string, isVerified: boolean, verifiedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string } | null }, statusChangedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, assignedToUser: { __typename: 'UserActor', userId: string } | null, assignedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string } | null, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, lastIdleAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string } | null, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, createdBy: { __typename?: 'CustomerActor' } | { __typename?: 'DeletedCustomerActor' } | { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, markedAsSpamAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string } | null } | null, error: { __typename: 'MutationError', message: string, type: MutationErrorType, code: string, fields: Array<{ __typename?: 'MutationFieldError', field: string, message: string, type: MutationFieldErrorType }> } | null } };

export type ChangeThreadPriorityMutationVariables = Exact<{
  input: ChangeThreadPriorityInput;
}>;


export type ChangeThreadPriorityMutation = { __typename?: 'Mutation', changeThreadPriority: { __typename?: 'ChangeThreadPriorityOutput', thread: { __typename: 'Thread', id: string, externalId: string | null, status: ThreadStatus, title: string, previewText: string | null, priority: number, customer: { __typename?: 'Customer', id: string }, statusChangedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, labels: Array<{ __typename: 'Label', id: string, labelType: { __typename: 'LabelType', id: string, name: string, icon: string | null, isArchived: boolean, archivedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string } | null, archivedBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } | null, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, createdBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, updatedBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } }, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, createdBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, updatedBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } }>, assignedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string } | null, assignedTo: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } | null, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, createdBy: { __typename: 'CustomerActor', customerId: string } | { __typename: 'DeletedCustomerActor', customerId: string } | { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, updatedBy: { __typename: 'CustomerActor', customerId: string } | { __typename: 'DeletedCustomerActor', customerId: string } | { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } } | null, error: { __typename: 'MutationError', message: string, type: MutationErrorType, code: string, fields: Array<{ __typename?: 'MutationFieldError', field: string, message: string, type: MutationFieldErrorType }> } | null } };

export type CreateAttachmentUploadUrlMutationVariables = Exact<{
  input: CreateAttachmentUploadUrlInput;
}>;


export type CreateAttachmentUploadUrlMutation = { __typename?: 'Mutation', createAttachmentUploadUrl: { __typename?: 'CreateAttachmentUploadUrlOutput', attachmentUploadUrl: { __typename: 'AttachmentUploadUrl', uploadFormUrl: string, attachment: { __typename: 'Attachment', id: string, fileName: string, fileExtension: string | null, fileSize: { __typename: 'FileSize', kiloBytes: number, megaBytes: number }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string } }, uploadFormData: Array<{ __typename?: 'UploadFormData', key: string, value: string }>, expiresAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string } } | null, error: { __typename: 'MutationError', message: string, type: MutationErrorType, code: string, fields: Array<{ __typename?: 'MutationFieldError', field: string, message: string, type: MutationFieldErrorType }> } | null } };

export type CreateCustomerCardConfigMutationVariables = Exact<{
  input: CreateCustomerCardConfigInput;
}>;


export type CreateCustomerCardConfigMutation = { __typename?: 'Mutation', createCustomerCardConfig: { __typename?: 'CreateCustomerCardConfigOutput', customerCardConfig: { __typename?: 'CustomerCardConfig', id: string, title: string, key: string, defaultTimeToLiveSeconds: number, apiUrl: string, order: number, isEnabled: boolean, apiHeaders: Array<{ __typename?: 'CustomerCardConfigApiHeader', name: string, value: string }>, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string } } | null, error: { __typename: 'MutationError', message: string, type: MutationErrorType, code: string, fields: Array<{ __typename?: 'MutationFieldError', field: string, message: string, type: MutationFieldErrorType }> } | null } };

export type CreateIssueMutationVariables = Exact<{
  input: CreateIssueInput;
}>;


export type CreateIssueMutation = { __typename?: 'Mutation', createIssue: { __typename?: 'CreateIssueOutput', issue: { __typename: 'Issue', id: string, issueKey: string, status: IssueStatus, customer: { __typename?: 'Customer', id: string }, priority: { __typename: 'IssuePriority', label: string, value: number }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, updatedBy: { __typename: 'CustomerActor', customerId: string } | { __typename: 'DeletedCustomerActor', customerId: string } | { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, createdBy: { __typename: 'CustomerActor', customerId: string } | { __typename: 'DeletedCustomerActor', customerId: string } | { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, issueType: { __typename: 'IssueType', id: string, publicName: string, isArchived: boolean, defaultIssuePriority: { __typename: 'IssuePriority', label: string, value: number } }, deletedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string } | null } | null, error: { __typename: 'MutationError', message: string, type: MutationErrorType, code: string, fields: Array<{ __typename?: 'MutationFieldError', field: string, message: string, type: MutationFieldErrorType }> } | null } };

export type CreateThreadMutationVariables = Exact<{
  input: CreateThreadInput;
}>;


export type CreateThreadMutation = { __typename?: 'Mutation', createThread: { __typename?: 'CreateThreadOutput', thread: { __typename: 'Thread', id: string, externalId: string | null, status: ThreadStatus, title: string, previewText: string | null, priority: number, customer: { __typename?: 'Customer', id: string }, statusChangedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, labels: Array<{ __typename: 'Label', id: string, labelType: { __typename: 'LabelType', id: string, name: string, icon: string | null, isArchived: boolean, archivedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string } | null, archivedBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } | null, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, createdBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, updatedBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } }, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, createdBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, updatedBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } }>, assignedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string } | null, assignedTo: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } | null, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, createdBy: { __typename: 'CustomerActor', customerId: string } | { __typename: 'DeletedCustomerActor', customerId: string } | { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, updatedBy: { __typename: 'CustomerActor', customerId: string } | { __typename: 'DeletedCustomerActor', customerId: string } | { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } } | null, error: { __typename: 'MutationError', message: string, type: MutationErrorType, code: string, fields: Array<{ __typename?: 'MutationFieldError', field: string, message: string, type: MutationFieldErrorType }> } | null } };

export type DeleteCustomerCardConfigMutationVariables = Exact<{
  input: DeleteCustomerCardConfigInput;
}>;


export type DeleteCustomerCardConfigMutation = { __typename?: 'Mutation', deleteCustomerCardConfig: { __typename?: 'DeleteCustomerCardConfigOutput', error: { __typename: 'MutationError', message: string, type: MutationErrorType, code: string, fields: Array<{ __typename?: 'MutationFieldError', field: string, message: string, type: MutationFieldErrorType }> } | null } };

export type DeleteIssueMutationVariables = Exact<{
  input: DeleteIssueInput;
}>;


export type DeleteIssueMutation = { __typename?: 'Mutation', deleteIssue: { __typename?: 'DeleteIssueOutput', issue: { __typename: 'Issue', id: string, issueKey: string, status: IssueStatus, customer: { __typename?: 'Customer', id: string }, priority: { __typename: 'IssuePriority', label: string, value: number }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, updatedBy: { __typename: 'CustomerActor', customerId: string } | { __typename: 'DeletedCustomerActor', customerId: string } | { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, createdBy: { __typename: 'CustomerActor', customerId: string } | { __typename: 'DeletedCustomerActor', customerId: string } | { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, issueType: { __typename: 'IssueType', id: string, publicName: string, isArchived: boolean, defaultIssuePriority: { __typename: 'IssuePriority', label: string, value: number } }, deletedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string } | null } | null, error: { __typename: 'MutationError', message: string, type: MutationErrorType, code: string, fields: Array<{ __typename?: 'MutationFieldError', field: string, message: string, type: MutationFieldErrorType }> } | null } };

export type DeleteLabelsMutationVariables = Exact<{
  input: DeleteLabelsInput;
}>;


export type DeleteLabelsMutation = { __typename?: 'Mutation', deleteLabels: { __typename?: 'DeleteLabelsOutput', error: { __typename: 'MutationError', message: string, type: MutationErrorType, code: string, fields: Array<{ __typename?: 'MutationFieldError', field: string, message: string, type: MutationFieldErrorType }> } | null } };

export type MarkThreadAsDoneMutationVariables = Exact<{
  input: MarkThreadAsDoneInput;
}>;


export type MarkThreadAsDoneMutation = { __typename?: 'Mutation', markThreadAsDone: { __typename?: 'MarkThreadAsDoneOutput', thread: { __typename: 'Thread', id: string, externalId: string | null, status: ThreadStatus, title: string, previewText: string | null, priority: number, customer: { __typename?: 'Customer', id: string }, statusChangedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, labels: Array<{ __typename: 'Label', id: string, labelType: { __typename: 'LabelType', id: string, name: string, icon: string | null, isArchived: boolean, archivedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string } | null, archivedBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } | null, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, createdBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, updatedBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } }, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, createdBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, updatedBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } }>, assignedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string } | null, assignedTo: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } | null, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, createdBy: { __typename: 'CustomerActor', customerId: string } | { __typename: 'DeletedCustomerActor', customerId: string } | { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, updatedBy: { __typename: 'CustomerActor', customerId: string } | { __typename: 'DeletedCustomerActor', customerId: string } | { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } } | null, error: { __typename: 'MutationError', message: string, type: MutationErrorType, code: string, fields: Array<{ __typename?: 'MutationFieldError', field: string, message: string, type: MutationFieldErrorType }> } | null } };

export type MarkThreadAsTodoMutationVariables = Exact<{
  input: MarkThreadAsTodoInput;
}>;


export type MarkThreadAsTodoMutation = { __typename?: 'Mutation', markThreadAsTodo: { __typename?: 'MarkThreadAsTodoOutput', thread: { __typename: 'Thread', id: string, externalId: string | null, status: ThreadStatus, title: string, previewText: string | null, priority: number, customer: { __typename?: 'Customer', id: string }, statusChangedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, labels: Array<{ __typename: 'Label', id: string, labelType: { __typename: 'LabelType', id: string, name: string, icon: string | null, isArchived: boolean, archivedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string } | null, archivedBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } | null, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, createdBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, updatedBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } }, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, createdBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, updatedBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } }>, assignedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string } | null, assignedTo: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } | null, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, createdBy: { __typename: 'CustomerActor', customerId: string } | { __typename: 'DeletedCustomerActor', customerId: string } | { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, updatedBy: { __typename: 'CustomerActor', customerId: string } | { __typename: 'DeletedCustomerActor', customerId: string } | { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } } | null, error: { __typename: 'MutationError', message: string, type: MutationErrorType, code: string, fields: Array<{ __typename?: 'MutationFieldError', field: string, message: string, type: MutationFieldErrorType }> } | null } };

export type RemoveCustomerFromCustomerGroupsMutationVariables = Exact<{
  input: RemoveCustomerFromCustomerGroupsInput;
}>;


export type RemoveCustomerFromCustomerGroupsMutation = { __typename?: 'Mutation', removeCustomerFromCustomerGroups: { __typename?: 'RemoveCustomerFromCustomerGroupsOutput', error: { __typename: 'MutationError', message: string, type: MutationErrorType, code: string, fields: Array<{ __typename?: 'MutationFieldError', field: string, message: string, type: MutationFieldErrorType }> } | null } };

export type ReplyToEmailMutationVariables = Exact<{
  input: ReplyToEmailInput;
}>;


export type ReplyToEmailMutation = { __typename?: 'Mutation', replyToEmail: { __typename?: 'ReplyToEmailOutput', email: { __typename?: 'Email', id: string, inReplyToEmailId: string | null, subject: string | null, textContent: string | null, markdownContent: string | null, from: { __typename: 'EmailParticipant', name: string | null, email: string, emailActor: { __typename: 'CustomerEmailActor', customerId: string } | { __typename: 'DeletedCustomerEmailActor', customerId: string } | { __typename: 'SupportEmailAddressEmailActor', supportEmailAddress: string } | { __typename: 'UserEmailActor', userId: string } | null }, to: { __typename: 'EmailParticipant', name: string | null, email: string, emailActor: { __typename: 'CustomerEmailActor', customerId: string } | { __typename: 'DeletedCustomerEmailActor', customerId: string } | { __typename: 'SupportEmailAddressEmailActor', supportEmailAddress: string } | { __typename: 'UserEmailActor', userId: string } | null }, additionalRecipients: Array<{ __typename: 'EmailParticipant', name: string | null, email: string, emailActor: { __typename: 'CustomerEmailActor', customerId: string } | { __typename: 'DeletedCustomerEmailActor', customerId: string } | { __typename: 'SupportEmailAddressEmailActor', supportEmailAddress: string } | { __typename: 'UserEmailActor', userId: string } | null }>, hiddenRecipients: Array<{ __typename: 'EmailParticipant', name: string | null, email: string, emailActor: { __typename: 'CustomerEmailActor', customerId: string } | { __typename: 'DeletedCustomerEmailActor', customerId: string } | { __typename: 'SupportEmailAddressEmailActor', supportEmailAddress: string } | { __typename: 'UserEmailActor', userId: string } | null }>, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, attachments: Array<{ __typename: 'Attachment', id: string, fileName: string, fileExtension: string | null, fileSize: { __typename: 'FileSize', kiloBytes: number, megaBytes: number }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string } }> } | null, error: { __typename: 'MutationError', message: string, type: MutationErrorType, code: string, fields: Array<{ __typename?: 'MutationFieldError', field: string, message: string, type: MutationFieldErrorType }> } | null } };

export type ResolveIssueMutationVariables = Exact<{
  input: ResolveIssueInput;
}>;


export type ResolveIssueMutation = { __typename?: 'Mutation', resolveIssue: { __typename?: 'ResolveIssueOutput', issue: { __typename: 'Issue', id: string, issueKey: string, status: IssueStatus, customer: { __typename?: 'Customer', id: string }, priority: { __typename: 'IssuePriority', label: string, value: number }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, updatedBy: { __typename: 'CustomerActor', customerId: string } | { __typename: 'DeletedCustomerActor', customerId: string } | { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, createdBy: { __typename: 'CustomerActor', customerId: string } | { __typename: 'DeletedCustomerActor', customerId: string } | { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, issueType: { __typename: 'IssueType', id: string, publicName: string, isArchived: boolean, defaultIssuePriority: { __typename: 'IssuePriority', label: string, value: number } }, deletedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string } | null } | null, error: { __typename: 'MutationError', message: string, type: MutationErrorType, code: string, fields: Array<{ __typename?: 'MutationFieldError', field: string, message: string, type: MutationFieldErrorType }> } | null } };

export type SendChatMutationVariables = Exact<{
  input: SendChatInput;
}>;


export type SendChatMutation = { __typename?: 'Mutation', sendChat: { __typename?: 'SendChatOutput', chat: { __typename?: 'Chat', id: string, text: string | null, customerReadAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string } | null, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, attachments: Array<{ __typename: 'Attachment', id: string, fileName: string, fileExtension: string | null, fileSize: { __typename: 'FileSize', kiloBytes: number, megaBytes: number }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string } }> } | null, error: { __typename: 'MutationError', message: string, type: MutationErrorType, code: string, fields: Array<{ __typename?: 'MutationFieldError', field: string, message: string, type: MutationFieldErrorType }> } | null } };

export type SendNewEmailMutationVariables = Exact<{
  input: SendNewEmailInput;
}>;


export type SendNewEmailMutation = { __typename?: 'Mutation', sendNewEmail: { __typename?: 'SendNewEmailOutput', email: { __typename?: 'Email', id: string, inReplyToEmailId: string | null, subject: string | null, textContent: string | null, markdownContent: string | null, from: { __typename: 'EmailParticipant', name: string | null, email: string, emailActor: { __typename: 'CustomerEmailActor', customerId: string } | { __typename: 'DeletedCustomerEmailActor', customerId: string } | { __typename: 'SupportEmailAddressEmailActor', supportEmailAddress: string } | { __typename: 'UserEmailActor', userId: string } | null }, to: { __typename: 'EmailParticipant', name: string | null, email: string, emailActor: { __typename: 'CustomerEmailActor', customerId: string } | { __typename: 'DeletedCustomerEmailActor', customerId: string } | { __typename: 'SupportEmailAddressEmailActor', supportEmailAddress: string } | { __typename: 'UserEmailActor', userId: string } | null }, additionalRecipients: Array<{ __typename: 'EmailParticipant', name: string | null, email: string, emailActor: { __typename: 'CustomerEmailActor', customerId: string } | { __typename: 'DeletedCustomerEmailActor', customerId: string } | { __typename: 'SupportEmailAddressEmailActor', supportEmailAddress: string } | { __typename: 'UserEmailActor', userId: string } | null }>, hiddenRecipients: Array<{ __typename: 'EmailParticipant', name: string | null, email: string, emailActor: { __typename: 'CustomerEmailActor', customerId: string } | { __typename: 'DeletedCustomerEmailActor', customerId: string } | { __typename: 'SupportEmailAddressEmailActor', supportEmailAddress: string } | { __typename: 'UserEmailActor', userId: string } | null }>, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, attachments: Array<{ __typename: 'Attachment', id: string, fileName: string, fileExtension: string | null, fileSize: { __typename: 'FileSize', kiloBytes: number, megaBytes: number }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string } }> } | null, error: { __typename: 'MutationError', message: string, type: MutationErrorType, code: string, fields: Array<{ __typename?: 'MutationFieldError', field: string, message: string, type: MutationFieldErrorType }> } | null } };

export type SnoozeThreadMutationVariables = Exact<{
  input: SnoozeThreadInput;
}>;


export type SnoozeThreadMutation = { __typename?: 'Mutation', snoozeThread: { __typename?: 'SnoozeThreadOutput', thread: { __typename: 'Thread', id: string, externalId: string | null, status: ThreadStatus, title: string, previewText: string | null, priority: number, customer: { __typename?: 'Customer', id: string }, statusChangedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, labels: Array<{ __typename: 'Label', id: string, labelType: { __typename: 'LabelType', id: string, name: string, icon: string | null, isArchived: boolean, archivedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string } | null, archivedBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } | null, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, createdBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, updatedBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } }, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, createdBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, updatedBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } }>, assignedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string } | null, assignedTo: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } | null, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, createdBy: { __typename: 'CustomerActor', customerId: string } | { __typename: 'DeletedCustomerActor', customerId: string } | { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, updatedBy: { __typename: 'CustomerActor', customerId: string } | { __typename: 'DeletedCustomerActor', customerId: string } | { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } } | null, error: { __typename: 'MutationError', message: string, type: MutationErrorType, code: string, fields: Array<{ __typename?: 'MutationFieldError', field: string, message: string, type: MutationFieldErrorType }> } | null } };

export type UnassignThreadMutationVariables = Exact<{
  input: UnassignThreadInput;
}>;


export type UnassignThreadMutation = { __typename?: 'Mutation', unassignThread: { __typename?: 'UnassignThreadOutput', thread: { __typename: 'Thread', id: string, externalId: string | null, status: ThreadStatus, title: string, previewText: string | null, priority: number, customer: { __typename?: 'Customer', id: string }, statusChangedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, labels: Array<{ __typename: 'Label', id: string, labelType: { __typename: 'LabelType', id: string, name: string, icon: string | null, isArchived: boolean, archivedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string } | null, archivedBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } | null, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, createdBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, updatedBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } }, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, createdBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, updatedBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } }>, assignedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string } | null, assignedTo: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } | null, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, createdBy: { __typename: 'CustomerActor', customerId: string } | { __typename: 'DeletedCustomerActor', customerId: string } | { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, updatedBy: { __typename: 'CustomerActor', customerId: string } | { __typename: 'DeletedCustomerActor', customerId: string } | { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } } | null, error: { __typename: 'MutationError', message: string, type: MutationErrorType, code: string, fields: Array<{ __typename?: 'MutationFieldError', field: string, message: string, type: MutationFieldErrorType }> } | null } };

export type UpdateCustomerCardConfigMutationVariables = Exact<{
  input: UpdateCustomerCardConfigInput;
}>;


export type UpdateCustomerCardConfigMutation = { __typename?: 'Mutation', updateCustomerCardConfig: { __typename?: 'UpdateCustomerCardConfigOutput', customerCardConfig: { __typename?: 'CustomerCardConfig', id: string, title: string, key: string, defaultTimeToLiveSeconds: number, apiUrl: string, order: number, isEnabled: boolean, apiHeaders: Array<{ __typename?: 'CustomerCardConfigApiHeader', name: string, value: string }>, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string } } | null, error: { __typename: 'MutationError', message: string, type: MutationErrorType, code: string, fields: Array<{ __typename?: 'MutationFieldError', field: string, message: string, type: MutationFieldErrorType }> } | null } };

export type UpsertCustomTimelineEntryMutationVariables = Exact<{
  input: UpsertCustomTimelineEntryInput;
}>;


export type UpsertCustomTimelineEntryMutation = { __typename?: 'Mutation', upsertCustomTimelineEntry: { __typename?: 'UpsertCustomTimelineEntryOutput', result: UpsertResult | null, timelineEntry: { __typename?: 'TimelineEntry', id: string, customerId: string, timestamp: { __typename?: 'DateTime', iso8601: string }, actor: { __typename: 'CustomerActor', customerId: string } | { __typename: 'DeletedCustomerActor', customerId: string } | { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, entry: { __typename: 'ChatEntry' } | { __typename: 'CustomEntry' } | { __typename: 'CustomerAssignmentTransitionedEntry' } | { __typename: 'CustomerStatusTransitionedEntry' } | { __typename: 'EmailEntry' } | { __typename: 'IssueDeletedEntry' } | { __typename: 'IssueIssueTypeChangedEntry' } | { __typename: 'IssuePriorityChangedEntry' } | { __typename: 'IssueStatusTransitionedEntry' } | { __typename: 'LinearIssueLinkStateTransitionedEntry' } | { __typename: 'LinearIssueThreadLinkStateTransitionedEntry' } | { __typename: 'NoteEntry' } } | null, error: { __typename: 'MutationError', message: string, type: MutationErrorType, code: string, fields: Array<{ __typename?: 'MutationFieldError', field: string, message: string, type: MutationFieldErrorType }> } | null } };

export type UpsertCustomerMutationVariables = Exact<{
  input: UpsertCustomerInput;
}>;


export type UpsertCustomerMutation = { __typename?: 'Mutation', upsertCustomer: { __typename?: 'UpsertCustomerOutput', result: UpsertResult | null, customer: { __typename: 'Customer', id: string, fullName: string, shortName: string | null, externalId: string | null, status: CustomerStatus, email: { __typename?: 'EmailAddress', email: string, isVerified: boolean, verifiedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string } | null }, statusChangedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, assignedToUser: { __typename: 'UserActor', userId: string } | null, assignedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string } | null, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, lastIdleAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string } | null, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, createdBy: { __typename?: 'CustomerActor' } | { __typename?: 'DeletedCustomerActor' } | { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, markedAsSpamAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string } | null } | null, error: { __typename: 'MutationError', message: string, type: MutationErrorType, code: string, fields: Array<{ __typename?: 'MutationFieldError', field: string, message: string, type: MutationFieldErrorType }> } | null } };

export type CustomerByEmailQueryVariables = Exact<{
  email: Scalars['String'];
}>;


export type CustomerByEmailQuery = { __typename?: 'Query', customerByEmail: { __typename: 'Customer', id: string, fullName: string, shortName: string | null, externalId: string | null, status: CustomerStatus, email: { __typename?: 'EmailAddress', email: string, isVerified: boolean, verifiedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string } | null }, statusChangedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, assignedToUser: { __typename: 'UserActor', userId: string } | null, assignedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string } | null, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, lastIdleAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string } | null, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, createdBy: { __typename?: 'CustomerActor' } | { __typename?: 'DeletedCustomerActor' } | { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, markedAsSpamAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string } | null } | null };

export type CustomerByIdQueryVariables = Exact<{
  customerId: Scalars['ID'];
}>;


export type CustomerByIdQuery = { __typename?: 'Query', customer: { __typename: 'Customer', id: string, fullName: string, shortName: string | null, externalId: string | null, status: CustomerStatus, email: { __typename?: 'EmailAddress', email: string, isVerified: boolean, verifiedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string } | null }, statusChangedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, assignedToUser: { __typename: 'UserActor', userId: string } | null, assignedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string } | null, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, lastIdleAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string } | null, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, createdBy: { __typename?: 'CustomerActor' } | { __typename?: 'DeletedCustomerActor' } | { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, markedAsSpamAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string } | null } | null };

export type CustomerGroupByIdQueryVariables = Exact<{
  customerGroupId: Scalars['ID'];
}>;


export type CustomerGroupByIdQuery = { __typename?: 'Query', customerGroup: { __typename?: 'CustomerGroup', id: string, name: string, key: string, color: string } | null };

export type CustomerGroupsQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  last?: InputMaybe<Scalars['Int']>;
}>;


export type CustomerGroupsQuery = { __typename?: 'Query', customerGroups: { __typename?: 'CustomerGroupConnection', edges: Array<{ __typename?: 'CustomerGroupEdge', node: { __typename?: 'CustomerGroup', id: string, name: string, key: string, color: string } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor: string | null, endCursor: string | null } } };

export type CustomersQueryVariables = Exact<{
  filters?: InputMaybe<CustomersFilter>;
  sortBy?: InputMaybe<CustomersSort>;
  first?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
  last?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['String']>;
}>;


export type CustomersQuery = { __typename?: 'Query', customers: { __typename?: 'CustomerConnection', totalCount: number, edges: Array<{ __typename?: 'CustomerEdge', node: { __typename: 'Customer', id: string, fullName: string, shortName: string | null, externalId: string | null, status: CustomerStatus, email: { __typename?: 'EmailAddress', email: string, isVerified: boolean, verifiedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string } | null }, statusChangedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, assignedToUser: { __typename: 'UserActor', userId: string } | null, assignedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string } | null, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, lastIdleAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string } | null, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, createdBy: { __typename?: 'CustomerActor' } | { __typename?: 'DeletedCustomerActor' } | { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, markedAsSpamAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string } | null } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor: string | null, endCursor: string | null } } };

export type IssuesQueryVariables = Exact<{
  filters?: InputMaybe<IssuesFilter>;
  sortBy?: InputMaybe<IssuesSort>;
  first?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
  last?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['String']>;
}>;


export type IssuesQuery = { __typename?: 'Query', issues: { __typename?: 'IssueConnection', edges: Array<{ __typename?: 'IssueEdge', node: { __typename: 'Issue', id: string, issueKey: string, status: IssueStatus, customer: { __typename?: 'Customer', id: string }, priority: { __typename: 'IssuePriority', label: string, value: number }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, updatedBy: { __typename: 'CustomerActor', customerId: string } | { __typename: 'DeletedCustomerActor', customerId: string } | { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, createdBy: { __typename: 'CustomerActor', customerId: string } | { __typename: 'DeletedCustomerActor', customerId: string } | { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, issueType: { __typename: 'IssueType', id: string, publicName: string, isArchived: boolean, defaultIssuePriority: { __typename: 'IssuePriority', label: string, value: number } }, deletedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string } | null } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor: string | null, endCursor: string | null } } };

export type LabelTypeQueryVariables = Exact<{
  labelTypeId: Scalars['ID'];
}>;


export type LabelTypeQuery = { __typename?: 'Query', labelType: { __typename: 'LabelType', id: string, name: string, icon: string | null, isArchived: boolean, archivedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string } | null, archivedBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } | null, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, createdBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, updatedBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } } | null };

export type LabelTypesQueryVariables = Exact<{
  filters?: InputMaybe<LabelTypeFilter>;
  first?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
  last?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['String']>;
}>;


export type LabelTypesQuery = { __typename?: 'Query', labelTypes: { __typename?: 'LabelTypeConnection', edges: Array<{ __typename?: 'LabelTypeEdge', cursor: string, node: { __typename: 'LabelType', id: string, name: string, icon: string | null, isArchived: boolean, archivedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string } | null, archivedBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } | null, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, createdBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, updatedBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor: string | null, endCursor: string | null } } };

export type MyWorkspaceQueryVariables = Exact<{ [key: string]: never; }>;


export type MyWorkspaceQuery = { __typename?: 'Query', myWorkspace: { __typename: 'Workspace', id: string, name: string, publicName: string, isDemoWorkspace: boolean, createdBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, updatedBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string } } | null };

export type ThreadQueryVariables = Exact<{
  threadId: Scalars['ID'];
}>;


export type ThreadQuery = { __typename?: 'Query', thread: { __typename: 'Thread', id: string, externalId: string | null, status: ThreadStatus, title: string, previewText: string | null, priority: number, customer: { __typename?: 'Customer', id: string }, statusChangedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, labels: Array<{ __typename: 'Label', id: string, labelType: { __typename: 'LabelType', id: string, name: string, icon: string | null, isArchived: boolean, archivedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string } | null, archivedBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } | null, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, createdBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, updatedBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } }, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, createdBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, updatedBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } }>, assignedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string } | null, assignedTo: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } | null, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, createdBy: { __typename: 'CustomerActor', customerId: string } | { __typename: 'DeletedCustomerActor', customerId: string } | { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, updatedBy: { __typename: 'CustomerActor', customerId: string } | { __typename: 'DeletedCustomerActor', customerId: string } | { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } } | null };

export type ThreadsQueryVariables = Exact<{
  filters?: InputMaybe<ThreadsFilter>;
  sortBy?: InputMaybe<ThreadsSort>;
  first?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
  last?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['String']>;
}>;


export type ThreadsQuery = { __typename?: 'Query', threads: { __typename?: 'ThreadConnection', edges: Array<{ __typename?: 'ThreadEdge', cursor: string, node: { __typename: 'Thread', id: string, externalId: string | null, status: ThreadStatus, title: string, previewText: string | null, priority: number, customer: { __typename?: 'Customer', id: string }, statusChangedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, labels: Array<{ __typename: 'Label', id: string, labelType: { __typename: 'LabelType', id: string, name: string, icon: string | null, isArchived: boolean, archivedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string } | null, archivedBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } | null, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, createdBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, updatedBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } }, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, createdBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, updatedBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } }>, assignedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string } | null, assignedTo: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } | null, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, createdBy: { __typename: 'CustomerActor', customerId: string } | { __typename: 'DeletedCustomerActor', customerId: string } | { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, updatedBy: { __typename: 'CustomerActor', customerId: string } | { __typename: 'DeletedCustomerActor', customerId: string } | { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor: string | null, endCursor: string | null } } };

export const FileSizePartsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FileSizeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FileSize"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"kiloBytes"}},{"kind":"Field","name":{"kind":"Name","value":"megaBytes"}}]}}]} as unknown as DocumentNode<FileSizePartsFragment, unknown>;
export const DateTimePartsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DateTimeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"iso8601"}},{"kind":"Field","name":{"kind":"Name","value":"unixTimestamp"}}]}}]} as unknown as DocumentNode<DateTimePartsFragment, unknown>;
export const AttachmentPartsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AttachmentParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Attachment"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fileName"}},{"kind":"Field","name":{"kind":"Name","value":"fileSize"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FileSizeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"fileExtension"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FileSizeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FileSize"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"kiloBytes"}},{"kind":"Field","name":{"kind":"Name","value":"megaBytes"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DateTimeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"iso8601"}},{"kind":"Field","name":{"kind":"Name","value":"unixTimestamp"}}]}}]} as unknown as DocumentNode<AttachmentPartsFragment, unknown>;
export const AttachmentUploadUrlPartsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AttachmentUploadUrlParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AttachmentUploadUrl"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"attachment"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AttachmentParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"uploadFormUrl"}},{"kind":"Field","name":{"kind":"Name","value":"uploadFormData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"expiresAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FileSizeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FileSize"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"kiloBytes"}},{"kind":"Field","name":{"kind":"Name","value":"megaBytes"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DateTimeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"iso8601"}},{"kind":"Field","name":{"kind":"Name","value":"unixTimestamp"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AttachmentParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Attachment"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fileName"}},{"kind":"Field","name":{"kind":"Name","value":"fileSize"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FileSizeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"fileExtension"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}}]}}]} as unknown as DocumentNode<AttachmentUploadUrlPartsFragment, unknown>;
export const ChatPartsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ChatParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Chat"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"customerReadAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"attachments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AttachmentParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FileSizeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FileSize"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"kiloBytes"}},{"kind":"Field","name":{"kind":"Name","value":"megaBytes"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DateTimeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"iso8601"}},{"kind":"Field","name":{"kind":"Name","value":"unixTimestamp"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AttachmentParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Attachment"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fileName"}},{"kind":"Field","name":{"kind":"Name","value":"fileSize"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FileSizeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"fileExtension"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}}]}}]} as unknown as DocumentNode<ChatPartsFragment, unknown>;
export const CustomerCardConfigPartsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CustomerCardConfigParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerCardConfig"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"defaultTimeToLiveSeconds"}},{"kind":"Field","name":{"kind":"Name","value":"apiUrl"}},{"kind":"Field","name":{"kind":"Name","value":"order"}},{"kind":"Field","name":{"kind":"Name","value":"apiHeaders"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"isEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DateTimeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"iso8601"}},{"kind":"Field","name":{"kind":"Name","value":"unixTimestamp"}}]}}]} as unknown as DocumentNode<CustomerCardConfigPartsFragment, unknown>;
export const UserActorPartsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}}]} as unknown as DocumentNode<UserActorPartsFragment, unknown>;
export const SystemActorPartsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SystemActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"systemId"}}]}}]} as unknown as DocumentNode<SystemActorPartsFragment, unknown>;
export const MachineUserActorPartsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MachineUserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"machineUserId"}}]}}]} as unknown as DocumentNode<MachineUserActorPartsFragment, unknown>;
export const InternalActorPartsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"InternalActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Actor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SystemActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MachineUserActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SystemActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"systemId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MachineUserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"machineUserId"}}]}}]} as unknown as DocumentNode<InternalActorPartsFragment, unknown>;
export const CustomerGroupPartsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CustomerGroupParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}}]} as unknown as DocumentNode<CustomerGroupPartsFragment, unknown>;
export const CustomerGroupMembershipPartsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CustomerGroupMembershipParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerGroupMembership"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"customerId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"InternalActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"InternalActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"customerGroup"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CustomerGroupParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SystemActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"systemId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MachineUserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"machineUserId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DateTimeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"iso8601"}},{"kind":"Field","name":{"kind":"Name","value":"unixTimestamp"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"InternalActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Actor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SystemActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MachineUserActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CustomerGroupParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}}]} as unknown as DocumentNode<CustomerGroupMembershipPartsFragment, unknown>;
export const CustomerPartsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CustomerParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Customer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"shortName"}},{"kind":"Field","name":{"kind":"Name","value":"externalId"}},{"kind":"Field","name":{"kind":"Name","value":"email"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"isVerified"}},{"kind":"Field","name":{"kind":"Name","value":"verifiedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"statusChangedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"assignedToUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"assignedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"lastIdleAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"InternalActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"markedAsSpamAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SystemActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"systemId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MachineUserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"machineUserId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DateTimeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"iso8601"}},{"kind":"Field","name":{"kind":"Name","value":"unixTimestamp"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"InternalActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Actor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SystemActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MachineUserActorParts"}}]}}]}}]} as unknown as DocumentNode<CustomerPartsFragment, unknown>;
export const EmailActorPartsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EmailActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EmailActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerEmailActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserEmailActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SupportEmailAddressEmailActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"supportEmailAddress"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DeletedCustomerEmailActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}}]}}]}}]} as unknown as DocumentNode<EmailActorPartsFragment, unknown>;
export const EmailParticipantPartsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EmailParticipantParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EmailParticipant"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"emailActor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"EmailActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EmailActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EmailActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerEmailActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserEmailActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SupportEmailAddressEmailActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"supportEmailAddress"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DeletedCustomerEmailActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}}]}}]}}]} as unknown as DocumentNode<EmailParticipantPartsFragment, unknown>;
export const EmailPartsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EmailParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Email"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"inReplyToEmailId"}},{"kind":"Field","name":{"kind":"Name","value":"from"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"EmailParticipantParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"to"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"EmailParticipantParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"additionalRecipients"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"EmailParticipantParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"hiddenRecipients"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"EmailParticipantParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"subject"}},{"kind":"Field","name":{"kind":"Name","value":"textContent"}},{"kind":"Field","name":{"kind":"Name","value":"markdownContent"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"attachments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AttachmentParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EmailActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EmailActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerEmailActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserEmailActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SupportEmailAddressEmailActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"supportEmailAddress"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DeletedCustomerEmailActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FileSizeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FileSize"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"kiloBytes"}},{"kind":"Field","name":{"kind":"Name","value":"megaBytes"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DateTimeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"iso8601"}},{"kind":"Field","name":{"kind":"Name","value":"unixTimestamp"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EmailParticipantParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EmailParticipant"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"emailActor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"EmailActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AttachmentParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Attachment"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fileName"}},{"kind":"Field","name":{"kind":"Name","value":"fileSize"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FileSizeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"fileExtension"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}}]}}]} as unknown as DocumentNode<EmailPartsFragment, unknown>;
export const IssuePriorityPartsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IssuePriorityParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IssuePriority"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]} as unknown as DocumentNode<IssuePriorityPartsFragment, unknown>;
export const CustomerActorPartsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CustomerActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}}]}}]} as unknown as DocumentNode<CustomerActorPartsFragment, unknown>;
export const DeletedCustomerActorPartsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DeletedCustomerActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DeletedCustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}}]}}]} as unknown as DocumentNode<DeletedCustomerActorPartsFragment, unknown>;
export const ActorPartsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Actor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CustomerActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SystemActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MachineUserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DeletedCustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DeletedCustomerActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CustomerActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SystemActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"systemId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MachineUserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"machineUserId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DeletedCustomerActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DeletedCustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}}]}}]} as unknown as DocumentNode<ActorPartsFragment, unknown>;
export const IssueTypePartsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IssueTypeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IssueType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"publicName"}},{"kind":"Field","name":{"kind":"Name","value":"isArchived"}},{"kind":"Field","name":{"kind":"Name","value":"defaultIssuePriority"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IssuePriorityParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IssuePriorityParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IssuePriority"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]} as unknown as DocumentNode<IssueTypePartsFragment, unknown>;
export const IssuePartsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IssueParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Issue"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"issueKey"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"customer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"priority"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IssuePriorityParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"issueType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IssueTypeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CustomerActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SystemActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"systemId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MachineUserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"machineUserId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DeletedCustomerActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DeletedCustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IssuePriorityParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IssuePriority"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DateTimeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"iso8601"}},{"kind":"Field","name":{"kind":"Name","value":"unixTimestamp"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Actor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CustomerActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SystemActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MachineUserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DeletedCustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DeletedCustomerActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IssueTypeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IssueType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"publicName"}},{"kind":"Field","name":{"kind":"Name","value":"isArchived"}},{"kind":"Field","name":{"kind":"Name","value":"defaultIssuePriority"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IssuePriorityParts"}}]}}]}}]} as unknown as DocumentNode<IssuePartsFragment, unknown>;
export const MutationErrorPartsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MutationErrorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MutationError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"field"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]} as unknown as DocumentNode<MutationErrorPartsFragment, unknown>;
export const PageInfoPartsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PageInfoParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}}]} as unknown as DocumentNode<PageInfoPartsFragment, unknown>;
export const LabelTypePartsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LabelTypeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LabelType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"isArchived"}},{"kind":"Field","name":{"kind":"Name","value":"archivedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"archivedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CustomerActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SystemActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"systemId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MachineUserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"machineUserId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DeletedCustomerActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DeletedCustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DateTimeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"iso8601"}},{"kind":"Field","name":{"kind":"Name","value":"unixTimestamp"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Actor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CustomerActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SystemActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MachineUserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DeletedCustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DeletedCustomerActorParts"}}]}}]}}]} as unknown as DocumentNode<LabelTypePartsFragment, unknown>;
export const LabelPartsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LabelParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Label"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"labelType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LabelTypeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DateTimeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"iso8601"}},{"kind":"Field","name":{"kind":"Name","value":"unixTimestamp"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CustomerActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SystemActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"systemId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MachineUserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"machineUserId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DeletedCustomerActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DeletedCustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Actor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CustomerActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SystemActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MachineUserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DeletedCustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DeletedCustomerActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LabelTypeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LabelType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"isArchived"}},{"kind":"Field","name":{"kind":"Name","value":"archivedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"archivedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}}]}}]} as unknown as DocumentNode<LabelPartsFragment, unknown>;
export const ThreadPartsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ThreadParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Thread"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"externalId"}},{"kind":"Field","name":{"kind":"Name","value":"customer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"statusChangedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"previewText"}},{"kind":"Field","name":{"kind":"Name","value":"priority"}},{"kind":"Field","name":{"kind":"Name","value":"labels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LabelParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"assignedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"assignedTo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DateTimeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"iso8601"}},{"kind":"Field","name":{"kind":"Name","value":"unixTimestamp"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CustomerActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SystemActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"systemId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MachineUserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"machineUserId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DeletedCustomerActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DeletedCustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Actor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CustomerActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SystemActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MachineUserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DeletedCustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DeletedCustomerActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LabelTypeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LabelType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"isArchived"}},{"kind":"Field","name":{"kind":"Name","value":"archivedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"archivedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LabelParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Label"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"labelType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LabelTypeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}}]}}]} as unknown as DocumentNode<ThreadPartsFragment, unknown>;
export const TimelineEntryPartsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TimelineEntryParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TimelineEntry"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}},{"kind":"Field","name":{"kind":"Name","value":"timestamp"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"iso8601"}}]}},{"kind":"Field","name":{"kind":"Name","value":"actor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"entry"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CustomerActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SystemActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"systemId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MachineUserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"machineUserId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DeletedCustomerActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DeletedCustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Actor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CustomerActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SystemActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MachineUserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DeletedCustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DeletedCustomerActorParts"}}]}}]}}]} as unknown as DocumentNode<TimelineEntryPartsFragment, unknown>;
export const WorkspacePartsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"WorkspaceParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Workspace"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"publicName"}},{"kind":"Field","name":{"kind":"Name","value":"isDemoWorkspace"}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CustomerActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SystemActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"systemId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MachineUserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"machineUserId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DeletedCustomerActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DeletedCustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Actor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CustomerActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SystemActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MachineUserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DeletedCustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DeletedCustomerActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DateTimeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"iso8601"}},{"kind":"Field","name":{"kind":"Name","value":"unixTimestamp"}}]}}]} as unknown as DocumentNode<WorkspacePartsFragment, unknown>;
export const AddCustomerToCustomerGroupsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"addCustomerToCustomerGroups"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AddCustomerToCustomerGroupsInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addCustomerToCustomerGroups"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"customerGroupMemberships"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CustomerGroupMembershipParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"error"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MutationErrorParts"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DateTimeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"iso8601"}},{"kind":"Field","name":{"kind":"Name","value":"unixTimestamp"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SystemActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"systemId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MachineUserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"machineUserId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"InternalActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Actor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SystemActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MachineUserActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CustomerGroupParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CustomerGroupMembershipParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerGroupMembership"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"customerId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"InternalActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"InternalActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"customerGroup"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CustomerGroupParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MutationErrorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MutationError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"field"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]} as unknown as DocumentNode<AddCustomerToCustomerGroupsMutation, AddCustomerToCustomerGroupsMutationVariables>;
export const AddLabelsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"addLabels"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AddLabelsInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addLabels"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"labels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LabelParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"error"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MutationErrorParts"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DateTimeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"iso8601"}},{"kind":"Field","name":{"kind":"Name","value":"unixTimestamp"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CustomerActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SystemActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"systemId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MachineUserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"machineUserId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DeletedCustomerActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DeletedCustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Actor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CustomerActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SystemActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MachineUserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DeletedCustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DeletedCustomerActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LabelTypeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LabelType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"isArchived"}},{"kind":"Field","name":{"kind":"Name","value":"archivedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"archivedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LabelParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Label"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"labelType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LabelTypeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MutationErrorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MutationError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"field"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]} as unknown as DocumentNode<AddLabelsMutation, AddLabelsMutationVariables>;
export const ArchiveLabelTypeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"archiveLabelType"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ArchiveLabelTypeInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"archiveLabelType"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"labelType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LabelTypeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"error"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DateTimeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"iso8601"}},{"kind":"Field","name":{"kind":"Name","value":"unixTimestamp"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CustomerActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SystemActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"systemId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MachineUserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"machineUserId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DeletedCustomerActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DeletedCustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Actor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CustomerActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SystemActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MachineUserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DeletedCustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DeletedCustomerActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LabelTypeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LabelType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"isArchived"}},{"kind":"Field","name":{"kind":"Name","value":"archivedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"archivedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}}]}}]} as unknown as DocumentNode<ArchiveLabelTypeMutation, ArchiveLabelTypeMutationVariables>;
export const AssignThreadDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"assignThread"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AssignThreadInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"assignThread"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"thread"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ThreadParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"error"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MutationErrorParts"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DateTimeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"iso8601"}},{"kind":"Field","name":{"kind":"Name","value":"unixTimestamp"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CustomerActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SystemActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"systemId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MachineUserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"machineUserId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DeletedCustomerActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DeletedCustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Actor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CustomerActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SystemActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MachineUserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DeletedCustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DeletedCustomerActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LabelTypeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LabelType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"isArchived"}},{"kind":"Field","name":{"kind":"Name","value":"archivedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"archivedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LabelParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Label"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"labelType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LabelTypeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ThreadParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Thread"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"externalId"}},{"kind":"Field","name":{"kind":"Name","value":"customer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"statusChangedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"previewText"}},{"kind":"Field","name":{"kind":"Name","value":"priority"}},{"kind":"Field","name":{"kind":"Name","value":"labels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LabelParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"assignedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"assignedTo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MutationErrorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MutationError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"field"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]} as unknown as DocumentNode<AssignThreadMutation, AssignThreadMutationVariables>;
export const ChangeCustomerStatusDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"changeCustomerStatus"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ChangeCustomerStatusInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"changeCustomerStatus"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"customer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CustomerParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"error"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MutationErrorParts"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DateTimeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"iso8601"}},{"kind":"Field","name":{"kind":"Name","value":"unixTimestamp"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SystemActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"systemId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MachineUserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"machineUserId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"InternalActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Actor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SystemActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MachineUserActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CustomerParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Customer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"shortName"}},{"kind":"Field","name":{"kind":"Name","value":"externalId"}},{"kind":"Field","name":{"kind":"Name","value":"email"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"isVerified"}},{"kind":"Field","name":{"kind":"Name","value":"verifiedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"statusChangedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"assignedToUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"assignedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"lastIdleAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"InternalActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"markedAsSpamAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MutationErrorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MutationError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"field"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]} as unknown as DocumentNode<ChangeCustomerStatusMutation, ChangeCustomerStatusMutationVariables>;
export const ChangeThreadPriorityDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"changeThreadPriority"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ChangeThreadPriorityInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"changeThreadPriority"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"thread"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ThreadParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"error"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MutationErrorParts"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DateTimeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"iso8601"}},{"kind":"Field","name":{"kind":"Name","value":"unixTimestamp"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CustomerActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SystemActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"systemId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MachineUserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"machineUserId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DeletedCustomerActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DeletedCustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Actor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CustomerActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SystemActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MachineUserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DeletedCustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DeletedCustomerActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LabelTypeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LabelType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"isArchived"}},{"kind":"Field","name":{"kind":"Name","value":"archivedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"archivedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LabelParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Label"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"labelType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LabelTypeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ThreadParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Thread"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"externalId"}},{"kind":"Field","name":{"kind":"Name","value":"customer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"statusChangedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"previewText"}},{"kind":"Field","name":{"kind":"Name","value":"priority"}},{"kind":"Field","name":{"kind":"Name","value":"labels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LabelParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"assignedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"assignedTo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MutationErrorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MutationError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"field"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]} as unknown as DocumentNode<ChangeThreadPriorityMutation, ChangeThreadPriorityMutationVariables>;
export const CreateAttachmentUploadUrlDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createAttachmentUploadUrl"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateAttachmentUploadUrlInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createAttachmentUploadUrl"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attachmentUploadUrl"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AttachmentUploadUrlParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"error"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MutationErrorParts"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FileSizeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FileSize"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"kiloBytes"}},{"kind":"Field","name":{"kind":"Name","value":"megaBytes"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DateTimeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"iso8601"}},{"kind":"Field","name":{"kind":"Name","value":"unixTimestamp"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AttachmentParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Attachment"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fileName"}},{"kind":"Field","name":{"kind":"Name","value":"fileSize"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FileSizeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"fileExtension"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AttachmentUploadUrlParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AttachmentUploadUrl"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"attachment"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AttachmentParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"uploadFormUrl"}},{"kind":"Field","name":{"kind":"Name","value":"uploadFormData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"expiresAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MutationErrorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MutationError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"field"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]} as unknown as DocumentNode<CreateAttachmentUploadUrlMutation, CreateAttachmentUploadUrlMutationVariables>;
export const CreateCustomerCardConfigDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createCustomerCardConfig"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateCustomerCardConfigInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createCustomerCardConfig"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"customerCardConfig"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CustomerCardConfigParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"error"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MutationErrorParts"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DateTimeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"iso8601"}},{"kind":"Field","name":{"kind":"Name","value":"unixTimestamp"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CustomerCardConfigParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerCardConfig"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"defaultTimeToLiveSeconds"}},{"kind":"Field","name":{"kind":"Name","value":"apiUrl"}},{"kind":"Field","name":{"kind":"Name","value":"order"}},{"kind":"Field","name":{"kind":"Name","value":"apiHeaders"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"isEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MutationErrorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MutationError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"field"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]} as unknown as DocumentNode<CreateCustomerCardConfigMutation, CreateCustomerCardConfigMutationVariables>;
export const CreateIssueDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createIssue"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateIssueInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createIssue"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"issue"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IssueParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"error"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MutationErrorParts"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IssuePriorityParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IssuePriority"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DateTimeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"iso8601"}},{"kind":"Field","name":{"kind":"Name","value":"unixTimestamp"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CustomerActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SystemActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"systemId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MachineUserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"machineUserId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DeletedCustomerActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DeletedCustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Actor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CustomerActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SystemActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MachineUserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DeletedCustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DeletedCustomerActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IssueTypeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IssueType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"publicName"}},{"kind":"Field","name":{"kind":"Name","value":"isArchived"}},{"kind":"Field","name":{"kind":"Name","value":"defaultIssuePriority"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IssuePriorityParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IssueParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Issue"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"issueKey"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"customer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"priority"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IssuePriorityParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"issueType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IssueTypeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MutationErrorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MutationError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"field"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]} as unknown as DocumentNode<CreateIssueMutation, CreateIssueMutationVariables>;
export const CreateThreadDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createThread"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateThreadInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createThread"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"thread"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ThreadParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"error"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MutationErrorParts"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DateTimeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"iso8601"}},{"kind":"Field","name":{"kind":"Name","value":"unixTimestamp"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CustomerActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SystemActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"systemId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MachineUserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"machineUserId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DeletedCustomerActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DeletedCustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Actor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CustomerActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SystemActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MachineUserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DeletedCustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DeletedCustomerActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LabelTypeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LabelType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"isArchived"}},{"kind":"Field","name":{"kind":"Name","value":"archivedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"archivedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LabelParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Label"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"labelType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LabelTypeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ThreadParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Thread"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"externalId"}},{"kind":"Field","name":{"kind":"Name","value":"customer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"statusChangedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"previewText"}},{"kind":"Field","name":{"kind":"Name","value":"priority"}},{"kind":"Field","name":{"kind":"Name","value":"labels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LabelParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"assignedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"assignedTo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MutationErrorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MutationError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"field"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]} as unknown as DocumentNode<CreateThreadMutation, CreateThreadMutationVariables>;
export const DeleteCustomerCardConfigDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteCustomerCardConfig"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeleteCustomerCardConfigInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteCustomerCardConfig"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"error"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MutationErrorParts"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MutationErrorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MutationError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"field"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]} as unknown as DocumentNode<DeleteCustomerCardConfigMutation, DeleteCustomerCardConfigMutationVariables>;
export const DeleteIssueDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteIssue"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeleteIssueInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteIssue"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"issue"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IssueParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"error"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MutationErrorParts"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IssuePriorityParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IssuePriority"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DateTimeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"iso8601"}},{"kind":"Field","name":{"kind":"Name","value":"unixTimestamp"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CustomerActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SystemActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"systemId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MachineUserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"machineUserId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DeletedCustomerActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DeletedCustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Actor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CustomerActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SystemActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MachineUserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DeletedCustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DeletedCustomerActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IssueTypeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IssueType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"publicName"}},{"kind":"Field","name":{"kind":"Name","value":"isArchived"}},{"kind":"Field","name":{"kind":"Name","value":"defaultIssuePriority"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IssuePriorityParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IssueParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Issue"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"issueKey"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"customer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"priority"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IssuePriorityParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"issueType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IssueTypeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MutationErrorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MutationError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"field"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]} as unknown as DocumentNode<DeleteIssueMutation, DeleteIssueMutationVariables>;
export const DeleteLabelsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteLabels"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeleteLabelsInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteLabels"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"error"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MutationErrorParts"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MutationErrorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MutationError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"field"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]} as unknown as DocumentNode<DeleteLabelsMutation, DeleteLabelsMutationVariables>;
export const MarkThreadAsDoneDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"markThreadAsDone"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MarkThreadAsDoneInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"markThreadAsDone"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"thread"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ThreadParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"error"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MutationErrorParts"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DateTimeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"iso8601"}},{"kind":"Field","name":{"kind":"Name","value":"unixTimestamp"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CustomerActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SystemActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"systemId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MachineUserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"machineUserId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DeletedCustomerActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DeletedCustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Actor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CustomerActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SystemActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MachineUserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DeletedCustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DeletedCustomerActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LabelTypeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LabelType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"isArchived"}},{"kind":"Field","name":{"kind":"Name","value":"archivedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"archivedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LabelParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Label"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"labelType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LabelTypeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ThreadParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Thread"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"externalId"}},{"kind":"Field","name":{"kind":"Name","value":"customer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"statusChangedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"previewText"}},{"kind":"Field","name":{"kind":"Name","value":"priority"}},{"kind":"Field","name":{"kind":"Name","value":"labels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LabelParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"assignedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"assignedTo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MutationErrorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MutationError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"field"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]} as unknown as DocumentNode<MarkThreadAsDoneMutation, MarkThreadAsDoneMutationVariables>;
export const MarkThreadAsTodoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"markThreadAsTodo"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MarkThreadAsTodoInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"markThreadAsTodo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"thread"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ThreadParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"error"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MutationErrorParts"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DateTimeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"iso8601"}},{"kind":"Field","name":{"kind":"Name","value":"unixTimestamp"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CustomerActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SystemActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"systemId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MachineUserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"machineUserId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DeletedCustomerActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DeletedCustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Actor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CustomerActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SystemActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MachineUserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DeletedCustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DeletedCustomerActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LabelTypeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LabelType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"isArchived"}},{"kind":"Field","name":{"kind":"Name","value":"archivedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"archivedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LabelParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Label"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"labelType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LabelTypeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ThreadParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Thread"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"externalId"}},{"kind":"Field","name":{"kind":"Name","value":"customer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"statusChangedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"previewText"}},{"kind":"Field","name":{"kind":"Name","value":"priority"}},{"kind":"Field","name":{"kind":"Name","value":"labels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LabelParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"assignedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"assignedTo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MutationErrorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MutationError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"field"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]} as unknown as DocumentNode<MarkThreadAsTodoMutation, MarkThreadAsTodoMutationVariables>;
export const RemoveCustomerFromCustomerGroupsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"removeCustomerFromCustomerGroups"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RemoveCustomerFromCustomerGroupsInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeCustomerFromCustomerGroups"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"error"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MutationErrorParts"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MutationErrorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MutationError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"field"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]} as unknown as DocumentNode<RemoveCustomerFromCustomerGroupsMutation, RemoveCustomerFromCustomerGroupsMutationVariables>;
export const ReplyToEmailDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"replyToEmail"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ReplyToEmailInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"replyToEmail"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"EmailParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"error"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MutationErrorParts"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EmailActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EmailActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerEmailActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserEmailActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SupportEmailAddressEmailActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"supportEmailAddress"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DeletedCustomerEmailActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EmailParticipantParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EmailParticipant"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"emailActor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"EmailActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DateTimeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"iso8601"}},{"kind":"Field","name":{"kind":"Name","value":"unixTimestamp"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FileSizeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FileSize"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"kiloBytes"}},{"kind":"Field","name":{"kind":"Name","value":"megaBytes"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AttachmentParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Attachment"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fileName"}},{"kind":"Field","name":{"kind":"Name","value":"fileSize"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FileSizeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"fileExtension"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EmailParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Email"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"inReplyToEmailId"}},{"kind":"Field","name":{"kind":"Name","value":"from"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"EmailParticipantParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"to"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"EmailParticipantParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"additionalRecipients"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"EmailParticipantParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"hiddenRecipients"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"EmailParticipantParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"subject"}},{"kind":"Field","name":{"kind":"Name","value":"textContent"}},{"kind":"Field","name":{"kind":"Name","value":"markdownContent"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"attachments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AttachmentParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MutationErrorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MutationError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"field"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]} as unknown as DocumentNode<ReplyToEmailMutation, ReplyToEmailMutationVariables>;
export const ResolveIssueDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"resolveIssue"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ResolveIssueInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"resolveIssue"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"issue"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IssueParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"error"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MutationErrorParts"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IssuePriorityParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IssuePriority"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DateTimeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"iso8601"}},{"kind":"Field","name":{"kind":"Name","value":"unixTimestamp"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CustomerActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SystemActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"systemId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MachineUserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"machineUserId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DeletedCustomerActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DeletedCustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Actor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CustomerActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SystemActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MachineUserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DeletedCustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DeletedCustomerActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IssueTypeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IssueType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"publicName"}},{"kind":"Field","name":{"kind":"Name","value":"isArchived"}},{"kind":"Field","name":{"kind":"Name","value":"defaultIssuePriority"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IssuePriorityParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IssueParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Issue"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"issueKey"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"customer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"priority"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IssuePriorityParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"issueType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IssueTypeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MutationErrorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MutationError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"field"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]} as unknown as DocumentNode<ResolveIssueMutation, ResolveIssueMutationVariables>;
export const SendChatDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"sendChat"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SendChatInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sendChat"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"chat"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ChatParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"error"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MutationErrorParts"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DateTimeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"iso8601"}},{"kind":"Field","name":{"kind":"Name","value":"unixTimestamp"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FileSizeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FileSize"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"kiloBytes"}},{"kind":"Field","name":{"kind":"Name","value":"megaBytes"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AttachmentParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Attachment"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fileName"}},{"kind":"Field","name":{"kind":"Name","value":"fileSize"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FileSizeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"fileExtension"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ChatParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Chat"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"customerReadAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"attachments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AttachmentParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MutationErrorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MutationError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"field"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]} as unknown as DocumentNode<SendChatMutation, SendChatMutationVariables>;
export const SendNewEmailDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"sendNewEmail"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SendNewEmailInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sendNewEmail"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"EmailParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"error"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MutationErrorParts"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EmailActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EmailActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerEmailActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserEmailActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SupportEmailAddressEmailActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"supportEmailAddress"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DeletedCustomerEmailActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EmailParticipantParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EmailParticipant"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"emailActor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"EmailActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DateTimeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"iso8601"}},{"kind":"Field","name":{"kind":"Name","value":"unixTimestamp"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FileSizeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FileSize"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"kiloBytes"}},{"kind":"Field","name":{"kind":"Name","value":"megaBytes"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AttachmentParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Attachment"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fileName"}},{"kind":"Field","name":{"kind":"Name","value":"fileSize"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FileSizeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"fileExtension"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EmailParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Email"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"inReplyToEmailId"}},{"kind":"Field","name":{"kind":"Name","value":"from"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"EmailParticipantParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"to"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"EmailParticipantParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"additionalRecipients"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"EmailParticipantParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"hiddenRecipients"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"EmailParticipantParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"subject"}},{"kind":"Field","name":{"kind":"Name","value":"textContent"}},{"kind":"Field","name":{"kind":"Name","value":"markdownContent"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"attachments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AttachmentParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MutationErrorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MutationError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"field"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]} as unknown as DocumentNode<SendNewEmailMutation, SendNewEmailMutationVariables>;
export const SnoozeThreadDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"snoozeThread"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SnoozeThreadInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"snoozeThread"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"thread"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ThreadParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"error"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MutationErrorParts"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DateTimeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"iso8601"}},{"kind":"Field","name":{"kind":"Name","value":"unixTimestamp"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CustomerActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SystemActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"systemId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MachineUserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"machineUserId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DeletedCustomerActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DeletedCustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Actor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CustomerActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SystemActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MachineUserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DeletedCustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DeletedCustomerActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LabelTypeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LabelType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"isArchived"}},{"kind":"Field","name":{"kind":"Name","value":"archivedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"archivedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LabelParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Label"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"labelType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LabelTypeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ThreadParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Thread"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"externalId"}},{"kind":"Field","name":{"kind":"Name","value":"customer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"statusChangedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"previewText"}},{"kind":"Field","name":{"kind":"Name","value":"priority"}},{"kind":"Field","name":{"kind":"Name","value":"labels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LabelParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"assignedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"assignedTo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MutationErrorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MutationError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"field"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]} as unknown as DocumentNode<SnoozeThreadMutation, SnoozeThreadMutationVariables>;
export const UnassignThreadDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"unassignThread"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UnassignThreadInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"unassignThread"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"thread"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ThreadParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"error"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MutationErrorParts"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DateTimeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"iso8601"}},{"kind":"Field","name":{"kind":"Name","value":"unixTimestamp"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CustomerActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SystemActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"systemId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MachineUserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"machineUserId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DeletedCustomerActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DeletedCustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Actor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CustomerActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SystemActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MachineUserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DeletedCustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DeletedCustomerActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LabelTypeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LabelType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"isArchived"}},{"kind":"Field","name":{"kind":"Name","value":"archivedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"archivedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LabelParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Label"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"labelType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LabelTypeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ThreadParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Thread"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"externalId"}},{"kind":"Field","name":{"kind":"Name","value":"customer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"statusChangedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"previewText"}},{"kind":"Field","name":{"kind":"Name","value":"priority"}},{"kind":"Field","name":{"kind":"Name","value":"labels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LabelParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"assignedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"assignedTo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MutationErrorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MutationError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"field"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]} as unknown as DocumentNode<UnassignThreadMutation, UnassignThreadMutationVariables>;
export const UpdateCustomerCardConfigDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateCustomerCardConfig"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateCustomerCardConfigInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateCustomerCardConfig"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"customerCardConfig"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CustomerCardConfigParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"error"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MutationErrorParts"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DateTimeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"iso8601"}},{"kind":"Field","name":{"kind":"Name","value":"unixTimestamp"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CustomerCardConfigParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerCardConfig"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"defaultTimeToLiveSeconds"}},{"kind":"Field","name":{"kind":"Name","value":"apiUrl"}},{"kind":"Field","name":{"kind":"Name","value":"order"}},{"kind":"Field","name":{"kind":"Name","value":"apiHeaders"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"isEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MutationErrorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MutationError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"field"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]} as unknown as DocumentNode<UpdateCustomerCardConfigMutation, UpdateCustomerCardConfigMutationVariables>;
export const UpsertCustomTimelineEntryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"upsertCustomTimelineEntry"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpsertCustomTimelineEntryInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"upsertCustomTimelineEntry"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"}},{"kind":"Field","name":{"kind":"Name","value":"timelineEntry"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TimelineEntryParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"error"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MutationErrorParts"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CustomerActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SystemActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"systemId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MachineUserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"machineUserId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DeletedCustomerActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DeletedCustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Actor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CustomerActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SystemActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MachineUserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DeletedCustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DeletedCustomerActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TimelineEntryParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TimelineEntry"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}},{"kind":"Field","name":{"kind":"Name","value":"timestamp"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"iso8601"}}]}},{"kind":"Field","name":{"kind":"Name","value":"actor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"entry"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MutationErrorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MutationError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"field"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]} as unknown as DocumentNode<UpsertCustomTimelineEntryMutation, UpsertCustomTimelineEntryMutationVariables>;
export const UpsertCustomerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"upsertCustomer"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpsertCustomerInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"upsertCustomer"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"}},{"kind":"Field","name":{"kind":"Name","value":"customer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CustomerParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"error"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MutationErrorParts"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DateTimeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"iso8601"}},{"kind":"Field","name":{"kind":"Name","value":"unixTimestamp"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SystemActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"systemId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MachineUserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"machineUserId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"InternalActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Actor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SystemActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MachineUserActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CustomerParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Customer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"shortName"}},{"kind":"Field","name":{"kind":"Name","value":"externalId"}},{"kind":"Field","name":{"kind":"Name","value":"email"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"isVerified"}},{"kind":"Field","name":{"kind":"Name","value":"verifiedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"statusChangedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"assignedToUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"assignedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"lastIdleAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"InternalActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"markedAsSpamAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MutationErrorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MutationError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"field"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]} as unknown as DocumentNode<UpsertCustomerMutation, UpsertCustomerMutationVariables>;
export const CustomerByEmailDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"customerByEmail"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"customerByEmail"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CustomerParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DateTimeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"iso8601"}},{"kind":"Field","name":{"kind":"Name","value":"unixTimestamp"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SystemActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"systemId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MachineUserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"machineUserId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"InternalActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Actor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SystemActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MachineUserActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CustomerParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Customer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"shortName"}},{"kind":"Field","name":{"kind":"Name","value":"externalId"}},{"kind":"Field","name":{"kind":"Name","value":"email"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"isVerified"}},{"kind":"Field","name":{"kind":"Name","value":"verifiedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"statusChangedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"assignedToUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"assignedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"lastIdleAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"InternalActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"markedAsSpamAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}}]}}]} as unknown as DocumentNode<CustomerByEmailQuery, CustomerByEmailQueryVariables>;
export const CustomerByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"customerById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"customerId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"customer"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"customerId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"customerId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CustomerParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DateTimeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"iso8601"}},{"kind":"Field","name":{"kind":"Name","value":"unixTimestamp"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SystemActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"systemId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MachineUserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"machineUserId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"InternalActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Actor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SystemActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MachineUserActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CustomerParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Customer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"shortName"}},{"kind":"Field","name":{"kind":"Name","value":"externalId"}},{"kind":"Field","name":{"kind":"Name","value":"email"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"isVerified"}},{"kind":"Field","name":{"kind":"Name","value":"verifiedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"statusChangedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"assignedToUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"assignedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"lastIdleAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"InternalActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"markedAsSpamAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}}]}}]} as unknown as DocumentNode<CustomerByIdQuery, CustomerByIdQueryVariables>;
export const CustomerGroupByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"customerGroupById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"customerGroupId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"customerGroup"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"customerGroupId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"customerGroupId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CustomerGroupParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CustomerGroupParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}}]} as unknown as DocumentNode<CustomerGroupByIdQuery, CustomerGroupByIdQueryVariables>;
export const CustomerGroupsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"customerGroups"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"before"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"last"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"customerGroups"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}},{"kind":"Argument","name":{"kind":"Name","value":"before"},"value":{"kind":"Variable","name":{"kind":"Name","value":"before"}}},{"kind":"Argument","name":{"kind":"Name","value":"last"},"value":{"kind":"Variable","name":{"kind":"Name","value":"last"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CustomerGroupParts"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PageInfoParts"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CustomerGroupParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PageInfoParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}}]} as unknown as DocumentNode<CustomerGroupsQuery, CustomerGroupsQueryVariables>;
export const CustomersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"customers"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filters"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"CustomersFilter"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sortBy"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"CustomersSort"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"last"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"before"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"customers"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filters"}}},{"kind":"Argument","name":{"kind":"Name","value":"sortBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sortBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}},{"kind":"Argument","name":{"kind":"Name","value":"last"},"value":{"kind":"Variable","name":{"kind":"Name","value":"last"}}},{"kind":"Argument","name":{"kind":"Name","value":"before"},"value":{"kind":"Variable","name":{"kind":"Name","value":"before"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CustomerParts"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PageInfoParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DateTimeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"iso8601"}},{"kind":"Field","name":{"kind":"Name","value":"unixTimestamp"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SystemActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"systemId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MachineUserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"machineUserId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"InternalActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Actor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SystemActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MachineUserActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CustomerParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Customer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"shortName"}},{"kind":"Field","name":{"kind":"Name","value":"externalId"}},{"kind":"Field","name":{"kind":"Name","value":"email"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"isVerified"}},{"kind":"Field","name":{"kind":"Name","value":"verifiedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"statusChangedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"assignedToUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"assignedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"lastIdleAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"InternalActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"markedAsSpamAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PageInfoParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}}]} as unknown as DocumentNode<CustomersQuery, CustomersQueryVariables>;
export const IssuesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"issues"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filters"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"IssuesFilter"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sortBy"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"IssuesSort"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"last"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"before"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"issues"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filters"}}},{"kind":"Argument","name":{"kind":"Name","value":"sortBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sortBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}},{"kind":"Argument","name":{"kind":"Name","value":"last"},"value":{"kind":"Variable","name":{"kind":"Name","value":"last"}}},{"kind":"Argument","name":{"kind":"Name","value":"before"},"value":{"kind":"Variable","name":{"kind":"Name","value":"before"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IssueParts"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PageInfoParts"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IssuePriorityParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IssuePriority"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DateTimeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"iso8601"}},{"kind":"Field","name":{"kind":"Name","value":"unixTimestamp"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CustomerActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SystemActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"systemId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MachineUserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"machineUserId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DeletedCustomerActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DeletedCustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Actor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CustomerActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SystemActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MachineUserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DeletedCustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DeletedCustomerActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IssueTypeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"IssueType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"publicName"}},{"kind":"Field","name":{"kind":"Name","value":"isArchived"}},{"kind":"Field","name":{"kind":"Name","value":"defaultIssuePriority"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IssuePriorityParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"IssueParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Issue"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"issueKey"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"customer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"priority"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IssuePriorityParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"issueType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"IssueTypeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"deletedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PageInfoParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}}]} as unknown as DocumentNode<IssuesQuery, IssuesQueryVariables>;
export const LabelTypeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"labelType"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"labelTypeId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"labelType"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"labelTypeId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"labelTypeId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LabelTypeParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DateTimeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"iso8601"}},{"kind":"Field","name":{"kind":"Name","value":"unixTimestamp"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CustomerActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SystemActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"systemId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MachineUserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"machineUserId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DeletedCustomerActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DeletedCustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Actor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CustomerActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SystemActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MachineUserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DeletedCustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DeletedCustomerActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LabelTypeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LabelType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"isArchived"}},{"kind":"Field","name":{"kind":"Name","value":"archivedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"archivedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}}]}}]} as unknown as DocumentNode<LabelTypeQuery, LabelTypeQueryVariables>;
export const LabelTypesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"labelTypes"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filters"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"LabelTypeFilter"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"last"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"before"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"labelTypes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filters"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}},{"kind":"Argument","name":{"kind":"Name","value":"last"},"value":{"kind":"Variable","name":{"kind":"Name","value":"last"}}},{"kind":"Argument","name":{"kind":"Name","value":"before"},"value":{"kind":"Variable","name":{"kind":"Name","value":"before"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LabelTypeParts"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PageInfoParts"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DateTimeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"iso8601"}},{"kind":"Field","name":{"kind":"Name","value":"unixTimestamp"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CustomerActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SystemActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"systemId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MachineUserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"machineUserId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DeletedCustomerActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DeletedCustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Actor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CustomerActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SystemActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MachineUserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DeletedCustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DeletedCustomerActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LabelTypeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LabelType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"isArchived"}},{"kind":"Field","name":{"kind":"Name","value":"archivedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"archivedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PageInfoParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}}]} as unknown as DocumentNode<LabelTypesQuery, LabelTypesQueryVariables>;
export const MyWorkspaceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"myWorkspace"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"myWorkspace"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"WorkspaceParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CustomerActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SystemActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"systemId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MachineUserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"machineUserId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DeletedCustomerActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DeletedCustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Actor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CustomerActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SystemActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MachineUserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DeletedCustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DeletedCustomerActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DateTimeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"iso8601"}},{"kind":"Field","name":{"kind":"Name","value":"unixTimestamp"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"WorkspaceParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Workspace"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"publicName"}},{"kind":"Field","name":{"kind":"Name","value":"isDemoWorkspace"}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}}]}}]} as unknown as DocumentNode<MyWorkspaceQuery, MyWorkspaceQueryVariables>;
export const ThreadDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"thread"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"threadId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"thread"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"threadId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"threadId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ThreadParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DateTimeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"iso8601"}},{"kind":"Field","name":{"kind":"Name","value":"unixTimestamp"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CustomerActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SystemActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"systemId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MachineUserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"machineUserId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DeletedCustomerActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DeletedCustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Actor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CustomerActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SystemActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MachineUserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DeletedCustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DeletedCustomerActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LabelTypeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LabelType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"isArchived"}},{"kind":"Field","name":{"kind":"Name","value":"archivedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"archivedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LabelParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Label"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"labelType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LabelTypeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ThreadParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Thread"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"externalId"}},{"kind":"Field","name":{"kind":"Name","value":"customer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"statusChangedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"previewText"}},{"kind":"Field","name":{"kind":"Name","value":"priority"}},{"kind":"Field","name":{"kind":"Name","value":"labels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LabelParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"assignedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"assignedTo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}}]}}]} as unknown as DocumentNode<ThreadQuery, ThreadQueryVariables>;
export const ThreadsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"threads"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filters"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ThreadsFilter"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sortBy"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ThreadsSort"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"last"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"before"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"threads"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filters"}}},{"kind":"Argument","name":{"kind":"Name","value":"sortBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sortBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}},{"kind":"Argument","name":{"kind":"Name","value":"last"},"value":{"kind":"Variable","name":{"kind":"Name","value":"last"}}},{"kind":"Argument","name":{"kind":"Name","value":"before"},"value":{"kind":"Variable","name":{"kind":"Name","value":"before"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ThreadParts"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PageInfoParts"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DateTimeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"iso8601"}},{"kind":"Field","name":{"kind":"Name","value":"unixTimestamp"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CustomerActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SystemActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"systemId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MachineUserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"machineUserId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DeletedCustomerActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DeletedCustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Actor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CustomerActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SystemActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MachineUserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DeletedCustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DeletedCustomerActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LabelTypeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LabelType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"isArchived"}},{"kind":"Field","name":{"kind":"Name","value":"archivedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"archivedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LabelParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Label"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"labelType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LabelTypeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ThreadParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Thread"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"externalId"}},{"kind":"Field","name":{"kind":"Name","value":"customer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"statusChangedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"previewText"}},{"kind":"Field","name":{"kind":"Name","value":"priority"}},{"kind":"Field","name":{"kind":"Name","value":"labels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LabelParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"assignedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"assignedTo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PageInfoParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}}]} as unknown as DocumentNode<ThreadsQuery, ThreadsQueryVariables>;