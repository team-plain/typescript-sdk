---
'@team-plain/typescript-sdk': major
---

Breaking changes:
- `IndexedDocument.lastIndexedAt` removed.
- `Thread.externalChannelDetails` has been removed. Use `Thread.channelDetails`.

Deprecations: 
- `DoneStatusDetail.TimerExpired` is deprecated. Use `DoneAutomaticallySet`.
- `StatusDetailType.TimerExpired` is deprecated. Use `DoneAutomaticallySet` .

