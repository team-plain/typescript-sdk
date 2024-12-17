/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type Datetime = string;
export type Id = string;
export type EmailAddress = string;
export type InternalActor =
  | {
      actorType: "UNKNOWN";
      [k: string]: unknown;
    }
  | UserActor
  | MachineUserActor
  | SystemActor;
export type Actor =
  | {
      actorType: "UNKNOWN";
      [k: string]: unknown;
    }
  | UserActor
  | MachineUserActor
  | SystemActor
  | CustomerActor;
export type EmailActor =
  | {
      actorType: "UNKNOWN";
      [k: string]: unknown;
    }
  | UserActor
  | CustomerActor
  | {
      actorType: "supportEmailAddress";
      supportEmailAddress: string;
      [k: string]: unknown;
    }
  | {
      actorType: "deletedCustomer";
      customerId: Id;
      [k: string]: unknown;
    };
export type EmailAuthenticity = "PASS" | "FAIL" | "UNKNOWN" | "UNKNOWN_EMAIL_AUTHENTICITY";
export type Component =
  | {
      type: "UNKNOWN";
      [k: string]: unknown;
    }
  | ComponentText
  | ComponentPlainText
  | ComponentSpacer
  | ComponentDivider
  | ComponentLinkButton
  | ComponentBadge
  | ComponentCopyButton
  | ComponentRow
  | ComponentContainer;
export type ComponentTextSize = "S" | "M" | "L" | "UNKNOWN_COMPONENT_TEXT_SIZE";
export type ComponentTextColor = "NORMAL" | "MUTED" | "SUCCESS" | "WARNING" | "ERROR" | "UNKNOWN_COMPONENT_TEXT_COLOR";
export type ComponentPlainTextSize = "S" | "M" | "L" | "UNKNOWN_COMPONENT_PLAIN_TEXT_SIZE";
export type ComponentPlainTextColor =
  | "NORMAL"
  | "MUTED"
  | "SUCCESS"
  | "WARNING"
  | "ERROR"
  | "UNKNOWN_COMPONENT_PLAIN_TEXT_COLOR";
export type ComponentSpacerSize = "XS" | "S" | "M" | "L" | "XL" | "UNKNOWN_COMPONENT_SPACER_SIZE";
export type ComponentDividerSpacingSize = "XS" | "S" | "M" | "L" | "XL" | "UNKNOWN_COMPONENT_DIVIDER_SPACING_SIZE";
export type ComponentBadgeColor = "GREY" | "GREEN" | "YELLOW" | "RED" | "BLUE" | "UNKNOWN_COMPONENT_BADGE_COLOR";
export type ComponentRowContent =
  | {
      type: "UNKNOWN";
      [k: string]: unknown;
    }
  | ComponentText
  | ComponentPlainText
  | ComponentSpacer
  | ComponentDivider
  | ComponentLinkButton
  | ComponentBadge
  | ComponentCopyButton;
export type ComponentContainerContent =
  | {
      type: "UNKNOWN";
      [k: string]: unknown;
    }
  | ComponentText
  | ComponentPlainText
  | ComponentSpacer
  | ComponentDivider
  | ComponentLinkButton
  | ComponentBadge
  | ComponentCopyButton
  | ComponentRow;
export type CustomerGroupChangedPayload =
  | {
      changeType: "ADDED";
      eventType: "customer.customer_group_changed";
      customerGroup: CustomerGroup;
      [k: string]: unknown;
    }
  | {
      changeType: "UPDATED";
      eventType: "customer.customer_group_changed";
      customerGroup: CustomerGroup;
      previousCustomerGroup: CustomerGroup;
      [k: string]: unknown;
    }
  | {
      changeType: "REMOVED";
      eventType: "customer.customer_group_changed";
      previousCustomerGroup: CustomerGroup;
      [k: string]: unknown;
    };
