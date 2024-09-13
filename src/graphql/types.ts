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

export type AddCustomerToTenantsInput = {
  customerIdentifier: CustomerIdentifierInput;
  tenantIdentifiers: Array<TenantIdentifierInput>;
};

export type AddCustomerToTenantsOutput = {
  __typename?: 'AddCustomerToTenantsOutput';
  customer: Maybe<Customer>;
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

export type AddMembersToTierInput = {
  memberIdentifiers: Array<TierMemberIdentifierInput>;
  tierIdentifier: TierIdentifierInput;
};

export type AddMembersToTierOutput = {
  __typename?: 'AddMembersToTierOutput';
  error: Maybe<MutationError>;
  memberships: Array<TierMembership>;
};

export type AddUserToActiveBillingRotaInput = {
  userId: Scalars['ID'];
};

export type AddUserToActiveBillingRotaOutput = {
  __typename?: 'AddUserToActiveBillingRotaOutput';
  billingRota: Maybe<BillingRota>;
  error: Maybe<MutationError>;
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

export type ArchiveLabelTypeInput = {
  labelTypeId: Scalars['ID'];
};

export type ArchiveLabelTypeOutput = {
  __typename?: 'ArchiveLabelTypeOutput';
  error: Maybe<MutationError>;
  labelType: Maybe<LabelType>;
};

export type AssignRolesToUserInput = {
  /** @deprecated Use roleKey instead. */
  roleIds?: InputMaybe<Array<Scalars['ID']>>;
  roleKey?: InputMaybe<RoleKey>;
  userId: Scalars['ID'];
  usingBillingRotaSeat?: InputMaybe<BooleanInput>;
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
  Email = 'EMAIL',
  MsTeams = 'MS_TEAMS',
  Slack = 'SLACK',
  ThreadDiscussion = 'THREAD_DISCUSSION'
}

export type AttachmentUploadUrl = {
  __typename?: 'AttachmentUploadUrl';
  attachment: Attachment;
  expiresAt: DateTime;
  uploadFormData: Array<UploadFormData>;
  uploadFormUrl: Scalars['String'];
};

export enum AttachmentVirusScanResult {
  /** The attachment is clean and safe to download. */
  Clean = 'CLEAN',
  /** The virus scan failed. */
  Failed = 'FAILED',
  /** The attachment is infected and should not be downloaded. */
  Infected = 'INFECTED',
  /** The virus scan is still pending. */
  Pending = 'PENDING'
}

export type Autoresponder = {
  __typename?: 'Autoresponder';
  conditions: Array<AutoresponderCondition>;
  createdAt: DateTime;
  createdBy: InternalActor;
  id: Scalars['ID'];
  isEnabled: Scalars['Boolean'];
  markdownContent: Maybe<Scalars['String']>;
  messageSources: Array<AutoresponderMessageSource>;
  name: Scalars['String'];
  order: Scalars['Int'];
  responseDelaySeconds: Scalars['Int'];
  textContent: Scalars['String'];
  updatedAt: DateTime;
  updatedBy: InternalActor;
};

export type AutoresponderBusinessHoursCondition = {
  __typename?: 'AutoresponderBusinessHoursCondition';
  isOutsideBusinessHours: Scalars['Boolean'];
};

export type AutoresponderCondition = AutoresponderBusinessHoursCondition | AutoresponderSupportEmailsCondition | AutoresponderTierCondition;

export type AutoresponderConditionInput = {
  isOutsideBusinessHours?: InputMaybe<Scalars['Boolean']>;
  supportEmailAddresses?: InputMaybe<Array<Scalars['String']>>;
  tierId?: InputMaybe<Scalars['ID']>;
};

export type AutoresponderConnection = {
  __typename?: 'AutoresponderConnection';
  edges: Array<AutoresponderEdge>;
  pageInfo: PageInfo;
};

export type AutoresponderEdge = {
  __typename?: 'AutoresponderEdge';
  cursor: Scalars['String'];
  node: Autoresponder;
};

export enum AutoresponderMessageSource {
  Api = 'API',
  Email = 'EMAIL',
  MsTeams = 'MS_TEAMS',
  Slack = 'SLACK'
}

export type AutoresponderOrderInput = {
  autoresponderId: Scalars['ID'];
  order: Scalars['Int'];
};

export type AutoresponderSupportEmailsCondition = {
  __typename?: 'AutoresponderSupportEmailsCondition';
  supportEmailAddresses: Array<Scalars['String']>;
};

export type AutoresponderTierCondition = {
  __typename?: 'AutoresponderTierCondition';
  tierId: Scalars['ID'];
};

export type BeforeBreachAction = {
  __typename?: 'BeforeBreachAction';
  beforeBreachMinutes: Scalars['Int'];
  createdAt: DateTime;
  createdBy: InternalActor;
  updatedAt: DateTime;
  updatedBy: InternalActor;
};

export type BeforeBreachActionInput = {
  beforeBreachMinutes: Scalars['Int'];
};

export type BillingFeatureEntitlement = {
  feature: FeatureKey;
  isEntitled: Scalars['Boolean'];
};

export enum BillingInterval {
  /** @deprecated Use BillingIntervalUnit.MONTH instead */
  Month = 'MONTH',
  /** @deprecated Use BillingIntervalUnit.YEAR instead */
  Year = 'YEAR'
}

export enum BillingIntervalUnit {
  Month = 'MONTH',
  Year = 'YEAR'
}

export type BillingPlan = {
  __typename?: 'BillingPlan';
  description: Scalars['String'];
  features: Array<Scalars['String']>;
  highlightedLabel: Maybe<Scalars['String']>;
  isSelfCheckoutEligible: Scalars['Boolean'];
  key: BillingPlanKey;
  /** @deprecated Use prices instead */
  monthlyPrice: Maybe<Price>;
  name: Scalars['String'];
  prices: Array<RecurringPrice>;
  /** @deprecated Use prices instead */
  yearlyPrice: Maybe<Price>;
};

export type BillingPlanChangePreview = {
  __typename?: 'BillingPlanChangePreview';
  earliestEffectiveAt: DateTime;
  immediateCost: Price;
};

export type BillingPlanConnection = {
  __typename?: 'BillingPlanConnection';
  edges: Array<BillingPlanEdge>;
  pageInfo: PageInfo;
};

export type BillingPlanEdge = {
  __typename?: 'BillingPlanEdge';
  cursor: Scalars['String'];
  node: BillingPlan;
};

export enum BillingPlanKey {
  Evaluate = 'EVALUATE',
  Grow = 'GROW',
  Launch = 'LAUNCH',
  Legacy = 'LEGACY',
  Scale = 'SCALE'
}

export type BillingRota = {
  __typename?: 'BillingRota';
  offRotaUserIds: Array<Scalars['ID']>;
  onRotaUserIds: Array<Scalars['ID']>;
};

export enum BillingSeatType {
  /** @deprecated Field no longer supported */
  EngRota = 'ENG_ROTA',
  /** @deprecated Field no longer supported */
  Member = 'MEMBER',
  /** @deprecated Field no longer supported */
  Viewer = 'VIEWER'
}

export type BillingSubscription = {
  __typename?: 'BillingSubscription';
  cancelsAt: Maybe<DateTime>;
  endedAt: Maybe<DateTime>;
  entitlements: Array<BillingFeatureEntitlement>;
  /** @deprecated Field no longer supported */
  interval: BillingInterval;
  planKey: BillingPlanKey;
  planName: Scalars['String'];
  status: BillingSubscriptionStatus;
  trialEndsAt: Maybe<DateTime>;
};

export enum BillingSubscriptionStatus {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE'
}

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

export type BreachAction = BeforeBreachAction;

export type BreachActionInput = {
  beforeBreachAction?: InputMaybe<BeforeBreachActionInput>;
};

export type BulkUpsertThreadFieldResult = {
  __typename?: 'BulkUpsertThreadFieldResult';
  result: Maybe<UpsertResult>;
  threadField: Maybe<ThreadField>;
};

export type BulkUpsertThreadFieldsInput = {
  inputs: Array<UpsertThreadFieldInput>;
};

export type BulkUpsertThreadFieldsOutput = {
  __typename?: 'BulkUpsertThreadFieldsOutput';
  error: Maybe<MutationError>;
  results: Array<BulkUpsertThreadFieldResult>;
};

/**
 * Represents the times in which you are open for business during a week. If a day is null, it means that day you are not
 * open for business.
 */
export type BusinessHours = {
  __typename?: 'BusinessHours';
  createdAt: DateTime;
  createdBy: InternalActor;
  updatedAt: DateTime;
  updatedBy: InternalActor;
  weekDays: BusinessHoursWeekDays;
};

export type BusinessHoursWeekDay = {
  __typename?: 'BusinessHoursWeekDay';
  endTime: Time;
  startTime: Time;
};

export type BusinessHoursWeekDayInput = {
  /** The time you close for business on this day as an UTC ISO time. For example: 17:00Z . */
  endTime: Scalars['String'];
  /** The time you open for business on this day as an UTC ISO time. For example: 09:00Z . */
  startTime: Scalars['String'];
};

export type BusinessHoursWeekDays = {
  __typename?: 'BusinessHoursWeekDays';
  friday: Maybe<BusinessHoursWeekDay>;
  monday: Maybe<BusinessHoursWeekDay>;
  saturday: Maybe<BusinessHoursWeekDay>;
  sunday: Maybe<BusinessHoursWeekDay>;
  thursday: Maybe<BusinessHoursWeekDay>;
  tuesday: Maybe<BusinessHoursWeekDay>;
  wednesday: Maybe<BusinessHoursWeekDay>;
};

/** Represents the times in which you are open for business during a week. Only provide the days you are open for business. */
export type BusinessHoursWeekDaysInput = {
  friday?: InputMaybe<BusinessHoursWeekDayInput>;
  monday?: InputMaybe<BusinessHoursWeekDayInput>;
  saturday?: InputMaybe<BusinessHoursWeekDayInput>;
  sunday?: InputMaybe<BusinessHoursWeekDayInput>;
  thursday?: InputMaybe<BusinessHoursWeekDayInput>;
  tuesday?: InputMaybe<BusinessHoursWeekDayInput>;
  wednesday?: InputMaybe<BusinessHoursWeekDayInput>;
};

export type CalculateRoleChangeCostInput = {
  roleKey: RoleKey;
  userId?: InputMaybe<Scalars['ID']>;
  usingBillingRotaSeat?: InputMaybe<BooleanInput>;
};

export type CalculateRoleChangeCostOutput = {
  __typename?: 'CalculateRoleChangeCostOutput';
  error: Maybe<MutationError>;
  roleChangeCost: Maybe<RoleChangeCost>;
};

export type ChangeBillingPlanInput = {
  intervalUnit?: InputMaybe<BillingIntervalUnit>;
  planKey: BillingPlanKey;
};

export type ChangeBillingPlanOutput = {
  __typename?: 'ChangeBillingPlanOutput';
  error: Maybe<MutationError>;
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

export type CompaniesFilter = {
  companyIds?: InputMaybe<Array<Scalars['ID']>>;
};

/** Query to search for companies. */
export type CompaniesSearchQuery = {
  /**
   * The term to search for. It must be at least 2 characters long. The search is case-insensitive on these two fields:
   * - the company name (partial match)
   * - the company domain name (partial match)
   */
  term: Scalars['String'];
};

export type Company = {
  __typename?: 'Company';
  createdAt: DateTime;
  createdBy: InternalActor;
  domainName: Scalars['String'];
  id: Scalars['ID'];
  logoUrl: Maybe<Scalars['String']>;
  name: Scalars['String'];
  updatedAt: DateTime;
  updatedBy: InternalActor;
};


export type CompanyLogoUrlArgs = {
  size?: InputMaybe<Scalars['Int']>;
};

export type CompanyConnection = {
  __typename?: 'CompanyConnection';
  edges: Array<CompanyEdge>;
  pageInfo: PageInfo;
};

export type CompanyEdge = {
  __typename?: 'CompanyEdge';
  cursor: Scalars['String'];
  node: Company;
};

export type CompanyIdentifierInput = {
  /** The domain name of the company (e.g. plain.com). Alternatively, you can provide a full URL (e.g. https://www.plain.com) and we will do our best to extract the domain name. */
  companyDomainName?: InputMaybe<Scalars['String']>;
  /** Plain's internal identifier for the company. */
  companyId?: InputMaybe<Scalars['ID']>;
};

export type CompanySearchResult = {
  __typename?: 'CompanySearchResult';
  company: Company;
};

export type CompanySearchResultConnection = {
  __typename?: 'CompanySearchResultConnection';
  edges: Array<CompanySearchResultEdge>;
  pageInfo: PageInfo;
};

export type CompanySearchResultEdge = {
  __typename?: 'CompanySearchResultEdge';
  cursor: Scalars['String'];
  node: CompanySearchResult;
};

export type CompanyTierMembership = {
  __typename?: 'CompanyTierMembership';
  companyId: Scalars['ID'];
  createdAt: DateTime;
  createdBy: InternalActor;
  id: Scalars['ID'];
  tierId: Scalars['ID'];
  updatedAt: DateTime;
  updatedBy: InternalActor;
};

export type CompleteServiceAuthorizationInput = {
  serviceAuthorizationId: Scalars['ID'];
};

export type CompleteServiceAuthorizationOutput = {
  __typename?: 'CompleteServiceAuthorizationOutput';
  error: Maybe<MutationError>;
  serviceAuthorization: Maybe<ServiceAuthorization>;
};

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

export type ConnectedSlackChannel = {
  __typename?: 'ConnectedSlackChannel';
  channelType: ConnectedSlackChannelType;
  createdAt: DateTime;
  createdBy: InternalActor;
  id: Scalars['ID'];
  isEnabled: Scalars['Boolean'];
  name: Scalars['String'];
  slackChannelId: Scalars['String'];
  slackTeamId: Scalars['String'];
  updatedAt: DateTime;
  updatedBy: InternalActor;
};

export type ConnectedSlackChannelConnection = {
  __typename?: 'ConnectedSlackChannelConnection';
  edges: Array<ConnectedSlackChannelEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ConnectedSlackChannelEdge = {
  __typename?: 'ConnectedSlackChannelEdge';
  cursor: Scalars['String'];
  node: ConnectedSlackChannel;
};

export enum ConnectedSlackChannelType {
  /** A channel that Plain tracks for customer support requests. */
  Customer = 'CUSTOMER',
  /** A channel that Plain tracks for internal team discussions. */
  Discussion = 'DISCUSSION'
}

export type ConnectedSlackChannelsFilter = {
  channelTypes?: InputMaybe<Array<ConnectedSlackChannelType>>;
  isEnabled?: InputMaybe<BooleanInput>;
  slackTeamIds?: InputMaybe<Array<Scalars['String']>>;
};

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
  /** The result of the virus scan on this attachment. If this is null, it means that your workspace does not have virus scan checks enabled. */
  attachmentVirusScanResult: Maybe<AttachmentVirusScanResult>;
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

export type CreateAutoresponderInput = {
  conditions: Array<AutoresponderConditionInput>;
  isEnabled: Scalars['Boolean'];
  markdownContent?: InputMaybe<Scalars['String']>;
  messageSources: Array<AutoresponderMessageSource>;
  name: Scalars['String'];
  order: Scalars['Int'];
  responseDelaySeconds?: InputMaybe<Scalars['Int']>;
  textContent: Scalars['String'];
};

export type CreateAutoresponderOutput = {
  __typename?: 'CreateAutoresponderOutput';
  autoresponder: Maybe<Autoresponder>;
  error: Maybe<MutationError>;
};

export type CreateBillingPortalSessionOutput = {
  __typename?: 'CreateBillingPortalSessionOutput';
  billingPortalSessionUrl: Maybe<Scalars['String']>;
  error: Maybe<MutationError>;
};

export type CreateCheckoutSessionInput = {
  /** @deprecated Use intervalUnit instead */
  interval?: InputMaybe<BillingInterval>;
  intervalUnit?: InputMaybe<BillingIntervalUnit>;
  plan: BillingPlanKey;
};

export type CreateCheckoutSessionOutput = {
  __typename?: 'CreateCheckoutSessionOutput';
  error: Maybe<MutationError>;
  sessionClientSecret: Maybe<Scalars['String']>;
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

export type CreateCustomerEventInput = {
  /** The components used to create the event's contents. */
  components: Array<EventComponentInput>;
  /** The customer id of the customer that the event is for. */
  customerIdentifier: CustomerIdentifierInput;
  /** The external ID of this event. You can use this field to store your own unique identifier for this event. This must be unique. */
  externalId?: InputMaybe<Scalars['ID']>;
  /** The title of the event. */
  title: Scalars['String'];
};

export type CreateCustomerEventOutput = {
  __typename?: 'CreateCustomerEventOutput';
  customerEvent: Maybe<CustomerEvent>;
  error: Maybe<MutationError>;
};

export type CreateCustomerGroupInput = {
  color: Scalars['String'];
  externalId?: InputMaybe<Scalars['String']>;
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

export type CreateMyMsTeamsIntegrationInput = {
  authCode: Scalars['ID'];
  redirectUrl: Scalars['String'];
};

export type CreateMyMsTeamsIntegrationOutput = {
  __typename?: 'CreateMyMSTeamsIntegrationOutput';
  error: Maybe<MutationError>;
  integration: Maybe<UserMsTeamsIntegration>;
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
  threadId?: InputMaybe<Scalars['ID']>;
};

export type CreateNoteOutput = {
  __typename?: 'CreateNoteOutput';
  error: Maybe<MutationError>;
  note: Maybe<Note>;
};

export type CreateServiceLevelAgreementInput = {
  serviceLevelAgreement: ServiceLevelAgreementInput;
  tierId: Scalars['ID'];
};

export type CreateServiceLevelAgreementOutput = {
  __typename?: 'CreateServiceLevelAgreementOutput';
  error: Maybe<MutationError>;
  serviceLevelAgreement: Maybe<ServiceLevelAgreement>;
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

export type CreateThreadDiscussionInput = {
  connectedSlackChannelId: Scalars['ID'];
  markdownContent: Scalars['String'];
  threadId: Scalars['ID'];
};

export type CreateThreadDiscussionOutput = {
  __typename?: 'CreateThreadDiscussionOutput';
  error: Maybe<MutationError>;
  threadDiscussion: Maybe<ThreadDiscussion>;
};

export type CreateThreadEventInput = {
  /** The components used to create the event's contents. */
  components: Array<EventComponentInput>;
  /** The external ID of this event. You can use this field to store your own unique identifier for this event. This must be unique. */
  externalId?: InputMaybe<Scalars['ID']>;
  /** The thread id of the thread that the event is for. */
  threadId: Scalars['ID'];
  /** The title of the event. */
  title: Scalars['String'];
};

export type CreateThreadEventOutput = {
  __typename?: 'CreateThreadEventOutput';
  error: Maybe<MutationError>;
  threadEvent: Maybe<ThreadEvent>;
};

export type CreateThreadFieldOnThreadInput = {
  booleanValue?: InputMaybe<Scalars['Boolean']>;
  key: Scalars['String'];
  stringValue?: InputMaybe<Scalars['String']>;
  type: ThreadFieldSchemaType;
};

export type CreateThreadFieldSchemaInput = {
  defaultBooleanValue?: InputMaybe<Scalars['Boolean']>;
  defaultStringValue?: InputMaybe<Scalars['String']>;
  dependsOnThreadField?: InputMaybe<DependsOnThreadFieldInput>;
  description: Scalars['String'];
  enumValues: Array<Scalars['String']>;
  isAiAutoFillEnabled: Scalars['Boolean'];
  isRequired: Scalars['Boolean'];
  key: Scalars['String'];
  label: Scalars['String'];
  order: Scalars['Int'];
  type: ThreadFieldSchemaType;
};

export type CreateThreadFieldSchemaOutput = {
  __typename?: 'CreateThreadFieldSchemaOutput';
  error: Maybe<MutationError>;
  threadFieldSchema: Maybe<ThreadFieldSchema>;
};

export type CreateThreadInput = {
  /** User or machine user this thread should be assigned to. */
  assignedTo?: InputMaybe<CreateThreadAssignedToInput>;
  /** An array of attachments for the first timeline entry in the thread. */
  attachmentIds?: InputMaybe<Array<Scalars['ID']>>;
  /** The components used to create the first timeline entry in the thread. */
  components: Array<ComponentInput>;
  /** The identifier of the customer being either the existing customer ID, the customer's email address or and external ID. */
  customerIdentifier: CustomerIdentifierInput;
  /**
   * The optional description for this thread. This is used to display a preview of the thread in the UI.
   * If not provided, we will automatically infer it from the components you provided.
   */
  description?: InputMaybe<Scalars['String']>;
  /** The external ID of this thread. You can use this field to store your own unique identifier for this thread. */
  externalId?: InputMaybe<Scalars['ID']>;
  /** An array of label types to attach to the thread upon creation. */
  labelTypeIds?: InputMaybe<Array<Scalars['ID']>>;
  /** The priority of the thread. Valid values are 0, 1, 2, 3, from most to least urgent, defaults to 2 (normal). */
  priority?: InputMaybe<Scalars['Int']>;
  /** A thread may be assigned to a specific tenant. */
  tenantIdentifier?: InputMaybe<TenantIdentifierInput>;
  /** An array of thread fields to attach to the thread upon creation. */
  threadFields?: InputMaybe<Array<CreateThreadFieldOnThreadInput>>;
  /** The title of the thread. */
  title?: InputMaybe<Scalars['String']>;
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

export type CreateTierInput = {
  /** The color to assign to this tier, given by its hex code (e.g. #FABADA). This color is used in Plain's UI to represent this tier. */
  color: Scalars['String'];
  /** Any thread created in this tier will have this priority by default, unless a different priority is specified while creating it. If not provided, it defaults to 2 (normal priority). */
  defaultThreadPriority?: InputMaybe<Scalars['Int']>;
  /** The external ID of this tier. You can use this field to store your own unique identifier for this tier. This must be unique in your workspace. */
  externalId: Scalars['String'];
  /**
   * If set to true, this tier will be applied to all threads that do not match any other tier.
   *
   * Only one tier can be the default tier.
   *
   * Default: false
   */
  isDefault?: InputMaybe<Scalars['Boolean']>;
  memberIdentifiers: Array<TierMemberIdentifierInput>;
  /** The name of this tier. */
  name: Scalars['String'];
};

export type CreateTierOutput = {
  __typename?: 'CreateTierOutput';
  error: Maybe<MutationError>;
  tier: Maybe<Tier>;
};

export type CreateUserAccountInput = {
  fullName: Scalars['String'];
  marketingConsent?: InputMaybe<Scalars['Boolean']>;
  publicName: Scalars['String'];
};

export type CreateUserAccountOutput = {
  __typename?: 'CreateUserAccountOutput';
  error: Maybe<MutationError>;
  userAccount: Maybe<UserAccount>;
};

export type CreateUserAuthSlackIntegrationInput = {
  authCode: Scalars['String'];
  redirectUrl: Scalars['String'];
};

export type CreateUserAuthSlackIntegrationOutput = {
  __typename?: 'CreateUserAuthSlackIntegrationOutput';
  error: Maybe<MutationError>;
  integration: Maybe<UserAuthSlackIntegration>;
};

export type CreateWebhookTargetInput = {
  description: Scalars['String'];
  eventSubscriptions: Array<WebhookTargetEventSubscriptionInput>;
  isEnabled: Scalars['Boolean'];
  url: Scalars['String'];
  version?: InputMaybe<Scalars['String']>;
};

export type CreateWebhookTargetOutput = {
  __typename?: 'CreateWebhookTargetOutput';
  error: Maybe<MutationError>;
  webhookTarget: Maybe<WebhookTarget>;
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

export type CreateWorkspaceMsTeamsIntegrationInput = {
  msTeamsTenantId: Scalars['ID'];
};

export type CreateWorkspaceMsTeamsIntegrationOutput = {
  __typename?: 'CreateWorkspaceMSTeamsIntegrationOutput';
  error: Maybe<MutationError>;
  integration: Maybe<WorkspaceMsTeamsIntegration>;
};

export type CreateWorkspaceOutput = {
  __typename?: 'CreateWorkspaceOutput';
  error: Maybe<MutationError>;
  workspace: Maybe<Workspace>;
};

export type CreateWorkspaceSlackChannelIntegrationInput = {
  authCode: Scalars['String'];
  redirectUrl: Scalars['String'];
};

export type CreateWorkspaceSlackChannelIntegrationOutput = {
  __typename?: 'CreateWorkspaceSlackChannelIntegrationOutput';
  error: Maybe<MutationError>;
  integration: Maybe<WorkspaceSlackChannelIntegration>;
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

export enum CurrencyCode {
  Usd = 'USD'
}

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
  /** The avatar URL of the customer. */
  avatarUrl: Maybe<Scalars['String']>;
  /** The company the customer belongs to. */
  company: Maybe<Company>;
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
  /** @deprecated Use Thread.statusChangedAt instead */
  lastIdleAt: Maybe<DateTime>;
  markedAsSpamAt: Maybe<DateTime>;
  markedAsSpamBy: Maybe<InternalActor>;
  /** An optional short name of the customer, typically their first name. */
  shortName: Maybe<Scalars['String']>;
  /** @deprecated Use Thread.status instead */
  status: Maybe<CustomerStatus>;
  /** @deprecated Use Thread.statusChangedAt instead */
  statusChangedAt: Maybe<DateTime>;
  /** A subquery to fetch the customer's tenants. */
  tenantMemberships: CustomerTenantMembershipConnection;
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
  filters?: InputMaybe<CustomerGroupMembershipsFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


/**
 * The core customer entity. A customer only exists (ideally) once.
 * Uniqueness is guaranteed on both of these fields:
 * 1. `externalId` if provided
 * 2. `email`
 */
export type CustomerTenantMembershipsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type CustomerActor = {
  __typename?: 'CustomerActor';
  customer: Customer;
  customerId: Scalars['ID'];
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
  /** The thread the instance is for. Null if this card is not loaded in a thread context. */
  threadId: Maybe<Scalars['ID']>;
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
  /** The thread the instance is for. Null if this card is not loaded in a thread context. */
  threadId: Maybe<Scalars['ID']>;
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
  /** The thread the instance is for. Null if this card is not loaded in a thread context. */
  threadId: Maybe<Scalars['ID']>;
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
  /** The thread the instance is for. Null if this card is not loaded in a thread context. */
  threadId: Maybe<Scalars['ID']>;
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

export type CustomerEvent = {
  __typename?: 'CustomerEvent';
  /** The list of components of the event. */
  components: Array<EventComponent>;
  /** The datetime when this event was created. */
  createdAt: DateTime;
  /** The actor who created this event. */
  createdBy: Actor;
  /** The customer that this event belongs to. */
  customerId: Scalars['ID'];
  /** The ID of the event. */
  id: Scalars['ID'];
  /** The title of the event. */
  title: Scalars['String'];
  /** The datetime when this event was last updated. */
  updatedAt: DateTime;
  /** The actor who last updated this event. */
  updatedBy: Actor;
};

export type CustomerEventEntry = TimelineEventEntry & {
  __typename?: 'CustomerEventEntry';
  components: Array<EventComponent>;
  customerId: Scalars['ID'];
  externalId: Maybe<Scalars['ID']>;
  timelineEventId: Scalars['ID'];
  title: Scalars['String'];
};

export type CustomerGroup = {
  __typename?: 'CustomerGroup';
  color: Scalars['String'];
  createdAt: DateTime;
  createdBy: InternalActor;
  externalId: Maybe<Scalars['String']>;
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
  externalId?: InputMaybe<Scalars['String']>;
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

export type CustomerGroupMembershipsFilter = {
  customerGroupExternalIds?: InputMaybe<Array<Scalars['String']>>;
};

export type CustomerGroupsFilter = {
  externalIds?: InputMaybe<Array<Scalars['String']>>;
};

/** Only one of the fields can be set. */
export type CustomerIdentifierInput = {
  customerId?: InputMaybe<Scalars['ID']>;
  emailAddress?: InputMaybe<Scalars['String']>;
  externalId?: InputMaybe<Scalars['ID']>;
};

export type CustomerImpersonationInput = {
  customerIdentifier: CustomerIdentifierInput;
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

export enum CustomerStatus {
  /** @deprecated Use ThreadStatus.TODO instead */
  Active = 'ACTIVE',
  /** @deprecated Use ThreadStatus.DONE instead */
  Idle = 'IDLE',
  /** @deprecated Use ThreadStatus.SNOOZED instead */
  Snoozed = 'SNOOZED'
}

export type CustomerTenantMembership = {
  __typename?: 'CustomerTenantMembership';
  createdAt: DateTime;
  createdBy: InternalActor;
  tenant: Tenant;
  updatedAt: DateTime;
  updatedBy: InternalActor;
};

export type CustomerTenantMembershipConnection = {
  __typename?: 'CustomerTenantMembershipConnection';
  edges: Array<CustomerTenantMembershipEdge>;
  pageInfo: PageInfo;
};

export type CustomerTenantMembershipEdge = {
  __typename?: 'CustomerTenantMembershipEdge';
  cursor: Scalars['String'];
  node: CustomerTenantMembership;
};

export type CustomersFilter = {
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
  isMarkedAsSpam?: InputMaybe<Scalars['Boolean']>;
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
  FullName = 'FULL_NAME'
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

export type DeleteAutoresponderInput = {
  autoresponderId: Scalars['ID'];
};

export type DeleteAutoresponderOutput = {
  __typename?: 'DeleteAutoresponderOutput';
  autoresponder: Maybe<Autoresponder>;
  error: Maybe<MutationError>;
};

export type DeleteBusinessHoursOutput = {
  __typename?: 'DeleteBusinessHoursOutput';
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

export type DeleteMyMsTeamsIntegrationOutput = {
  __typename?: 'DeleteMyMSTeamsIntegrationOutput';
  error: Maybe<MutationError>;
  integration: Maybe<UserMsTeamsIntegration>;
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

export type DeleteServiceAuthorizationInput = {
  serviceAuthorizationId: Scalars['ID'];
};

export type DeleteServiceAuthorizationOutput = {
  __typename?: 'DeleteServiceAuthorizationOutput';
  error: Maybe<MutationError>;
};

export type DeleteServiceLevelAgreementInput = {
  serviceLevelAgreementId: Scalars['ID'];
};

export type DeleteServiceLevelAgreementOutput = {
  __typename?: 'DeleteServiceLevelAgreementOutput';
  error: Maybe<MutationError>;
  serviceLevelAgreement: Maybe<ServiceLevelAgreement>;
};

export type DeleteSnippetInput = {
  snippetId: Scalars['ID'];
};

export type DeleteSnippetOutput = {
  __typename?: 'DeleteSnippetOutput';
  error: Maybe<MutationError>;
  snippet: Maybe<Snippet>;
};

export type DeleteThreadFieldInput = {
  threadFieldId: Scalars['ID'];
};

export type DeleteThreadFieldOutput = {
  __typename?: 'DeleteThreadFieldOutput';
  error: Maybe<MutationError>;
};

export type DeleteThreadFieldSchemaInput = {
  threadFieldSchemaId: Scalars['ID'];
};

export type DeleteThreadFieldSchemaOutput = {
  __typename?: 'DeleteThreadFieldSchemaOutput';
  error: Maybe<MutationError>;
};

export type DeleteThreadLinkInput = {
  threadLinkId: Scalars['ID'];
};

export type DeleteThreadLinkOutput = {
  __typename?: 'DeleteThreadLinkOutput';
  error: Maybe<MutationError>;
};

export type DeleteTierInput = {
  tierId: Scalars['ID'];
};

export type DeleteTierOutput = {
  __typename?: 'DeleteTierOutput';
  error: Maybe<MutationError>;
  tier: Maybe<Tier>;
};

export type DeleteUserAuthSlackIntegrationInput = {
  slackTeamId: Scalars['String'];
};

export type DeleteUserAuthSlackIntegrationOutput = {
  __typename?: 'DeleteUserAuthSlackIntegrationOutput';
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

export type DeleteWorkspaceMsTeamsIntegrationInput = {
  integrationId: Scalars['ID'];
};

export type DeleteWorkspaceMsTeamsIntegrationOutput = {
  __typename?: 'DeleteWorkspaceMSTeamsIntegrationOutput';
  error: Maybe<MutationError>;
  integration: Maybe<WorkspaceMsTeamsIntegration>;
};

export type DeleteWorkspaceSlackChannelIntegrationInput = {
  integrationId: Scalars['ID'];
};

export type DeleteWorkspaceSlackChannelIntegrationOutput = {
  __typename?: 'DeleteWorkspaceSlackChannelIntegrationOutput';
  error: Maybe<MutationError>;
  integration: Maybe<WorkspaceSlackChannelIntegration>;
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

export type DependsOnThreadFieldInput = {
  threadFieldSchemaId: Scalars['ID'];
  threadFieldSchemaValue: Scalars['String'];
};

export type DependsOnThreadFieldType = {
  __typename?: 'DependsOnThreadFieldType';
  threadFieldSchemaId: Scalars['ID'];
  threadFieldSchemaValue: Scalars['String'];
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

export enum DoneStatusDetail {
  DoneManuallySet = 'DONE_MANUALLY_SET',
  Ignored = 'IGNORED',
  TimerExpired = 'TIMER_EXPIRED'
}

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
  thread: Maybe<Thread>;
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

export type EmailBounce = {
  __typename?: 'EmailBounce';
  bouncedAt: DateTime;
  isSendRetriable: Scalars['Boolean'];
  recipient: EmailParticipant;
};

export type EmailEntry = {
  __typename?: 'EmailEntry';
  additionalRecipients: Array<EmailParticipant>;
  /** All the attachments included in this email. */
  attachments: Array<Attachment>;
  authenticity: EmailAuthenticity;
  /** If any of the recipients bounces the email, this will contain the list of bounces. */
  bounces: Array<EmailBounce>;
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
  /** Informs whether the email was sent successfully, bounced or failed. If the email is still being sent, the status will be 'PENDING'. Only set for outbound emails. */
  sendStatus: Maybe<EmailSendStatus>;
  /** When the email was sent. Only set for outbound emails and will be null until the email is sent. */
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

export enum EmailSendStatus {
  /** Some (or all) of the recipients bounced the email, meaning they did not recieve it. Check 'bounces' for more details on which recipients bounced. */
  Bounced = 'BOUNCED',
  /** The email failed to send. This will happen if the main recipient (To) bounced the email, or if there was an unexpected error sending the email. */
  Failed = 'FAILED',
  /** The email is being sent. */
  Pending = 'PENDING',
  /** The email was sent successfully to all recipients. */
  Sent = 'SENT'
}

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
export type Entry = ChatEntry | CustomEntry | CustomerEventEntry | EmailEntry | LinearIssueThreadLinkStateTransitionedEntry | MsTeamsMessageEntry | NoteEntry | ServiceLevelAgreementStatusTransitionedEntry | SlackMessageEntry | SlackReplyEntry | ThreadAssignmentTransitionedEntry | ThreadDiscussionEntry | ThreadDiscussionResolvedEntry | ThreadEventEntry | ThreadLabelsChangedEntry | ThreadPriorityChangedEntry | ThreadStatusTransitionedEntry;

export type EventComponent = ComponentBadge | ComponentCopyButton | ComponentDivider | ComponentLinkButton | ComponentPlainText | ComponentRow | ComponentSpacer | ComponentText;

export type EventComponentInput = {
  componentBadge?: InputMaybe<ComponentBadgeInput>;
  componentCopyButton?: InputMaybe<ComponentCopyButtonInput>;
  componentDivider?: InputMaybe<ComponentDividerInput>;
  componentLinkButton?: InputMaybe<ComponentLinkButtonInput>;
  componentPlainText?: InputMaybe<ComponentPlainTextInput>;
  componentRow?: InputMaybe<ComponentRowInput>;
  componentSpacer?: InputMaybe<ComponentSpacerInput>;
  componentText?: InputMaybe<ComponentTextInput>;
};

export enum FeatureKey {
  BillingRotaSeats = 'BILLING_ROTA_SEATS',
  BusinessHours = 'BUSINESS_HOURS',
  ConnectedCustomerSlackChannels = 'CONNECTED_CUSTOMER_SLACK_CHANNELS',
  ConnectedSupportEmailAddresses = 'CONNECTED_SUPPORT_EMAIL_ADDRESSES',
  DataImporters = 'DATA_IMPORTERS',
  InsightsLookbackDays = 'INSIGHTS_LOOKBACK_DAYS',
  MoreActiveEngRotaSeats = 'MORE_ACTIVE_ENG_ROTA_SEATS',
  MsTeamsIntegration = 'MS_TEAMS_INTEGRATION',
  ServiceLevelAgreements = 'SERVICE_LEVEL_AGREEMENTS',
  SlackDiscussions = 'SLACK_DISCUSSIONS'
}

export type FileSize = {
  __typename?: 'FileSize';
  bytes: Scalars['Int'];
  kiloBytes: Scalars['Float'];
  megaBytes: Scalars['Float'];
};

export type FirstResponseTimeServiceLevelAgreement = ServiceLevelAgreement & {
  __typename?: 'FirstResponseTimeServiceLevelAgreement';
  breachActions: Array<BreachAction>;
  createdAt: DateTime;
  createdBy: InternalActor;
  /** This SLA will breach if it does not receive a first response within this many minutes. */
  firstResponseTimeMinutes: Scalars['Int'];
  id: Scalars['ID'];
  threadPriorityFilter: Array<Scalars['Int']>;
  updatedAt: DateTime;
  updatedBy: InternalActor;
  useBusinessHoursOnly: Scalars['Boolean'];
};

export type ForkThreadInput = {
  threadId: Scalars['ID'];
  timelineEntryId: Scalars['ID'];
};

export type ForkThreadOutput = {
  __typename?: 'ForkThreadOutput';
  error: Maybe<MutationError>;
  thread: Maybe<Thread>;
};

export type ImpersonationInput = {
  asCustomer: CustomerImpersonationInput;
};

export type IntArrayInput = {
  value: Array<Scalars['Int']>;
};

export type IntInput = {
  value: Scalars['Int'];
};

export type InternalActor = MachineUserActor | SystemActor | UserActor;

export type InviteUserToWorkspaceInput = {
  email: Scalars['String'];
  /** @deprecated Use roleKey instead. */
  roleIds?: InputMaybe<Array<Scalars['ID']>>;
  roleKey?: InputMaybe<RoleKey>;
  usingBillingRotaSeat?: InputMaybe<BooleanInput>;
};

export type InviteUserToWorkspaceOutput = {
  __typename?: 'InviteUserToWorkspaceOutput';
  error: Maybe<MutationError>;
  invite: Maybe<WorkspaceInvite>;
};

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
  /** Refers to the id of the WorkflowState object in Linear. This can be used to fetch the WorkflowState from the Linear API. */
  nextLinearStateId: Scalars['ID'];
  /** Refers to the id of the WorkflowState object in Linear. This can be used to fetch the WorkflowState from the Linear API. */
  previousLinearStateId: Scalars['ID'];
};

export type MsTeamsMessage = {
  __typename?: 'MSTeamsMessage';
  attachments: Array<Attachment>;
  createdAt: DateTime;
  createdBy: Actor;
  deletedOnMsTeamsAt: Maybe<DateTime>;
  html: Scalars['String'];
  id: Scalars['ID'];
  lastEditedOnMsTeamsAt: Maybe<DateTime>;
  msTeamsConversationId: Maybe<Scalars['ID']>;
  msTeamsMessageId: Maybe<Scalars['ID']>;
  msTeamsTeamId: Maybe<Scalars['ID']>;
  msTeamsTenantId: Maybe<Scalars['ID']>;
  text: Scalars['String'];
  threadId: Maybe<Scalars['ID']>;
  updatedAt: DateTime;
  updatedBy: Actor;
};

export type MsTeamsMessageEntry = {
  __typename?: 'MSTeamsMessageEntry';
  attachments: Array<Attachment>;
  customerId: Scalars['ID'];
  deletedOnMsTeamsAt: Maybe<DateTime>;
  lastEditedOnMsTeamsAt: Maybe<DateTime>;
  msTeamsMessageId: Scalars['ID'];
  text: Scalars['String'];
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
  statusDetail?: InputMaybe<DoneStatusDetail>;
  threadId: Scalars['ID'];
};

export type MarkThreadAsDoneOutput = {
  __typename?: 'MarkThreadAsDoneOutput';
  error: Maybe<MutationError>;
  thread: Maybe<Thread>;
};

export type MarkThreadAsTodoInput = {
  statusDetail?: InputMaybe<TodoStatusDetail>;
  threadId: Scalars['ID'];
};

export type MarkThreadAsTodoOutput = {
  __typename?: 'MarkThreadAsTodoOutput';
  error: Maybe<MutationError>;
  thread: Maybe<Thread>;
};

export type MarkThreadDiscussionAsResolvedInput = {
  threadDiscussionId: Scalars['ID'];
};

export type MarkThreadDiscussionAsResolvedOutput = {
  __typename?: 'MarkThreadDiscussionAsResolvedOutput';
  error: Maybe<MutationError>;
};

export enum MessageSource {
  Api = 'API',
  Chat = 'CHAT',
  Email = 'EMAIL',
  MsTeams = 'MS_TEAMS',
  Slack = 'SLACK'
}

export type MeteredFeatureEntitlement = BillingFeatureEntitlement & {
  __typename?: 'MeteredFeatureEntitlement';
  current: Scalars['Int'];
  feature: FeatureKey;
  isEntitled: Scalars['Boolean'];
  limit: Scalars['Int'];
};

export type MetricDimension = {
  __typename?: 'MetricDimension';
  type: MetricDimensionType;
  value: Scalars['String'];
};

export enum MetricDimensionType {
  Agent = 'AGENT',
  Company = 'COMPANY',
  CustomerGroup = 'CUSTOMER_GROUP',
  LabelType = 'LABEL_TYPE',
  MessageSource = 'MESSAGE_SOURCE',
  Priority = 'PRIORITY',
  ThreadField = 'THREAD_FIELD',
  Tier = 'TIER'
}

export type Mutation = {
  __typename?: 'Mutation';
  acceptWorkspaceInvite: AcceptWorkspaceInviteOutput;
  /** Add a customer to a customer group. */
  addCustomerToCustomerGroups: AddCustomerToCustomerGroupsOutput;
  addCustomerToTenants: AddCustomerToTenantsOutput;
  addLabels: AddLabelsOutput;
  addMembersToTier: AddMembersToTierOutput;
  addUserToActiveBillingRota: AddUserToActiveBillingRotaOutput;
  addWorkspaceAlternateSupportEmailAddress: AddWorkspaceAlternateSupportEmailAddressOutput;
  archiveLabelType: ArchiveLabelTypeOutput;
  assignRolesToUser: AssignRolesToUserOutput;
  assignThread: AssignThreadOutput;
  bulkUpsertThreadFields: BulkUpsertThreadFieldsOutput;
  calculateRoleChangeCost: CalculateRoleChangeCostOutput;
  changeBillingPlan: ChangeBillingPlanOutput;
  changeThreadPriority: ChangeThreadPriorityOutput;
  changeUserStatus: ChangeUserStatusOutput;
  completeServiceAuthorization: CompleteServiceAuthorizationOutput;
  createApiKey: CreateApiKeyOutput;
  createAttachmentDownloadUrl: CreateAttachmentDownloadUrlOutput;
  createAttachmentUploadUrl: CreateAttachmentUploadUrlOutput;
  createAutoresponder: CreateAutoresponderOutput;
  createBillingPortalSession: CreateBillingPortalSessionOutput;
  createCheckoutSession: CreateCheckoutSessionOutput;
  /** Creates a customer card config. A maximum of 25 card configs can be created. */
  createCustomerCardConfig: CreateCustomerCardConfigOutput;
  /** Create a new customer event. */
  createCustomerEvent: CreateCustomerEventOutput;
  /** Create a new customer group. */
  createCustomerGroup: CreateCustomerGroupOutput;
  createEmailPreviewUrl: CreateEmailPreviewUrlOutput;
  createLabelType: CreateLabelTypeOutput;
  createMachineUser: CreateMachineUserOutput;
  createMyLinearIntegration: CreateMyLinearIntegrationOutput;
  createMyMSTeamsIntegration: CreateMyMsTeamsIntegrationOutput;
  createMySlackIntegration: CreateMySlackIntegrationOutput;
  createNote: CreateNoteOutput;
  createServiceLevelAgreement: CreateServiceLevelAgreementOutput;
  createSnippet: CreateSnippetOutput;
  createThread: CreateThreadOutput;
  createThreadDiscussion: CreateThreadDiscussionOutput;
  /** Create a new thread event. */
  createThreadEvent: CreateThreadEventOutput;
  createThreadFieldSchema: CreateThreadFieldSchemaOutput;
  createThreadLink: CreateThreadLinkOutput;
  createTier: CreateTierOutput;
  createUserAccount: CreateUserAccountOutput;
  createUserAuthSlackIntegration: CreateUserAuthSlackIntegrationOutput;
  /** Creates a webhook target. */
  createWebhookTarget: CreateWebhookTargetOutput;
  createWorkspace: CreateWorkspaceOutput;
  createWorkspaceDiscordIntegration: CreateWorkspaceDiscordIntegrationOutput;
  createWorkspaceEmailDomainSettings: CreateWorkspaceEmailDomainSettingsOutput;
  createWorkspaceMSTeamsIntegration: CreateWorkspaceMsTeamsIntegrationOutput;
  createWorkspaceSlackChannelIntegration: CreateWorkspaceSlackChannelIntegrationOutput;
  createWorkspaceSlackIntegration: CreateWorkspaceSlackIntegrationOutput;
  deleteApiKey: DeleteApiKeyOutput;
  deleteAutoresponder: DeleteAutoresponderOutput;
  deleteBusinessHours: DeleteBusinessHoursOutput;
  /** Deletes a customer and all of their data stored on Plain. This action cannot be reversed. */
  deleteCustomer: DeleteCustomerOutput;
  /** Deletes a customer card config. */
  deleteCustomerCardConfig: DeleteCustomerCardConfigOutput;
  /** Delete a customer group by ID. */
  deleteCustomerGroup: DeleteCustomerGroupOutput;
  deleteMachineUser: DeleteMachineUserOutput;
  deleteMyLinearIntegration: DeleteMyLinearIntegrationOutput;
  deleteMyMSTeamsIntegration: DeleteMyMsTeamsIntegrationOutput;
  deleteMySlackIntegration: DeleteMySlackIntegrationOutput;
  deleteNote: DeleteNoteOutput;
  deleteServiceAuthorization: DeleteServiceAuthorizationOutput;
  deleteServiceLevelAgreement: DeleteServiceLevelAgreementOutput;
  deleteSnippet: DeleteSnippetOutput;
  deleteThreadField: DeleteThreadFieldOutput;
  deleteThreadFieldSchema: DeleteThreadFieldSchemaOutput;
  deleteThreadLink: DeleteThreadLinkOutput;
  deleteTier: DeleteTierOutput;
  deleteUser: DeleteUserOutput;
  deleteUserAuthSlackIntegration: DeleteUserAuthSlackIntegrationOutput;
  /** Deletes a webhook target. */
  deleteWebhookTarget: DeleteWebhookTargetOutput;
  deleteWorkspaceDiscordIntegration: DeleteWorkspaceDiscordIntegrationOutput;
  deleteWorkspaceEmailDomainSettings: DeleteWorkspaceEmailDomainSettingsOutput;
  deleteWorkspaceInvite: DeleteWorkspaceInviteOutput;
  deleteWorkspaceMSTeamsIntegration: DeleteWorkspaceMsTeamsIntegrationOutput;
  deleteWorkspaceSlackChannelIntegration: DeleteWorkspaceSlackChannelIntegrationOutput;
  deleteWorkspaceSlackIntegration: DeleteWorkspaceSlackIntegrationOutput;
  forkThread: ForkThreadOutput;
  inviteUserToWorkspace: InviteUserToWorkspaceOutput;
  /** Marks a customer as spam. */
  markCustomerAsSpam: MarkCustomerAsSpamOutput;
  markThreadAsDone: MarkThreadAsDoneOutput;
  markThreadAsTodo: MarkThreadAsTodoOutput;
  markThreadDiscussionAsResolved: MarkThreadDiscussionAsResolvedOutput;
  previewBillingPlanChange: PreviewBillingPlanChangeOutput;
  regenerateWorkspaceHmac: RegenerateWorkspaceHmacOutput;
  /**
   * Reloads a customer card for a customer.
   *
   * Will discard whatever is in the cache and reload it from the configured API URL.
   */
  reloadCustomerCardInstance: ReloadCustomerCardInstanceOutput;
  /** Remove a customer from a customer group. */
  removeCustomerFromCustomerGroups: RemoveCustomerFromCustomerGroupsOutput;
  removeCustomerFromTenants: RemoveCustomerFromTenantsOutput;
  removeLabels: RemoveLabelsOutput;
  removeMembersFromTier: RemoveMembersFromTierOutput;
  removeUserFromActiveBillingRota: RemoveUserFromActiveBillingRotaOutput;
  removeWorkspaceAlternateSupportEmailAddress: RemoveWorkspaceAlternateSupportEmailAddressOutput;
  reorderAutoresponders: ReorderAutorespondersOutput;
  /**
   * Reorders customer card configs.
   *
   * The input can be a partial input and in that case not all configs will be reordered.
   * For example this allows two configs to be swapped with each other.
   *
   * Note: Duplicate orders are allowed by the API.
   */
  reorderCustomerCardConfigs: ReorderCustomerCardConfigsOutput;
  reorderThreadFieldSchemas: ReorderThreadFieldSchemasOutput;
  replyToEmail: ReplyToEmailOutput;
  /**
   * Reply to the last message in a thread. This mutation supports replying to threads where the last message is
   * a Slack message, an email or a form submission. If the thread is empty, it will send an email to the customer.
   */
  replyToThread: ReplyToThreadOutput;
  sendBulkEmail: SendBulkEmailOutput;
  sendChat: SendChatOutput;
  sendCustomerChat: SendCustomerChatOutput;
  sendMSTeamsMessage: SendMsTeamsMessageOutput;
  sendNewEmail: SendNewEmailOutput;
  sendSlackMessage: SendSlackMessageOutput;
  sendThreadDiscussionMessage: SendThreadDiscussionMessageOutput;
  setCustomerTenants: SetCustomerTenantsOutput;
  shareThreadToUserInSlack: ShareThreadToUserInSlackOutput;
  snoozeThread: SnoozeThreadOutput;
  startServiceAuthorization: StartServiceAuthorizationOutput;
  /** Adds or removes a reaction from a slack message timeline entry. */
  toggleSlackMessageReaction: ToggleSlackMessageReactionOutput;
  unarchiveLabelType: UnarchiveLabelTypeOutput;
  unassignThread: UnassignThreadOutput;
  /** Removes the spam mark from a customer. */
  unmarkCustomerAsSpam: UnmarkCustomerAsSpamOutput;
  updateActiveBillingRota: UpdateActiveBillingRotaOutput;
  updateAutoresponder: UpdateAutoresponderOutput;
  updateCompanyTier: UpdateCompanyTierOutput;
  updateConnectedSlackChannel: UpdateConnectedSlackChannelOutput;
  /** Partially updates a customer card config. */
  updateCustomerCardConfig: UpdateCustomerCardConfigOutput;
  /** Changes the company of a customer. */
  updateCustomerCompany: UpdateCustomerCompanyOutput;
  /** Update a customer group. */
  updateCustomerGroup: UpdateCustomerGroupOutput;
  updateLabelType: UpdateLabelTypeOutput;
  updateMachineUser: UpdateMachineUserOutput;
  updateServiceLevelAgreement: UpdateServiceLevelAgreementOutput;
  /** Updates a setting. */
  updateSetting: UpdateSettingOutput;
  updateSnippet: UpdateSnippetOutput;
  updateTenantTier: UpdateTenantTierOutput;
  updateThreadFieldSchema: UpdateThreadFieldSchemaOutput;
  updateThreadTenant: UpdateThreadTenantOutput;
  updateThreadTier: UpdateThreadTierOutput;
  updateThreadTitle: UpdateThreadTitleOutput;
  updateTier: UpdateTierOutput;
  /** Updates a webhook target. */
  updateWebhookTarget: UpdateWebhookTargetOutput;
  updateWorkspace: UpdateWorkspaceOutput;
  updateWorkspaceEmailSettings: UpdateWorkspaceEmailSettingsOutput;
  upsertBusinessHours: UpsertBusinessHoursOutput;
  upsertCompany: UpsertCompanyOutput;
  /** Creates or updates a customer. */
  upsertCustomer: UpsertCustomerOutput;
  /** Creates or updates a customer group. */
  upsertCustomerGroup: UpsertCustomerGroupOutput;
  upsertMyEmailSignature: UpsertMyEmailSignatureOutput;
  upsertTenant: UpsertTenantOutput;
  upsertThreadField: UpsertThreadFieldOutput;
  verifyWorkspaceEmailDnsSettings: VerifyWorkspaceEmailDnsSettingsOutput;
  verifyWorkspaceEmailForwardingSettings: VerifyWorkspaceEmailForwardingSettingsOutput;
};


export type MutationAcceptWorkspaceInviteArgs = {
  input: AcceptWorkspaceInviteInput;
};


export type MutationAddCustomerToCustomerGroupsArgs = {
  input: AddCustomerToCustomerGroupsInput;
};


export type MutationAddCustomerToTenantsArgs = {
  input: AddCustomerToTenantsInput;
};


export type MutationAddLabelsArgs = {
  input: AddLabelsInput;
};


export type MutationAddMembersToTierArgs = {
  input: AddMembersToTierInput;
};


export type MutationAddUserToActiveBillingRotaArgs = {
  input: AddUserToActiveBillingRotaInput;
};


export type MutationAddWorkspaceAlternateSupportEmailAddressArgs = {
  input: AddWorkspaceAlternateSupportEmailAddressInput;
};


export type MutationArchiveLabelTypeArgs = {
  input: ArchiveLabelTypeInput;
};


export type MutationAssignRolesToUserArgs = {
  input: AssignRolesToUserInput;
};


export type MutationAssignThreadArgs = {
  input: AssignThreadInput;
};


export type MutationBulkUpsertThreadFieldsArgs = {
  input: BulkUpsertThreadFieldsInput;
};


export type MutationCalculateRoleChangeCostArgs = {
  input: CalculateRoleChangeCostInput;
};


export type MutationChangeBillingPlanArgs = {
  input: ChangeBillingPlanInput;
};


export type MutationChangeThreadPriorityArgs = {
  input: ChangeThreadPriorityInput;
};


export type MutationChangeUserStatusArgs = {
  input: ChangeUserStatusInput;
};


export type MutationCompleteServiceAuthorizationArgs = {
  input: CompleteServiceAuthorizationInput;
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


export type MutationCreateAutoresponderArgs = {
  input: CreateAutoresponderInput;
};


export type MutationCreateCheckoutSessionArgs = {
  input: CreateCheckoutSessionInput;
};


export type MutationCreateCustomerCardConfigArgs = {
  input: CreateCustomerCardConfigInput;
};


export type MutationCreateCustomerEventArgs = {
  input: CreateCustomerEventInput;
};


export type MutationCreateCustomerGroupArgs = {
  input: CreateCustomerGroupInput;
};


export type MutationCreateEmailPreviewUrlArgs = {
  input: CreateEmailPreviewUrlInput;
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


export type MutationCreateMyMsTeamsIntegrationArgs = {
  input: CreateMyMsTeamsIntegrationInput;
};


export type MutationCreateMySlackIntegrationArgs = {
  input: CreateMySlackIntegrationInput;
};


export type MutationCreateNoteArgs = {
  input: CreateNoteInput;
};


export type MutationCreateServiceLevelAgreementArgs = {
  input: CreateServiceLevelAgreementInput;
};


export type MutationCreateSnippetArgs = {
  input: CreateSnippetInput;
};


export type MutationCreateThreadArgs = {
  input: CreateThreadInput;
};


export type MutationCreateThreadDiscussionArgs = {
  input: CreateThreadDiscussionInput;
};


export type MutationCreateThreadEventArgs = {
  input: CreateThreadEventInput;
};


export type MutationCreateThreadFieldSchemaArgs = {
  input: CreateThreadFieldSchemaInput;
};


export type MutationCreateThreadLinkArgs = {
  input: CreateThreadLinkInput;
};


export type MutationCreateTierArgs = {
  input: CreateTierInput;
};


export type MutationCreateUserAccountArgs = {
  input: CreateUserAccountInput;
};


export type MutationCreateUserAuthSlackIntegrationArgs = {
  input: CreateUserAuthSlackIntegrationInput;
};


export type MutationCreateWebhookTargetArgs = {
  input: CreateWebhookTargetInput;
};


export type MutationCreateWorkspaceArgs = {
  input: CreateWorkspaceInput;
};


export type MutationCreateWorkspaceDiscordIntegrationArgs = {
  input: CreateWorkspaceDiscordIntegrationInput;
};


export type MutationCreateWorkspaceEmailDomainSettingsArgs = {
  input: CreateWorkspaceEmailDomainSettingsInput;
};


export type MutationCreateWorkspaceMsTeamsIntegrationArgs = {
  input: CreateWorkspaceMsTeamsIntegrationInput;
};


export type MutationCreateWorkspaceSlackChannelIntegrationArgs = {
  input: CreateWorkspaceSlackChannelIntegrationInput;
};


export type MutationCreateWorkspaceSlackIntegrationArgs = {
  input: CreateWorkspaceSlackIntegrationInput;
};


export type MutationDeleteApiKeyArgs = {
  input: DeleteApiKeyInput;
};


export type MutationDeleteAutoresponderArgs = {
  input: DeleteAutoresponderInput;
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


export type MutationDeleteMachineUserArgs = {
  input: DeleteMachineUserInput;
};


export type MutationDeleteNoteArgs = {
  input: DeleteNoteInput;
};


export type MutationDeleteServiceAuthorizationArgs = {
  input: DeleteServiceAuthorizationInput;
};


export type MutationDeleteServiceLevelAgreementArgs = {
  input: DeleteServiceLevelAgreementInput;
};


export type MutationDeleteSnippetArgs = {
  input: DeleteSnippetInput;
};


export type MutationDeleteThreadFieldArgs = {
  input: DeleteThreadFieldInput;
};


export type MutationDeleteThreadFieldSchemaArgs = {
  input: DeleteThreadFieldSchemaInput;
};


export type MutationDeleteThreadLinkArgs = {
  input: DeleteThreadLinkInput;
};


export type MutationDeleteTierArgs = {
  input: DeleteTierInput;
};


export type MutationDeleteUserArgs = {
  input: DeleteUserInput;
};


export type MutationDeleteUserAuthSlackIntegrationArgs = {
  input: DeleteUserAuthSlackIntegrationInput;
};


export type MutationDeleteWebhookTargetArgs = {
  input: DeleteWebhookTargetInput;
};


export type MutationDeleteWorkspaceDiscordIntegrationArgs = {
  input: DeleteWorkspaceDiscordIntegrationInput;
};


export type MutationDeleteWorkspaceInviteArgs = {
  input: DeleteWorkspaceInviteInput;
};


export type MutationDeleteWorkspaceMsTeamsIntegrationArgs = {
  input: DeleteWorkspaceMsTeamsIntegrationInput;
};


export type MutationDeleteWorkspaceSlackChannelIntegrationArgs = {
  input: DeleteWorkspaceSlackChannelIntegrationInput;
};


export type MutationDeleteWorkspaceSlackIntegrationArgs = {
  input: DeleteWorkspaceSlackIntegrationInput;
};


export type MutationForkThreadArgs = {
  input: ForkThreadInput;
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


export type MutationMarkThreadDiscussionAsResolvedArgs = {
  input: MarkThreadDiscussionAsResolvedInput;
};


export type MutationPreviewBillingPlanChangeArgs = {
  input: PreviewBillingPlanChangeInput;
};


export type MutationReloadCustomerCardInstanceArgs = {
  input: ReloadCustomerCardInstanceInput;
};


export type MutationRemoveCustomerFromCustomerGroupsArgs = {
  input: RemoveCustomerFromCustomerGroupsInput;
};


export type MutationRemoveCustomerFromTenantsArgs = {
  input: RemoveCustomerFromTenantsInput;
};


export type MutationRemoveLabelsArgs = {
  input: RemoveLabelsInput;
};


export type MutationRemoveMembersFromTierArgs = {
  input: RemoveMembersFromTierInput;
};


export type MutationRemoveUserFromActiveBillingRotaArgs = {
  input: RemoveUserFromActiveBillingRotaInput;
};


export type MutationRemoveWorkspaceAlternateSupportEmailAddressArgs = {
  input: RemoveWorkspaceAlternateSupportEmailAddressInput;
};


export type MutationReorderAutorespondersArgs = {
  input: ReorderAutorespondersInput;
};


export type MutationReorderCustomerCardConfigsArgs = {
  input: ReorderCustomerCardConfigsInput;
};


export type MutationReorderThreadFieldSchemasArgs = {
  input: ReorderThreadFieldSchemasInput;
};


export type MutationReplyToEmailArgs = {
  input: ReplyToEmailInput;
};


export type MutationReplyToThreadArgs = {
  input: ReplyToThreadInput;
};


export type MutationSendBulkEmailArgs = {
  input: SendBulkEmailInput;
};


export type MutationSendChatArgs = {
  input: SendChatInput;
};


export type MutationSendCustomerChatArgs = {
  input: SendCustomerChatInput;
};


export type MutationSendMsTeamsMessageArgs = {
  input: SendMsTeamsMessageInput;
};


export type MutationSendNewEmailArgs = {
  input: SendNewEmailInput;
};


export type MutationSendSlackMessageArgs = {
  input: SendSlackMessageInput;
};


export type MutationSendThreadDiscussionMessageArgs = {
  input: SendThreadDiscussionMessageInput;
};


export type MutationSetCustomerTenantsArgs = {
  input: SetCustomerTenantsInput;
};


export type MutationShareThreadToUserInSlackArgs = {
  input: ShareThreadToUserInSlackInput;
};


export type MutationSnoozeThreadArgs = {
  input: SnoozeThreadInput;
};


export type MutationStartServiceAuthorizationArgs = {
  input: StartServiceAuthorizationInput;
};


export type MutationToggleSlackMessageReactionArgs = {
  input: ToggleSlackMessageReactionInput;
};


export type MutationUnarchiveLabelTypeArgs = {
  input: UnarchiveLabelTypeInput;
};


export type MutationUnassignThreadArgs = {
  input: UnassignThreadInput;
};


export type MutationUnmarkCustomerAsSpamArgs = {
  input: UnmarkCustomerAsSpamInput;
};


export type MutationUpdateActiveBillingRotaArgs = {
  input: UpdateActiveBillingRotaInput;
};


export type MutationUpdateAutoresponderArgs = {
  input: UpdateAutoresponderInput;
};


export type MutationUpdateCompanyTierArgs = {
  input: UpdateCompanyTierInput;
};


export type MutationUpdateConnectedSlackChannelArgs = {
  input: UpdateConnectedSlackChannelInput;
};


export type MutationUpdateCustomerCardConfigArgs = {
  input: UpdateCustomerCardConfigInput;
};


export type MutationUpdateCustomerCompanyArgs = {
  input: UpdateCustomerCompanyInput;
};


export type MutationUpdateCustomerGroupArgs = {
  input: UpdateCustomerGroupInput;
};


export type MutationUpdateLabelTypeArgs = {
  input: UpdateLabelTypeInput;
};


export type MutationUpdateMachineUserArgs = {
  input: UpdateMachineUserInput;
};


export type MutationUpdateServiceLevelAgreementArgs = {
  input: UpdateServiceLevelAgreementInput;
};


export type MutationUpdateSettingArgs = {
  input: UpdateSettingInput;
};


export type MutationUpdateSnippetArgs = {
  input: UpdateSnippetInput;
};


export type MutationUpdateTenantTierArgs = {
  input: UpdateTenantTierInput;
};


export type MutationUpdateThreadFieldSchemaArgs = {
  input: UpdateThreadFieldSchemaInput;
};


export type MutationUpdateThreadTenantArgs = {
  input: UpdateThreadTenantInput;
};


export type MutationUpdateThreadTierArgs = {
  input: UpdateThreadTierInput;
};


export type MutationUpdateThreadTitleArgs = {
  input: UpdateThreadTitleInput;
};


export type MutationUpdateTierArgs = {
  input: UpdateTierInput;
};


export type MutationUpdateWebhookTargetArgs = {
  input: UpdateWebhookTargetInput;
};


export type MutationUpdateWorkspaceArgs = {
  input: UpdateWorkspaceInput;
};


export type MutationUpdateWorkspaceEmailSettingsArgs = {
  input: UpdateWorkspaceEmailSettingsInput;
};


export type MutationUpsertBusinessHoursArgs = {
  input: UpsertBusinessHoursInput;
};


export type MutationUpsertCompanyArgs = {
  input: UpsertCompanyInput;
};


export type MutationUpsertCustomerArgs = {
  input: UpsertCustomerInput;
};


export type MutationUpsertCustomerGroupArgs = {
  input: UpsertCustomerGroupInput;
};


export type MutationUpsertMyEmailSignatureArgs = {
  input: UpsertMyEmailSignatureInput;
};


export type MutationUpsertTenantArgs = {
  input: UpsertTenantInput;
};


export type MutationUpsertThreadFieldArgs = {
  input: UpsertThreadFieldInput;
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

export type NextResponseTimeServiceLevelAgreement = ServiceLevelAgreement & {
  __typename?: 'NextResponseTimeServiceLevelAgreement';
  breachActions: Array<BreachAction>;
  createdAt: DateTime;
  createdBy: InternalActor;
  id: Scalars['ID'];
  /** This SLA will breach if it does not receive a next response within this many minutes. */
  nextResponseTimeMinutes: Scalars['Int'];
  threadPriorityFilter: Array<Scalars['Int']>;
  updatedAt: DateTime;
  updatedBy: InternalActor;
  useBusinessHoursOnly: Scalars['Boolean'];
};

export type Note = {
  __typename?: 'Note';
  createdAt: DateTime;
  createdBy: InternalActor;
  customer: Customer;
  deletedAt: Maybe<DateTime>;
  deletedBy: Maybe<InternalActor>;
  id: Scalars['ID'];
  isDeleted: Scalars['Boolean'];
  markdown: Maybe<Scalars['String']>;
  text: Scalars['String'];
  updatedAt: DateTime;
  updatedBy: InternalActor;
};

export type NoteEntry = {
  __typename?: 'NoteEntry';
  markdown: Maybe<Scalars['String']>;
  noteId: Scalars['ID'];
  text: Scalars['String'];
};

/** A number setting */
export type NumberSetting = {
  __typename?: 'NumberSetting';
  /** The setting code. */
  code: Scalars['String'];
  /** The value of the setting. This is named uniquely (instead of just `value`) so that the union has unique fields. */
  numberValue: Scalars['Int'];
  /** The scope of the setting. */
  scope: SettingScope;
};

export type OptionalBooleanInput = {
  value?: InputMaybe<Scalars['Boolean']>;
};

export type OptionalDependsOnThreadFieldInput = {
  value?: InputMaybe<DependsOnThreadFieldInput>;
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

export type PaymentMethod = {
  __typename?: 'PaymentMethod';
  isAvailable: Scalars['Boolean'];
};

export type PerSeatRecurringPrice = RecurringPrice & {
  __typename?: 'PerSeatRecurringPrice';
  billingIntervalCount: Scalars['Int'];
  billingIntervalUnit: BillingIntervalUnit;
  currency: CurrencyCode;
  perSeatAmount: Scalars['Int'];
};

export type Permissions = {
  __typename?: 'Permissions';
  permissions: Array<Scalars['String']>;
};

export type PreviewBillingPlanChangeInput = {
  intervalUnit?: InputMaybe<BillingIntervalUnit>;
  planKey: BillingPlanKey;
};

export type PreviewBillingPlanChangeOutput = {
  __typename?: 'PreviewBillingPlanChangeOutput';
  error: Maybe<MutationError>;
  preview: Maybe<BillingPlanChangePreview>;
};

export type Price = {
  __typename?: 'Price';
  amount: Scalars['Int'];
  currency: CurrencyCode;
};

export type PriceTier = {
  __typename?: 'PriceTier';
  flatAmount: Scalars['Int'];
  maxSeats: Scalars['Int'];
  perSeatAmount: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  autoresponder: Maybe<Autoresponder>;
  autoresponders: AutoresponderConnection;
  billingPlans: BillingPlanConnection;
  businessHours: Maybe<BusinessHours>;
  companies: CompanyConnection;
  company: Maybe<Company>;
  /** Gets all slack channels for this workspace, which match the specified filters. */
  connectedSlackChannels: ConnectedSlackChannelConnection;
  customer: Maybe<Customer>;
  customerByEmail: Maybe<Customer>;
  /** Get a customer by its external ID. A customer's external ID is unique within a workspace. */
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
  labelType: Maybe<LabelType>;
  labelTypes: LabelTypeConnection;
  machineUser: Maybe<MachineUser>;
  machineUsers: MachineUserConnection;
  myBillingRota: Maybe<BillingRota>;
  myBillingSubscription: Maybe<BillingSubscription>;
  myEmailSignature: Maybe<EmailSignature>;
  myLinearInstallationInfo: UserLinearInstallationInfo;
  myLinearIntegration: Maybe<UserLinearIntegration>;
  myLinearIntegrationToken: Maybe<LinearIntegrationToken>;
  myMSTeamsInstallationInfo: UserMsTeamsInstallationInfo;
  myMSTeamsIntegration: Maybe<UserMsTeamsIntegration>;
  myMachineUser: Maybe<MachineUser>;
  myPaymentMethod: Maybe<PaymentMethod>;
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
  searchCompanies: CompanySearchResultConnection;
  /**
   * Search for customers based on the provided query. Returned customers are sorted by how recently
   * they changed status (most recent first).
   */
  searchCustomers: CustomerSearchConnection;
  /**
   * Searches for slack users in a slack channel based on a search term.
   * The search term can be part of either the slack's handle or full name.
   */
  searchSlackUsers: SlackUserConnection;
  searchTenants: TenantSearchResultConnection;
  /**
   * Searches for slack users in a thread based on a search term.
   * The search term can be part of either the slack's handle or full name.
   */
  searchThreadSlackUsers: SlackUserConnection;
  searchThreads: ThreadSearchResultConnection;
  serviceAuthorization: Maybe<ServiceAuthorization>;
  serviceAuthorizations: ServiceAuthorizationConnection;
  /** Gets a single setting based on the code and the scope. */
  setting: Maybe<Setting>;
  singleValueMetric: Maybe<SingleValueMetric>;
  /** Gets a single slack user within a channel based on their slack user ID. */
  slackUser: Maybe<SlackUser>;
  snippet: Maybe<Snippet>;
  snippets: SnippetConnection;
  /** List all the events types you can subscribe to. */
  subscriptionEventTypes: Array<SubscriptionEventType>;
  tenant: Maybe<Tenant>;
  tenants: TenantConnection;
  /** Get a thread by its ID. */
  thread: Maybe<Thread>;
  /** Get a thread by its external ID. A thread's external ID is unique within a customer, hence why the customer ID is required. */
  threadByExternalId: Maybe<Thread>;
  threadDiscussion: Maybe<ThreadDiscussion>;
  threadFieldSchema: Maybe<ThreadFieldSchema>;
  threadFieldSchemas: ThreadFieldSchemaConnection;
  /** Gets a single slack user within a thread based on their slack user ID. */
  threadSlackUser: Maybe<SlackUser>;
  threads: ThreadConnection;
  tier: Maybe<Tier>;
  tiers: TierConnection;
  timeSeriesMetric: Maybe<TimeSeriesMetric>;
  timelineEntries: TimelineEntryConnection;
  timelineEntry: Maybe<TimelineEntry>;
  user: Maybe<User>;
  userAuthSlackInstallationInfo: UserAuthSlackInstallationInfo;
  userAuthSlackIntegration: Maybe<UserAuthSlackIntegration>;
  userAuthSlackIntegrationByThreadId: Maybe<UserAuthSlackIntegration>;
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
  /** List webhook versions. */
  webhookVersions: WebhookVersionConnection;
  workspace: Maybe<Workspace>;
  workspaceChatSettings: WorkspaceChatSettings;
  workspaceDiscordIntegration: Maybe<WorkspaceDiscordIntegration>;
  workspaceDiscordIntegrations: WorkspaceDiscordIntegrationConnection;
  workspaceEmailSettings: WorkspaceEmailSettings;
  workspaceHmac: Maybe<WorkspaceHmac>;
  workspaceInvites: WorkspaceInviteConnection;
  workspaceMSTeamsInstallationInfo: WorkspaceMsTeamsInstallationInfo;
  workspaceMSTeamsIntegration: Maybe<WorkspaceMsTeamsIntegration>;
  workspaceSlackChannelInstallationInfo: WorkspaceSlackChannelInstallationInfo;
  workspaceSlackChannelIntegration: Maybe<WorkspaceSlackChannelIntegration>;
  workspaceSlackChannelIntegrations: WorkspaceSlackChannelIntegrationConnection;
  workspaceSlackInstallationInfo: WorkspaceSlackInstallationInfo;
  workspaceSlackIntegration: Maybe<WorkspaceSlackIntegration>;
  workspaceSlackIntegrations: WorkspaceSlackIntegrationConnection;
};


export type QueryAutoresponderArgs = {
  autoresponderId: Scalars['ID'];
};


export type QueryAutorespondersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type QueryBillingPlansArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type QueryCompaniesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filters?: InputMaybe<CompaniesFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type QueryCompanyArgs = {
  companyId: Scalars['ID'];
};


export type QueryConnectedSlackChannelsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filters?: InputMaybe<ConnectedSlackChannelsFilter>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
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
  threadId?: InputMaybe<Scalars['ID']>;
};


export type QueryCustomerGroupArgs = {
  customerGroupId: Scalars['ID'];
};


export type QueryCustomerGroupsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  filters?: InputMaybe<CustomerGroupsFilter>;
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


export type QueryMyLinearInstallationInfoArgs = {
  redirectUrl: Scalars['String'];
};


export type QueryMyMsTeamsInstallationInfoArgs = {
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


export type QuerySearchCompaniesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  searchQuery: CompaniesSearchQuery;
};


export type QuerySearchCustomersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  searchQuery: CustomersSearchQuery;
};


export type QuerySearchSlackUsersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  searchQuery: Scalars['String'];
  slackChannelId: Scalars['String'];
  slackTeamId: Scalars['String'];
};


export type QuerySearchTenantsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  searchQuery: TenantsSearchQuery;
};


export type QuerySearchThreadSlackUsersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  searchQuery: Scalars['String'];
  threadId: Scalars['ID'];
};


export type QuerySearchThreadsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  searchQuery: ThreadsSearchQuery;
};


export type QueryServiceAuthorizationArgs = {
  serviceAuthorizationId: Scalars['ID'];
};


export type QueryServiceAuthorizationsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type QuerySettingArgs = {
  code: Scalars['String'];
  scope: SettingScopeInput;
};


export type QuerySingleValueMetricArgs = {
  name: Scalars['String'];
  options?: InputMaybe<SingleValueMetricOptions>;
};


export type QuerySlackUserArgs = {
  slackChannelId: Scalars['String'];
  slackTeamId: Scalars['String'];
  slackUserId: Scalars['ID'];
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


export type QueryTenantArgs = {
  tenantId: Scalars['ID'];
};


export type QueryTenantsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type QueryThreadArgs = {
  threadId: Scalars['ID'];
};


export type QueryThreadByExternalIdArgs = {
  customerId: Scalars['ID'];
  externalId: Scalars['ID'];
};


export type QueryThreadDiscussionArgs = {
  threadDiscussionId: Scalars['ID'];
};


export type QueryThreadFieldSchemaArgs = {
  threadFieldSchemaId: Scalars['ID'];
};


export type QueryThreadFieldSchemasArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type QueryThreadSlackUserArgs = {
  slackUserId: Scalars['ID'];
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


export type QueryTierArgs = {
  tierId: Scalars['ID'];
};


export type QueryTiersArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type QueryTimeSeriesMetricArgs = {
  name: Scalars['String'];
  options?: InputMaybe<TimeSeriesMetricOptions>;
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


export type QueryUserAuthSlackInstallationInfoArgs = {
  redirectUrl: Scalars['String'];
  slackTeamId?: InputMaybe<Scalars['String']>;
};


export type QueryUserAuthSlackIntegrationArgs = {
  slackTeamId: Scalars['String'];
};


export type QueryUserAuthSlackIntegrationByThreadIdArgs = {
  threadId: Scalars['ID'];
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


export type QueryWebhookVersionsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};


export type QueryWorkspaceArgs = {
  workspaceId: Scalars['ID'];
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


export type QueryWorkspaceMsTeamsInstallationInfoArgs = {
  redirectUrl: Scalars['String'];
};


export type QueryWorkspaceSlackChannelInstallationInfoArgs = {
  redirectUrl: Scalars['String'];
};


export type QueryWorkspaceSlackChannelIntegrationArgs = {
  integrationId: Scalars['ID'];
};


export type QueryWorkspaceSlackChannelIntegrationsArgs = {
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

export type RecurringPrice = {
  billingIntervalCount: Scalars['Int'];
  billingIntervalUnit: BillingIntervalUnit;
  currency: CurrencyCode;
};

export type RegenerateWorkspaceHmacOutput = {
  __typename?: 'RegenerateWorkspaceHmacOutput';
  error: Maybe<MutationError>;
  workspaceHmac: Maybe<WorkspaceHmac>;
};

export type ReloadCustomerCardInstanceInput = {
  customerCardConfigId: Scalars['ID'];
  customerId: Scalars['ID'];
  threadId?: InputMaybe<Scalars['ID']>;
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

export type RemoveCustomerFromTenantsInput = {
  customerIdentifier: CustomerIdentifierInput;
  tenantIdentifiers: Array<TenantIdentifierInput>;
};

export type RemoveCustomerFromTenantsOutput = {
  __typename?: 'RemoveCustomerFromTenantsOutput';
  customer: Maybe<Customer>;
  error: Maybe<MutationError>;
};

export type RemoveLabelsInput = {
  labelIds: Array<Scalars['ID']>;
};

export type RemoveLabelsOutput = {
  __typename?: 'RemoveLabelsOutput';
  error: Maybe<MutationError>;
};

export type RemoveMembersFromTierInput = {
  memberIdentifiers: Array<TierMemberIdentifierInput>;
};

export type RemoveMembersFromTierOutput = {
  __typename?: 'RemoveMembersFromTierOutput';
  error: Maybe<MutationError>;
  memberships: Array<TierMembership>;
};

export type RemoveUserFromActiveBillingRotaInput = {
  userId: Scalars['ID'];
};

export type RemoveUserFromActiveBillingRotaOutput = {
  __typename?: 'RemoveUserFromActiveBillingRotaOutput';
  billingRota: Maybe<BillingRota>;
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

export type ReorderAutorespondersInput = {
  autorespondersOrder: Array<AutoresponderOrderInput>;
};

export type ReorderAutorespondersOutput = {
  __typename?: 'ReorderAutorespondersOutput';
  autoresponders: Maybe<Array<Autoresponder>>;
  error: Maybe<MutationError>;
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

export type ReorderThreadFieldSchemasInput = {
  threadFieldSchemaOrders: Array<ThreadFieldSchemaOrderInput>;
};

export type ReorderThreadFieldSchemasOutput = {
  __typename?: 'ReorderThreadFieldSchemasOutput';
  error: Maybe<MutationError>;
  threadFieldSchemas: Maybe<Array<ThreadFieldSchema>>;
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

export type ReplyToThreadChannelSpecificOptionsInput = {
  email: ReplyToThreadEmailChannelSpecificOptionsInput;
};

export type ReplyToThreadEmailChannelSpecificOptionsInput = {
  additionalRecipients?: InputMaybe<Array<EmailParticipantInput>>;
  hiddenRecipients?: InputMaybe<Array<EmailParticipantInput>>;
};

export type ReplyToThreadInput = {
  channelSpecificOptions?: InputMaybe<ReplyToThreadChannelSpecificOptionsInput>;
  impersonation?: InputMaybe<ImpersonationInput>;
  markdownContent?: InputMaybe<Scalars['String']>;
  textContent: Scalars['String'];
  threadId: Scalars['ID'];
};

export type ReplyToThreadOutput = {
  __typename?: 'ReplyToThreadOutput';
  error: Maybe<MutationError>;
};

export type Role = {
  __typename?: 'Role';
  /** @deprecated Don't use. Will be removed soon. */
  assignableBillingSeats: Array<BillingSeatType>;
  description: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  /** @deprecated Use isAssignableToThread instead */
  isAssignableToCustomer: Scalars['Boolean'];
  isAssignableToThread: Scalars['Boolean'];
  key: Maybe<RoleKey>;
  name: Scalars['String'];
  permissions: Array<Scalars['String']>;
  /** @deprecated Don't use. Will be removed soon. */
  requiresBillableSeat: Scalars['Boolean'];
};

export type RoleChangeCost = {
  __typename?: 'RoleChangeCost';
  addingSeatType: BillingSeatType;
  intervalCount: Scalars['Int'];
  intervalUnit: BillingIntervalUnit;
  removingSeatType: Maybe<BillingSeatType>;
  totalPrice: Price;
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

export enum RoleKey {
  Admin = 'ADMIN',
  Owner = 'OWNER',
  Support = 'SUPPORT',
  Viewer = 'VIEWER'
}

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
  threadId?: InputMaybe<Scalars['ID']>;
};

export type SendChatOutput = {
  __typename?: 'SendChatOutput';
  chat: Maybe<Chat>;
  error: Maybe<MutationError>;
};

export type SendCustomerChatInput = {
  attachmentIds?: InputMaybe<Array<Scalars['ID']>>;
  customerId: Scalars['ID'];
  text?: InputMaybe<Scalars['String']>;
  threadId: Scalars['ID'];
};

export type SendCustomerChatOutput = {
  __typename?: 'SendCustomerChatOutput';
  chat: Maybe<Chat>;
  error: Maybe<MutationError>;
};

export type SendMsTeamsMessageInput = {
  attachmentIds?: InputMaybe<Array<Scalars['ID']>>;
  markdownContent?: InputMaybe<Scalars['String']>;
  threadId: Scalars['ID'];
};

export type SendMsTeamsMessageOutput = {
  __typename?: 'SendMSTeamsMessageOutput';
  error: Maybe<MutationError>;
  msTeamsMessage: Maybe<MsTeamsMessage>;
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
  /** If provided this will add the new email to an existing thread. If not provided, a new thread will be created. */
  threadId?: InputMaybe<Scalars['ID']>;
};

export type SendNewEmailOutput = {
  __typename?: 'SendNewEmailOutput';
  email: Maybe<Email>;
  error: Maybe<MutationError>;
};

export type SendSlackMessageInput = {
  attachmentIds?: InputMaybe<Array<Scalars['ID']>>;
  markdownContent?: InputMaybe<Scalars['String']>;
  /** @deprecated Use markdownContent instead */
  textContent?: InputMaybe<Scalars['String']>;
  threadId: Scalars['ID'];
};

export type SendSlackMessageOutput = {
  __typename?: 'SendSlackMessageOutput';
  error: Maybe<MutationError>;
};

export type SendThreadDiscussionMessageInput = {
  attachmentIds?: InputMaybe<Array<Scalars['ID']>>;
  markdownContent: Scalars['String'];
  threadDiscussionId: Scalars['ID'];
};

export type SendThreadDiscussionMessageOutput = {
  __typename?: 'SendThreadDiscussionMessageOutput';
  error: Maybe<MutationError>;
  threadDiscussionMessage: Maybe<ThreadDiscussionMessage>;
};

export type ServiceAuthorization = {
  __typename?: 'ServiceAuthorization';
  createdAt: DateTime;
  createdBy: InternalActor;
  id: Scalars['ID'];
  serviceIntegration: ServiceIntegration;
  updatedAt: DateTime;
  updatedBy: InternalActor;
};

export type ServiceAuthorizationConnection = {
  __typename?: 'ServiceAuthorizationConnection';
  edges: Array<ServiceAuthorizationEdge>;
  pageInfo: PageInfo;
};

export type ServiceAuthorizationConnectionDetails = {
  __typename?: 'ServiceAuthorizationConnectionDetails';
  hmacDigest: Scalars['String'];
  serviceAuthorizationId: Scalars['ID'];
  serviceIntegrationKey: Scalars['String'];
};

export type ServiceAuthorizationEdge = {
  __typename?: 'ServiceAuthorizationEdge';
  cursor: Scalars['String'];
  node: ServiceAuthorization;
};

export type ServiceIntegration = {
  __typename?: 'ServiceIntegration';
  key: Scalars['String'];
  name: Scalars['String'];
};

export type ServiceLevelAgreement = {
  /** The actions to take when the SLA is about to breach and when it breaches. */
  breachActions: Array<BreachAction>;
  createdAt: DateTime;
  createdBy: InternalActor;
  id: Scalars['ID'];
  /** This SLA can only be applied to a thread if it has one of these priority values. */
  threadPriorityFilter: Array<Scalars['Int']>;
  updatedAt: DateTime;
  updatedBy: InternalActor;
  /** If true, the SLA will only be tracked during your workspace's business hours. If false, the SLA will tracked 24/7. */
  useBusinessHoursOnly: Scalars['Boolean'];
};

export type ServiceLevelAgreementFilter = {
  statuses?: InputMaybe<Array<ServiceLevelAgreementStatus>>;
  types?: InputMaybe<Array<ServiceLevelAgreementType>>;
};

export type ServiceLevelAgreementInput = {
  /** The actions to take when the SLA is about to breach and when it breaches. */
  breachActions: Array<BreachActionInput>;
  /** Set this to configure the firt response time SLA. */
  firstResponseTimeMinutes?: InputMaybe<Scalars['Int']>;
  /** Set this to configure an SLA for next responses. */
  nextResponseTimeMinutes?: InputMaybe<Scalars['Int']>;
  /** This SLA can only be applied to a thread if it has one of these priority values. If not provided, it defaults to all priorities (0, 1, 2 and 3). */
  threadPriorityFilter?: InputMaybe<Array<Scalars['Int']>>;
  /** If true, the SLA will only be tracked during your workspace's business hours. If false, the SLA will tracked 24/7. */
  useBusinessHoursOnly: Scalars['Boolean'];
};

export enum ServiceLevelAgreementStatus {
  Achieved = 'ACHIEVED',
  Breached = 'BREACHED',
  Breaching = 'BREACHING',
  Cancelled = 'CANCELLED',
  ImminentBreach = 'IMMINENT_BREACH',
  Pending = 'PENDING'
}

export type ServiceLevelAgreementStatusDetail = ServiceLevelAgreementStatusDetailAchieved | ServiceLevelAgreementStatusDetailBreached | ServiceLevelAgreementStatusDetailBreaching | ServiceLevelAgreementStatusDetailCancelled | ServiceLevelAgreementStatusDetailImminentBreach | ServiceLevelAgreementStatusDetailPending;

export type ServiceLevelAgreementStatusDetailAchieved = {
  __typename?: 'ServiceLevelAgreementStatusDetailAchieved';
  /** The time when this SLA was achieved. */
  achievedAt: DateTime;
};

export type ServiceLevelAgreementStatusDetailBreached = {
  __typename?: 'ServiceLevelAgreementStatusDetailBreached';
  /** The time when this SLA breached. */
  breachedAt: DateTime;
  /** The time when we completed this breached SLA. */
  completedAt: DateTime;
};

export type ServiceLevelAgreementStatusDetailBreaching = {
  __typename?: 'ServiceLevelAgreementStatusDetailBreaching';
  /** The time when this SLA breached. */
  breachedAt: DateTime;
};

export type ServiceLevelAgreementStatusDetailCancelled = {
  __typename?: 'ServiceLevelAgreementStatusDetailCancelled';
  /** The time when this SLA was cancelled. */
  cancelledAt: DateTime;
};

export type ServiceLevelAgreementStatusDetailImminentBreach = {
  __typename?: 'ServiceLevelAgreementStatusDetailImminentBreach';
  /** The time when this SLA will breach. */
  breachingAt: DateTime;
};

export type ServiceLevelAgreementStatusDetailPending = {
  __typename?: 'ServiceLevelAgreementStatusDetailPending';
  /** The time when this SLA will breach. */
  breachingAt: DateTime;
};

export type ServiceLevelAgreementStatusSummary = {
  __typename?: 'ServiceLevelAgreementStatusSummary';
  firstResponseTime: Maybe<ServiceLevelAgreementStatusDetail>;
  nextResponseTime: Maybe<ServiceLevelAgreementStatusDetail>;
};

export type ServiceLevelAgreementStatusTransitionedEntry = {
  __typename?: 'ServiceLevelAgreementStatusTransitionedEntry';
  nextStatus: ServiceLevelAgreementStatus;
  previousStatus: ServiceLevelAgreementStatus;
  serviceLevelAgreement: Maybe<ServiceLevelAgreement>;
};

export enum ServiceLevelAgreementType {
  FirstResponseTime = 'FIRST_RESPONSE_TIME',
  NextResponseTime = 'NEXT_RESPONSE_TIME'
}

export type SetCustomerTenantsInput = {
  customerIdentifier: CustomerIdentifierInput;
  tenantIdentifiers: Array<TenantIdentifierInput>;
};

export type SetCustomerTenantsOutput = {
  __typename?: 'SetCustomerTenantsOutput';
  customer: Maybe<Customer>;
  error: Maybe<MutationError>;
};

/** A union of different types of settings. */
export type Setting = BooleanSetting | NumberSetting | StringSetting;

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
   * Scope for slack support channel settings.
   * An `id` is mandatory and should be a workspace slack channel integration id (`wsSlackInt_123`)
   */
  WorkspaceSlackChannel = 'WORKSPACE_SLACK_CHANNEL',
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
  /** If the setting is a string value then this field should be set. */
  string?: InputMaybe<Scalars['String']>;
};

export type ShareThreadToUserInSlackInput = {
  threadId: Scalars['ID'];
  userId: Scalars['ID'];
};

export type ShareThreadToUserInSlackOutput = {
  __typename?: 'ShareThreadToUserInSlackOutput';
  error: Maybe<MutationError>;
};

export type SingleValueMetric = {
  __typename?: 'SingleValueMetric';
  values: Array<SingleValueMetricValue>;
};

export type SingleValueMetricOptions = {
  dimension?: InputMaybe<MetricDimensionType>;
  /** Defaults to 24 hours ago. */
  from?: InputMaybe<Scalars['String']>;
  subDimension?: InputMaybe<Scalars['String']>;
  to?: InputMaybe<Scalars['String']>;
};

export type SingleValueMetricValue = {
  __typename?: 'SingleValueMetricValue';
  dimension: Maybe<MetricDimension>;
  value: Maybe<Scalars['Float']>;
};

export type SlackMessageEntry = {
  __typename?: 'SlackMessageEntry';
  attachments: Array<Attachment>;
  customerId: Scalars['ID'];
  deletedOnSlackAt: Maybe<DateTime>;
  lastEditedOnSlackAt: Maybe<DateTime>;
  reactions: Array<SlackReaction>;
  relatedThread: Maybe<SlackMessageEntryRelatedThread>;
  slackMessageLink: Scalars['String'];
  text: Scalars['String'];
};

export type SlackMessageEntryRelatedThread = {
  __typename?: 'SlackMessageEntryRelatedThread';
  threadId: Scalars['ID'];
};

export type SlackReaction = {
  __typename?: 'SlackReaction';
  actors: Array<Actor>;
  imageUrl: Maybe<Scalars['String']>;
  name: Scalars['String'];
};

export type SlackReplyEntry = {
  __typename?: 'SlackReplyEntry';
  attachments: Array<Attachment>;
  customerId: Scalars['ID'];
  deletedOnSlackAt: Maybe<DateTime>;
  lastEditedOnSlackAt: Maybe<DateTime>;
  reactions: Array<SlackReaction>;
  slackMessageLink: Scalars['String'];
  text: Scalars['String'];
};

export type SlackThreadChannelDetails = {
  __typename?: 'SlackThreadChannelDetails';
  slackChannelId: Scalars['String'];
  slackChannelName: Scalars['String'];
  slackTeamId: Scalars['String'];
  slackTeamName: Scalars['String'];
};

export type SlackThreadExternalChannelDetails = {
  __typename?: 'SlackThreadExternalChannelDetails';
  slackChannelId: Scalars['String'];
  slackChannelName: Scalars['String'];
  slackTeamId: Scalars['String'];
  slackTeamName: Scalars['String'];
};

export type SlackUser = {
  __typename?: 'SlackUser';
  createdAt: DateTime;
  createdBy: InternalActor;
  fullName: Scalars['String'];
  id: Scalars['ID'];
  isInChannel: Scalars['Boolean'];
  slackAvatarUrl72px: Maybe<Scalars['String']>;
  slackHandle: Scalars['String'];
  slackUserId: Scalars['ID'];
  updatedAt: DateTime;
  updatedBy: InternalActor;
};

export type SlackUserConnection = {
  __typename?: 'SlackUserConnection';
  edges: Array<SlackUserEdge>;
  pageInfo: PageInfo;
};

export type SlackUserEdge = {
  __typename?: 'SlackUserEdge';
  cursor: Scalars['String'];
  node: SlackUser;
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

export enum SnoozeStatusDetail {
  WaitingForCustomer = 'WAITING_FOR_CUSTOMER',
  WaitingForDuration = 'WAITING_FOR_DURATION'
}

export type SnoozeThreadInput = {
  durationSeconds?: InputMaybe<Scalars['Int']>;
  statusDetail?: InputMaybe<SnoozeStatusDetail>;
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

export type StartServiceAuthorizationInput = {
  serviceIntegrationKey: Scalars['String'];
};

export type StartServiceAuthorizationOutput = {
  __typename?: 'StartServiceAuthorizationOutput';
  connectionDetails: Maybe<ServiceAuthorizationConnectionDetails>;
  error: Maybe<MutationError>;
};

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

/** A string setting */
export type StringSetting = {
  __typename?: 'StringSetting';
  /** The setting code. */
  code: Scalars['String'];
  /** The scope of the setting. */
  scope: SettingScope;
  /** The value of the setting. This is named uniquely (instead of just `value`) so that the union has unique fields. */
  stringValue: Scalars['String'];
};

export type Subscription = {
  __typename?: 'Subscription';
  customerCardInstanceChanges: CustomerCardInstanceChangesResult;
  customerChanges: CustomerChange;
  threadChanges: ThreadChange;
  threadFieldSchemaChanges: ThreadFieldSchemaChange;
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

export type System = {
  __typename?: 'System';
  id: Scalars['ID'];
};

export type SystemActor = {
  __typename?: 'SystemActor';
  systemId: Scalars['ID'];
};

export type Tenant = {
  __typename?: 'Tenant';
  createdAt: DateTime;
  createdBy: InternalActor;
  externalId: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  updatedAt: DateTime;
  updatedBy: InternalActor;
  url: Maybe<Scalars['String']>;
};

export type TenantConnection = {
  __typename?: 'TenantConnection';
  edges: Array<TenantEdge>;
  pageInfo: PageInfo;
};

export type TenantEdge = {
  __typename?: 'TenantEdge';
  cursor: Scalars['String'];
  node: Tenant;
};

export type TenantIdentifierInput = {
  externalId?: InputMaybe<Scalars['String']>;
  tenantId?: InputMaybe<Scalars['ID']>;
};

export type TenantSearchResult = {
  __typename?: 'TenantSearchResult';
  tenant: Tenant;
};

export type TenantSearchResultConnection = {
  __typename?: 'TenantSearchResultConnection';
  edges: Array<TenantSearchResultEdge>;
  pageInfo: PageInfo;
};

export type TenantSearchResultEdge = {
  __typename?: 'TenantSearchResultEdge';
  cursor: Scalars['String'];
  node: TenantSearchResult;
};

export type TenantTierMembership = {
  __typename?: 'TenantTierMembership';
  createdAt: DateTime;
  createdBy: InternalActor;
  id: Scalars['ID'];
  tenantId: Scalars['ID'];
  tierId: Scalars['ID'];
  updatedAt: DateTime;
  updatedBy: InternalActor;
};

/** Query to search for tenants. */
export type TenantsSearchQuery = {
  /**
   * The term to search for. It must be at least 2 characters long. The search is case-insensitive on these two fields:
   * - the tenant name (partial match)
   * - the tenant external id (exact match)
   */
  term: Scalars['String'];
};

/** A thread represents a conversation with a customer, around a specific topic. */
export type Thread = {
  __typename?: 'Thread';
  /** The datetime when this thread was last assigned to someone or something. */
  assignedAt: Maybe<DateTime>;
  /** Who or what this thread is assigned to. */
  assignedTo: Maybe<ThreadAssignee>;
  /** The channel this thread belongs to. */
  channel: ThreadChannel;
  /** Details about the channel this thread is on. */
  channelDetails: Maybe<ThreadChannelDetails>;
  /** The datetime when this thread was created. */
  createdAt: DateTime;
  /** The actor who created this thread. */
  createdBy: Actor;
  /** The customer involved in this thread. */
  customer: Customer;
  /** The description of this thread. */
  description: Maybe<Scalars['String']>;
  /** @deprecated Use channelDetails instead */
  externalChannelDetails: Maybe<ThreadExternalChannelDetails>;
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
  /** The preview text of the thread reflects the current state of the thread. As such, it might be updated when new activity happens in the thread. */
  previewText: Maybe<Scalars['String']>;
  /** The priority of the thread. Valid values are 0, 1, 2, 3, from most to least urgent. */
  priority: Scalars['Int'];
  /** If this thread has a linked SLA, this will inform on the status of its objectives. */
  serviceLevelAgreementStatusSummary: ServiceLevelAgreementStatusSummary;
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
  /** The tenant this thread is associated with. */
  tenant: Maybe<Tenant>;
  /** The thread discussions attached to this thread. */
  threadDiscussions: Array<ThreadDiscussion>;
  /** The thread fields attached to this thread. */
  threadFields: Array<ThreadField>;
  /** The tier this thread is associated with. Tiers mandate the SLAs for this thread. */
  tier: Maybe<Tier>;
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

export type ThreadAssignee = MachineUser | System | User;

export type ThreadAssignmentTransitionedEntry = {
  __typename?: 'ThreadAssignmentTransitionedEntry';
  nextAssignee: Maybe<ThreadAssignee>;
  previousAssignee: Maybe<ThreadAssignee>;
};

export type ThreadChange = {
  __typename?: 'ThreadChange';
  changeType: ChangeType;
  thread: Thread;
};

export enum ThreadChannel {
  Api = 'API',
  Chat = 'CHAT',
  Email = 'EMAIL',
  MsTeams = 'MS_TEAMS',
  Slack = 'SLACK'
}

export type ThreadChannelDetails = SlackThreadChannelDetails;

export type ThreadConnection = {
  __typename?: 'ThreadConnection';
  edges: Array<ThreadEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type ThreadDiscussion = {
  __typename?: 'ThreadDiscussion';
  createdAt: DateTime;
  createdBy: Actor;
  id: Scalars['ID'];
  messages: ThreadDiscussionMessageConnection;
  resolvedAt: Maybe<DateTime>;
  slackChannelId: Scalars['String'];
  slackChannelName: Scalars['String'];
  slackMessageLink: Scalars['String'];
  slackTeamId: Scalars['String'];
  threadId: Scalars['ID'];
  title: Scalars['String'];
  updatedAt: DateTime;
  updatedBy: Actor;
};


export type ThreadDiscussionMessagesArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type ThreadDiscussionEntry = {
  __typename?: 'ThreadDiscussionEntry';
  customerId: Scalars['ID'];
  slackChannelName: Scalars['String'];
  slackMessageLink: Scalars['String'];
  threadDiscussionId: Scalars['ID'];
};

export type ThreadDiscussionMessage = {
  __typename?: 'ThreadDiscussionMessage';
  attachments: Array<Attachment>;
  createdAt: DateTime;
  createdBy: Actor;
  deletedOnSlackAt: Maybe<DateTime>;
  id: Scalars['ID'];
  lastEditedOnSlackAt: Maybe<DateTime>;
  reactions: Array<ThreadDiscussionMessageReaction>;
  slackMessageLink: Scalars['String'];
  text: Scalars['String'];
  threadDiscussionId: Scalars['ID'];
  updatedAt: DateTime;
  updatedBy: Actor;
};

export type ThreadDiscussionMessageConnection = {
  __typename?: 'ThreadDiscussionMessageConnection';
  edges: Array<ThreadDiscussionMessageEdge>;
  pageInfo: PageInfo;
};

export type ThreadDiscussionMessageEdge = {
  __typename?: 'ThreadDiscussionMessageEdge';
  cursor: Scalars['String'];
  node: ThreadDiscussionMessage;
};

export type ThreadDiscussionMessageReaction = {
  __typename?: 'ThreadDiscussionMessageReaction';
  actors: Array<Actor>;
  imageUrl: Maybe<Scalars['String']>;
  name: Scalars['String'];
};

export type ThreadDiscussionResolvedEntry = {
  __typename?: 'ThreadDiscussionResolvedEntry';
  customerId: Scalars['ID'];
  resolvedAt: DateTime;
  slackChannelName: Scalars['String'];
  slackMessageLink: Scalars['String'];
  threadDiscussionId: Scalars['ID'];
};

export type ThreadEdge = {
  __typename?: 'ThreadEdge';
  cursor: Scalars['String'];
  node: Thread;
};

export type ThreadEvent = {
  __typename?: 'ThreadEvent';
  /** The list of components of the event. */
  components: Array<EventComponent>;
  /** The datetime when this event was created. */
  createdAt: DateTime;
  /** The actor who created this event. */
  createdBy: Actor;
  /** The customer that this event belongs to. */
  customerId: Scalars['ID'];
  /** The ID of the event. */
  id: Scalars['ID'];
  /** The thread that this event belongs to. */
  threadId: Scalars['ID'];
  /** The title of the event. */
  title: Scalars['String'];
  /** The datetime when this event was last updated. */
  updatedAt: DateTime;
  /** The actor who last updated this event. */
  updatedBy: Actor;
};

export type ThreadEventEntry = TimelineEventEntry & {
  __typename?: 'ThreadEventEntry';
  components: Array<EventComponent>;
  customerId: Scalars['ID'];
  externalId: Maybe<Scalars['ID']>;
  timelineEventId: Scalars['ID'];
  title: Scalars['String'];
};

export type ThreadExternalChannelDetails = SlackThreadExternalChannelDetails;

export type ThreadField = {
  __typename?: 'ThreadField';
  booleanValue: Maybe<Scalars['Boolean']>;
  createdAt: DateTime;
  createdBy: InternalActor;
  id: Scalars['ID'];
  isAiGenerated: Scalars['Boolean'];
  key: Scalars['String'];
  stringValue: Maybe<Scalars['String']>;
  threadId: Scalars['ID'];
  type: ThreadFieldSchemaType;
  updatedAt: DateTime;
  updatedBy: InternalActor;
};

export type ThreadFieldFilter = {
  booleanValue?: InputMaybe<Scalars['Boolean']>;
  key: Scalars['String'];
  stringValue?: InputMaybe<Scalars['String']>;
};

export type ThreadFieldSchema = {
  __typename?: 'ThreadFieldSchema';
  createdAt: DateTime;
  createdBy: InternalActor;
  defaultBooleanValue: Maybe<Scalars['Boolean']>;
  defaultStringValue: Maybe<Scalars['String']>;
  dependsOnThreadField: Maybe<DependsOnThreadFieldType>;
  description: Scalars['String'];
  enumValues: Array<Scalars['String']>;
  id: Scalars['ID'];
  isAiAutoFillEnabled: Scalars['Boolean'];
  isRequired: Scalars['Boolean'];
  key: Scalars['String'];
  label: Scalars['String'];
  order: Scalars['Int'];
  type: ThreadFieldSchemaType;
  updatedAt: DateTime;
  updatedBy: InternalActor;
};

export type ThreadFieldSchemaChange = {
  __typename?: 'ThreadFieldSchemaChange';
  changeType: ChangeType;
  threadFieldSchema: ThreadFieldSchema;
};

export type ThreadFieldSchemaConnection = {
  __typename?: 'ThreadFieldSchemaConnection';
  edges: Array<ThreadFieldSchemaEdge>;
  pageInfo: PageInfo;
};

export type ThreadFieldSchemaEdge = {
  __typename?: 'ThreadFieldSchemaEdge';
  cursor: Scalars['String'];
  node: ThreadFieldSchema;
};

export type ThreadFieldSchemaOrderInput = {
  order: Scalars['Int'];
  threadFieldSchemaId: Scalars['ID'];
};

export enum ThreadFieldSchemaType {
  Bool = 'BOOL',
  Enum = 'ENUM',
  String = 'STRING'
}

export type ThreadLabelsChangedEntry = {
  __typename?: 'ThreadLabelsChangedEntry';
  nextLabels: Array<Label>;
  previousLabels: Array<Label>;
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

export type ThreadPriorityChangedEntry = {
  __typename?: 'ThreadPriorityChangedEntry';
  nextPriority: Scalars['Int'];
  previousPriority: Scalars['Int'];
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

export type ThreadStatusDetail = ThreadStatusDetailCreated | ThreadStatusDetailDoneAutomaticallySet | ThreadStatusDetailDoneManuallySet | ThreadStatusDetailIgnored | ThreadStatusDetailInProgress | ThreadStatusDetailLinearUpdated | ThreadStatusDetailNewReply | ThreadStatusDetailReplied | ThreadStatusDetailSnoozed | ThreadStatusDetailThreadDiscussionResolved | ThreadStatusDetailThreadLinkUpdated | ThreadStatusDetailUnsnoozed | ThreadStatusDetailWaitingForCustomer | ThreadStatusDetailWaitingForDuration;

export type ThreadStatusDetailCreated = {
  __typename?: 'ThreadStatusDetailCreated';
  createdAt: DateTime;
  statusChangedAt: DateTime;
};

export type ThreadStatusDetailDoneAutomaticallySet = {
  __typename?: 'ThreadStatusDetailDoneAutomaticallySet';
  afterSeconds: Maybe<Scalars['Int']>;
  statusChangedAt: DateTime;
};

export type ThreadStatusDetailDoneManuallySet = {
  __typename?: 'ThreadStatusDetailDoneManuallySet';
  statusChangedAt: DateTime;
};

export type ThreadStatusDetailIgnored = {
  __typename?: 'ThreadStatusDetailIgnored';
  statusChangedAt: DateTime;
};

export type ThreadStatusDetailInProgress = {
  __typename?: 'ThreadStatusDetailInProgress';
  statusChangedAt: DateTime;
};

export type ThreadStatusDetailLinearUpdated = {
  __typename?: 'ThreadStatusDetailLinearUpdated';
  /** @deprecated ThreadStatusDetailLinearUpdated is no longer supported, query ThreadStatusDetailThreadLinkUpdated instead. */
  linearIssueId: Scalars['ID'];
  /** @deprecated ThreadStatusDetailLinearUpdated is no longer supported, query ThreadStatusDetailThreadLinkUpdated instead. */
  statusChangedAt: DateTime;
  /** @deprecated ThreadStatusDetailLinearUpdated is no longer supported, query ThreadStatusDetailThreadLinkUpdated instead. */
  updatedAt: DateTime;
};

export type ThreadStatusDetailNewReply = {
  __typename?: 'ThreadStatusDetailNewReply';
  newReplyAt: Maybe<DateTime>;
  statusChangedAt: DateTime;
};

export type ThreadStatusDetailReplied = {
  __typename?: 'ThreadStatusDetailReplied';
  /** @deprecated ThreadStatusDetailReplied is no longer supported. */
  repliedAt: DateTime;
  /** @deprecated ThreadStatusDetailReplied is no longer supported. */
  statusChangedAt: DateTime;
};

export type ThreadStatusDetailSnoozed = {
  __typename?: 'ThreadStatusDetailSnoozed';
  /** @deprecated ThreadStatusDetailSnoozed is no longer supported. */
  snoozedAt: DateTime;
  /** @deprecated ThreadStatusDetailSnoozed is no longer supported. */
  snoozedUntil: DateTime;
  /** @deprecated ThreadStatusDetailSnoozed is no longer supported. */
  statusChangedAt: DateTime;
};

export type ThreadStatusDetailThreadDiscussionResolved = {
  __typename?: 'ThreadStatusDetailThreadDiscussionResolved';
  statusChangedAt: DateTime;
  threadDiscussionId: Maybe<Scalars['ID']>;
};

export type ThreadStatusDetailThreadLinkUpdated = {
  __typename?: 'ThreadStatusDetailThreadLinkUpdated';
  linearIssueId: Maybe<Scalars['ID']>;
  statusChangedAt: DateTime;
  /** @deprecated Use statusChangedAt instead */
  updatedAt: DateTime;
};

export type ThreadStatusDetailUnsnoozed = {
  __typename?: 'ThreadStatusDetailUnsnoozed';
  /** @deprecated ThreadStatusDetailUnsnoozed is no longer supported. */
  snoozedAt: DateTime;
  /** @deprecated ThreadStatusDetailUnsnoozed is no longer supported. */
  statusChangedAt: DateTime;
};

export type ThreadStatusDetailWaitingForCustomer = {
  __typename?: 'ThreadStatusDetailWaitingForCustomer';
  statusChangedAt: DateTime;
};

export type ThreadStatusDetailWaitingForDuration = {
  __typename?: 'ThreadStatusDetailWaitingForDuration';
  statusChangedAt: DateTime;
  waitingUntil: DateTime;
};

export type ThreadStatusTransitionedEntry = {
  __typename?: 'ThreadStatusTransitionedEntry';
  nextStatus: ThreadStatus;
  nextStatusDetail: Maybe<ThreadStatusDetail>;
  previousStatus: ThreadStatus;
  previousStatusDetail: Maybe<ThreadStatusDetail>;
};

export type ThreadsFilter = {
  assignedToUser?: InputMaybe<Array<Scalars['ID']>>;
  companyIdentifiers?: InputMaybe<Array<CompanyIdentifierInput>>;
  customerGroupIdentifiers?: InputMaybe<Array<CustomerGroupIdentifier>>;
  customerIds?: InputMaybe<Array<Scalars['ID']>>;
  isAssigned?: InputMaybe<Scalars['Boolean']>;
  isMarkedAsSpam?: InputMaybe<Scalars['Boolean']>;
  labelTypeIds?: InputMaybe<Array<Scalars['ID']>>;
  messageSource?: InputMaybe<Array<MessageSource>>;
  priorities?: InputMaybe<Array<Scalars['Int']>>;
  serviceLevelAgreements?: InputMaybe<ServiceLevelAgreementFilter>;
  statuses?: InputMaybe<Array<ThreadStatus>>;
  supportEmailAddresses?: InputMaybe<Array<Scalars['String']>>;
  tenantIdentifiers?: InputMaybe<Array<TenantIdentifierInput>>;
  threadFields?: InputMaybe<Array<ThreadFieldFilter>>;
  threadIds?: InputMaybe<Array<Scalars['ID']>>;
  tierIdentifiers?: InputMaybe<Array<TierIdentifierInput>>;
};

/**
 * Query to search for threads. The search term provided is used to match against different parts of the thread:
 * - its title
 * - its messages
 * - the customer's name
 * - the customer's email
 */
export type ThreadsSearchQuery = {
  /** The term to search for. It must be at least 2 characters long. The search is case-insensitive. */
  term: Scalars['String'];
};

export type ThreadsSort = {
  direction: SortDirection;
  field: ThreadsSortField;
};

export enum ThreadsSortField {
  ClosestToBreachSla = 'CLOSEST_TO_BREACH_SLA',
  CreatedAt = 'CREATED_AT',
  StatusChangedAt = 'STATUS_CHANGED_AT'
}

export type Tier = {
  __typename?: 'Tier';
  /** The color to assign to this tier, given by its hex code (e.g. #FABADA). This color is used in Plain's UI to represent this tier. */
  color: Scalars['String'];
  createdAt: DateTime;
  createdBy: InternalActor;
  /**
   * Any thread created in this tier will have this priority by default, unless a different priority is specified while creating it.
   * @deprecated Use defaultThreadPriority instead.
   */
  defaultPriority: Scalars['Int'];
  /** Any thread created in this tier will have this priority by default, unless a different priority is specified while creating it. */
  defaultThreadPriority: Scalars['Int'];
  /** The external ID of this tier. You can use this field to store your own unique identifier for this tier. This must be unique in your workspace. */
  externalId: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  /** If true, this tier will be applied to all threads that do not match any other tier. Only one tier can be the default tier. */
  isDefault: Scalars['Boolean'];
  memberships: TierMembershipConnection;
  /** The name of this tier. */
  name: Scalars['String'];
  serviceLevelAgreements: Array<ServiceLevelAgreement>;
  updatedAt: DateTime;
  updatedBy: InternalActor;
};


export type TierMembershipsArgs = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type TierConnection = {
  __typename?: 'TierConnection';
  edges: Array<TierEdge>;
  pageInfo: PageInfo;
};

export type TierEdge = {
  __typename?: 'TierEdge';
  cursor: Scalars['String'];
  node: Tier;
};

export type TierIdentifierInput = {
  externalId?: InputMaybe<Scalars['String']>;
  tierId?: InputMaybe<Scalars['ID']>;
};

export type TierMemberIdentifierInput = {
  companyId?: InputMaybe<Scalars['ID']>;
  tenantId?: InputMaybe<Scalars['ID']>;
};

export type TierMembership = CompanyTierMembership | TenantTierMembership;

export type TierMembershipConnection = {
  __typename?: 'TierMembershipConnection';
  edges: Array<TierMembershipEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type TierMembershipEdge = {
  __typename?: 'TierMembershipEdge';
  cursor: Scalars['String'];
  node: TierMembership;
};

export type TieredRecurringPrice = RecurringPrice & {
  __typename?: 'TieredRecurringPrice';
  billingIntervalCount: Scalars['Int'];
  billingIntervalUnit: BillingIntervalUnit;
  currency: CurrencyCode;
  tiers: Array<PriceTier>;
};

export type Time = {
  __typename?: 'Time';
  iso8601: Scalars['String'];
};

export type TimeSeriesMetric = {
  __typename?: 'TimeSeriesMetric';
  series: Array<TimeSeriesSeries>;
  timestamps: Array<DateTime>;
};

export type TimeSeriesMetricDimension = {
  __typename?: 'TimeSeriesMetricDimension';
  type: TimeSeriesMetricDimensionType;
  value: Scalars['String'];
};

export enum TimeSeriesMetricDimensionType {
  Agent = 'AGENT',
  Company = 'COMPANY',
  CustomerGroup = 'CUSTOMER_GROUP',
  LabelType = 'LABEL_TYPE',
  MessageSource = 'MESSAGE_SOURCE',
  Priority = 'PRIORITY',
  ThreadField = 'THREAD_FIELD',
  Tier = 'TIER'
}

export type TimeSeriesMetricInterval = {
  unit?: InputMaybe<TimeSeriesMetricIntervalUnit>;
};

export enum TimeSeriesMetricIntervalUnit {
  Day = 'DAY',
  Hour = 'HOUR'
}

export type TimeSeriesMetricOptions = {
  dimension?: InputMaybe<TimeSeriesMetricDimensionType>;
  /** Defaults to 24 hours ago. */
  from?: InputMaybe<Scalars['String']>;
  interval?: InputMaybe<TimeSeriesMetricInterval>;
  subDimension?: InputMaybe<Scalars['String']>;
  to?: InputMaybe<Scalars['String']>;
};

export type TimeSeriesSeries = {
  __typename?: 'TimeSeriesSeries';
  dimension: Maybe<TimeSeriesMetricDimension>;
  values: Array<Maybe<Scalars['Float']>>;
};

export type TimelineEntry = {
  __typename?: 'TimelineEntry';
  actor: Actor;
  customerId: Scalars['ID'];
  entry: Entry;
  id: Scalars['ID'];
  threadId: Scalars['ID'];
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

export type TimelineEventEntry = {
  components: Array<EventComponent>;
  customerId: Scalars['ID'];
  externalId: Maybe<Scalars['ID']>;
  timelineEventId: Scalars['ID'];
  title: Scalars['String'];
};

export enum TodoStatusDetail {
  Created = 'CREATED',
  InProgress = 'IN_PROGRESS',
  NewReply = 'NEW_REPLY',
  ThreadDiscussionResolved = 'THREAD_DISCUSSION_RESOLVED',
  ThreadLinkUpdated = 'THREAD_LINK_UPDATED'
}

export type ToggleFeatureEntitlement = BillingFeatureEntitlement & {
  __typename?: 'ToggleFeatureEntitlement';
  feature: FeatureKey;
  isEntitled: Scalars['Boolean'];
};

export type ToggleSlackMessageReactionInput = {
  reactionName: Scalars['String'];
  threadId: Scalars['ID'];
  timelineEntryId: Scalars['ID'];
};

export type ToggleSlackMessageReactionOutput = {
  __typename?: 'ToggleSlackMessageReactionOutput';
  error: Maybe<MutationError>;
};

export type UnarchiveLabelTypeInput = {
  labelTypeId: Scalars['ID'];
};

export type UnarchiveLabelTypeOutput = {
  __typename?: 'UnarchiveLabelTypeOutput';
  error: Maybe<MutationError>;
  labelType: Maybe<LabelType>;
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

export type UpdateActiveBillingRotaInput = {
  userIdsToAdd?: InputMaybe<Array<Scalars['ID']>>;
  userIdsToRemove?: InputMaybe<Array<Scalars['ID']>>;
};

export type UpdateActiveBillingRotaOutput = {
  __typename?: 'UpdateActiveBillingRotaOutput';
  billingRota: Maybe<BillingRota>;
  error: Maybe<MutationError>;
};

export type UpdateAutoresponderInput = {
  autoresponderId: Scalars['ID'];
  conditions?: InputMaybe<Array<AutoresponderConditionInput>>;
  isEnabled?: InputMaybe<BooleanInput>;
  markdownContent?: InputMaybe<OptionalStringInput>;
  messageSources?: InputMaybe<Array<AutoresponderMessageSource>>;
  name?: InputMaybe<StringInput>;
  order?: InputMaybe<IntInput>;
  responseDelaySeconds?: InputMaybe<IntInput>;
  textContent?: InputMaybe<StringInput>;
};

export type UpdateAutoresponderOutput = {
  __typename?: 'UpdateAutoresponderOutput';
  autoresponder: Maybe<Autoresponder>;
  error: Maybe<MutationError>;
};

export type UpdateCompanyTierInput = {
  companyIdentifier: CompanyIdentifierInput;
  tierIdentifier?: InputMaybe<TierIdentifierInput>;
};

export type UpdateCompanyTierOutput = {
  __typename?: 'UpdateCompanyTierOutput';
  companyTierMembership: Maybe<CompanyTierMembership>;
  error: Maybe<MutationError>;
};

export type UpdateConnectedSlackChannelInput = {
  channelType?: InputMaybe<ConnectedSlackChannelType>;
  connectedSlackChannelId: Scalars['ID'];
  isEnabled?: InputMaybe<BooleanInput>;
};

export type UpdateConnectedSlackChannelOutput = {
  __typename?: 'UpdateConnectedSlackChannelOutput';
  connectedSlackChannel: Maybe<ConnectedSlackChannel>;
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

export type UpdateCustomerCompanyInput = {
  /** The identifier of the company we want to update the customer with. Pass null if you want to remove the company from the customer. */
  companyIdentifier?: InputMaybe<CompanyIdentifierInput>;
  /** The identifier of the customer we want to update the company for. */
  customerId: Scalars['ID'];
};

export type UpdateCustomerCompanyOutput = {
  __typename?: 'UpdateCustomerCompanyOutput';
  customer: Maybe<Customer>;
  error: Maybe<MutationError>;
};

export type UpdateCustomerGroupInput = {
  color?: InputMaybe<StringInput>;
  customerGroupId: Scalars['ID'];
  externalId?: InputMaybe<OptionalStringInput>;
  key?: InputMaybe<StringInput>;
  name?: InputMaybe<StringInput>;
};

export type UpdateCustomerGroupOutput = {
  __typename?: 'UpdateCustomerGroupOutput';
  customerGroup: Maybe<CustomerGroup>;
  error: Maybe<MutationError>;
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

export type UpdateServiceLevelAgreementInput = {
  /** The actions to take when the SLA is about to breach and when it breaches. */
  breachActions?: InputMaybe<Array<BreachActionInput>>;
  /** This SLA will breach if it does not receive a first response within this many minutes. May only be provided if the service level agreement is a first response time SLA. */
  firstResponseTimeMinutes?: InputMaybe<IntInput>;
  /** This SLA will breach if it does not receive a next response within this many minutes. May only be provided if the service level agreement is a next response time SLA. */
  nextResponseTimeMinutes?: InputMaybe<IntInput>;
  /** The ID of the SLA to update. */
  serviceLevelAgreementId: Scalars['ID'];
  /** This SLA can only be applied to a thread if it has one of these priority values. If not provided, it defaults to all priorities (0, 1, 2 and 3). */
  threadPriorityFilter?: InputMaybe<IntArrayInput>;
  /** If true, the SLA will only be tracked during your workspace's business hours. If false, the SLA will tracked 24/7. */
  useBusinessHoursOnly?: InputMaybe<BooleanInput>;
};

export type UpdateServiceLevelAgreementOutput = {
  __typename?: 'UpdateServiceLevelAgreementOutput';
  error: Maybe<MutationError>;
  serviceLevelAgreement: Maybe<ServiceLevelAgreement>;
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

export type UpdateTenantTierInput = {
  tenantIdentifier: TenantIdentifierInput;
  tierIdentifier?: InputMaybe<TierIdentifierInput>;
};

export type UpdateTenantTierOutput = {
  __typename?: 'UpdateTenantTierOutput';
  error: Maybe<MutationError>;
  tenantTierMembership: Maybe<TenantTierMembership>;
};

export type UpdateThreadFieldSchemaInput = {
  defaultBooleanValue?: InputMaybe<OptionalBooleanInput>;
  defaultStringValue?: InputMaybe<OptionalStringInput>;
  dependsOnThreadField?: InputMaybe<OptionalDependsOnThreadFieldInput>;
  description?: InputMaybe<StringInput>;
  enumValues?: InputMaybe<Array<Scalars['String']>>;
  isAiAutoFillEnabled?: InputMaybe<Scalars['Boolean']>;
  isRequired?: InputMaybe<Scalars['Boolean']>;
  label?: InputMaybe<StringInput>;
  order?: InputMaybe<Scalars['Int']>;
  threadFieldSchemaId: Scalars['ID'];
};

export type UpdateThreadFieldSchemaOutput = {
  __typename?: 'UpdateThreadFieldSchemaOutput';
  error: Maybe<MutationError>;
  threadFieldSchema: Maybe<ThreadFieldSchema>;
};

export type UpdateThreadTenantInput = {
  tenantIdentifier?: InputMaybe<TenantIdentifierInput>;
  threadId: Scalars['ID'];
};

export type UpdateThreadTenantOutput = {
  __typename?: 'UpdateThreadTenantOutput';
  error: Maybe<MutationError>;
  thread: Maybe<Thread>;
};

export type UpdateThreadTierInput = {
  threadId: Scalars['ID'];
  tierIdentifier?: InputMaybe<TierIdentifierInput>;
};

export type UpdateThreadTierOutput = {
  __typename?: 'UpdateThreadTierOutput';
  error: Maybe<MutationError>;
  thread: Maybe<Thread>;
};

export type UpdateThreadTitleInput = {
  threadId: Scalars['ID'];
  title: Scalars['String'];
};

export type UpdateThreadTitleOutput = {
  __typename?: 'UpdateThreadTitleOutput';
  error: Maybe<MutationError>;
  thread: Maybe<Thread>;
};

export type UpdateTierInput = {
  color?: InputMaybe<StringInput>;
  defaultThreadPriority?: InputMaybe<IntInput>;
  externalId?: InputMaybe<OptionalStringInput>;
  isDefault?: InputMaybe<BooleanInput>;
  name?: InputMaybe<StringInput>;
  tierId: Scalars['ID'];
};

export type UpdateTierOutput = {
  __typename?: 'UpdateTierOutput';
  error: Maybe<MutationError>;
  tier: Maybe<Tier>;
};

export type UpdateWebhookTargetInput = {
  description?: InputMaybe<StringInput>;
  eventSubscriptions?: InputMaybe<Array<WebhookTargetEventSubscriptionInput>>;
  isEnabled?: InputMaybe<BooleanInput>;
  url?: InputMaybe<StringInput>;
  version?: InputMaybe<StringInput>;
  webhookTargetId: Scalars['ID'];
};

export type UpdateWebhookTargetOutput = {
  __typename?: 'UpdateWebhookTargetOutput';
  error: Maybe<MutationError>;
  webhookTarget: Maybe<WebhookTarget>;
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

export type UpsertBusinessHoursInput = {
  weekDays?: InputMaybe<BusinessHoursWeekDaysInput>;
};

export type UpsertBusinessHoursOutput = {
  __typename?: 'UpsertBusinessHoursOutput';
  businessHours: Maybe<BusinessHours>;
  error: Maybe<MutationError>;
  result: Maybe<UpsertResult>;
};

export type UpsertCompanyInput = {
  domainName: Scalars['String'];
  identifier: CompanyIdentifierInput;
  name: Scalars['String'];
};

export type UpsertCompanyOutput = {
  __typename?: 'UpsertCompanyOutput';
  company: Maybe<Company>;
  error: Maybe<MutationError>;
  result: Maybe<UpsertResult>;
};

export type UpsertCustomerGroupInput = {
  color: Scalars['String'];
  externalId?: InputMaybe<Scalars['String']>;
  identifier: CustomerGroupIdentifier;
  key: Scalars['String'];
  name: Scalars['String'];
};

export type UpsertCustomerGroupOutput = {
  __typename?: 'UpsertCustomerGroupOutput';
  customerGroup: Maybe<CustomerGroup>;
  error: Maybe<MutationError>;
  result: Maybe<UpsertResult>;
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
  tenantIdentifiers?: InputMaybe<Array<TenantIdentifierInput>>;
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

export type UpsertTenantInput = {
  externalId: Scalars['String'];
  identifier: TenantIdentifierInput;
  name: Scalars['String'];
  url?: InputMaybe<OptionalStringInput>;
};

export type UpsertTenantOutput = {
  __typename?: 'UpsertTenantOutput';
  error: Maybe<MutationError>;
  result: Maybe<UpsertResult>;
  tenant: Maybe<Tenant>;
};

export type UpsertThreadFieldIdentifier = {
  key: Scalars['String'];
  threadId: Scalars['ID'];
};

export type UpsertThreadFieldInput = {
  booleanValue?: InputMaybe<Scalars['Boolean']>;
  identifier: UpsertThreadFieldIdentifier;
  stringValue?: InputMaybe<Scalars['String']>;
  type: ThreadFieldSchemaType;
};

export type UpsertThreadFieldOutput = {
  __typename?: 'UpsertThreadFieldOutput';
  error: Maybe<MutationError>;
  result: Maybe<UpsertResult>;
  threadField: Maybe<ThreadField>;
};

export type User = {
  __typename?: 'User';
  /** Additional legacy roles that the user has in the workspace. */
  additionalLegacyRoles: Array<Role>;
  /** The avatar URL of the user. */
  avatarUrl: Maybe<Scalars['String']>;
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
  /** The role of the user in the workspace. */
  role: Maybe<Role>;
  /** (Legacy) Retrieve roles for a specific workspace + user. */
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

export type UserAuthSlackInstallationInfo = {
  __typename?: 'UserAuthSlackInstallationInfo';
  installationUrl: Scalars['String'];
};

export type UserAuthSlackIntegration = {
  __typename?: 'UserAuthSlackIntegration';
  createdAt: DateTime;
  createdBy: InternalActor;
  integrationId: Scalars['ID'];
  isReinstallRequired: Scalars['Boolean'];
  slackTeamId: Scalars['String'];
  slackTeamName: Scalars['String'];
  updatedAt: DateTime;
  updatedBy: InternalActor;
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

export type UserMsTeamsInstallationInfo = {
  __typename?: 'UserMSTeamsInstallationInfo';
  installationUrl: Maybe<Scalars['String']>;
};

export type UserMsTeamsIntegration = {
  __typename?: 'UserMSTeamsIntegration';
  createdAt: DateTime;
  createdBy: InternalActor;
  id: Scalars['ID'];
  isReinstallRequired: Scalars['Boolean'];
  msTeamsPreferredUsername: Maybe<Scalars['String']>;
  msTeamsTenantId: Scalars['ID'];
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
  /** @deprecated Use isAssignableToThread instead */
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
  version: Scalars['String'];
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

export type WebhookVersion = {
  __typename?: 'WebhookVersion';
  isDeprecated: Scalars['Boolean'];
  isLatest: Scalars['Boolean'];
  version: Scalars['String'];
};

export type WebhookVersionConnection = {
  __typename?: 'WebhookVersionConnection';
  edges: Array<WebhookVersionEdge>;
  pageInfo: PageInfo;
};

export type WebhookVersionEdge = {
  __typename?: 'WebhookVersionEdge';
  cursor: Scalars['String'];
  node: WebhookVersion;
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

export type WorkspaceHmac = {
  __typename?: 'WorkspaceHmac';
  createdAt: DateTime;
  createdBy: InternalActor;
  hmacSecret: Maybe<Scalars['String']>;
  updatedAt: DateTime;
  updatedBy: InternalActor;
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
  /** The role that the invite will assign on workspace joining. This will replace the roles field. */
  role: Maybe<Role>;
  /** The roles that the invite will assign on workspace joining. */
  roles: Array<Role>;
  /** When the invite was updated. */
  updatedAt: DateTime;
  /** Who updated this invite. */
  updatedBy: InternalActor;
  /** Whether the user would be assigned a billing rota seat upon joining. */
  usingBillingRotaSeat: Scalars['Boolean'];
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

export type WorkspaceMsTeamsInstallationInfo = {
  __typename?: 'WorkspaceMSTeamsInstallationInfo';
  installationUrl: Scalars['String'];
};

export type WorkspaceMsTeamsIntegration = {
  __typename?: 'WorkspaceMSTeamsIntegration';
  createdAt: DateTime;
  createdBy: InternalActor;
  id: Scalars['ID'];
  isReinstallRequired: Scalars['Boolean'];
  msTeamsTenantId: Scalars['ID'];
  updatedAt: DateTime;
  updatedBy: InternalActor;
};

export type WorkspaceSlackChannelInstallationInfo = {
  __typename?: 'WorkspaceSlackChannelInstallationInfo';
  installationUrl: Scalars['String'];
};

export type WorkspaceSlackChannelIntegration = {
  __typename?: 'WorkspaceSlackChannelIntegration';
  createdAt: DateTime;
  createdBy: InternalActor;
  integrationId: Scalars['ID'];
  isReinstallRequired: Scalars['Boolean'];
  slackTeamId: Scalars['String'];
  slackTeamImageUrl68px: Maybe<Scalars['String']>;
  slackTeamName: Scalars['String'];
  updatedAt: DateTime;
  updatedBy: InternalActor;
};

export type WorkspaceSlackChannelIntegrationConnection = {
  __typename?: 'WorkspaceSlackChannelIntegrationConnection';
  edges: Array<WorkspaceSlackChannelIntegrationEdge>;
  pageInfo: PageInfo;
};

export type WorkspaceSlackChannelIntegrationEdge = {
  __typename?: 'WorkspaceSlackChannelIntegrationEdge';
  cursor: Scalars['String'];
  node: WorkspaceSlackChannelIntegration;
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
  slackTeamImageUrl68px: Maybe<Scalars['String']>;
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

export type CompanyPartsFragment = { __typename: 'Company', id: string, name: string, domainName: string, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, createdBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, updatedBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } };

export type CompanyTierMembershipPartsFragment = { __typename: 'CompanyTierMembership', id: string, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, createdBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, updatedBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } };

export type CustomerActorPartsFragment = { __typename: 'CustomerActor', customerId: string };

export type CustomerCardConfigPartsFragment = { __typename: 'CustomerCardConfig', id: string, title: string, key: string, defaultTimeToLiveSeconds: number, apiUrl: string, order: number, isEnabled: boolean, apiHeaders: Array<{ __typename?: 'CustomerCardConfigApiHeader', name: string, value: string }>, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string } };

export type CustomerEventPartsFragment = { __typename: 'CustomerEvent', id: string, customerId: string, title: string, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, createdBy: { __typename: 'CustomerActor', customerId: string } | { __typename: 'DeletedCustomerActor', customerId: string } | { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, updatedBy: { __typename: 'CustomerActor', customerId: string } | { __typename: 'DeletedCustomerActor', customerId: string } | { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } };

export type CustomerGroupMembershipPartsFragment = { __typename: 'CustomerGroupMembership', customerId: string, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, createdBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, updatedBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, customerGroup: { __typename: 'CustomerGroup', id: string, name: string, key: string, color: string } };

export type CustomerGroupPartsFragment = { __typename: 'CustomerGroup', id: string, name: string, key: string, color: string };

export type CustomerPartsFragment = { __typename: 'Customer', id: string, fullName: string, shortName: string | null, externalId: string | null, email: { __typename?: 'EmailAddress', email: string, isVerified: boolean, verifiedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string } | null }, company: { __typename: 'Company', id: string, name: string, domainName: string, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, createdBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, updatedBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } } | null, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, createdBy: { __typename?: 'CustomerActor' } | { __typename?: 'DeletedCustomerActor' } | { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, markedAsSpamAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string } | null };

export type CustomerTenantMembershipPartsFragment = { __typename: 'CustomerTenantMembership', createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, createdBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, updatedBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, tenant: { __typename: 'Tenant', id: string, name: string, externalId: string, url: string | null, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, createdBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, updatedBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } } };

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

export type LabelPartsFragment = { __typename: 'Label', id: string, labelType: { __typename: 'LabelType', id: string, name: string, icon: string | null, isArchived: boolean, archivedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string } | null, archivedBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } | null, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, createdBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, updatedBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } }, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, createdBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, updatedBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } };

export type LabelTypePartsFragment = { __typename: 'LabelType', id: string, name: string, icon: string | null, isArchived: boolean, archivedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string } | null, archivedBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } | null, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, createdBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, updatedBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } };

export type MachineUserActorPartsFragment = { __typename: 'MachineUserActor', machineUserId: string };

export type MachineUserPartsFragment = { __typename: 'MachineUser', id: string, fullName: string, publicName: string, description: string | null, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string } };

export type MutationErrorPartsFragment = { __typename: 'MutationError', message: string, type: MutationErrorType, code: string, fields: Array<{ __typename?: 'MutationFieldError', field: string, message: string, type: MutationFieldErrorType }> };

export type NotePartsFragment = { __typename: 'Note', id: string, markdown: string | null, text: string };

export type PageInfoPartsFragment = { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor: string | null, endCursor: string | null };

export type SystemActorPartsFragment = { __typename: 'SystemActor', systemId: string };

export type SystemPartsFragment = { __typename: 'System', id: string };

export type TenantPartsFragment = { __typename: 'Tenant', id: string, name: string, externalId: string, url: string | null, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, createdBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, updatedBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } };

export type TenantTierMembershipPartsFragment = { __typename: 'TenantTierMembership', id: string, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, createdBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, updatedBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } };

type ThreadAssigneeParts_MachineUser_Fragment = { __typename: 'MachineUser', id: string, fullName: string, publicName: string, description: string | null, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string } };

type ThreadAssigneeParts_System_Fragment = { __typename: 'System', id: string };

type ThreadAssigneeParts_User_Fragment = { __typename: 'User', id: string, fullName: string, publicName: string, email: string, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string } };

export type ThreadAssigneePartsFragment = ThreadAssigneeParts_MachineUser_Fragment | ThreadAssigneeParts_System_Fragment | ThreadAssigneeParts_User_Fragment;

export type ThreadEventPartsFragment = { __typename?: 'ThreadEvent', id: string, threadId: string, title: string, customerId: string, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, createdBy: { __typename: 'CustomerActor', customerId: string } | { __typename: 'DeletedCustomerActor', customerId: string } | { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, updatedBy: { __typename: 'CustomerActor', customerId: string } | { __typename: 'DeletedCustomerActor', customerId: string } | { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } };

export type ThreadFieldPartsFragment = { __typename: 'ThreadField', id: string, key: string, type: ThreadFieldSchemaType, threadId: string, stringValue: string | null, booleanValue: boolean | null, isAiGenerated: boolean, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, createdBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, updatedBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } };

export type ThreadPartsFragment = { __typename: 'Thread', id: string, externalId: string | null, status: ThreadStatus, title: string, description: string | null, previewText: string | null, priority: number, customer: { __typename?: 'Customer', id: string }, statusChangedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, labels: Array<{ __typename: 'Label', id: string, labelType: { __typename: 'LabelType', id: string, name: string, icon: string | null, isArchived: boolean, archivedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string } | null, archivedBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } | null, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, createdBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, updatedBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } }, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, createdBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, updatedBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } }>, threadFields: Array<{ __typename: 'ThreadField', id: string, key: string, type: ThreadFieldSchemaType, threadId: string, stringValue: string | null, booleanValue: boolean | null, isAiGenerated: boolean, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, createdBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, updatedBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } }>, assignedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string } | null, assignedTo: { __typename: 'MachineUser', id: string, fullName: string, publicName: string, description: string | null, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string } } | { __typename: 'System', id: string } | { __typename: 'User', id: string, fullName: string, publicName: string, email: string, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string } } | null, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, createdBy: { __typename: 'CustomerActor', customerId: string } | { __typename: 'DeletedCustomerActor', customerId: string } | { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, updatedBy: { __typename: 'CustomerActor', customerId: string } | { __typename: 'DeletedCustomerActor', customerId: string } | { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } };

type TierMembershipParts_CompanyTierMembership_Fragment = { __typename: 'CompanyTierMembership', id: string, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, createdBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, updatedBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } };

type TierMembershipParts_TenantTierMembership_Fragment = { __typename: 'TenantTierMembership', id: string, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, createdBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, updatedBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } };

export type TierMembershipPartsFragment = TierMembershipParts_CompanyTierMembership_Fragment | TierMembershipParts_TenantTierMembership_Fragment;

export type TierPartsFragment = { __typename: 'Tier', id: string, name: string, externalId: string | null, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, createdBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, updatedBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } };

export type UserActorPartsFragment = { __typename: 'UserActor', userId: string };

export type UserPartsFragment = { __typename: 'User', id: string, fullName: string, publicName: string, email: string, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string } };

export type WebhookTargetEventSubscriptionPartsFragment = { __typename: 'WebhookTargetEventSubscription', eventType: string };

export type WebhookTargetPartsFragment = { __typename?: 'WebhookTarget', id: string, url: string, isEnabled: boolean, description: string, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, createdBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, updatedBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, eventSubscriptions: Array<{ __typename: 'WebhookTargetEventSubscription', eventType: string }> };

export type WorkspacePartsFragment = { __typename: 'Workspace', id: string, name: string, publicName: string, isDemoWorkspace: boolean, createdBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, updatedBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string } };

export type AddCustomerToCustomerGroupsMutationVariables = Exact<{
  input: AddCustomerToCustomerGroupsInput;
}>;


export type AddCustomerToCustomerGroupsMutation = { __typename?: 'Mutation', addCustomerToCustomerGroups: { __typename?: 'AddCustomerToCustomerGroupsOutput', customerGroupMemberships: Array<{ __typename: 'CustomerGroupMembership', customerId: string, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, createdBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, updatedBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, customerGroup: { __typename: 'CustomerGroup', id: string, name: string, key: string, color: string } }> | null, error: { __typename: 'MutationError', message: string, type: MutationErrorType, code: string, fields: Array<{ __typename?: 'MutationFieldError', field: string, message: string, type: MutationFieldErrorType }> } | null } };

export type AddCustomerToTenantsMutationVariables = Exact<{
  input: AddCustomerToTenantsInput;
}>;


export type AddCustomerToTenantsMutation = { __typename?: 'Mutation', addCustomerToTenants: { __typename?: 'AddCustomerToTenantsOutput', error: { __typename: 'MutationError', message: string, type: MutationErrorType, code: string, fields: Array<{ __typename?: 'MutationFieldError', field: string, message: string, type: MutationFieldErrorType }> } | null } };

export type AddLabelsMutationVariables = Exact<{
  input: AddLabelsInput;
}>;


export type AddLabelsMutation = { __typename?: 'Mutation', addLabels: { __typename?: 'AddLabelsOutput', labels: Array<{ __typename: 'Label', id: string, labelType: { __typename: 'LabelType', id: string, name: string, icon: string | null, isArchived: boolean, archivedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string } | null, archivedBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } | null, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, createdBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, updatedBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } }, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, createdBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, updatedBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } }>, error: { __typename: 'MutationError', message: string, type: MutationErrorType, code: string, fields: Array<{ __typename?: 'MutationFieldError', field: string, message: string, type: MutationFieldErrorType }> } | null } };

export type AddMembersToTierMutationVariables = Exact<{
  input: AddMembersToTierInput;
}>;


export type AddMembersToTierMutation = { __typename?: 'Mutation', addMembersToTier: { __typename?: 'AddMembersToTierOutput', memberships: Array<{ __typename: 'CompanyTierMembership', id: string, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, createdBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, updatedBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } } | { __typename: 'TenantTierMembership', id: string, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, createdBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, updatedBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } }>, error: { __typename: 'MutationError', message: string, type: MutationErrorType, code: string, fields: Array<{ __typename?: 'MutationFieldError', field: string, message: string, type: MutationFieldErrorType }> } | null } };

export type ArchiveLabelTypeMutationVariables = Exact<{
  input: ArchiveLabelTypeInput;
}>;


export type ArchiveLabelTypeMutation = { __typename?: 'Mutation', archiveLabelType: { __typename?: 'ArchiveLabelTypeOutput', labelType: { __typename: 'LabelType', id: string, name: string, icon: string | null, isArchived: boolean, archivedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string } | null, archivedBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } | null, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, createdBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, updatedBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } } | null, error: { __typename?: 'MutationError', message: string } | null } };

export type AssignThreadMutationVariables = Exact<{
  input: AssignThreadInput;
}>;


export type AssignThreadMutation = { __typename?: 'Mutation', assignThread: { __typename?: 'AssignThreadOutput', thread: { __typename: 'Thread', id: string, externalId: string | null, status: ThreadStatus, title: string, description: string | null, previewText: string | null, priority: number, customer: { __typename?: 'Customer', id: string }, statusChangedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, labels: Array<{ __typename: 'Label', id: string, labelType: { __typename: 'LabelType', id: string, name: string, icon: string | null, isArchived: boolean, archivedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string } | null, archivedBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } | null, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, createdBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, updatedBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } }, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, createdBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, updatedBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } }>, threadFields: Array<{ __typename: 'ThreadField', id: string, key: string, type: ThreadFieldSchemaType, threadId: string, stringValue: string | null, booleanValue: boolean | null, isAiGenerated: boolean, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, createdBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, updatedBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } }>, assignedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string } | null, assignedTo: { __typename: 'MachineUser', id: string, fullName: string, publicName: string, description: string | null, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string } } | { __typename: 'System', id: string } | { __typename: 'User', id: string, fullName: string, publicName: string, email: string, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string } } | null, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, createdBy: { __typename: 'CustomerActor', customerId: string } | { __typename: 'DeletedCustomerActor', customerId: string } | { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, updatedBy: { __typename: 'CustomerActor', customerId: string } | { __typename: 'DeletedCustomerActor', customerId: string } | { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } } | null, error: { __typename: 'MutationError', message: string, type: MutationErrorType, code: string, fields: Array<{ __typename?: 'MutationFieldError', field: string, message: string, type: MutationFieldErrorType }> } | null } };

export type ChangeThreadPriorityMutationVariables = Exact<{
  input: ChangeThreadPriorityInput;
}>;


export type ChangeThreadPriorityMutation = { __typename?: 'Mutation', changeThreadPriority: { __typename?: 'ChangeThreadPriorityOutput', thread: { __typename: 'Thread', id: string, externalId: string | null, status: ThreadStatus, title: string, description: string | null, previewText: string | null, priority: number, customer: { __typename?: 'Customer', id: string }, statusChangedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, labels: Array<{ __typename: 'Label', id: string, labelType: { __typename: 'LabelType', id: string, name: string, icon: string | null, isArchived: boolean, archivedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string } | null, archivedBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } | null, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, createdBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, updatedBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } }, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, createdBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, updatedBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } }>, threadFields: Array<{ __typename: 'ThreadField', id: string, key: string, type: ThreadFieldSchemaType, threadId: string, stringValue: string | null, booleanValue: boolean | null, isAiGenerated: boolean, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, createdBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, updatedBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } }>, assignedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string } | null, assignedTo: { __typename: 'MachineUser', id: string, fullName: string, publicName: string, description: string | null, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string } } | { __typename: 'System', id: string } | { __typename: 'User', id: string, fullName: string, publicName: string, email: string, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string } } | null, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, createdBy: { __typename: 'CustomerActor', customerId: string } | { __typename: 'DeletedCustomerActor', customerId: string } | { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, updatedBy: { __typename: 'CustomerActor', customerId: string } | { __typename: 'DeletedCustomerActor', customerId: string } | { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } } | null, error: { __typename: 'MutationError', message: string, type: MutationErrorType, code: string, fields: Array<{ __typename?: 'MutationFieldError', field: string, message: string, type: MutationFieldErrorType }> } | null } };

