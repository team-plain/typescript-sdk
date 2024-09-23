---
'@team-plain/typescript-sdk': major
---

Upgrade the SDK webhook parsing to support webhook version '2024-09-18'.

### Breaking Changes
If your Plain webhook target is on the legacy/unversioned version, the SDK will no longer be able to parse the webhook payload. You must update your webhook target to '2024-09-18'. Refer to [our docs](https://www.plain.com/docs/api-reference/webhooks/versions) for more information and instructions on how to safely upgrade your webhook target.

### Added
`verifyPlainWebhook` method to verify the webhook signature, with support for replay attack protection, and parse the webhook payload. Refer to the [README](./README.md) for usage instructions.