export type ThreadPriority = number;
export type ThreadStatus = "TODO" | "DONE" | "SNOOZED" | "UNKNOWN_THREAD_STATUS";
export type ThreadStatusDetail =
  | {
      type: "UNKNOWN";
      [k: string]: unknown;
    }
  | {
      type: "CREATED";
      createdAt: Datetime;
      [k: string]: unknown;
    }
  | {
      type: "NEW_REPLY";
      [k: string]: unknown;
    }
  | {
      type: "IN_PROGRESS";
      [k: string]: unknown;
    }
  | {
      type: "WAITING_FOR_CUSTOMER";
      [k: string]: unknown;
    }
  | {
      type: "WAITING_FOR_DURATION";
      waitingUntil: Datetime;
      durationSeconds: number;
      [k: string]: unknown;
    }
  | {
      type: "THREAD_LINK_UPDATED";
      linear?: {
        issueId: string;
        [k: string]: unknown;
      };
      [k: string]: unknown;
    }
  | {
      type: "DONE_MANUALLY_SET";
      [k: string]: unknown;
    }
  | {
      type: "IGNORED";
      [k: string]: unknown;
    }
  | {
      type: "DONE_AUTOMATICALLY_SET";
      afterSeconds?: number;
      [k: string]: unknown;
    }
  | {
      type: "THREAD_DISCUSSION_RESOLVED";
      threadDiscussionId?: Id;
      [k: string]: unknown;
    };
export type ThreadAssignee =
  | {
      type: "UNKNOWN";
      [k: string]: unknown;
    }
  | User
  | MachineUser
  | {
      id: string;
      [k: string]: unknown;
    };
export type ServiceLevelAgreement =
  | {
      type: "UNKNOWN";
      [k: string]: unknown;
    }
  | {
      id: Id;
      tier: Tier;
      useBusinessHoursOnly: boolean;
      threadPriorityFilter: ThreadPriority[];
      createdAt: Datetime;
      createdBy: InternalActor;
      updatedAt: Datetime;
      updatedBy: InternalActor;
      type: "FIRST_RESPONSE_TIME";
      firstResponseTimeMinutes: number;
      [k: string]: unknown;
    }
  | {
      id: Id;
      tier: Tier;
      useBusinessHoursOnly: boolean;
      threadPriorityFilter: ThreadPriority[];
      createdAt: Datetime;
      createdBy: InternalActor;
      updatedAt: Datetime;
      updatedBy: InternalActor;
      type: "NEXT_RESPONSE_TIME";
      nextResponseTimeMinutes: number;
      [k: string]: unknown;
    };
export type ServiceLevelAgreementStatusDetail =
  | {
      status: "UNKNOWN";
      [k: string]: unknown;
    }
  | {
      breachTime: Datetime;
      status: "PENDING";
      [k: string]: unknown;
    }
  | {
      achievedAt: Datetime;
      status: "ACHIEVED";
      [k: string]: unknown;
    }
  | {
      breachTime: Datetime;
      status: "IMMINENT_BREACH";
      [k: string]: unknown;
    }
  | {
      breachedAt: Datetime;
      status: "BREACHING";
      [k: string]: unknown;
    }
  | {
      breachedAt: Datetime;
      completedAt: Datetime;
      status: "BREACHED";
      [k: string]: unknown;
    }
  | {
      cancelledAt: Datetime;
      status: "CANCELLED";
      [k: string]: unknown;
    };

/**
 * Webhook request
 */