export type CreateAttachmentUploadUrlMutationVariables = Exact<{
  input: CreateAttachmentUploadUrlInput;
}>;


export type CreateAttachmentUploadUrlMutation = { __typename?: 'Mutation', createAttachmentUploadUrl: { __typename?: 'CreateAttachmentUploadUrlOutput', attachmentUploadUrl: { __typename: 'AttachmentUploadUrl', uploadFormUrl: string, attachment: { __typename: 'Attachment', id: string, fileName: string, fileExtension: string | null, fileSize: { __typename: 'FileSize', kiloBytes: number, megaBytes: number }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string } }, uploadFormData: Array<{ __typename?: 'UploadFormData', key: string, value: string }>, expiresAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string } } | null, error: { __typename: 'MutationError', message: string, type: MutationErrorType, code: string, fields: Array<{ __typename?: 'MutationFieldError', field: string, message: string, type: MutationFieldErrorType }> } | null } };

export type CreateCustomerCardConfigMutationVariables = Exact<{
  input: CreateCustomerCardConfigInput;
}>;


export type CreateCustomerCardConfigMutation = { __typename?: 'Mutation', createCustomerCardConfig: { __typename?: 'CreateCustomerCardConfigOutput', customerCardConfig: { __typename: 'CustomerCardConfig', id: string, title: string, key: string, defaultTimeToLiveSeconds: number, apiUrl: string, order: number, isEnabled: boolean, apiHeaders: Array<{ __typename?: 'CustomerCardConfigApiHeader', name: string, value: string }>, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string } } | null, error: { __typename: 'MutationError', message: string, type: MutationErrorType, code: string, fields: Array<{ __typename?: 'MutationFieldError', field: string, message: string, type: MutationFieldErrorType }> } | null } };

