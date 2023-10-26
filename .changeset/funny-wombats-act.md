---
'@team-plain/typescript-sdk': major
---

Removed deprecated endpoints in support of the release of threads for Plain. For a full migration guide visit [Migrate to threads](https://www.plain.com/docs/migrate-to-threads) on our docs site.

The breaking changes are as follows:

## Customer changes

The `customer` object has been simplified thanks to the introduction of the `Thread` object. Specifically the following fields were removed:

- `status`
- `statusChangedAt`
- `assignedToUser`
- `assignedAt`
- `lastIdleAt`

The following related methods have been removed from the client:

- `changeCustomerStatus`

## Issue removal

Issues have been removed and replaced with [Labels](https://www.plain.com/docs/graphql/labels).

The following related methods have been removed from the client:

- `createIssue`
- `resolveIssue`
- `deleteIssue`
- `getIssues`

## Custom Timeline Entries

Custom timeline entries have been split into two more specific APIs: [threads](https://www.plain.com/docs/graphql/threads) and [events](https://www.plain.com/docs/graphql/events).

The following methods have been removed from the client:

- `upsertCustomTimelineEntry`

## Chat

Chat support in Plain has been deprecated. As a replacement you may want to consider building a [contact form](https://www.plain.com/docs/contact-forms-setup) instead.

The following methods have been removed from the client:

- `sendChat`
