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

To accommodate this the following methods were removed from the client:

- `changeCustomerStatus`

## Issue removal

Issues have been removed and replaced with [Labels](https://www.plain.com/docs/graphql/labels).

The following methods have been removed from the client:

- `createIssue`
- `resolveIssue`
- `deleteIssue`
- `getIssues`

## Custom Timeline Entries

Custom timeline entries have been replaced with [Events](https://www.plain.com/docs/graphql/events)

The following methods have been removed from the client:

- `upsertCustomTimelineEntry`

## Chat

Chat support in Plain has been removed, see [Contact Forms](https://www.plain.com/docs/contact-forms-setup) for our recommended replacement

The following methods have been removed from the client:

- `sendChat`