export type CreateCustomerEventMutationVariables = Exact<{
  input: CreateCustomerEventInput;
}>;


export type CreateCustomerEventMutation = { __typename?: 'Mutation', createCustomerEvent: { __typename?: 'CreateCustomerEventOutput', customerEvent: { __typename: 'CustomerEvent', id: string, customerId: string, title: string, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, createdBy: { __typename: 'CustomerActor', customerId: string } | { __typename: 'DeletedCustomerActor', customerId: string } | { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, updatedBy: { __typename: 'CustomerActor', customerId: string } | { __typename: 'DeletedCustomerActor', customerId: string } | { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } } | null, error: { __typename: 'MutationError', message: string, type: MutationErrorType, code: string, fields: Array<{ __typename?: 'MutationFieldError', field: string, message: string, type: MutationFieldErrorType }> } | null } };

export type CreateNoteMutationVariables = Exact<{
  input: CreateNoteInput;
}>;


export type CreateNoteMutation = { __typename?: 'Mutation', createNote: { __typename?: 'CreateNoteOutput', note: { __typename: 'Note', id: string, markdown: string | null, text: string } | null, error: { __typename: 'MutationError', message: string, type: MutationErrorType, code: string, fields: Array<{ __typename?: 'MutationFieldError', field: string, message: string, type: MutationFieldErrorType }> } | null } };

export type CreateThreadMutationVariables = Exact<{
  input: CreateThreadInput;
}>;


export type CreateThreadMutation = { __typename?: 'Mutation', createThread: { __typename?: 'CreateThreadOutput', thread: { __typename: 'Thread', id: string, externalId: string | null, status: ThreadStatus, title: string, description: string | null, previewText: string | null, priority: number, customer: { __typename?: 'Customer', id: string }, statusChangedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, labels: Array<{ __typename: 'Label', id: string, labelType: { __typename: 'LabelType', id: string, name: string, icon: string | null, isArchived: boolean, archivedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string } | null, archivedBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } | null, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, createdBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, updatedBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } }, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, createdBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, updatedBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } }>, threadFields: Array<{ __typename: 'ThreadField', id: string, key: string, type: ThreadFieldSchemaType, threadId: string, stringValue: string | null, booleanValue: boolean | null, isAiGenerated: boolean, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, createdBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, updatedBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } }>, assignedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string } | null, assignedTo: { __typename: 'MachineUser', id: string, fullName: string, publicName: string, description: string | null, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string } } | { __typename: 'System', id: string } | { __typename: 'User', id: string, fullName: string, publicName: string, email: string, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string } } | null, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, createdBy: { __typename: 'CustomerActor', customerId: string } | { __typename: 'DeletedCustomerActor', customerId: string } | { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, updatedBy: { __typename: 'CustomerActor', customerId: string } | { __typename: 'DeletedCustomerActor', customerId: string } | { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } } | null, error: { __typename: 'MutationError', message: string, type: MutationErrorType, code: string, fields: Array<{ __typename?: 'MutationFieldError', field: string, message: string, type: MutationFieldErrorType }> } | null } };