export interface WebhooksSchemaDefinition {
  timestamp: Datetime;
  workspaceId: Id;
  payload:
    | CustomerChangedPayload
    | CustomerGroupMembershipsChangedPayload
    | TimelineEntryChangedPayload
    | CustomerGroupChangedPayload
    | ThreadCreatedPublicEventPayload
    | ThreadStatusTransitionedPublicEventPayload
    | ThreadAssignmentTransitionedPublicEventPayload
    | ThreadEmailReceivedPublicEventPayload
    | ThreadEmailSentPublicEventPayload
    | ThreadSlackMessageReceivedEventPayload
    | ThreadSlackMessageSentEventPayload
    | ThreadMSTeamsMessageReceivedEventPayload
    | ThreadMSTeamsMessageSentEventPayload
    | ThreadLabelsChangedPublicEventPayload
    | ThreadPriorityChangedPublicEventPayload
    | ThreadFieldCreatedPublicEventPayload
    | ThreadFieldUpdatedPublicEventPayload
    | ThreadFieldDeletedPublicEventPayload
    | ThreadChatSentPublicEventPayload
    | ThreadServiceLevelAgreementStatusTransitionedPayload
    | CustomerCreatedPublicEventPayload
    | CustomerUpdatedPublicEventPayload
    | CustomerDeletedPublicEventPayload
    | ThreadNoteCreatedEventPayload
    | ThreadChatReceivedPublicEventPayload;
  id: Id;
  type:
    | "thread.thread_created"
    | "thread.thread_status_transitioned"
    | "thread.thread_assignment_transitioned"
    | "thread.email_received"
    | "thread.email_sent"
    | "thread.slack_message_received"
    | "thread.slack_message_sent"
    | "thread.ms_teams_message_sent"
    | "thread.ms_teams_message_received"
    | "thread.chat_sent"
    | "thread.chat_received"
    | "thread.note_created"
    | "thread.thread_labels_changed"
    | "thread.thread_priority_changed"
    | "thread.thread_field_created"
    | "thread.thread_field_updated"
    | "thread.thread_field_deleted"
    | "thread.service_level_agreement_status_transitioned"
    | "customer.customer_created"
    | "customer.customer_updated"
    | "customer.customer_deleted"
    | "customer.customer_changed"
    | "customer.customer_group_changed"
    | "customer.customer_group_memberships_changed"
    | "timeline.timeline_entry_changed";
  webhookMetadata: WebhookMetadata;
  [k: string]: unknown;
}
export interface CustomerChangedPayload {
  changeType: "ADDED" | "UPDATED";
  eventType: "customer.customer_changed";
  customer: Customer;
  previousCustomer: Customer | null;
  [k: string]: unknown;
}
export interface Customer {
  id: Id;
  email: {
    email: EmailAddress;
    isVerified: boolean;
    verifiedAt: Datetime | null;
    [k: string]: unknown;
  };
  externalId: string | null;
  fullName: string;
  shortName: string | null;
  markedAsSpamAt?: Datetime | null;
  markedAsSpamBy?: InternalActor | null;
  customerGroupMemberships: CustomerGroupMembership[];
  createdAt: Datetime;
  createdBy: Actor;
  updatedAt: Datetime;
  updatedBy: Actor;
  [k: string]: unknown;
}
export interface UserActor {
  actorType: "user";
  userId: Id;
  [k: string]: unknown;
}
export interface MachineUserActor {
  actorType: "machineUser";
  machineUserId: Id;
  [k: string]: unknown;
}
export interface SystemActor {
  actorType: "system";
  system: string;
  [k: string]: unknown;
}
export interface CustomerGroupMembership {
  customerId: Id;
  customerGroupId: Id;
  workspaceId: Id;
  createdAt: Datetime;
  createdBy: InternalActor;
  updatedAt: Datetime;
  updatedBy: InternalActor;
  customerGroup: CustomerGroup;
  [k: string]: unknown;
}
export interface CustomerGroup {
  id: Id;
  workspaceId: Id;
  name: string;
  key: string;
  color: string;
  createdAt: Datetime;
  createdBy: InternalActor;
  updatedAt: Datetime;
  updatedBy: InternalActor;
  [k: string]: unknown;
}
export interface CustomerActor {
  actorType: "customer";
  customerId: Id;
  [k: string]: unknown;
}
export interface CustomerGroupMembershipsChangedPayload {
  eventType: "customer.customer_group_memberships_changed";
  changeType: "ADDED" | "REMOVED";
  customer: Customer;
  previousCustomer: Customer;
  [k: string]: unknown;
}
export interface TimelineEntryChangedPayload {
  eventType: "timeline.timeline_entry_changed";
  previousTimelineEntry: TimelineEntry | null;
  timelineEntry: TimelineEntry | null;
  changeType: "ADDED" | "UPDATED" | "REMOVED";
  [k: string]: unknown;
}
export interface TimelineEntry {
  id: Id;
  customerId: Id;
  threadId?: Id | null;
  timestamp: Datetime;
  actor: Actor;
  entry:
    | {
        entryType: "UNKNOWN";
        [k: string]: unknown;
      }
    | NoteEntry
    | ChatEntry
    | EmailEntry
    | CustomEntry;
  [k: string]: unknown;
}
export interface NoteEntry {
  entryType: "note";
  noteId: Id;
  text: string;
  markdown: string | null;
  [k: string]: unknown;
}
export interface ChatEntry {
  entryType: "chat";
  chatId: Id;
  text: string | null;
  attachments: ChatEntryAttachment[];
  customerReadAt: Datetime | null;
  [k: string]: unknown;
}
export interface ChatEntryAttachment {
  id: Id;
  fileName: string;
  fileSizeBytes: number;
  fileMimeType: string;
  fileExtension: string | null;
  createdAt: Datetime;
  createdBy: Actor;
  updatedAt: Datetime;
  updatedBy: Actor;
  type: "CHAT";
  [k: string]: unknown;
}
export interface EmailEntry {
  entryType: "email";
  emailId: Id;
  to: EmailParticipant;
  from: EmailParticipant;
  additionalRecipients: EmailParticipant[];
  hiddenRecipients: EmailParticipant[];
  subject: string | null;
  textContent: string | null;
  hasMoreTextContent: boolean;
  markdownContent: string | null;
  hasMoreMarkdownContent: boolean;
  authenticity: EmailAuthenticity;
  sentAt: Datetime | null;
  receivedAt: Datetime | null;
  attachments: EmailEntryAttachment[];
  inReplyToEmailId: string | null;
  isStartOfThread: boolean;
  [k: string]: unknown;
}
export interface EmailParticipant {
  email: string;
  name: string | null;
  emailActor: EmailActor | null;
  [k: string]: unknown;
}
export interface EmailEntryAttachment {
  id: Id;
  fileName: string;
  fileSizeBytes: number;
  fileMimeType: string;
  fileExtension: string | null;
  createdAt: Datetime;
  createdBy: Actor;
  updatedAt: Datetime;
  updatedBy: Actor;
  type: "EMAIL";
  emailContentId: string;
  [k: string]: unknown;
}
export interface CustomEntry {
  entryType: "custom";
  externalId: string | null;
  title: string;
  type: string | null;
  components: Component[];
  attachments: CustomEntryAttachment[];
  [k: string]: unknown;
}
export interface ComponentText {
  type: "text";
  textSize: ComponentTextSize | null;
  textColor: ComponentTextColor | null;
  text: string;
  [k: string]: unknown;
}
export interface ComponentPlainText {
  plainTextSize: ComponentPlainTextSize | null;
  plainTextColor: ComponentPlainTextColor | null;
  plainText: string;
  type: "plainText";
  [k: string]: unknown;
}
export interface ComponentSpacer {
  spacerSize: ComponentSpacerSize;
  type: "spacer";
  [k: string]: unknown;
}
export interface ComponentDivider {
  dividerSpacingSize: ComponentDividerSpacingSize | null;
  type: "divider";
  [k: string]: unknown;
}
export interface ComponentLinkButton {
  linkButtonUrl: string;
  linkButtonLabel: string;
  type: "linkButton";
  [k: string]: unknown;
}
export interface ComponentBadge {
  badgeLabel: string;
  badgeColor: ComponentBadgeColor | null;
  type: "badge";
  [k: string]: unknown;
}
export interface ComponentCopyButton {
  copyButtonValue: string;
  copyButtonTooltipLabel: string | null;
  type: "copyButton";
  [k: string]: unknown;
}
export interface ComponentRow {
  type: "row";
  rowMainContent: ComponentRowContent[];
  rowAsideContent: ComponentRowContent[];
  [k: string]: unknown;
}
export interface ComponentContainer {
  type: "container";
  containerContent: ComponentContainerContent[];
  [k: string]: unknown;
}
export interface CustomEntryAttachment {
  id: Id;
  fileName: string;
  fileSizeBytes: number;
  fileMimeType: string;
  fileExtension: string | null;
  createdAt: Datetime;
  createdBy: Actor;
  updatedAt: Datetime;
  updatedBy: Actor;
  type: "CUSTOM_TIMELINE_ENTRY";
  [k: string]: unknown;
}
export interface ThreadCreatedPublicEventPayload {
  eventType: "thread.thread_created";
  thread: Thread;
  [k: string]: unknown;
}
export interface Thread {
  id: Id;
  customer: Customer;
  title: string;
  previewText?: string | null;
  priority: ThreadPriority;
  externalId: string | null;
  status: ThreadStatus;
  statusChangedAt: Datetime;
  statusChangedBy?: Actor | null;
  statusDetail: ThreadStatusDetail | null;
  assignee: ThreadAssignee | null;
  assignedAt: Datetime | null;
  labels: Label[];
  firstInboundMessageInfo: ThreadMessageInfo | null;
  firstOutboundMessageInfo: ThreadMessageInfo | null;
  lastInboundMessageInfo: ThreadMessageInfo | null;
  lastOutboundMessageInfo: ThreadMessageInfo | null;
  supportEmailAddresses: string[];
  createdAt: Datetime;
  createdBy: Actor;
  updatedAt: Datetime;
  updatedBy: Actor;
  [k: string]: unknown;
}
export interface User {
  id: Id;
  email: EmailAddress;
  fullName: string;
  publicName: string;
  status: "ONLINE" | "OFFLINE" | "BREAK" | "UNKNOWN_USER_STATUS";
  statusChangedAt: Datetime;
  createdAt: Datetime;
  createdBy: InternalActor;
  updatedAt: Datetime;
  updatedBy: InternalActor;
  deletedAt: Datetime | null;
  deletedBy: InternalActor | null;
  [k: string]: unknown;
}
export interface MachineUser {
  id: Id;
  fullName: string;
  publicName: string;
  description: string | null;
  createdAt: Datetime;
  createdBy: InternalActor;
  updatedAt: Datetime;
  updatedBy: InternalActor;
  deletedAt: Datetime | null;
  deletedBy: InternalActor | null;
  [k: string]: unknown;
}
export interface Label {
  id: Id;
  labelType: LabelType;
  createdAt: Datetime;
  createdBy: Actor;
  updatedAt: Datetime;
  updatedBy: Actor;
  [k: string]: unknown;
}
export interface LabelType {
  id: Id;
  name: string;
  icon?: string | null;
  isArchived?: boolean;
  archivedAt: Datetime | null;
  archivedBy: InternalActor | null;
  createdAt: Datetime;
  createdBy: InternalActor;
  updatedAt: Datetime;
  updatedBy: InternalActor;
  [k: string]: unknown;
}
export interface ThreadMessageInfo {
  timestamp: Datetime;
  messageSource: "CHAT" | "EMAIL" | "API" | "SLACK" | "MS_TEAMS" | "UNKNOWN_THREAD_MESSAGE_INFO_MESSAGE_SOURCE";
  actorId?: string | null;
  actorType?: ("user" | "machineUser" | "customer" | "system") | null;
  [k: string]: unknown;
}
export interface ThreadStatusTransitionedPublicEventPayload {
  eventType: "thread.thread_status_transitioned";
  previousThread: Thread;
  thread: Thread;
  [k: string]: unknown;
}
export interface ThreadAssignmentTransitionedPublicEventPayload {
  eventType: "thread.thread_assignment_transitioned";
  previousThread: Thread;
  thread: Thread;
  [k: string]: unknown;
}
export interface ThreadEmailReceivedPublicEventPayload {
  eventType: "thread.email_received";
  thread: Thread;
  email: Email;
  [k: string]: unknown;
}
export interface Email {
  timelineEntryId: Id;
  id: Id;
  to: EmailParticipant;
  from: EmailParticipant;
  replyTo: string | null;
  additionalRecipients: EmailParticipant[];
  hiddenRecipients: EmailParticipant[];
  subject: string | null;
  textContent: string | null;
  markdownContent: string | null;
  authenticity: EmailAuthenticity;
  sentAt: Datetime | null;
  receivedAt: Datetime | null;
  attachments: Attachment[];
  inReplyToEmailId: string | null;
  isStartOfThread: boolean;
  createdAt: Datetime;
  createdBy: Actor;
  updatedAt: Datetime;
  updatedBy: Actor;
  [k: string]: unknown;
}
export interface Attachment {
  id: Id;
  fileName: string;
  fileSizeBytes: number;
  fileMimeType: string;
  fileExtension: string | null;
  createdAt: Datetime;
  createdBy: Actor;
  updatedAt: Datetime;
  updatedBy: Actor;
  [k: string]: unknown;
}
export interface ThreadEmailSentPublicEventPayload {
  eventType: "thread.email_sent";
  thread: Thread;
  email: Email;
  [k: string]: unknown;
}
export interface ThreadSlackMessageReceivedEventPayload {
  eventType: "thread.slack_message_received";
  thread: Thread;
  slackMessage: SlackMessage;
  [k: string]: unknown;
}
export interface SlackMessage {
  timelineEntryId: Id;
  id: Id;
  text: string;
  resolvedText?: string;
  attachments: Attachment[];
  slackChannelId: string;
  slackChannelName: string;
  slackMessageLink: string;
  createdAt: Datetime;
  createdBy: Actor;
  updatedAt: Datetime;
  updatedBy: Actor;
  [k: string]: unknown;
}
export interface ThreadSlackMessageSentEventPayload {
  eventType: "thread.ms_teams_message_sent";
  thread: Thread;
  msTeamsMessage: MsTeamsMessage;
  [k: string]: unknown;
}
export interface MsTeamsMessage {
  timelineEntryId: Id;
  threadId: Id;
  msTeamsMessageId: string;
  type: ("INBOUND" | "OUTBOUND" | "UNKNOWN_MS_TEAMS_MESSAGE_TYPE") | null;
  text: string;
  attachments: Attachment[];
  lastEditedOnMsTeamsAt: Datetime | null;
  deletedOnMsTeamsAt: Datetime | null;
  createdAt: Datetime;
  createdBy: Actor;
  updatedAt: Datetime;
  updatedBy: Actor;
  [k: string]: unknown;
}
export interface ThreadMSTeamsMessageReceivedEventPayload {
  eventType: "thread.ms_teams_message_received";
  thread: Thread;
  msTeamsMessage: MsTeamsMessage;
  [k: string]: unknown;
}
export interface ThreadMSTeamsMessageSentEventPayload {
  eventType: "thread.slack_message_sent";
  thread: Thread;
  slackMessage: SlackMessage;
  [k: string]: unknown;
}
export interface ThreadLabelsChangedPublicEventPayload {
  eventType: "thread.thread_labels_changed";
  changeType: "ADDED" | "REMOVED";
  thread: Thread;
  previousThread: Thread;
  [k: string]: unknown;
}
export interface ThreadPriorityChangedPublicEventPayload {
  eventType: "thread.thread_priority_changed";
  previousThread: Thread;
  thread: Thread;
  [k: string]: unknown;
}
export interface ThreadFieldCreatedPublicEventPayload {
  eventType: "thread.thread_field_created";
  thread: Thread;
  threadField: ThreadField;
  [k: string]: unknown;
}
export interface ThreadField {
  id: Id;
  threadId: Id;
  key: string;
  type: "STRING" | "BOOL" | "ENUM" | "UNKNOWN_THREAD_FIELD_SCHEMA_TYPE";
  stringValue: string | null;
  booleanValue: boolean | null;
  createdAt: Datetime;
  createdBy: InternalActor;
  updatedAt: Datetime;
  updatedBy: InternalActor;
  [k: string]: unknown;
}
export interface ThreadFieldUpdatedPublicEventPayload {
  eventType: "thread.thread_field_updated";
  thread: Thread;
  previousThreadField: ThreadField;
  threadField: ThreadField;
  [k: string]: unknown;
}
export interface ThreadFieldDeletedPublicEventPayload {
  eventType: "thread.thread_field_deleted";
  thread: Thread;
  previousThreadField: ThreadField;
  [k: string]: unknown;
}
export interface ThreadChatSentPublicEventPayload {
  eventType: "thread.chat_sent";
  chat: Chat;
  thread: Thread;
  [k: string]: unknown;
}
export interface Chat {
  timelineEntryId: Id;
  id: Id;
  customerReadAt: Datetime | null;
  text?: string | null;
  attachments: Attachment[];
  createdAt: Datetime;
  createdBy: Actor;
  updatedAt: Datetime;
  updatedBy: Actor;
  [k: string]: unknown;
}
export interface ThreadServiceLevelAgreementStatusTransitionedPayload {
  eventType: "thread.service_level_agreement_status_transitioned";
  thread: Thread;
  serviceLevelAgreement: ServiceLevelAgreement;
  previousServiceLevelAgreementStatusDetail: ServiceLevelAgreementStatusDetail;
  serviceLevelAgreementStatusDetail: ServiceLevelAgreementStatusDetail;
  [k: string]: unknown;
}
export interface Tier {
  id: Id;
  name: string;
  externalId: string | null;
  color: string;
  defaultThreadPriority?: number;
  isDefault: boolean;
  createdAt: Datetime;
  createdBy: InternalActor;
  updatedAt: Datetime;
  updatedBy: InternalActor;
  [k: string]: unknown;
}
export interface CustomerCreatedPublicEventPayload {
  eventType: "customer.customer_created";
  customer: Customer;
  [k: string]: unknown;
}
export interface CustomerUpdatedPublicEventPayload {
  eventType: "customer.customer_updated";
  customer: Customer;
  previousCustomer: Customer;
  [k: string]: unknown;
}
export interface CustomerDeletedPublicEventPayload {
  eventType: "customer.customer_deleted";
  previousCustomer: Customer;
  [k: string]: unknown;
}
export interface ThreadNoteCreatedEventPayload {
  eventType: "thread.note_created";
  thread: Thread;
  note: {
    timelineEntryId: Id;
    id: Id;
    text: string;
    markdown: string | null;
    createdAt: Datetime;
    createdBy: InternalActor;
    updatedAt: Datetime;
    updatedBy: InternalActor;
    deletedAt: Datetime | null;
    deletedBy: InternalActor | null;
    [k: string]: unknown;
  };
  [k: string]: unknown;
}
export interface ThreadChatReceivedPublicEventPayload {
  eventType: "thread.chat_received";
  chat: Chat;
  thread: Thread;
  [k: string]: unknown;
}
export interface WebhookMetadata {
  webhookTargetId: Id;
  webhookTargetVersion: "2024-09-18";
  webhookDeliveryAttemptId: Id;
  webhookDeliveryAttemptNumber: number;
  webhookDeliveryAttemptTimestamp: Datetime;
  [k: string]: unknown;
}