export type CreateThreadEventMutationVariables = Exact<{
  input: CreateThreadEventInput;
}>;


export type CreateThreadEventMutation = { __typename?: 'Mutation', createThreadEvent: { __typename?: 'CreateThreadEventOutput', threadEvent: { __typename?: 'ThreadEvent', id: string, threadId: string, title: string, customerId: string, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, createdBy: { __typename: 'CustomerActor', customerId: string } | { __typename: 'DeletedCustomerActor', customerId: string } | { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, updatedBy: { __typename: 'CustomerActor', customerId: string } | { __typename: 'DeletedCustomerActor', customerId: string } | { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } } | null, error: { __typename: 'MutationError', message: string, type: MutationErrorType, code: string, fields: Array<{ __typename?: 'MutationFieldError', field: string, message: string, type: MutationFieldErrorType }> } | null } };

export type CreateWebhookTargetMutationVariables = Exact<{
  input: CreateWebhookTargetInput;
}>;


export type CreateWebhookTargetMutation = { __typename?: 'Mutation', createWebhookTarget: { __typename?: 'CreateWebhookTargetOutput', webhookTarget: { __typename?: 'WebhookTarget', id: string, url: string, isEnabled: boolean, description: string, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, createdBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, updatedBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, eventSubscriptions: Array<{ __typename: 'WebhookTargetEventSubscription', eventType: string }> } | null, error: { __typename: 'MutationError', message: string, type: MutationErrorType, code: string, fields: Array<{ __typename?: 'MutationFieldError', field: string, message: string, type: MutationFieldErrorType }> } | null } };

export type DeleteCustomerMutationVariables = Exact<{
  input: DeleteCustomerInput;
}>;


export type DeleteCustomerMutation = { __typename?: 'Mutation', deleteCustomer: { __typename?: 'DeleteCustomerOutput', error: { __typename: 'MutationError', message: string, type: MutationErrorType, code: string, fields: Array<{ __typename?: 'MutationFieldError', field: string, message: string, type: MutationFieldErrorType }> } | null } };

export type DeleteCustomerCardConfigMutationVariables = Exact<{
  input: DeleteCustomerCardConfigInput;
}>;


export type DeleteCustomerCardConfigMutation = { __typename?: 'Mutation', deleteCustomerCardConfig: { __typename?: 'DeleteCustomerCardConfigOutput', error: { __typename: 'MutationError', message: string, type: MutationErrorType, code: string, fields: Array<{ __typename?: 'MutationFieldError', field: string, message: string, type: MutationFieldErrorType }> } | null } };

export type DeleteThreadFieldMutationVariables = Exact<{
  input: DeleteThreadFieldInput;
}>;


export type DeleteThreadFieldMutation = { __typename?: 'Mutation', deleteThreadField: { __typename?: 'DeleteThreadFieldOutput', error: { __typename: 'MutationError', message: string, type: MutationErrorType, code: string, fields: Array<{ __typename?: 'MutationFieldError', field: string, message: string, type: MutationFieldErrorType }> } | null } };

export type DeleteWebhookTargetMutationVariables = Exact<{
  input: DeleteWebhookTargetInput;
}>;


export type DeleteWebhookTargetMutation = { __typename?: 'Mutation', deleteWebhookTarget: { __typename?: 'DeleteWebhookTargetOutput', error: { __typename: 'MutationError', message: string, type: MutationErrorType, code: string, fields: Array<{ __typename?: 'MutationFieldError', field: string, message: string, type: MutationFieldErrorType }> } | null } };

export type MarkThreadAsDoneMutationVariables = Exact<{
  input: MarkThreadAsDoneInput;
}>;


export type MarkThreadAsDoneMutation = { __typename?: 'Mutation', markThreadAsDone: { __typename?: 'MarkThreadAsDoneOutput', thread: { __typename: 'Thread', id: string, externalId: string | null, status: ThreadStatus, title: string, description: string | null, previewText: string | null, priority: number, customer: { __typename?: 'Customer', id: string }, statusChangedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, labels: Array<{ __typename: 'Label', id: string, labelType: { __typename: 'LabelType', id: string, name: string, icon: string | null, isArchived: boolean, archivedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string } | null, archivedBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } | null, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, createdBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, updatedBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } }, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, createdBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, updatedBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } }>, threadFields: Array<{ __typename: 'ThreadField', id: string, key: string, type: ThreadFieldSchemaType, threadId: string, stringValue: string | null, booleanValue: boolean | null, isAiGenerated: boolean, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, createdBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, updatedBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } }>, assignedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string } | null, assignedTo: { __typename: 'MachineUser', id: string, fullName: string, publicName: string, description: string | null, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string } } | { __typename: 'System', id: string } | { __typename: 'User', id: string, fullName: string, publicName: string, email: string, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string } } | null, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, createdBy: { __typename: 'CustomerActor', customerId: string } | { __typename: 'DeletedCustomerActor', customerId: string } | { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, updatedBy: { __typename: 'CustomerActor', customerId: string } | { __typename: 'DeletedCustomerActor', customerId: string } | { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } } | null, error: { __typename: 'MutationError', message: string, type: MutationErrorType, code: string, fields: Array<{ __typename?: 'MutationFieldError', field: string, message: string, type: MutationFieldErrorType }> } | null } };

export type MarkThreadAsTodoMutationVariables = Exact<{
  input: MarkThreadAsTodoInput;
}>;


export type MarkThreadAsTodoMutation = { __typename?: 'Mutation', markThreadAsTodo: { __typename?: 'MarkThreadAsTodoOutput', thread: { __typename: 'Thread', id: string, externalId: string | null, status: ThreadStatus, title: string, description: string | null, previewText: string | null, priority: number, customer: { __typename?: 'Customer', id: string }, statusChangedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, labels: Array<{ __typename: 'Label', id: string, labelType: { __typename: 'LabelType', id: string, name: string, icon: string | null, isArchived: boolean, archivedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string } | null, archivedBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } | null, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, createdBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, updatedBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } }, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, createdBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, updatedBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } }>, threadFields: Array<{ __typename: 'ThreadField', id: string, key: string, type: ThreadFieldSchemaType, threadId: string, stringValue: string | null, booleanValue: boolean | null, isAiGenerated: boolean, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, createdBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, updatedBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } }>, assignedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string } | null, assignedTo: { __typename: 'MachineUser', id: string, fullName: string, publicName: string, description: string | null, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string } } | { __typename: 'System', id: string } | { __typename: 'User', id: string, fullName: string, publicName: string, email: string, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string } } | null, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, createdBy: { __typename: 'CustomerActor', customerId: string } | { __typename: 'DeletedCustomerActor', customerId: string } | { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, updatedBy: { __typename: 'CustomerActor', customerId: string } | { __typename: 'DeletedCustomerActor', customerId: string } | { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } } | null, error: { __typename: 'MutationError', message: string, type: MutationErrorType, code: string, fields: Array<{ __typename?: 'MutationFieldError', field: string, message: string, type: MutationFieldErrorType }> } | null } };

export type RemoveCustomerFromCustomerGroupsMutationVariables = Exact<{
  input: RemoveCustomerFromCustomerGroupsInput;
}>;


export type RemoveCustomerFromCustomerGroupsMutation = { __typename?: 'Mutation', removeCustomerFromCustomerGroups: { __typename?: 'RemoveCustomerFromCustomerGroupsOutput', error: { __typename: 'MutationError', message: string, type: MutationErrorType, code: string, fields: Array<{ __typename?: 'MutationFieldError', field: string, message: string, type: MutationFieldErrorType }> } | null } };

export type RemoveCustomerFromTenantsMutationVariables = Exact<{
  input: RemoveCustomerFromTenantsInput;
}>;


export type RemoveCustomerFromTenantsMutation = { __typename?: 'Mutation', removeCustomerFromTenants: { __typename?: 'RemoveCustomerFromTenantsOutput', error: { __typename: 'MutationError', message: string, type: MutationErrorType, code: string, fields: Array<{ __typename?: 'MutationFieldError', field: string, message: string, type: MutationFieldErrorType }> } | null } };

export type RemoveLabelsMutationVariables = Exact<{
  input: RemoveLabelsInput;
}>;


export type RemoveLabelsMutation = { __typename?: 'Mutation', removeLabels: { __typename?: 'RemoveLabelsOutput', error: { __typename: 'MutationError', message: string, type: MutationErrorType, code: string, fields: Array<{ __typename?: 'MutationFieldError', field: string, message: string, type: MutationFieldErrorType }> } | null } };

export type RemoveMembersFromTierMutationVariables = Exact<{
  input: RemoveMembersFromTierInput;
}>;


export type RemoveMembersFromTierMutation = { __typename?: 'Mutation', removeMembersFromTier: { __typename?: 'RemoveMembersFromTierOutput', error: { __typename: 'MutationError', message: string, type: MutationErrorType, code: string, fields: Array<{ __typename?: 'MutationFieldError', field: string, message: string, type: MutationFieldErrorType }> } | null } };

export type ReplyToEmailMutationVariables = Exact<{
  input: ReplyToEmailInput;
}>;


export type ReplyToEmailMutation = { __typename?: 'Mutation', replyToEmail: { __typename?: 'ReplyToEmailOutput', email: { __typename?: 'Email', id: string, inReplyToEmailId: string | null, subject: string | null, textContent: string | null, markdownContent: string | null, from: { __typename: 'EmailParticipant', name: string | null, email: string, emailActor: { __typename: 'CustomerEmailActor', customerId: string } | { __typename: 'DeletedCustomerEmailActor', customerId: string } | { __typename: 'SupportEmailAddressEmailActor', supportEmailAddress: string } | { __typename: 'UserEmailActor', userId: string } | null }, to: { __typename: 'EmailParticipant', name: string | null, email: string, emailActor: { __typename: 'CustomerEmailActor', customerId: string } | { __typename: 'DeletedCustomerEmailActor', customerId: string } | { __typename: 'SupportEmailAddressEmailActor', supportEmailAddress: string } | { __typename: 'UserEmailActor', userId: string } | null }, additionalRecipients: Array<{ __typename: 'EmailParticipant', name: string | null, email: string, emailActor: { __typename: 'CustomerEmailActor', customerId: string } | { __typename: 'DeletedCustomerEmailActor', customerId: string } | { __typename: 'SupportEmailAddressEmailActor', supportEmailAddress: string } | { __typename: 'UserEmailActor', userId: string } | null }>, hiddenRecipients: Array<{ __typename: 'EmailParticipant', name: string | null, email: string, emailActor: { __typename: 'CustomerEmailActor', customerId: string } | { __typename: 'DeletedCustomerEmailActor', customerId: string } | { __typename: 'SupportEmailAddressEmailActor', supportEmailAddress: string } | { __typename: 'UserEmailActor', userId: string } | null }>, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, attachments: Array<{ __typename: 'Attachment', id: string, fileName: string, fileExtension: string | null, fileSize: { __typename: 'FileSize', kiloBytes: number, megaBytes: number }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string } }> } | null, error: { __typename: 'MutationError', message: string, type: MutationErrorType, code: string, fields: Array<{ __typename?: 'MutationFieldError', field: string, message: string, type: MutationFieldErrorType }> } | null } };

export type ReplyToThreadMutationVariables = Exact<{
  input: ReplyToThreadInput;
}>;


export type ReplyToThreadMutation = { __typename?: 'Mutation', replyToThread: { __typename?: 'ReplyToThreadOutput', error: { __typename: 'MutationError', message: string, type: MutationErrorType, code: string, fields: Array<{ __typename?: 'MutationFieldError', field: string, message: string, type: MutationFieldErrorType }> } | null } };

export type SendNewEmailMutationVariables = Exact<{
  input: SendNewEmailInput;
}>;


export type SendNewEmailMutation = { __typename?: 'Mutation', sendNewEmail: { __typename?: 'SendNewEmailOutput', email: { __typename?: 'Email', id: string, inReplyToEmailId: string | null, subject: string | null, textContent: string | null, markdownContent: string | null, from: { __typename: 'EmailParticipant', name: string | null, email: string, emailActor: { __typename: 'CustomerEmailActor', customerId: string } | { __typename: 'DeletedCustomerEmailActor', customerId: string } | { __typename: 'SupportEmailAddressEmailActor', supportEmailAddress: string } | { __typename: 'UserEmailActor', userId: string } | null }, to: { __typename: 'EmailParticipant', name: string | null, email: string, emailActor: { __typename: 'CustomerEmailActor', customerId: string } | { __typename: 'DeletedCustomerEmailActor', customerId: string } | { __typename: 'SupportEmailAddressEmailActor', supportEmailAddress: string } | { __typename: 'UserEmailActor', userId: string } | null }, additionalRecipients: Array<{ __typename: 'EmailParticipant', name: string | null, email: string, emailActor: { __typename: 'CustomerEmailActor', customerId: string } | { __typename: 'DeletedCustomerEmailActor', customerId: string } | { __typename: 'SupportEmailAddressEmailActor', supportEmailAddress: string } | { __typename: 'UserEmailActor', userId: string } | null }>, hiddenRecipients: Array<{ __typename: 'EmailParticipant', name: string | null, email: string, emailActor: { __typename: 'CustomerEmailActor', customerId: string } | { __typename: 'DeletedCustomerEmailActor', customerId: string } | { __typename: 'SupportEmailAddressEmailActor', supportEmailAddress: string } | { __typename: 'UserEmailActor', userId: string } | null }>, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, attachments: Array<{ __typename: 'Attachment', id: string, fileName: string, fileExtension: string | null, fileSize: { __typename: 'FileSize', kiloBytes: number, megaBytes: number }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string } }> } | null, error: { __typename: 'MutationError', message: string, type: MutationErrorType, code: string, fields: Array<{ __typename?: 'MutationFieldError', field: string, message: string, type: MutationFieldErrorType }> } | null } };

export type SetCustomerTenantsMutationVariables = Exact<{
  input: SetCustomerTenantsInput;
}>;


export type SetCustomerTenantsMutation = { __typename?: 'Mutation', setCustomerTenants: { __typename?: 'SetCustomerTenantsOutput', error: { __typename: 'MutationError', message: string, type: MutationErrorType, code: string, fields: Array<{ __typename?: 'MutationFieldError', field: string, message: string, type: MutationFieldErrorType }> } | null } };

export type SnoozeThreadMutationVariables = Exact<{
  input: SnoozeThreadInput;
}>;


export type SnoozeThreadMutation = { __typename?: 'Mutation', snoozeThread: { __typename?: 'SnoozeThreadOutput', thread: { __typename: 'Thread', id: string, externalId: string | null, status: ThreadStatus, title: string, description: string | null, previewText: string | null, priority: number, customer: { __typename?: 'Customer', id: string }, statusChangedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, labels: Array<{ __typename: 'Label', id: string, labelType: { __typename: 'LabelType', id: string, name: string, icon: string | null, isArchived: boolean, archivedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string } | null, archivedBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } | null, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, createdBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, updatedBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } }, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, createdBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, updatedBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } }>, threadFields: Array<{ __typename: 'ThreadField', id: string, key: string, type: ThreadFieldSchemaType, threadId: string, stringValue: string | null, booleanValue: boolean | null, isAiGenerated: boolean, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, createdBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, updatedBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } }>, assignedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string } | null, assignedTo: { __typename: 'MachineUser', id: string, fullName: string, publicName: string, description: string | null, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string } } | { __typename: 'System', id: string } | { __typename: 'User', id: string, fullName: string, publicName: string, email: string, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string } } | null, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, createdBy: { __typename: 'CustomerActor', customerId: string } | { __typename: 'DeletedCustomerActor', customerId: string } | { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, updatedBy: { __typename: 'CustomerActor', customerId: string } | { __typename: 'DeletedCustomerActor', customerId: string } | { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } } | null, error: { __typename: 'MutationError', message: string, type: MutationErrorType, code: string, fields: Array<{ __typename?: 'MutationFieldError', field: string, message: string, type: MutationFieldErrorType }> } | null } };

export type UnassignThreadMutationVariables = Exact<{
  input: UnassignThreadInput;
}>;


export type UnassignThreadMutation = { __typename?: 'Mutation', unassignThread: { __typename?: 'UnassignThreadOutput', thread: { __typename: 'Thread', id: string, externalId: string | null, status: ThreadStatus, title: string, description: string | null, previewText: string | null, priority: number, customer: { __typename?: 'Customer', id: string }, statusChangedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, labels: Array<{ __typename: 'Label', id: string, labelType: { __typename: 'LabelType', id: string, name: string, icon: string | null, isArchived: boolean, archivedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string } | null, archivedBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } | null, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, createdBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, updatedBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } }, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, createdBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, updatedBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } }>, threadFields: Array<{ __typename: 'ThreadField', id: string, key: string, type: ThreadFieldSchemaType, threadId: string, stringValue: string | null, booleanValue: boolean | null, isAiGenerated: boolean, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, createdBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, updatedBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } }>, assignedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string } | null, assignedTo: { __typename: 'MachineUser', id: string, fullName: string, publicName: string, description: string | null, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string } } | { __typename: 'System', id: string } | { __typename: 'User', id: string, fullName: string, publicName: string, email: string, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string } } | null, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, createdBy: { __typename: 'CustomerActor', customerId: string } | { __typename: 'DeletedCustomerActor', customerId: string } | { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, updatedBy: { __typename: 'CustomerActor', customerId: string } | { __typename: 'DeletedCustomerActor', customerId: string } | { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } } | null, error: { __typename: 'MutationError', message: string, type: MutationErrorType, code: string, fields: Array<{ __typename?: 'MutationFieldError', field: string, message: string, type: MutationFieldErrorType }> } | null } };

export type UpdateCompanyTierMutationVariables = Exact<{
  input: UpdateCompanyTierInput;
}>;


export type UpdateCompanyTierMutation = { __typename?: 'Mutation', updateCompanyTier: { __typename?: 'UpdateCompanyTierOutput', companyTierMembership: { __typename: 'CompanyTierMembership', id: string, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, createdBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, updatedBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } } | null, error: { __typename: 'MutationError', message: string, type: MutationErrorType, code: string, fields: Array<{ __typename?: 'MutationFieldError', field: string, message: string, type: MutationFieldErrorType }> } | null } };

export type UpdateCustomerCardConfigMutationVariables = Exact<{
  input: UpdateCustomerCardConfigInput;
}>;


export type UpdateCustomerCardConfigMutation = { __typename?: 'Mutation', updateCustomerCardConfig: { __typename?: 'UpdateCustomerCardConfigOutput', customerCardConfig: { __typename: 'CustomerCardConfig', id: string, title: string, key: string, defaultTimeToLiveSeconds: number, apiUrl: string, order: number, isEnabled: boolean, apiHeaders: Array<{ __typename?: 'CustomerCardConfigApiHeader', name: string, value: string }>, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string } } | null, error: { __typename: 'MutationError', message: string, type: MutationErrorType, code: string, fields: Array<{ __typename?: 'MutationFieldError', field: string, message: string, type: MutationFieldErrorType }> } | null } };

export type UpdateCustomerCompanyMutationVariables = Exact<{
  input: UpdateCustomerCompanyInput;
}>;


export type UpdateCustomerCompanyMutation = { __typename?: 'Mutation', updateCustomerCompany: { __typename?: 'UpdateCustomerCompanyOutput', customer: { __typename: 'Customer', id: string, fullName: string, shortName: string | null, externalId: string | null, email: { __typename?: 'EmailAddress', email: string, isVerified: boolean, verifiedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string } | null }, company: { __typename: 'Company', id: string, name: string, domainName: string, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, createdBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, updatedBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } } | null, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, createdBy: { __typename?: 'CustomerActor' } | { __typename?: 'DeletedCustomerActor' } | { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, markedAsSpamAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string } | null } | null, error: { __typename: 'MutationError', message: string, type: MutationErrorType, code: string, fields: Array<{ __typename?: 'MutationFieldError', field: string, message: string, type: MutationFieldErrorType }> } | null } };

export type UpdateTenantTierMutationVariables = Exact<{
  input: UpdateTenantTierInput;
}>;


export type UpdateTenantTierMutation = { __typename?: 'Mutation', updateTenantTier: { __typename?: 'UpdateTenantTierOutput', tenantTierMembership: { __typename: 'TenantTierMembership', id: string, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, createdBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, updatedBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } } | null, error: { __typename: 'MutationError', message: string, type: MutationErrorType, code: string, fields: Array<{ __typename?: 'MutationFieldError', field: string, message: string, type: MutationFieldErrorType }> } | null } };

export type UpdateThreadTenantMutationVariables = Exact<{
  input: UpdateThreadTenantInput;
}>;


export type UpdateThreadTenantMutation = { __typename?: 'Mutation', updateThreadTenant: { __typename?: 'UpdateThreadTenantOutput', thread: { __typename: 'Thread', id: string, externalId: string | null, status: ThreadStatus, title: string, description: string | null, previewText: string | null, priority: number, customer: { __typename?: 'Customer', id: string }, statusChangedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, labels: Array<{ __typename: 'Label', id: string, labelType: { __typename: 'LabelType', id: string, name: string, icon: string | null, isArchived: boolean, archivedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string } | null, archivedBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } | null, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, createdBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, updatedBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } }, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, createdBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, updatedBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } }>, threadFields: Array<{ __typename: 'ThreadField', id: string, key: string, type: ThreadFieldSchemaType, threadId: string, stringValue: string | null, booleanValue: boolean | null, isAiGenerated: boolean, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, createdBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, updatedBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } }>, assignedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string } | null, assignedTo: { __typename: 'MachineUser', id: string, fullName: string, publicName: string, description: string | null, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string } } | { __typename: 'System', id: string } | { __typename: 'User', id: string, fullName: string, publicName: string, email: string, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string } } | null, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, createdBy: { __typename: 'CustomerActor', customerId: string } | { __typename: 'DeletedCustomerActor', customerId: string } | { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, updatedBy: { __typename: 'CustomerActor', customerId: string } | { __typename: 'DeletedCustomerActor', customerId: string } | { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } } | null, error: { __typename: 'MutationError', message: string, type: MutationErrorType, code: string, fields: Array<{ __typename?: 'MutationFieldError', field: string, message: string, type: MutationFieldErrorType }> } | null } };

export type UpdateWebhookTargetMutationVariables = Exact<{
  input: UpdateWebhookTargetInput;
}>;


export type UpdateWebhookTargetMutation = { __typename?: 'Mutation', updateWebhookTarget: { __typename?: 'UpdateWebhookTargetOutput', webhookTarget: { __typename?: 'WebhookTarget', id: string, url: string, isEnabled: boolean, description: string, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, createdBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, updatedBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, eventSubscriptions: Array<{ __typename: 'WebhookTargetEventSubscription', eventType: string }> } | null, error: { __typename: 'MutationError', message: string, type: MutationErrorType, code: string, fields: Array<{ __typename?: 'MutationFieldError', field: string, message: string, type: MutationFieldErrorType }> } | null } };

export type UpsertCustomerMutationVariables = Exact<{
  input: UpsertCustomerInput;
}>;


export type UpsertCustomerMutation = { __typename?: 'Mutation', upsertCustomer: { __typename?: 'UpsertCustomerOutput', result: UpsertResult | null, customer: { __typename: 'Customer', id: string, fullName: string, shortName: string | null, externalId: string | null, email: { __typename?: 'EmailAddress', email: string, isVerified: boolean, verifiedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string } | null }, company: { __typename: 'Company', id: string, name: string, domainName: string, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, createdBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, updatedBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } } | null, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, createdBy: { __typename?: 'CustomerActor' } | { __typename?: 'DeletedCustomerActor' } | { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, markedAsSpamAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string } | null } | null, error: { __typename: 'MutationError', message: string, type: MutationErrorType, code: string, fields: Array<{ __typename?: 'MutationFieldError', field: string, message: string, type: MutationFieldErrorType }> } | null } };

export type UpsertTenantMutationVariables = Exact<{
  input: UpsertTenantInput;
}>;


export type UpsertTenantMutation = { __typename?: 'Mutation', upsertTenant: { __typename?: 'UpsertTenantOutput', tenant: { __typename: 'Tenant', id: string, name: string, externalId: string, url: string | null, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, createdBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, updatedBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } } | null, error: { __typename: 'MutationError', message: string, type: MutationErrorType, code: string, fields: Array<{ __typename?: 'MutationFieldError', field: string, message: string, type: MutationFieldErrorType }> } | null } };

export type UpsertThreadFieldMutationVariables = Exact<{
  input: UpsertThreadFieldInput;
}>;


export type UpsertThreadFieldMutation = { __typename?: 'Mutation', upsertThreadField: { __typename?: 'UpsertThreadFieldOutput', result: UpsertResult | null, threadField: { __typename: 'ThreadField', id: string, key: string, type: ThreadFieldSchemaType, threadId: string, stringValue: string | null, booleanValue: boolean | null, isAiGenerated: boolean, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, createdBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, updatedBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } } | null, error: { __typename: 'MutationError', message: string, type: MutationErrorType, code: string, fields: Array<{ __typename?: 'MutationFieldError', field: string, message: string, type: MutationFieldErrorType }> } | null } };

export type CompaniesQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
  last?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['String']>;
}>;


export type CompaniesQuery = { __typename?: 'Query', companies: { __typename?: 'CompanyConnection', edges: Array<{ __typename?: 'CompanyEdge', cursor: string, node: { __typename: 'Company', id: string, name: string, domainName: string, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, createdBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, updatedBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor: string | null, endCursor: string | null } } };

export type CustomerByEmailQueryVariables = Exact<{
  email: Scalars['String'];
}>;


export type CustomerByEmailQuery = { __typename?: 'Query', customerByEmail: { __typename: 'Customer', id: string, fullName: string, shortName: string | null, externalId: string | null, email: { __typename?: 'EmailAddress', email: string, isVerified: boolean, verifiedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string } | null }, company: { __typename: 'Company', id: string, name: string, domainName: string, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, createdBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, updatedBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } } | null, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, createdBy: { __typename?: 'CustomerActor' } | { __typename?: 'DeletedCustomerActor' } | { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, markedAsSpamAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string } | null } | null };

export type CustomerByIdQueryVariables = Exact<{
  customerId: Scalars['ID'];
}>;


export type CustomerByIdQuery = { __typename?: 'Query', customer: { __typename: 'Customer', id: string, fullName: string, shortName: string | null, externalId: string | null, email: { __typename?: 'EmailAddress', email: string, isVerified: boolean, verifiedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string } | null }, company: { __typename: 'Company', id: string, name: string, domainName: string, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, createdBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, updatedBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } } | null, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, createdBy: { __typename?: 'CustomerActor' } | { __typename?: 'DeletedCustomerActor' } | { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, markedAsSpamAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string } | null } | null };

export type CustomerCustomerGroupsQueryVariables = Exact<{
  customerId: Scalars['ID'];
  filters?: InputMaybe<CustomerGroupMembershipsFilter>;
  first?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
  last?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['String']>;
}>;


export type CustomerCustomerGroupsQuery = { __typename?: 'Query', customer: { __typename?: 'Customer', customerGroupMemberships: { __typename?: 'CustomerGroupMembershipConnection', edges: Array<{ __typename?: 'CustomerGroupMembershipEdge', node: { __typename: 'CustomerGroupMembership', customerId: string, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, createdBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, updatedBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, customerGroup: { __typename: 'CustomerGroup', id: string, name: string, key: string, color: string } } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor: string | null, endCursor: string | null } } } | null };

export type CustomerGroupByIdQueryVariables = Exact<{
  customerGroupId: Scalars['ID'];
}>;


export type CustomerGroupByIdQuery = { __typename?: 'Query', customerGroup: { __typename: 'CustomerGroup', id: string, name: string, key: string, color: string } | null };

export type CustomerGroupsQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  last?: InputMaybe<Scalars['Int']>;
}>;


export type CustomerGroupsQuery = { __typename?: 'Query', customerGroups: { __typename?: 'CustomerGroupConnection', edges: Array<{ __typename?: 'CustomerGroupEdge', node: { __typename: 'CustomerGroup', id: string, name: string, key: string, color: string } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor: string | null, endCursor: string | null } } };

export type CustomerTenantsQueryVariables = Exact<{
  customerId: Scalars['ID'];
  first?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
  last?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['String']>;
}>;


export type CustomerTenantsQuery = { __typename?: 'Query', customer: { __typename?: 'Customer', tenantMemberships: { __typename?: 'CustomerTenantMembershipConnection', edges: Array<{ __typename?: 'CustomerTenantMembershipEdge', node: { __typename: 'CustomerTenantMembership', createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, createdBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, updatedBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, tenant: { __typename: 'Tenant', id: string, name: string, externalId: string, url: string | null, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, createdBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, updatedBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } } } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor: string | null, endCursor: string | null } } } | null };

export type CustomersQueryVariables = Exact<{
  filters?: InputMaybe<CustomersFilter>;
  sortBy?: InputMaybe<CustomersSort>;
  first?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
  last?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['String']>;
}>;


export type CustomersQuery = { __typename?: 'Query', customers: { __typename?: 'CustomerConnection', totalCount: number, edges: Array<{ __typename?: 'CustomerEdge', node: { __typename: 'Customer', id: string, fullName: string, shortName: string | null, externalId: string | null, email: { __typename?: 'EmailAddress', email: string, isVerified: boolean, verifiedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string } | null }, company: { __typename: 'Company', id: string, name: string, domainName: string, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, createdBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, updatedBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } } | null, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, createdBy: { __typename?: 'CustomerActor' } | { __typename?: 'DeletedCustomerActor' } | { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, markedAsSpamAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string } | null } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor: string | null, endCursor: string | null } } };

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

export type SearchCompaniesQueryVariables = Exact<{
  searchQuery: CompaniesSearchQuery;
  first?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
  last?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['String']>;
}>;


export type SearchCompaniesQuery = { __typename?: 'Query', searchCompanies: { __typename?: 'CompanySearchResultConnection', edges: Array<{ __typename?: 'CompanySearchResultEdge', cursor: string, node: { __typename?: 'CompanySearchResult', company: { __typename: 'Company', id: string, name: string, domainName: string, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, createdBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, updatedBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } } } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor: string | null, endCursor: string | null } } };

export type SearchTenantsQueryVariables = Exact<{
  searchQuery: TenantsSearchQuery;
  first?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
  last?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['String']>;
}>;


export type SearchTenantsQuery = { __typename?: 'Query', searchTenants: { __typename?: 'TenantSearchResultConnection', edges: Array<{ __typename?: 'TenantSearchResultEdge', cursor: string, node: { __typename?: 'TenantSearchResult', tenant: { __typename: 'Tenant', id: string, name: string, externalId: string, url: string | null, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, createdBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, updatedBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } } } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor: string | null, endCursor: string | null } } };

export type TenantQueryVariables = Exact<{
  tenantId: Scalars['ID'];
}>;


export type TenantQuery = { __typename?: 'Query', tenant: { __typename: 'Tenant', id: string, name: string, externalId: string, url: string | null, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, createdBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, updatedBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } } | null };

export type TenantsQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
  last?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['String']>;
}>;


export type TenantsQuery = { __typename?: 'Query', tenants: { __typename?: 'TenantConnection', edges: Array<{ __typename?: 'TenantEdge', cursor: string, node: { __typename: 'Tenant', id: string, name: string, externalId: string, url: string | null, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, createdBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, updatedBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor: string | null, endCursor: string | null } } };

export type ThreadQueryVariables = Exact<{
  threadId: Scalars['ID'];
}>;


export type ThreadQuery = { __typename?: 'Query', thread: { __typename: 'Thread', id: string, externalId: string | null, status: ThreadStatus, title: string, description: string | null, previewText: string | null, priority: number, customer: { __typename?: 'Customer', id: string }, statusChangedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, labels: Array<{ __typename: 'Label', id: string, labelType: { __typename: 'LabelType', id: string, name: string, icon: string | null, isArchived: boolean, archivedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string } | null, archivedBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } | null, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, createdBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, updatedBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } }, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, createdBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, updatedBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } }>, threadFields: Array<{ __typename: 'ThreadField', id: string, key: string, type: ThreadFieldSchemaType, threadId: string, stringValue: string | null, booleanValue: boolean | null, isAiGenerated: boolean, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, createdBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, updatedBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } }>, assignedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string } | null, assignedTo: { __typename: 'MachineUser', id: string, fullName: string, publicName: string, description: string | null, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string } } | { __typename: 'System', id: string } | { __typename: 'User', id: string, fullName: string, publicName: string, email: string, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string } } | null, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, createdBy: { __typename: 'CustomerActor', customerId: string } | { __typename: 'DeletedCustomerActor', customerId: string } | { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, updatedBy: { __typename: 'CustomerActor', customerId: string } | { __typename: 'DeletedCustomerActor', customerId: string } | { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } } | null };

export type ThreadByExternalIdQueryVariables = Exact<{
  customerId: Scalars['ID'];
  externalId: Scalars['ID'];
}>;


export type ThreadByExternalIdQuery = { __typename?: 'Query', threadByExternalId: { __typename: 'Thread', id: string, externalId: string | null, status: ThreadStatus, title: string, description: string | null, previewText: string | null, priority: number, customer: { __typename?: 'Customer', id: string }, statusChangedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, labels: Array<{ __typename: 'Label', id: string, labelType: { __typename: 'LabelType', id: string, name: string, icon: string | null, isArchived: boolean, archivedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string } | null, archivedBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } | null, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, createdBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, updatedBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } }, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, createdBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, updatedBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } }>, threadFields: Array<{ __typename: 'ThreadField', id: string, key: string, type: ThreadFieldSchemaType, threadId: string, stringValue: string | null, booleanValue: boolean | null, isAiGenerated: boolean, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, createdBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, updatedBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } }>, assignedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string } | null, assignedTo: { __typename: 'MachineUser', id: string, fullName: string, publicName: string, description: string | null, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string } } | { __typename: 'System', id: string } | { __typename: 'User', id: string, fullName: string, publicName: string, email: string, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string } } | null, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, createdBy: { __typename: 'CustomerActor', customerId: string } | { __typename: 'DeletedCustomerActor', customerId: string } | { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, updatedBy: { __typename: 'CustomerActor', customerId: string } | { __typename: 'DeletedCustomerActor', customerId: string } | { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } } | null };

export type ThreadsQueryVariables = Exact<{
  filters?: InputMaybe<ThreadsFilter>;
  sortBy?: InputMaybe<ThreadsSort>;
  first?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
  last?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['String']>;
}>;


export type ThreadsQuery = { __typename?: 'Query', threads: { __typename?: 'ThreadConnection', edges: Array<{ __typename?: 'ThreadEdge', cursor: string, node: { __typename: 'Thread', id: string, externalId: string | null, status: ThreadStatus, title: string, description: string | null, previewText: string | null, priority: number, customer: { __typename?: 'Customer', id: string }, statusChangedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, labels: Array<{ __typename: 'Label', id: string, labelType: { __typename: 'LabelType', id: string, name: string, icon: string | null, isArchived: boolean, archivedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string } | null, archivedBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } | null, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, createdBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, updatedBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } }, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, createdBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, updatedBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } }>, threadFields: Array<{ __typename: 'ThreadField', id: string, key: string, type: ThreadFieldSchemaType, threadId: string, stringValue: string | null, booleanValue: boolean | null, isAiGenerated: boolean, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, createdBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, updatedBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } }>, assignedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string } | null, assignedTo: { __typename: 'MachineUser', id: string, fullName: string, publicName: string, description: string | null, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string } } | { __typename: 'System', id: string } | { __typename: 'User', id: string, fullName: string, publicName: string, email: string, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string } } | null, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, createdBy: { __typename: 'CustomerActor', customerId: string } | { __typename: 'DeletedCustomerActor', customerId: string } | { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, updatedBy: { __typename: 'CustomerActor', customerId: string } | { __typename: 'DeletedCustomerActor', customerId: string } | { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor: string | null, endCursor: string | null } } };

export type TierQueryVariables = Exact<{
  tierId: Scalars['ID'];
}>;


export type TierQuery = { __typename?: 'Query', tier: { __typename: 'Tier', id: string, name: string, externalId: string | null, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, createdBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, updatedBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } } | null };

export type TiersQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
  last?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['String']>;
}>;


export type TiersQuery = { __typename?: 'Query', tiers: { __typename?: 'TierConnection', edges: Array<{ __typename?: 'TierEdge', cursor: string, node: { __typename: 'Tier', id: string, name: string, externalId: string | null, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, createdBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, updatedBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string } } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor: string | null, endCursor: string | null } } };

export type UserByEmailQueryVariables = Exact<{
  email: Scalars['String'];
}>;


export type UserByEmailQuery = { __typename?: 'Query', userByEmail: { __typename: 'User', id: string, fullName: string, publicName: string, email: string, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string } } | null };

export type WebhookTargetQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type WebhookTargetQuery = { __typename?: 'Query', webhookTarget: { __typename?: 'WebhookTarget', id: string, url: string, isEnabled: boolean, description: string, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, createdBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, updatedBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, eventSubscriptions: Array<{ __typename: 'WebhookTargetEventSubscription', eventType: string }> } | null };

export type WebhookTargetsQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']>;
  after?: InputMaybe<Scalars['String']>;
  last?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['String']>;
}>;


export type WebhookTargetsQuery = { __typename?: 'Query', webhookTargets: { __typename?: 'WebhookTargetConnection', edges: Array<{ __typename?: 'WebhookTargetEdge', cursor: string, node: { __typename?: 'WebhookTarget', id: string, url: string, isEnabled: boolean, description: string, createdAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, createdBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, updatedAt: { __typename: 'DateTime', iso8601: string, unixTimestamp: string }, updatedBy: { __typename: 'MachineUserActor', machineUserId: string } | { __typename: 'SystemActor', systemId: string } | { __typename: 'UserActor', userId: string }, eventSubscriptions: Array<{ __typename: 'WebhookTargetEventSubscription', eventType: string }> } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor: string | null, endCursor: string | null } } };

export const FileSizePartsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FileSizeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FileSize"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"kiloBytes"}},{"kind":"Field","name":{"kind":"Name","value":"megaBytes"}}]}}]} as unknown as DocumentNode<FileSizePartsFragment, unknown>;
export const DateTimePartsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DateTimeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"iso8601"}},{"kind":"Field","name":{"kind":"Name","value":"unixTimestamp"}}]}}]} as unknown as DocumentNode<DateTimePartsFragment, unknown>;
export const AttachmentPartsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AttachmentParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Attachment"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fileName"}},{"kind":"Field","name":{"kind":"Name","value":"fileSize"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FileSizeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"fileExtension"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FileSizeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FileSize"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"kiloBytes"}},{"kind":"Field","name":{"kind":"Name","value":"megaBytes"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DateTimeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"iso8601"}},{"kind":"Field","name":{"kind":"Name","value":"unixTimestamp"}}]}}]} as unknown as DocumentNode<AttachmentPartsFragment, unknown>;
export const AttachmentUploadUrlPartsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AttachmentUploadUrlParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AttachmentUploadUrl"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"attachment"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AttachmentParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"uploadFormUrl"}},{"kind":"Field","name":{"kind":"Name","value":"uploadFormData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"expiresAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FileSizeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FileSize"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"kiloBytes"}},{"kind":"Field","name":{"kind":"Name","value":"megaBytes"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DateTimeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"iso8601"}},{"kind":"Field","name":{"kind":"Name","value":"unixTimestamp"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AttachmentParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Attachment"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fileName"}},{"kind":"Field","name":{"kind":"Name","value":"fileSize"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FileSizeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"fileExtension"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}}]}}]} as unknown as DocumentNode<AttachmentUploadUrlPartsFragment, unknown>;
export const CustomerCardConfigPartsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CustomerCardConfigParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerCardConfig"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"defaultTimeToLiveSeconds"}},{"kind":"Field","name":{"kind":"Name","value":"apiUrl"}},{"kind":"Field","name":{"kind":"Name","value":"order"}},{"kind":"Field","name":{"kind":"Name","value":"apiHeaders"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"isEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DateTimeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"iso8601"}},{"kind":"Field","name":{"kind":"Name","value":"unixTimestamp"}}]}}]} as unknown as DocumentNode<CustomerCardConfigPartsFragment, unknown>;
export const UserActorPartsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}}]} as unknown as DocumentNode<UserActorPartsFragment, unknown>;
export const CustomerActorPartsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CustomerActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}}]}}]} as unknown as DocumentNode<CustomerActorPartsFragment, unknown>;
export const SystemActorPartsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SystemActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"systemId"}}]}}]} as unknown as DocumentNode<SystemActorPartsFragment, unknown>;
export const MachineUserActorPartsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MachineUserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"machineUserId"}}]}}]} as unknown as DocumentNode<MachineUserActorPartsFragment, unknown>;
export const DeletedCustomerActorPartsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DeletedCustomerActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DeletedCustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}}]}}]} as unknown as DocumentNode<DeletedCustomerActorPartsFragment, unknown>;
export const ActorPartsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Actor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CustomerActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SystemActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MachineUserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DeletedCustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DeletedCustomerActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CustomerActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SystemActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"systemId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MachineUserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"machineUserId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DeletedCustomerActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DeletedCustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}}]}}]} as unknown as DocumentNode<ActorPartsFragment, unknown>;
export const CustomerEventPartsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CustomerEventParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerEvent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CustomerActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SystemActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"systemId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MachineUserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"machineUserId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DeletedCustomerActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DeletedCustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DateTimeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"iso8601"}},{"kind":"Field","name":{"kind":"Name","value":"unixTimestamp"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Actor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CustomerActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SystemActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MachineUserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DeletedCustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DeletedCustomerActorParts"}}]}}]}}]} as unknown as DocumentNode<CustomerEventPartsFragment, unknown>;
export const InternalActorPartsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"InternalActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Actor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SystemActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MachineUserActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SystemActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"systemId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MachineUserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"machineUserId"}}]}}]} as unknown as DocumentNode<InternalActorPartsFragment, unknown>;
export const CustomerGroupPartsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CustomerGroupParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}}]} as unknown as DocumentNode<CustomerGroupPartsFragment, unknown>;
export const CustomerGroupMembershipPartsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CustomerGroupMembershipParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerGroupMembership"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"InternalActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"InternalActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"customerGroup"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CustomerGroupParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SystemActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"systemId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MachineUserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"machineUserId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DateTimeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"iso8601"}},{"kind":"Field","name":{"kind":"Name","value":"unixTimestamp"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"InternalActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Actor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SystemActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MachineUserActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CustomerGroupParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}}]} as unknown as DocumentNode<CustomerGroupMembershipPartsFragment, unknown>;
export const CompanyPartsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CompanyParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Company"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"domainName"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"InternalActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"InternalActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SystemActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"systemId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MachineUserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"machineUserId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DateTimeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"iso8601"}},{"kind":"Field","name":{"kind":"Name","value":"unixTimestamp"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"InternalActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Actor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SystemActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MachineUserActorParts"}}]}}]}}]} as unknown as DocumentNode<CompanyPartsFragment, unknown>;
export const CustomerPartsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CustomerParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Customer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"shortName"}},{"kind":"Field","name":{"kind":"Name","value":"externalId"}},{"kind":"Field","name":{"kind":"Name","value":"email"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"isVerified"}},{"kind":"Field","name":{"kind":"Name","value":"verifiedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"company"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CompanyParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"InternalActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"markedAsSpamAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DateTimeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"iso8601"}},{"kind":"Field","name":{"kind":"Name","value":"unixTimestamp"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SystemActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"systemId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MachineUserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"machineUserId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"InternalActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Actor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SystemActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MachineUserActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CompanyParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Company"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"domainName"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"InternalActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"InternalActorParts"}}]}}]}}]} as unknown as DocumentNode<CustomerPartsFragment, unknown>;
export const TenantPartsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TenantParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Tenant"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"externalId"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"InternalActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"InternalActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SystemActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"systemId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MachineUserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"machineUserId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DateTimeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"iso8601"}},{"kind":"Field","name":{"kind":"Name","value":"unixTimestamp"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"InternalActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Actor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SystemActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MachineUserActorParts"}}]}}]}}]} as unknown as DocumentNode<TenantPartsFragment, unknown>;
export const CustomerTenantMembershipPartsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CustomerTenantMembershipParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerTenantMembership"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"InternalActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"InternalActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tenant"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TenantParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SystemActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"systemId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MachineUserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"machineUserId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DateTimeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"iso8601"}},{"kind":"Field","name":{"kind":"Name","value":"unixTimestamp"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"InternalActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Actor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SystemActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MachineUserActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TenantParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Tenant"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"externalId"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"InternalActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"InternalActorParts"}}]}}]}}]} as unknown as DocumentNode<CustomerTenantMembershipPartsFragment, unknown>;
export const EmailActorPartsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EmailActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EmailActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerEmailActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserEmailActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SupportEmailAddressEmailActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"supportEmailAddress"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DeletedCustomerEmailActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}}]}}]}}]} as unknown as DocumentNode<EmailActorPartsFragment, unknown>;
export const EmailParticipantPartsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EmailParticipantParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EmailParticipant"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"emailActor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"EmailActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EmailActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EmailActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerEmailActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserEmailActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SupportEmailAddressEmailActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"supportEmailAddress"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DeletedCustomerEmailActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}}]}}]}}]} as unknown as DocumentNode<EmailParticipantPartsFragment, unknown>;
export const EmailPartsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EmailParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Email"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"inReplyToEmailId"}},{"kind":"Field","name":{"kind":"Name","value":"from"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"EmailParticipantParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"to"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"EmailParticipantParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"additionalRecipients"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"EmailParticipantParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"hiddenRecipients"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"EmailParticipantParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"subject"}},{"kind":"Field","name":{"kind":"Name","value":"textContent"}},{"kind":"Field","name":{"kind":"Name","value":"markdownContent"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"attachments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AttachmentParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EmailActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EmailActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerEmailActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserEmailActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SupportEmailAddressEmailActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"supportEmailAddress"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DeletedCustomerEmailActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FileSizeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FileSize"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"kiloBytes"}},{"kind":"Field","name":{"kind":"Name","value":"megaBytes"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DateTimeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"iso8601"}},{"kind":"Field","name":{"kind":"Name","value":"unixTimestamp"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EmailParticipantParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EmailParticipant"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"emailActor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"EmailActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AttachmentParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Attachment"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fileName"}},{"kind":"Field","name":{"kind":"Name","value":"fileSize"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FileSizeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"fileExtension"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}}]}}]} as unknown as DocumentNode<EmailPartsFragment, unknown>;
export const MutationErrorPartsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MutationErrorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MutationError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"field"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]} as unknown as DocumentNode<MutationErrorPartsFragment, unknown>;
export const NotePartsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NoteParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Note"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"markdown"}},{"kind":"Field","name":{"kind":"Name","value":"text"}}]}}]} as unknown as DocumentNode<NotePartsFragment, unknown>;
export const PageInfoPartsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PageInfoParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}}]} as unknown as DocumentNode<PageInfoPartsFragment, unknown>;
export const ThreadEventPartsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ThreadEventParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ThreadEvent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"threadId"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CustomerActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SystemActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"systemId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MachineUserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"machineUserId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DeletedCustomerActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DeletedCustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DateTimeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"iso8601"}},{"kind":"Field","name":{"kind":"Name","value":"unixTimestamp"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Actor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CustomerActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SystemActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MachineUserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DeletedCustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DeletedCustomerActorParts"}}]}}]}}]} as unknown as DocumentNode<ThreadEventPartsFragment, unknown>;
export const LabelTypePartsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LabelTypeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LabelType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"isArchived"}},{"kind":"Field","name":{"kind":"Name","value":"archivedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"archivedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CustomerActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SystemActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"systemId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MachineUserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"machineUserId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DeletedCustomerActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DeletedCustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DateTimeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"iso8601"}},{"kind":"Field","name":{"kind":"Name","value":"unixTimestamp"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Actor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CustomerActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SystemActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MachineUserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DeletedCustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DeletedCustomerActorParts"}}]}}]}}]} as unknown as DocumentNode<LabelTypePartsFragment, unknown>;
export const LabelPartsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LabelParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Label"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"labelType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LabelTypeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DateTimeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"iso8601"}},{"kind":"Field","name":{"kind":"Name","value":"unixTimestamp"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CustomerActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SystemActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"systemId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MachineUserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"machineUserId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DeletedCustomerActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DeletedCustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Actor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CustomerActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SystemActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MachineUserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DeletedCustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DeletedCustomerActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LabelTypeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LabelType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"isArchived"}},{"kind":"Field","name":{"kind":"Name","value":"archivedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"archivedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}}]}}]} as unknown as DocumentNode<LabelPartsFragment, unknown>;
export const ThreadFieldPartsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ThreadFieldParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ThreadField"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"threadId"}},{"kind":"Field","name":{"kind":"Name","value":"stringValue"}},{"kind":"Field","name":{"kind":"Name","value":"booleanValue"}},{"kind":"Field","name":{"kind":"Name","value":"isAiGenerated"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"InternalActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"InternalActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SystemActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"systemId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MachineUserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"machineUserId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DateTimeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"iso8601"}},{"kind":"Field","name":{"kind":"Name","value":"unixTimestamp"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"InternalActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Actor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SystemActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MachineUserActorParts"}}]}}]}}]} as unknown as DocumentNode<ThreadFieldPartsFragment, unknown>;
export const UserPartsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"publicName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DateTimeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"iso8601"}},{"kind":"Field","name":{"kind":"Name","value":"unixTimestamp"}}]}}]} as unknown as DocumentNode<UserPartsFragment, unknown>;
export const MachineUserPartsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MachineUserParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUser"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"publicName"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DateTimeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"iso8601"}},{"kind":"Field","name":{"kind":"Name","value":"unixTimestamp"}}]}}]} as unknown as DocumentNode<MachineUserPartsFragment, unknown>;
export const SystemPartsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SystemParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"System"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]} as unknown as DocumentNode<SystemPartsFragment, unknown>;
export const ThreadAssigneePartsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ThreadAssigneeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ThreadAssignee"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUser"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MachineUserParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"System"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SystemParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DateTimeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"iso8601"}},{"kind":"Field","name":{"kind":"Name","value":"unixTimestamp"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"publicName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MachineUserParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUser"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"publicName"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SystemParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"System"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]} as unknown as DocumentNode<ThreadAssigneePartsFragment, unknown>;
export const ThreadPartsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ThreadParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Thread"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"externalId"}},{"kind":"Field","name":{"kind":"Name","value":"customer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"statusChangedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"previewText"}},{"kind":"Field","name":{"kind":"Name","value":"priority"}},{"kind":"Field","name":{"kind":"Name","value":"labels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LabelParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"threadFields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ThreadFieldParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"assignedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"assignedTo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ThreadAssigneeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DateTimeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"iso8601"}},{"kind":"Field","name":{"kind":"Name","value":"unixTimestamp"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CustomerActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SystemActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"systemId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MachineUserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"machineUserId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DeletedCustomerActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DeletedCustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Actor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CustomerActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SystemActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MachineUserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DeletedCustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DeletedCustomerActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LabelTypeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LabelType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"isArchived"}},{"kind":"Field","name":{"kind":"Name","value":"archivedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"archivedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"InternalActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Actor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SystemActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MachineUserActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"publicName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MachineUserParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUser"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"publicName"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SystemParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"System"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LabelParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Label"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"labelType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LabelTypeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ThreadFieldParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ThreadField"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"threadId"}},{"kind":"Field","name":{"kind":"Name","value":"stringValue"}},{"kind":"Field","name":{"kind":"Name","value":"booleanValue"}},{"kind":"Field","name":{"kind":"Name","value":"isAiGenerated"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"InternalActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"InternalActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ThreadAssigneeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ThreadAssignee"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUser"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MachineUserParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"System"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SystemParts"}}]}}]}}]} as unknown as DocumentNode<ThreadPartsFragment, unknown>;
export const TenantTierMembershipPartsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TenantTierMembershipParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TenantTierMembership"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"InternalActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"InternalActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SystemActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"systemId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MachineUserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"machineUserId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DateTimeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"iso8601"}},{"kind":"Field","name":{"kind":"Name","value":"unixTimestamp"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"InternalActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Actor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SystemActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MachineUserActorParts"}}]}}]}}]} as unknown as DocumentNode<TenantTierMembershipPartsFragment, unknown>;
export const CompanyTierMembershipPartsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CompanyTierMembershipParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CompanyTierMembership"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"InternalActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"InternalActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SystemActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"systemId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MachineUserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"machineUserId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DateTimeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"iso8601"}},{"kind":"Field","name":{"kind":"Name","value":"unixTimestamp"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"InternalActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Actor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SystemActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MachineUserActorParts"}}]}}]}}]} as unknown as DocumentNode<CompanyTierMembershipPartsFragment, unknown>;
export const TierMembershipPartsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TierMembershipParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TierMembership"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TenantTierMembership"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TenantTierMembershipParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CompanyTierMembership"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CompanyTierMembershipParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DateTimeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"iso8601"}},{"kind":"Field","name":{"kind":"Name","value":"unixTimestamp"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SystemActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"systemId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MachineUserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"machineUserId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"InternalActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Actor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SystemActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MachineUserActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TenantTierMembershipParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TenantTierMembership"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"InternalActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"InternalActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CompanyTierMembershipParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CompanyTierMembership"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"InternalActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"InternalActorParts"}}]}}]}}]} as unknown as DocumentNode<TierMembershipPartsFragment, unknown>;
export const TierPartsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TierParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Tier"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"externalId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"InternalActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"InternalActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SystemActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"systemId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MachineUserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"machineUserId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DateTimeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"iso8601"}},{"kind":"Field","name":{"kind":"Name","value":"unixTimestamp"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"InternalActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Actor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SystemActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MachineUserActorParts"}}]}}]}}]} as unknown as DocumentNode<TierPartsFragment, unknown>;
export const WebhookTargetEventSubscriptionPartsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"WebhookTargetEventSubscriptionParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"WebhookTargetEventSubscription"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"eventType"}}]}}]} as unknown as DocumentNode<WebhookTargetEventSubscriptionPartsFragment, unknown>;
export const WebhookTargetPartsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"WebhookTargetParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"WebhookTarget"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"isEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"eventSubscriptions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"WebhookTargetEventSubscriptionParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CustomerActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SystemActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"systemId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MachineUserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"machineUserId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DeletedCustomerActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DeletedCustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DateTimeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"iso8601"}},{"kind":"Field","name":{"kind":"Name","value":"unixTimestamp"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Actor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CustomerActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SystemActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MachineUserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DeletedCustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DeletedCustomerActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"WebhookTargetEventSubscriptionParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"WebhookTargetEventSubscription"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"eventType"}}]}}]} as unknown as DocumentNode<WebhookTargetPartsFragment, unknown>;
export const WorkspacePartsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"WorkspaceParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Workspace"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"publicName"}},{"kind":"Field","name":{"kind":"Name","value":"isDemoWorkspace"}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CustomerActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SystemActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"systemId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MachineUserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"machineUserId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DeletedCustomerActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DeletedCustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Actor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CustomerActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SystemActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MachineUserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DeletedCustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DeletedCustomerActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DateTimeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"iso8601"}},{"kind":"Field","name":{"kind":"Name","value":"unixTimestamp"}}]}}]} as unknown as DocumentNode<WorkspacePartsFragment, unknown>;
export const AddCustomerToCustomerGroupsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"addCustomerToCustomerGroups"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AddCustomerToCustomerGroupsInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addCustomerToCustomerGroups"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"customerGroupMemberships"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CustomerGroupMembershipParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"error"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MutationErrorParts"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DateTimeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"iso8601"}},{"kind":"Field","name":{"kind":"Name","value":"unixTimestamp"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SystemActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"systemId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MachineUserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"machineUserId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"InternalActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Actor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SystemActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MachineUserActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CustomerGroupParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CustomerGroupMembershipParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerGroupMembership"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"InternalActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"InternalActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"customerGroup"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CustomerGroupParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MutationErrorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MutationError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"field"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]} as unknown as DocumentNode<AddCustomerToCustomerGroupsMutation, AddCustomerToCustomerGroupsMutationVariables>;
export const AddCustomerToTenantsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"addCustomerToTenants"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AddCustomerToTenantsInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addCustomerToTenants"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"error"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MutationErrorParts"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MutationErrorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MutationError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"field"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]} as unknown as DocumentNode<AddCustomerToTenantsMutation, AddCustomerToTenantsMutationVariables>;
export const AddLabelsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"addLabels"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AddLabelsInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addLabels"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"labels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LabelParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"error"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MutationErrorParts"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DateTimeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"iso8601"}},{"kind":"Field","name":{"kind":"Name","value":"unixTimestamp"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CustomerActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SystemActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"systemId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MachineUserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"machineUserId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DeletedCustomerActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DeletedCustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Actor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CustomerActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SystemActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MachineUserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DeletedCustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DeletedCustomerActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LabelTypeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LabelType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"isArchived"}},{"kind":"Field","name":{"kind":"Name","value":"archivedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"archivedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LabelParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Label"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"labelType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LabelTypeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MutationErrorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MutationError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"field"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]} as unknown as DocumentNode<AddLabelsMutation, AddLabelsMutationVariables>;
export const AddMembersToTierDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"addMembersToTier"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AddMembersToTierInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addMembersToTier"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"memberships"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TierMembershipParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"error"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MutationErrorParts"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DateTimeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"iso8601"}},{"kind":"Field","name":{"kind":"Name","value":"unixTimestamp"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SystemActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"systemId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MachineUserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"machineUserId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"InternalActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Actor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SystemActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MachineUserActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TenantTierMembershipParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TenantTierMembership"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"InternalActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"InternalActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CompanyTierMembershipParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CompanyTierMembership"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"InternalActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"InternalActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TierMembershipParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TierMembership"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TenantTierMembership"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TenantTierMembershipParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CompanyTierMembership"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CompanyTierMembershipParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MutationErrorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MutationError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"field"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]} as unknown as DocumentNode<AddMembersToTierMutation, AddMembersToTierMutationVariables>;
export const ArchiveLabelTypeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"archiveLabelType"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ArchiveLabelTypeInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"archiveLabelType"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"labelType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LabelTypeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"error"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DateTimeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"iso8601"}},{"kind":"Field","name":{"kind":"Name","value":"unixTimestamp"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CustomerActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SystemActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"systemId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MachineUserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"machineUserId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DeletedCustomerActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DeletedCustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Actor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CustomerActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SystemActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MachineUserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DeletedCustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DeletedCustomerActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LabelTypeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LabelType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"isArchived"}},{"kind":"Field","name":{"kind":"Name","value":"archivedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"archivedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}}]}}]} as unknown as DocumentNode<ArchiveLabelTypeMutation, ArchiveLabelTypeMutationVariables>;
export const AssignThreadDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"assignThread"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AssignThreadInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"assignThread"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"thread"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ThreadParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"error"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MutationErrorParts"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DateTimeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"iso8601"}},{"kind":"Field","name":{"kind":"Name","value":"unixTimestamp"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CustomerActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SystemActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"systemId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MachineUserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"machineUserId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DeletedCustomerActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DeletedCustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Actor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CustomerActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SystemActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MachineUserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DeletedCustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DeletedCustomerActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LabelTypeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LabelType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"isArchived"}},{"kind":"Field","name":{"kind":"Name","value":"archivedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"archivedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LabelParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Label"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"labelType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LabelTypeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"InternalActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Actor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SystemActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MachineUserActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ThreadFieldParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ThreadField"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"threadId"}},{"kind":"Field","name":{"kind":"Name","value":"stringValue"}},{"kind":"Field","name":{"kind":"Name","value":"booleanValue"}},{"kind":"Field","name":{"kind":"Name","value":"isAiGenerated"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"InternalActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"InternalActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"publicName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MachineUserParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUser"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"publicName"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SystemParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"System"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ThreadAssigneeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ThreadAssignee"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUser"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MachineUserParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"System"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SystemParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ThreadParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Thread"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"externalId"}},{"kind":"Field","name":{"kind":"Name","value":"customer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"statusChangedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"previewText"}},{"kind":"Field","name":{"kind":"Name","value":"priority"}},{"kind":"Field","name":{"kind":"Name","value":"labels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LabelParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"threadFields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ThreadFieldParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"assignedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"assignedTo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ThreadAssigneeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MutationErrorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MutationError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"field"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]} as unknown as DocumentNode<AssignThreadMutation, AssignThreadMutationVariables>;
export const ChangeThreadPriorityDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"changeThreadPriority"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ChangeThreadPriorityInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"changeThreadPriority"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"thread"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ThreadParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"error"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MutationErrorParts"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DateTimeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"iso8601"}},{"kind":"Field","name":{"kind":"Name","value":"unixTimestamp"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CustomerActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SystemActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"systemId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MachineUserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"machineUserId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DeletedCustomerActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DeletedCustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Actor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CustomerActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SystemActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MachineUserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DeletedCustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DeletedCustomerActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LabelTypeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LabelType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"isArchived"}},{"kind":"Field","name":{"kind":"Name","value":"archivedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"archivedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LabelParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Label"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"labelType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LabelTypeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"InternalActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Actor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SystemActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MachineUserActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ThreadFieldParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ThreadField"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"threadId"}},{"kind":"Field","name":{"kind":"Name","value":"stringValue"}},{"kind":"Field","name":{"kind":"Name","value":"booleanValue"}},{"kind":"Field","name":{"kind":"Name","value":"isAiGenerated"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"InternalActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"InternalActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"publicName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MachineUserParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUser"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"publicName"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SystemParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"System"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ThreadAssigneeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ThreadAssignee"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUser"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MachineUserParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"System"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SystemParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ThreadParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Thread"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"externalId"}},{"kind":"Field","name":{"kind":"Name","value":"customer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"statusChangedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"previewText"}},{"kind":"Field","name":{"kind":"Name","value":"priority"}},{"kind":"Field","name":{"kind":"Name","value":"labels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LabelParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"threadFields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ThreadFieldParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"assignedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"assignedTo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ThreadAssigneeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MutationErrorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MutationError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"field"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]} as unknown as DocumentNode<ChangeThreadPriorityMutation, ChangeThreadPriorityMutationVariables>;
export const CreateAttachmentUploadUrlDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createAttachmentUploadUrl"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateAttachmentUploadUrlInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createAttachmentUploadUrl"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attachmentUploadUrl"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AttachmentUploadUrlParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"error"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MutationErrorParts"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FileSizeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FileSize"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"kiloBytes"}},{"kind":"Field","name":{"kind":"Name","value":"megaBytes"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DateTimeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"iso8601"}},{"kind":"Field","name":{"kind":"Name","value":"unixTimestamp"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AttachmentParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Attachment"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fileName"}},{"kind":"Field","name":{"kind":"Name","value":"fileSize"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FileSizeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"fileExtension"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AttachmentUploadUrlParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AttachmentUploadUrl"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"attachment"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AttachmentParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"uploadFormUrl"}},{"kind":"Field","name":{"kind":"Name","value":"uploadFormData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"expiresAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MutationErrorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MutationError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"field"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]} as unknown as DocumentNode<CreateAttachmentUploadUrlMutation, CreateAttachmentUploadUrlMutationVariables>;
export const CreateCustomerCardConfigDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createCustomerCardConfig"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateCustomerCardConfigInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createCustomerCardConfig"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"customerCardConfig"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CustomerCardConfigParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"error"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MutationErrorParts"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DateTimeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"iso8601"}},{"kind":"Field","name":{"kind":"Name","value":"unixTimestamp"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CustomerCardConfigParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerCardConfig"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"defaultTimeToLiveSeconds"}},{"kind":"Field","name":{"kind":"Name","value":"apiUrl"}},{"kind":"Field","name":{"kind":"Name","value":"order"}},{"kind":"Field","name":{"kind":"Name","value":"apiHeaders"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"isEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MutationErrorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MutationError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"field"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]} as unknown as DocumentNode<CreateCustomerCardConfigMutation, CreateCustomerCardConfigMutationVariables>;
export const CreateCustomerEventDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createCustomerEvent"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateCustomerEventInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createCustomerEvent"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"customerEvent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CustomerEventParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"error"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MutationErrorParts"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DateTimeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"iso8601"}},{"kind":"Field","name":{"kind":"Name","value":"unixTimestamp"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CustomerActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SystemActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"systemId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MachineUserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"machineUserId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DeletedCustomerActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DeletedCustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Actor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CustomerActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SystemActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MachineUserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DeletedCustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DeletedCustomerActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CustomerEventParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerEvent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MutationErrorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MutationError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"field"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]} as unknown as DocumentNode<CreateCustomerEventMutation, CreateCustomerEventMutationVariables>;
export const CreateNoteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createNote"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateNoteInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createNote"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"note"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"NoteParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"error"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MutationErrorParts"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NoteParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Note"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"markdown"}},{"kind":"Field","name":{"kind":"Name","value":"text"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MutationErrorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MutationError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"field"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]} as unknown as DocumentNode<CreateNoteMutation, CreateNoteMutationVariables>;
export const CreateThreadDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createThread"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateThreadInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createThread"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"thread"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ThreadParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"error"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MutationErrorParts"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DateTimeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"iso8601"}},{"kind":"Field","name":{"kind":"Name","value":"unixTimestamp"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CustomerActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SystemActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"systemId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MachineUserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"machineUserId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DeletedCustomerActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DeletedCustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Actor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CustomerActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SystemActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MachineUserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DeletedCustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DeletedCustomerActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LabelTypeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LabelType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"isArchived"}},{"kind":"Field","name":{"kind":"Name","value":"archivedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"archivedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LabelParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Label"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"labelType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LabelTypeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"InternalActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Actor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SystemActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MachineUserActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ThreadFieldParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ThreadField"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"threadId"}},{"kind":"Field","name":{"kind":"Name","value":"stringValue"}},{"kind":"Field","name":{"kind":"Name","value":"booleanValue"}},{"kind":"Field","name":{"kind":"Name","value":"isAiGenerated"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"InternalActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"InternalActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"publicName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MachineUserParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUser"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"publicName"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SystemParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"System"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ThreadAssigneeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ThreadAssignee"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUser"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MachineUserParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"System"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SystemParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ThreadParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Thread"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"externalId"}},{"kind":"Field","name":{"kind":"Name","value":"customer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"statusChangedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"previewText"}},{"kind":"Field","name":{"kind":"Name","value":"priority"}},{"kind":"Field","name":{"kind":"Name","value":"labels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LabelParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"threadFields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ThreadFieldParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"assignedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"assignedTo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ThreadAssigneeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MutationErrorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MutationError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"field"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]} as unknown as DocumentNode<CreateThreadMutation, CreateThreadMutationVariables>;
export const CreateThreadEventDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createThreadEvent"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateThreadEventInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createThreadEvent"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"threadEvent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ThreadEventParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"error"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MutationErrorParts"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DateTimeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"iso8601"}},{"kind":"Field","name":{"kind":"Name","value":"unixTimestamp"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CustomerActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SystemActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"systemId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MachineUserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"machineUserId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DeletedCustomerActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DeletedCustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Actor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CustomerActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SystemActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MachineUserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DeletedCustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DeletedCustomerActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ThreadEventParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ThreadEvent"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"threadId"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MutationErrorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MutationError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"field"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]} as unknown as DocumentNode<CreateThreadEventMutation, CreateThreadEventMutationVariables>;
export const CreateWebhookTargetDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createWebhookTarget"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateWebhookTargetInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createWebhookTarget"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"webhookTarget"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"WebhookTargetParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"error"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MutationErrorParts"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DateTimeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"iso8601"}},{"kind":"Field","name":{"kind":"Name","value":"unixTimestamp"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CustomerActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SystemActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"systemId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MachineUserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"machineUserId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DeletedCustomerActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DeletedCustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Actor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CustomerActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SystemActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MachineUserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DeletedCustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DeletedCustomerActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"WebhookTargetEventSubscriptionParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"WebhookTargetEventSubscription"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"eventType"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"WebhookTargetParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"WebhookTarget"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"isEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"eventSubscriptions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"WebhookTargetEventSubscriptionParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MutationErrorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MutationError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"field"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]} as unknown as DocumentNode<CreateWebhookTargetMutation, CreateWebhookTargetMutationVariables>;
export const DeleteCustomerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteCustomer"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeleteCustomerInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteCustomer"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"error"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MutationErrorParts"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MutationErrorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MutationError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"field"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]} as unknown as DocumentNode<DeleteCustomerMutation, DeleteCustomerMutationVariables>;
export const DeleteCustomerCardConfigDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteCustomerCardConfig"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeleteCustomerCardConfigInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteCustomerCardConfig"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"error"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MutationErrorParts"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MutationErrorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MutationError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"field"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]} as unknown as DocumentNode<DeleteCustomerCardConfigMutation, DeleteCustomerCardConfigMutationVariables>;
export const DeleteThreadFieldDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteThreadField"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeleteThreadFieldInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteThreadField"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"error"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MutationErrorParts"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MutationErrorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MutationError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"field"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]} as unknown as DocumentNode<DeleteThreadFieldMutation, DeleteThreadFieldMutationVariables>;
export const DeleteWebhookTargetDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteWebhookTarget"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DeleteWebhookTargetInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteWebhookTarget"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"error"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MutationErrorParts"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MutationErrorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MutationError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"field"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]} as unknown as DocumentNode<DeleteWebhookTargetMutation, DeleteWebhookTargetMutationVariables>;
export const MarkThreadAsDoneDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"markThreadAsDone"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MarkThreadAsDoneInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"markThreadAsDone"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"thread"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ThreadParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"error"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MutationErrorParts"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DateTimeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"iso8601"}},{"kind":"Field","name":{"kind":"Name","value":"unixTimestamp"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CustomerActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SystemActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"systemId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MachineUserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"machineUserId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DeletedCustomerActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DeletedCustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Actor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CustomerActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SystemActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MachineUserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DeletedCustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DeletedCustomerActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LabelTypeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LabelType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"isArchived"}},{"kind":"Field","name":{"kind":"Name","value":"archivedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"archivedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LabelParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Label"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"labelType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LabelTypeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"InternalActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Actor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SystemActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MachineUserActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ThreadFieldParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ThreadField"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"threadId"}},{"kind":"Field","name":{"kind":"Name","value":"stringValue"}},{"kind":"Field","name":{"kind":"Name","value":"booleanValue"}},{"kind":"Field","name":{"kind":"Name","value":"isAiGenerated"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"InternalActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"InternalActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"publicName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MachineUserParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUser"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"publicName"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SystemParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"System"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ThreadAssigneeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ThreadAssignee"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUser"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MachineUserParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"System"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SystemParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ThreadParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Thread"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"externalId"}},{"kind":"Field","name":{"kind":"Name","value":"customer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"statusChangedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"previewText"}},{"kind":"Field","name":{"kind":"Name","value":"priority"}},{"kind":"Field","name":{"kind":"Name","value":"labels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LabelParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"threadFields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ThreadFieldParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"assignedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"assignedTo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ThreadAssigneeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MutationErrorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MutationError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"field"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]} as unknown as DocumentNode<MarkThreadAsDoneMutation, MarkThreadAsDoneMutationVariables>;
export const MarkThreadAsTodoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"markThreadAsTodo"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MarkThreadAsTodoInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"markThreadAsTodo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"thread"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ThreadParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"error"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MutationErrorParts"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DateTimeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"iso8601"}},{"kind":"Field","name":{"kind":"Name","value":"unixTimestamp"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CustomerActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SystemActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"systemId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MachineUserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"machineUserId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DeletedCustomerActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DeletedCustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Actor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CustomerActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SystemActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MachineUserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DeletedCustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DeletedCustomerActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LabelTypeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LabelType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"isArchived"}},{"kind":"Field","name":{"kind":"Name","value":"archivedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"archivedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LabelParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Label"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"labelType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LabelTypeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"InternalActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Actor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SystemActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MachineUserActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ThreadFieldParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ThreadField"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"threadId"}},{"kind":"Field","name":{"kind":"Name","value":"stringValue"}},{"kind":"Field","name":{"kind":"Name","value":"booleanValue"}},{"kind":"Field","name":{"kind":"Name","value":"isAiGenerated"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"InternalActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"InternalActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"publicName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MachineUserParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUser"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"publicName"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SystemParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"System"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ThreadAssigneeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ThreadAssignee"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUser"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MachineUserParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"System"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SystemParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ThreadParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Thread"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"externalId"}},{"kind":"Field","name":{"kind":"Name","value":"customer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"statusChangedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"previewText"}},{"kind":"Field","name":{"kind":"Name","value":"priority"}},{"kind":"Field","name":{"kind":"Name","value":"labels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LabelParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"threadFields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ThreadFieldParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"assignedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"assignedTo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ThreadAssigneeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MutationErrorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MutationError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"field"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]} as unknown as DocumentNode<MarkThreadAsTodoMutation, MarkThreadAsTodoMutationVariables>;
export const RemoveCustomerFromCustomerGroupsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"removeCustomerFromCustomerGroups"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RemoveCustomerFromCustomerGroupsInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeCustomerFromCustomerGroups"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"error"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MutationErrorParts"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MutationErrorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MutationError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"field"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]} as unknown as DocumentNode<RemoveCustomerFromCustomerGroupsMutation, RemoveCustomerFromCustomerGroupsMutationVariables>;
export const RemoveCustomerFromTenantsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"removeCustomerFromTenants"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RemoveCustomerFromTenantsInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeCustomerFromTenants"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"error"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MutationErrorParts"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MutationErrorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MutationError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"field"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]} as unknown as DocumentNode<RemoveCustomerFromTenantsMutation, RemoveCustomerFromTenantsMutationVariables>;
export const RemoveLabelsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"removeLabels"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RemoveLabelsInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeLabels"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"error"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MutationErrorParts"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MutationErrorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MutationError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"field"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]} as unknown as DocumentNode<RemoveLabelsMutation, RemoveLabelsMutationVariables>;
export const RemoveMembersFromTierDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"removeMembersFromTier"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RemoveMembersFromTierInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeMembersFromTier"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"error"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MutationErrorParts"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MutationErrorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MutationError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"field"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]} as unknown as DocumentNode<RemoveMembersFromTierMutation, RemoveMembersFromTierMutationVariables>;
export const ReplyToEmailDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"replyToEmail"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ReplyToEmailInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"replyToEmail"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"EmailParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"error"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MutationErrorParts"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EmailActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EmailActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerEmailActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserEmailActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SupportEmailAddressEmailActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"supportEmailAddress"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DeletedCustomerEmailActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EmailParticipantParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EmailParticipant"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"emailActor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"EmailActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DateTimeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"iso8601"}},{"kind":"Field","name":{"kind":"Name","value":"unixTimestamp"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FileSizeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FileSize"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"kiloBytes"}},{"kind":"Field","name":{"kind":"Name","value":"megaBytes"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AttachmentParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Attachment"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fileName"}},{"kind":"Field","name":{"kind":"Name","value":"fileSize"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FileSizeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"fileExtension"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EmailParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Email"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"inReplyToEmailId"}},{"kind":"Field","name":{"kind":"Name","value":"from"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"EmailParticipantParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"to"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"EmailParticipantParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"additionalRecipients"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"EmailParticipantParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"hiddenRecipients"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"EmailParticipantParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"subject"}},{"kind":"Field","name":{"kind":"Name","value":"textContent"}},{"kind":"Field","name":{"kind":"Name","value":"markdownContent"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"attachments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AttachmentParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MutationErrorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MutationError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"field"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]} as unknown as DocumentNode<ReplyToEmailMutation, ReplyToEmailMutationVariables>;
export const ReplyToThreadDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"replyToThread"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ReplyToThreadInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"replyToThread"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"error"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MutationErrorParts"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MutationErrorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MutationError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"field"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]} as unknown as DocumentNode<ReplyToThreadMutation, ReplyToThreadMutationVariables>;
export const SendNewEmailDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"sendNewEmail"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SendNewEmailInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sendNewEmail"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"EmailParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"error"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MutationErrorParts"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EmailActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EmailActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerEmailActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserEmailActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SupportEmailAddressEmailActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"supportEmailAddress"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DeletedCustomerEmailActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EmailParticipantParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"EmailParticipant"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"emailActor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"EmailActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DateTimeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"iso8601"}},{"kind":"Field","name":{"kind":"Name","value":"unixTimestamp"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FileSizeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FileSize"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"kiloBytes"}},{"kind":"Field","name":{"kind":"Name","value":"megaBytes"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AttachmentParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Attachment"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fileName"}},{"kind":"Field","name":{"kind":"Name","value":"fileSize"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FileSizeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"fileExtension"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EmailParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Email"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"inReplyToEmailId"}},{"kind":"Field","name":{"kind":"Name","value":"from"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"EmailParticipantParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"to"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"EmailParticipantParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"additionalRecipients"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"EmailParticipantParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"hiddenRecipients"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"EmailParticipantParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"subject"}},{"kind":"Field","name":{"kind":"Name","value":"textContent"}},{"kind":"Field","name":{"kind":"Name","value":"markdownContent"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"attachments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AttachmentParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MutationErrorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MutationError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"field"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]} as unknown as DocumentNode<SendNewEmailMutation, SendNewEmailMutationVariables>;
export const SetCustomerTenantsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"setCustomerTenants"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SetCustomerTenantsInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"setCustomerTenants"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"error"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MutationErrorParts"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MutationErrorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MutationError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"field"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]} as unknown as DocumentNode<SetCustomerTenantsMutation, SetCustomerTenantsMutationVariables>;
export const SnoozeThreadDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"snoozeThread"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SnoozeThreadInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"snoozeThread"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"thread"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ThreadParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"error"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MutationErrorParts"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DateTimeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"iso8601"}},{"kind":"Field","name":{"kind":"Name","value":"unixTimestamp"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CustomerActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SystemActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"systemId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MachineUserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"machineUserId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DeletedCustomerActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DeletedCustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Actor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CustomerActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SystemActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MachineUserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DeletedCustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DeletedCustomerActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LabelTypeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LabelType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"isArchived"}},{"kind":"Field","name":{"kind":"Name","value":"archivedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"archivedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LabelParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Label"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"labelType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LabelTypeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"InternalActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Actor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SystemActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MachineUserActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ThreadFieldParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ThreadField"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"threadId"}},{"kind":"Field","name":{"kind":"Name","value":"stringValue"}},{"kind":"Field","name":{"kind":"Name","value":"booleanValue"}},{"kind":"Field","name":{"kind":"Name","value":"isAiGenerated"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"InternalActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"InternalActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"publicName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MachineUserParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUser"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"publicName"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SystemParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"System"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ThreadAssigneeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ThreadAssignee"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUser"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MachineUserParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"System"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SystemParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ThreadParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Thread"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"externalId"}},{"kind":"Field","name":{"kind":"Name","value":"customer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"statusChangedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"previewText"}},{"kind":"Field","name":{"kind":"Name","value":"priority"}},{"kind":"Field","name":{"kind":"Name","value":"labels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LabelParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"threadFields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ThreadFieldParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"assignedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"assignedTo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ThreadAssigneeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MutationErrorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MutationError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"field"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]} as unknown as DocumentNode<SnoozeThreadMutation, SnoozeThreadMutationVariables>;
export const UnassignThreadDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"unassignThread"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UnassignThreadInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"unassignThread"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"thread"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ThreadParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"error"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MutationErrorParts"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DateTimeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"iso8601"}},{"kind":"Field","name":{"kind":"Name","value":"unixTimestamp"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CustomerActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SystemActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"systemId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MachineUserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"machineUserId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DeletedCustomerActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DeletedCustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Actor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CustomerActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SystemActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MachineUserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DeletedCustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DeletedCustomerActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LabelTypeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LabelType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"isArchived"}},{"kind":"Field","name":{"kind":"Name","value":"archivedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"archivedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LabelParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Label"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"labelType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LabelTypeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"InternalActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Actor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SystemActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MachineUserActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ThreadFieldParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ThreadField"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"threadId"}},{"kind":"Field","name":{"kind":"Name","value":"stringValue"}},{"kind":"Field","name":{"kind":"Name","value":"booleanValue"}},{"kind":"Field","name":{"kind":"Name","value":"isAiGenerated"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"InternalActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"InternalActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"publicName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MachineUserParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUser"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"publicName"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SystemParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"System"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ThreadAssigneeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ThreadAssignee"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUser"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MachineUserParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"System"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SystemParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ThreadParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Thread"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"externalId"}},{"kind":"Field","name":{"kind":"Name","value":"customer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"statusChangedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"previewText"}},{"kind":"Field","name":{"kind":"Name","value":"priority"}},{"kind":"Field","name":{"kind":"Name","value":"labels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LabelParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"threadFields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ThreadFieldParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"assignedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"assignedTo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ThreadAssigneeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MutationErrorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MutationError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"field"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]} as unknown as DocumentNode<UnassignThreadMutation, UnassignThreadMutationVariables>;
export const UpdateCompanyTierDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateCompanyTier"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateCompanyTierInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateCompanyTier"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"companyTierMembership"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CompanyTierMembershipParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"error"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MutationErrorParts"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DateTimeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"iso8601"}},{"kind":"Field","name":{"kind":"Name","value":"unixTimestamp"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SystemActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"systemId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MachineUserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"machineUserId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"InternalActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Actor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SystemActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MachineUserActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CompanyTierMembershipParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CompanyTierMembership"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"InternalActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"InternalActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MutationErrorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MutationError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"field"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]} as unknown as DocumentNode<UpdateCompanyTierMutation, UpdateCompanyTierMutationVariables>;
export const UpdateCustomerCardConfigDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateCustomerCardConfig"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateCustomerCardConfigInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateCustomerCardConfig"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"customerCardConfig"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CustomerCardConfigParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"error"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MutationErrorParts"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DateTimeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"iso8601"}},{"kind":"Field","name":{"kind":"Name","value":"unixTimestamp"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CustomerCardConfigParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerCardConfig"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"defaultTimeToLiveSeconds"}},{"kind":"Field","name":{"kind":"Name","value":"apiUrl"}},{"kind":"Field","name":{"kind":"Name","value":"order"}},{"kind":"Field","name":{"kind":"Name","value":"apiHeaders"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"isEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MutationErrorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MutationError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"field"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]} as unknown as DocumentNode<UpdateCustomerCardConfigMutation, UpdateCustomerCardConfigMutationVariables>;
export const UpdateCustomerCompanyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateCustomerCompany"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateCustomerCompanyInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateCustomerCompany"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"customer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CustomerParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"error"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MutationErrorParts"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DateTimeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"iso8601"}},{"kind":"Field","name":{"kind":"Name","value":"unixTimestamp"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SystemActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"systemId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MachineUserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"machineUserId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"InternalActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Actor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SystemActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MachineUserActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CompanyParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Company"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"domainName"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"InternalActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"InternalActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CustomerParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Customer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"shortName"}},{"kind":"Field","name":{"kind":"Name","value":"externalId"}},{"kind":"Field","name":{"kind":"Name","value":"email"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"isVerified"}},{"kind":"Field","name":{"kind":"Name","value":"verifiedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"company"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CompanyParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"InternalActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"markedAsSpamAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MutationErrorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MutationError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"field"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]} as unknown as DocumentNode<UpdateCustomerCompanyMutation, UpdateCustomerCompanyMutationVariables>;
export const UpdateTenantTierDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateTenantTier"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateTenantTierInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateTenantTier"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tenantTierMembership"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TenantTierMembershipParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"error"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MutationErrorParts"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DateTimeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"iso8601"}},{"kind":"Field","name":{"kind":"Name","value":"unixTimestamp"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SystemActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"systemId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MachineUserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"machineUserId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"InternalActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Actor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SystemActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MachineUserActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TenantTierMembershipParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TenantTierMembership"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"InternalActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"InternalActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MutationErrorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MutationError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"field"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]} as unknown as DocumentNode<UpdateTenantTierMutation, UpdateTenantTierMutationVariables>;
export const UpdateThreadTenantDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateThreadTenant"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateThreadTenantInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateThreadTenant"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"thread"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ThreadParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"error"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MutationErrorParts"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DateTimeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"iso8601"}},{"kind":"Field","name":{"kind":"Name","value":"unixTimestamp"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CustomerActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SystemActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"systemId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MachineUserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"machineUserId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DeletedCustomerActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DeletedCustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Actor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CustomerActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SystemActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MachineUserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DeletedCustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DeletedCustomerActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LabelTypeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LabelType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"isArchived"}},{"kind":"Field","name":{"kind":"Name","value":"archivedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"archivedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LabelParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Label"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"labelType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LabelTypeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"InternalActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Actor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SystemActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MachineUserActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ThreadFieldParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ThreadField"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"threadId"}},{"kind":"Field","name":{"kind":"Name","value":"stringValue"}},{"kind":"Field","name":{"kind":"Name","value":"booleanValue"}},{"kind":"Field","name":{"kind":"Name","value":"isAiGenerated"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"InternalActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"InternalActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"publicName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MachineUserParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUser"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"publicName"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SystemParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"System"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ThreadAssigneeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ThreadAssignee"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUser"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MachineUserParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"System"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SystemParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ThreadParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Thread"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"externalId"}},{"kind":"Field","name":{"kind":"Name","value":"customer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"statusChangedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"previewText"}},{"kind":"Field","name":{"kind":"Name","value":"priority"}},{"kind":"Field","name":{"kind":"Name","value":"labels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LabelParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"threadFields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ThreadFieldParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"assignedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"assignedTo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ThreadAssigneeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MutationErrorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MutationError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"field"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]} as unknown as DocumentNode<UpdateThreadTenantMutation, UpdateThreadTenantMutationVariables>;
export const UpdateWebhookTargetDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateWebhookTarget"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateWebhookTargetInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateWebhookTarget"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"webhookTarget"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"WebhookTargetParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"error"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MutationErrorParts"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DateTimeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"iso8601"}},{"kind":"Field","name":{"kind":"Name","value":"unixTimestamp"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CustomerActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SystemActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"systemId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MachineUserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"machineUserId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DeletedCustomerActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DeletedCustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Actor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CustomerActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SystemActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MachineUserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DeletedCustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DeletedCustomerActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"WebhookTargetEventSubscriptionParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"WebhookTargetEventSubscription"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"eventType"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"WebhookTargetParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"WebhookTarget"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"isEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"eventSubscriptions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"WebhookTargetEventSubscriptionParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MutationErrorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MutationError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"field"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]} as unknown as DocumentNode<UpdateWebhookTargetMutation, UpdateWebhookTargetMutationVariables>;
export const UpsertCustomerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"upsertCustomer"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpsertCustomerInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"upsertCustomer"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"}},{"kind":"Field","name":{"kind":"Name","value":"customer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CustomerParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"error"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MutationErrorParts"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DateTimeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"iso8601"}},{"kind":"Field","name":{"kind":"Name","value":"unixTimestamp"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SystemActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"systemId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MachineUserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"machineUserId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"InternalActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Actor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SystemActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MachineUserActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CompanyParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Company"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"domainName"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"InternalActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"InternalActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CustomerParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Customer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"shortName"}},{"kind":"Field","name":{"kind":"Name","value":"externalId"}},{"kind":"Field","name":{"kind":"Name","value":"email"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"isVerified"}},{"kind":"Field","name":{"kind":"Name","value":"verifiedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"company"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CompanyParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"InternalActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"markedAsSpamAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MutationErrorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MutationError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"field"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]} as unknown as DocumentNode<UpsertCustomerMutation, UpsertCustomerMutationVariables>;
export const UpsertTenantDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"upsertTenant"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpsertTenantInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"upsertTenant"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tenant"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TenantParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"error"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MutationErrorParts"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DateTimeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"iso8601"}},{"kind":"Field","name":{"kind":"Name","value":"unixTimestamp"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SystemActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"systemId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MachineUserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"machineUserId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"InternalActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Actor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SystemActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MachineUserActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TenantParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Tenant"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"externalId"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"InternalActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"InternalActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MutationErrorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MutationError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"field"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]} as unknown as DocumentNode<UpsertTenantMutation, UpsertTenantMutationVariables>;
export const UpsertThreadFieldDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"upsertThreadField"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpsertThreadFieldInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"upsertThreadField"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"result"}},{"kind":"Field","name":{"kind":"Name","value":"threadField"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ThreadFieldParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"error"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MutationErrorParts"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DateTimeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"iso8601"}},{"kind":"Field","name":{"kind":"Name","value":"unixTimestamp"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SystemActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"systemId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MachineUserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"machineUserId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"InternalActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Actor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SystemActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MachineUserActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ThreadFieldParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ThreadField"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"threadId"}},{"kind":"Field","name":{"kind":"Name","value":"stringValue"}},{"kind":"Field","name":{"kind":"Name","value":"booleanValue"}},{"kind":"Field","name":{"kind":"Name","value":"isAiGenerated"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"InternalActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"InternalActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MutationErrorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MutationError"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"fields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"field"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]} as unknown as DocumentNode<UpsertThreadFieldMutation, UpsertThreadFieldMutationVariables>;
export const CompaniesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"companies"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"last"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"before"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"companies"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}},{"kind":"Argument","name":{"kind":"Name","value":"last"},"value":{"kind":"Variable","name":{"kind":"Name","value":"last"}}},{"kind":"Argument","name":{"kind":"Name","value":"before"},"value":{"kind":"Variable","name":{"kind":"Name","value":"before"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CompanyParts"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PageInfoParts"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DateTimeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"iso8601"}},{"kind":"Field","name":{"kind":"Name","value":"unixTimestamp"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SystemActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"systemId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MachineUserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"machineUserId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"InternalActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Actor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SystemActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MachineUserActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CompanyParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Company"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"domainName"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"InternalActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"InternalActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PageInfoParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}}]} as unknown as DocumentNode<CompaniesQuery, CompaniesQueryVariables>;
export const CustomerByEmailDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"customerByEmail"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"customerByEmail"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CustomerParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DateTimeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"iso8601"}},{"kind":"Field","name":{"kind":"Name","value":"unixTimestamp"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SystemActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"systemId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MachineUserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"machineUserId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"InternalActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Actor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SystemActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MachineUserActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CompanyParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Company"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"domainName"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"InternalActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"InternalActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CustomerParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Customer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"shortName"}},{"kind":"Field","name":{"kind":"Name","value":"externalId"}},{"kind":"Field","name":{"kind":"Name","value":"email"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"isVerified"}},{"kind":"Field","name":{"kind":"Name","value":"verifiedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"company"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CompanyParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"InternalActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"markedAsSpamAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}}]}}]} as unknown as DocumentNode<CustomerByEmailQuery, CustomerByEmailQueryVariables>;
export const CustomerByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"customerById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"customerId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"customer"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"customerId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"customerId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CustomerParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DateTimeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"iso8601"}},{"kind":"Field","name":{"kind":"Name","value":"unixTimestamp"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SystemActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"systemId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MachineUserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"machineUserId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"InternalActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Actor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SystemActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MachineUserActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CompanyParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Company"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"domainName"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"InternalActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"InternalActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CustomerParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Customer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"shortName"}},{"kind":"Field","name":{"kind":"Name","value":"externalId"}},{"kind":"Field","name":{"kind":"Name","value":"email"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"isVerified"}},{"kind":"Field","name":{"kind":"Name","value":"verifiedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"company"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CompanyParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"InternalActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"markedAsSpamAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}}]}}]} as unknown as DocumentNode<CustomerByIdQuery, CustomerByIdQueryVariables>;
export const CustomerCustomerGroupsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"customerCustomerGroups"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"customerId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filters"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerGroupMembershipsFilter"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"last"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"before"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"customer"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"customerId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"customerId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"customerGroupMemberships"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filters"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}},{"kind":"Argument","name":{"kind":"Name","value":"last"},"value":{"kind":"Variable","name":{"kind":"Name","value":"last"}}},{"kind":"Argument","name":{"kind":"Name","value":"before"},"value":{"kind":"Variable","name":{"kind":"Name","value":"before"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CustomerGroupMembershipParts"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PageInfoParts"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DateTimeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"iso8601"}},{"kind":"Field","name":{"kind":"Name","value":"unixTimestamp"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SystemActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"systemId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MachineUserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"machineUserId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"InternalActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Actor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SystemActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MachineUserActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CustomerGroupParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CustomerGroupMembershipParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerGroupMembership"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"InternalActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"InternalActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"customerGroup"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CustomerGroupParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PageInfoParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}}]} as unknown as DocumentNode<CustomerCustomerGroupsQuery, CustomerCustomerGroupsQueryVariables>;
export const CustomerGroupByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"customerGroupById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"customerGroupId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"customerGroup"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"customerGroupId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"customerGroupId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CustomerGroupParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CustomerGroupParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}}]} as unknown as DocumentNode<CustomerGroupByIdQuery, CustomerGroupByIdQueryVariables>;
export const CustomerGroupsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"customerGroups"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"before"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"last"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"customerGroups"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}},{"kind":"Argument","name":{"kind":"Name","value":"before"},"value":{"kind":"Variable","name":{"kind":"Name","value":"before"}}},{"kind":"Argument","name":{"kind":"Name","value":"last"},"value":{"kind":"Variable","name":{"kind":"Name","value":"last"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CustomerGroupParts"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PageInfoParts"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CustomerGroupParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerGroup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"color"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PageInfoParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}}]} as unknown as DocumentNode<CustomerGroupsQuery, CustomerGroupsQueryVariables>;
export const CustomerTenantsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"customerTenants"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"customerId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"last"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"before"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"customer"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"customerId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"customerId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tenantMemberships"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}},{"kind":"Argument","name":{"kind":"Name","value":"last"},"value":{"kind":"Variable","name":{"kind":"Name","value":"last"}}},{"kind":"Argument","name":{"kind":"Name","value":"before"},"value":{"kind":"Variable","name":{"kind":"Name","value":"before"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CustomerTenantMembershipParts"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PageInfoParts"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DateTimeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"iso8601"}},{"kind":"Field","name":{"kind":"Name","value":"unixTimestamp"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SystemActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"systemId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MachineUserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"machineUserId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"InternalActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Actor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SystemActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MachineUserActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TenantParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Tenant"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"externalId"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"InternalActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"InternalActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CustomerTenantMembershipParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerTenantMembership"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"InternalActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"InternalActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tenant"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TenantParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PageInfoParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}}]} as unknown as DocumentNode<CustomerTenantsQuery, CustomerTenantsQueryVariables>;
export const CustomersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"customers"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filters"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"CustomersFilter"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sortBy"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"CustomersSort"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"last"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"before"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"customers"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filters"}}},{"kind":"Argument","name":{"kind":"Name","value":"sortBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sortBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}},{"kind":"Argument","name":{"kind":"Name","value":"last"},"value":{"kind":"Variable","name":{"kind":"Name","value":"last"}}},{"kind":"Argument","name":{"kind":"Name","value":"before"},"value":{"kind":"Variable","name":{"kind":"Name","value":"before"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CustomerParts"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PageInfoParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DateTimeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"iso8601"}},{"kind":"Field","name":{"kind":"Name","value":"unixTimestamp"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SystemActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"systemId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MachineUserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"machineUserId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"InternalActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Actor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SystemActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MachineUserActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CompanyParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Company"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"domainName"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"InternalActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"InternalActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CustomerParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Customer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"shortName"}},{"kind":"Field","name":{"kind":"Name","value":"externalId"}},{"kind":"Field","name":{"kind":"Name","value":"email"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"isVerified"}},{"kind":"Field","name":{"kind":"Name","value":"verifiedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"company"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CompanyParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"InternalActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"markedAsSpamAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PageInfoParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}}]} as unknown as DocumentNode<CustomersQuery, CustomersQueryVariables>;
export const LabelTypeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"labelType"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"labelTypeId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"labelType"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"labelTypeId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"labelTypeId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LabelTypeParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DateTimeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"iso8601"}},{"kind":"Field","name":{"kind":"Name","value":"unixTimestamp"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CustomerActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SystemActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"systemId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MachineUserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"machineUserId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DeletedCustomerActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DeletedCustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Actor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CustomerActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SystemActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MachineUserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DeletedCustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DeletedCustomerActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LabelTypeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LabelType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"isArchived"}},{"kind":"Field","name":{"kind":"Name","value":"archivedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"archivedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}}]}}]} as unknown as DocumentNode<LabelTypeQuery, LabelTypeQueryVariables>;
export const LabelTypesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"labelTypes"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filters"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"LabelTypeFilter"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"last"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"before"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"labelTypes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filters"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}},{"kind":"Argument","name":{"kind":"Name","value":"last"},"value":{"kind":"Variable","name":{"kind":"Name","value":"last"}}},{"kind":"Argument","name":{"kind":"Name","value":"before"},"value":{"kind":"Variable","name":{"kind":"Name","value":"before"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LabelTypeParts"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PageInfoParts"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DateTimeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"iso8601"}},{"kind":"Field","name":{"kind":"Name","value":"unixTimestamp"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CustomerActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SystemActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"systemId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MachineUserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"machineUserId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DeletedCustomerActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DeletedCustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Actor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CustomerActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SystemActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MachineUserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DeletedCustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DeletedCustomerActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LabelTypeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LabelType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"isArchived"}},{"kind":"Field","name":{"kind":"Name","value":"archivedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"archivedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PageInfoParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}}]} as unknown as DocumentNode<LabelTypesQuery, LabelTypesQueryVariables>;
export const MyWorkspaceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"myWorkspace"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"myWorkspace"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"WorkspaceParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CustomerActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SystemActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"systemId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MachineUserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"machineUserId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DeletedCustomerActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DeletedCustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Actor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CustomerActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SystemActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MachineUserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DeletedCustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DeletedCustomerActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DateTimeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"iso8601"}},{"kind":"Field","name":{"kind":"Name","value":"unixTimestamp"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"WorkspaceParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Workspace"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"publicName"}},{"kind":"Field","name":{"kind":"Name","value":"isDemoWorkspace"}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}}]}}]} as unknown as DocumentNode<MyWorkspaceQuery, MyWorkspaceQueryVariables>;
export const SearchCompaniesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"searchCompanies"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"searchQuery"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CompaniesSearchQuery"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"last"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"before"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"searchCompanies"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"searchQuery"},"value":{"kind":"Variable","name":{"kind":"Name","value":"searchQuery"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}},{"kind":"Argument","name":{"kind":"Name","value":"last"},"value":{"kind":"Variable","name":{"kind":"Name","value":"last"}}},{"kind":"Argument","name":{"kind":"Name","value":"before"},"value":{"kind":"Variable","name":{"kind":"Name","value":"before"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"company"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CompanyParts"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PageInfoParts"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DateTimeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"iso8601"}},{"kind":"Field","name":{"kind":"Name","value":"unixTimestamp"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SystemActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"systemId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MachineUserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"machineUserId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"InternalActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Actor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SystemActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MachineUserActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CompanyParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Company"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"domainName"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"InternalActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"InternalActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PageInfoParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}}]} as unknown as DocumentNode<SearchCompaniesQuery, SearchCompaniesQueryVariables>;
export const SearchTenantsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"searchTenants"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"searchQuery"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"TenantsSearchQuery"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"last"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"before"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"searchTenants"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"searchQuery"},"value":{"kind":"Variable","name":{"kind":"Name","value":"searchQuery"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}},{"kind":"Argument","name":{"kind":"Name","value":"last"},"value":{"kind":"Variable","name":{"kind":"Name","value":"last"}}},{"kind":"Argument","name":{"kind":"Name","value":"before"},"value":{"kind":"Variable","name":{"kind":"Name","value":"before"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tenant"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TenantParts"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PageInfoParts"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DateTimeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"iso8601"}},{"kind":"Field","name":{"kind":"Name","value":"unixTimestamp"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SystemActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"systemId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MachineUserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"machineUserId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"InternalActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Actor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SystemActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MachineUserActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TenantParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Tenant"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"externalId"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"InternalActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"InternalActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PageInfoParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}}]} as unknown as DocumentNode<SearchTenantsQuery, SearchTenantsQueryVariables>;
export const TenantDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"tenant"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tenantId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tenant"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"tenantId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tenantId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TenantParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DateTimeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"iso8601"}},{"kind":"Field","name":{"kind":"Name","value":"unixTimestamp"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SystemActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"systemId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MachineUserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"machineUserId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"InternalActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Actor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SystemActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MachineUserActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TenantParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Tenant"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"externalId"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"InternalActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"InternalActorParts"}}]}}]}}]} as unknown as DocumentNode<TenantQuery, TenantQueryVariables>;
export const TenantsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"tenants"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"last"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"before"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tenants"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}},{"kind":"Argument","name":{"kind":"Name","value":"last"},"value":{"kind":"Variable","name":{"kind":"Name","value":"last"}}},{"kind":"Argument","name":{"kind":"Name","value":"before"},"value":{"kind":"Variable","name":{"kind":"Name","value":"before"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TenantParts"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PageInfoParts"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DateTimeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"iso8601"}},{"kind":"Field","name":{"kind":"Name","value":"unixTimestamp"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SystemActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"systemId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MachineUserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"machineUserId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"InternalActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Actor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SystemActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MachineUserActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TenantParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Tenant"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"externalId"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"InternalActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"InternalActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PageInfoParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}}]} as unknown as DocumentNode<TenantsQuery, TenantsQueryVariables>;
export const ThreadDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"thread"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"threadId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"thread"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"threadId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"threadId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ThreadParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DateTimeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"iso8601"}},{"kind":"Field","name":{"kind":"Name","value":"unixTimestamp"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CustomerActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SystemActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"systemId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MachineUserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"machineUserId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DeletedCustomerActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DeletedCustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Actor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CustomerActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SystemActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MachineUserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DeletedCustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DeletedCustomerActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LabelTypeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LabelType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"isArchived"}},{"kind":"Field","name":{"kind":"Name","value":"archivedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"archivedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LabelParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Label"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"labelType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LabelTypeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"InternalActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Actor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SystemActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MachineUserActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ThreadFieldParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ThreadField"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"threadId"}},{"kind":"Field","name":{"kind":"Name","value":"stringValue"}},{"kind":"Field","name":{"kind":"Name","value":"booleanValue"}},{"kind":"Field","name":{"kind":"Name","value":"isAiGenerated"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"InternalActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"InternalActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"publicName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MachineUserParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUser"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"publicName"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SystemParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"System"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ThreadAssigneeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ThreadAssignee"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUser"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MachineUserParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"System"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SystemParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ThreadParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Thread"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"externalId"}},{"kind":"Field","name":{"kind":"Name","value":"customer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"statusChangedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"previewText"}},{"kind":"Field","name":{"kind":"Name","value":"priority"}},{"kind":"Field","name":{"kind":"Name","value":"labels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LabelParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"threadFields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ThreadFieldParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"assignedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"assignedTo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ThreadAssigneeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}}]}}]} as unknown as DocumentNode<ThreadQuery, ThreadQueryVariables>;
export const ThreadByExternalIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"threadByExternalId"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"customerId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"externalId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"threadByExternalId"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"customerId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"customerId"}}},{"kind":"Argument","name":{"kind":"Name","value":"externalId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"externalId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ThreadParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DateTimeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"iso8601"}},{"kind":"Field","name":{"kind":"Name","value":"unixTimestamp"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CustomerActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SystemActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"systemId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MachineUserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"machineUserId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DeletedCustomerActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DeletedCustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Actor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CustomerActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SystemActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MachineUserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DeletedCustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DeletedCustomerActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LabelTypeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LabelType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"isArchived"}},{"kind":"Field","name":{"kind":"Name","value":"archivedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"archivedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LabelParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Label"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"labelType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LabelTypeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"InternalActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Actor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SystemActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MachineUserActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ThreadFieldParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ThreadField"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"threadId"}},{"kind":"Field","name":{"kind":"Name","value":"stringValue"}},{"kind":"Field","name":{"kind":"Name","value":"booleanValue"}},{"kind":"Field","name":{"kind":"Name","value":"isAiGenerated"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"InternalActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"InternalActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"publicName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MachineUserParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUser"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"publicName"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SystemParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"System"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ThreadAssigneeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ThreadAssignee"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUser"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MachineUserParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"System"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SystemParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ThreadParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Thread"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"externalId"}},{"kind":"Field","name":{"kind":"Name","value":"customer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"statusChangedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"previewText"}},{"kind":"Field","name":{"kind":"Name","value":"priority"}},{"kind":"Field","name":{"kind":"Name","value":"labels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LabelParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"threadFields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ThreadFieldParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"assignedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"assignedTo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ThreadAssigneeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}}]}}]} as unknown as DocumentNode<ThreadByExternalIdQuery, ThreadByExternalIdQueryVariables>;
export const ThreadsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"threads"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filters"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ThreadsFilter"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sortBy"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ThreadsSort"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"last"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"before"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"threads"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filters"}}},{"kind":"Argument","name":{"kind":"Name","value":"sortBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sortBy"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}},{"kind":"Argument","name":{"kind":"Name","value":"last"},"value":{"kind":"Variable","name":{"kind":"Name","value":"last"}}},{"kind":"Argument","name":{"kind":"Name","value":"before"},"value":{"kind":"Variable","name":{"kind":"Name","value":"before"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ThreadParts"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PageInfoParts"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DateTimeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"iso8601"}},{"kind":"Field","name":{"kind":"Name","value":"unixTimestamp"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CustomerActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SystemActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"systemId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MachineUserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"machineUserId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DeletedCustomerActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DeletedCustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Actor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CustomerActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SystemActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MachineUserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DeletedCustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DeletedCustomerActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LabelTypeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LabelType"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"isArchived"}},{"kind":"Field","name":{"kind":"Name","value":"archivedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"archivedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LabelParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Label"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"labelType"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LabelTypeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"InternalActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Actor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SystemActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MachineUserActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ThreadFieldParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ThreadField"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"threadId"}},{"kind":"Field","name":{"kind":"Name","value":"stringValue"}},{"kind":"Field","name":{"kind":"Name","value":"booleanValue"}},{"kind":"Field","name":{"kind":"Name","value":"isAiGenerated"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"InternalActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"InternalActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"publicName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MachineUserParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUser"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"publicName"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SystemParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"System"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ThreadAssigneeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ThreadAssignee"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUser"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MachineUserParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"System"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SystemParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ThreadParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Thread"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"externalId"}},{"kind":"Field","name":{"kind":"Name","value":"customer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"statusChangedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"previewText"}},{"kind":"Field","name":{"kind":"Name","value":"priority"}},{"kind":"Field","name":{"kind":"Name","value":"labels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LabelParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"threadFields"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ThreadFieldParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"assignedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"assignedTo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ThreadAssigneeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PageInfoParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}}]} as unknown as DocumentNode<ThreadsQuery, ThreadsQueryVariables>;
export const TierDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"tier"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tierId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tier"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"tierId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tierId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TierParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DateTimeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"iso8601"}},{"kind":"Field","name":{"kind":"Name","value":"unixTimestamp"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SystemActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"systemId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MachineUserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"machineUserId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"InternalActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Actor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SystemActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MachineUserActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TierParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Tier"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"externalId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"InternalActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"InternalActorParts"}}]}}]}}]} as unknown as DocumentNode<TierQuery, TierQueryVariables>;
export const TiersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"tiers"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"last"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"before"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tiers"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}},{"kind":"Argument","name":{"kind":"Name","value":"last"},"value":{"kind":"Variable","name":{"kind":"Name","value":"last"}}},{"kind":"Argument","name":{"kind":"Name","value":"before"},"value":{"kind":"Variable","name":{"kind":"Name","value":"before"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"TierParts"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PageInfoParts"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DateTimeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"iso8601"}},{"kind":"Field","name":{"kind":"Name","value":"unixTimestamp"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SystemActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"systemId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MachineUserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"machineUserId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"InternalActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Actor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SystemActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MachineUserActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TierParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Tier"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"externalId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"InternalActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"InternalActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PageInfoParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}}]} as unknown as DocumentNode<TiersQuery, TiersQueryVariables>;
export const UserByEmailDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"userByEmail"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userByEmail"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DateTimeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"iso8601"}},{"kind":"Field","name":{"kind":"Name","value":"unixTimestamp"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"publicName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}}]}}]} as unknown as DocumentNode<UserByEmailQuery, UserByEmailQueryVariables>;
export const WebhookTargetDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"webhookTarget"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"webhookTarget"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"webhookTargetId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"WebhookTargetParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DateTimeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"iso8601"}},{"kind":"Field","name":{"kind":"Name","value":"unixTimestamp"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CustomerActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SystemActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"systemId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MachineUserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"machineUserId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DeletedCustomerActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DeletedCustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Actor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CustomerActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SystemActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MachineUserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DeletedCustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DeletedCustomerActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"WebhookTargetEventSubscriptionParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"WebhookTargetEventSubscription"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"eventType"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"WebhookTargetParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"WebhookTarget"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"isEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"eventSubscriptions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"WebhookTargetEventSubscriptionParts"}}]}}]}}]} as unknown as DocumentNode<WebhookTargetQuery, WebhookTargetQueryVariables>;
export const WebhookTargetsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"webhookTargets"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"last"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"before"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"webhookTargets"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}},{"kind":"Argument","name":{"kind":"Name","value":"last"},"value":{"kind":"Variable","name":{"kind":"Name","value":"last"}}},{"kind":"Argument","name":{"kind":"Name","value":"before"},"value":{"kind":"Variable","name":{"kind":"Name","value":"before"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"WebhookTargetParts"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PageInfoParts"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DateTimeParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"iso8601"}},{"kind":"Field","name":{"kind":"Name","value":"unixTimestamp"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CustomerActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SystemActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"systemId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MachineUserActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"machineUserId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DeletedCustomerActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DeletedCustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"customerId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ActorParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Actor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CustomerActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SystemActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SystemActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MachineUserActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MachineUserActorParts"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DeletedCustomerActor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DeletedCustomerActorParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"WebhookTargetEventSubscriptionParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"WebhookTargetEventSubscription"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"eventType"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"WebhookTargetParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"WebhookTarget"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"isEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DateTimeParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedBy"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ActorParts"}}]}},{"kind":"Field","name":{"kind":"Name","value":"eventSubscriptions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"WebhookTargetEventSubscriptionParts"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PageInfoParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}}]} as unknown as DocumentNode<WebhookTargetsQuery, WebhookTargetsQueryVariables>;