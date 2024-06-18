# @team-plain/typescript-sdk

## 4.6.1

### Patch Changes

- bb3cb38: Fix generated webhook types

## 4.6.0

### Minor Changes

- 3d158d5: Regenerate types for slack webhooks (`thread.slack_message_received` and `thread.slack_message_sent`)

## 4.5.0

### Minor Changes

- c4e3c9c: You can now omit the thread title when creating a thread and AI will generate it for you (if you have this enabled in your settings)

## 4.4.1

### Patch Changes

- 9098a32: Testing automated release process

## 4.4.0

### Minor Changes

- f69fc2d: Fixed webhook schema definition

## 4.3.2

### Patch Changes

- 5ebe2c5: Test automatic release process

## 4.3.1

### Patch Changes

- ee04953: No changes were made - version is used for testing purposes.

## 4.3.0

### Minor Changes

- cade7ea: Update Plain webhook schemas

## 4.2.3

### Patch Changes

- 31e5f27: Updated webhook schema

## 4.2.2

### Patch Changes

- 23f457c: Update schema for tier membership endpoints

## 4.2.1

### Patch Changes

- 9822663: Added updateThreadTenant

## 4.2.0

### Minor Changes

- 22e0d28: Added support for setting the company and tenant tier directly via `updateTenantTier` and `updateCompanyTier` respectively. Also expanded return types of tier and membership related mutations.

## 4.1.0

### Minor Changes

- c24b8ac: Add support for thread fields, adding and removing them: `upsertThreadField` and `deleteThreadField`
- 1b43893: Changed the input type to removingMemberFromTier mutation.
- 21b6db9: Updated types to reflect new way to filter threads by tier identifiers
- 47871dc: Remove unused TimelineEntry from SDK

## 4.0.0

### Major Changes

- 4551691: Added the following queries:

  - `getCustomerCustomerGroupMemberships`
  - `getCustomerTenantMemberships`
  - `getTenantById`
  - `getTenants`
  - `searchTenants`
  - `getCompanies`
  - `searchCompanies`
  - `getTierById`
  - `getTiers`

  Added support for the following mutations:

  - `upsertTenant`
  - `setCustomerTenants`
  - `addCustomerToTenants`
  - `removeCustomerFromTenants`
  - `updateCustomerCompany`
  - `addMembersToTier`
  - `removeMembersFromTier`

  Breaking change:

  - You previously received customer group memberships whenever you got a customer back. As there might be many customer groups this is now it's own separate query (`getCustomerCustomerGroupMemberships`). This allows you to fetch and paginate through a customer's customer groups.

## 3.9.0

### Minor Changes

- 1c3167e: Add `createNote` method to the SDK

## 3.8.1

### Patch Changes

- 9d45fb2: Removes some unneeded packages

## 3.8.0

### Minor Changes

- 046ed23: Add a 'parsePlainWebhook' method which validates and types an incoming Plain webhook payload

## 3.7.0

### Minor Changes

- a2ab671: Expose ComponentInput and EventComponentInput

## 3.6.0

### Minor Changes

- 772d0c6: Add support for creating, updating, deleting and fetcing webhook targets.

## 3.5.0

### Minor Changes

- 3d7148a: Export Public fragment types, which flatten connection object edges into arrays

## 3.4.1

### Patch Changes

- 1cdb361: Export missing types

## 3.4.0

### Minor Changes

- 0d9b3d6: Updates the customer fragment so that it also fetches customer groups

## 3.3.1

### Patch Changes

- 69f6239: Adds the ability to get a thread by its external id

## 3.3.0

### Minor Changes

- 8ce2a2f: Adds the ability to create customer and thread events via the `createCustomerEvent` and `createThreadEvent` methods.

## 3.2.0

### Minor Changes

- 112e6cf: Rename `userByEmail` to `getUserByEmail` and deprecate old method.

## 3.1.0

### Minor Changes

- 0901359: Add ability to get a user by email (userByEmail)

## 3.0.1

### Patch Changes

- b8ab363: Added `replyToThread` support. This lets you quickly reply to any thread when, for example, building an autoresponder.

## 3.0.0

### Major Changes

- dfa8d1c: Breaking change `uiComponent.spacer({ spacingSize: 'M' })` is now `uiComponent.spacer({ size: 'M' })` to match naming convention with all other components.
- dfa8d1c: Removed deprecated endpoints in support of the release of threads for Plain. For a full migration guide visit [Migrate to threads](https://www.plain.com/docs/migrate-to-threads) on our docs site.

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

## 2.19.0

### Minor Changes

- 0869269: Add support for deleting customers (`deleteCustomer()`)

### Patch Changes

- f781425: Improve permission denied error handling so that if you are missing any permissions, the error now tells you which ones they are.

## 2.18.0

### Minor Changes

- 2ec7d29: Switch out axios for native fetch so that the SDK can be used in edge functions/runtimes.

## 2.17.0

### Minor Changes

- d25f9eb: Update CreateThreadInput to take `description` instead of `previewText`

## 2.16.0

### Minor Changes

- a817cfa: Fix removing of labels from threads and document client methods which were previously marked as experimental.

## 2.15.0

### Minor Changes

- 0b1f810: Added more queries and mutations relating to threads (experimental)

## 2.14.0

### Minor Changes

- 1a69fa8: Add `uiComponent` builder so you can more easily create ui components for use with the API.

## 2.13.1

### Patch Changes

- bb1ea6a: Updated error handling to avoid ignoring bad input errors

## 2.13.0

### Minor Changes

- 18ae5a5: Add support for changing thread priority. Expose ThreadStatus and other useful enums and types

## 2.12.0

### Minor Changes

- dcf4068: Add initial queries and mutations for threads, label types and labels.

## 2.11.1

### Patch Changes

- 4e55386: Allow other package managers besides pnpm

## 2.11.0

### Minor Changes

- 19c4c30: Add support for deleting issues via `client.deleteIssue()`

## 2.10.0

### Minor Changes

- 6cbf990: Add ability to send chat via `client.sendChat()`

## 2.9.0

### Minor Changes

- 79b99b3: Add ability to change customer status via `client.changeCustomerStatus()`

## 2.8.0

### Minor Changes

- 34c06ba: Add ability to get issues (`client.getIssues()`) and resolve issues (`client.resolveIssue()`)

## 2.7.0

### Minor Changes

- 40c0f50: Add ability to delete Customer Card configs.

## 2.6.0

### Minor Changes

- 910fe46: Add support for creating and updating Customer Card configurations. Useful if you want to programatically set up Customer Cards.

## 2.5.1

### Patch Changes

- d6f94d6: Expose error types: `PlainSDKError`, `ForbiddenError`, `BadRequestError`, `InternalServerError`, `MutationError` and `UnknownError`

## 2.5.0

### Minor Changes

- 2974363: Adds getMyWorkspace to fetch the workspace of the authenticated API key

## 2.4.0

### Minor Changes

- cc82b7f: Export CustomerPartsFragment type

## 2.3.0

### Minor Changes

- 0d1add7: Adds support for querying customer groups:

  - `getCustomerGroupById` - returns a single customer group by ID
  - `getCustomerGroups` - returns a pagniated list of customer groups

  Adds support for querying customers:

  - `getCustomers` - returns a paginated list of customers that can be filtered and sorted

## 2.2.0

### Minor Changes

- f3aeccf: Expose `AttachmentType` for use when creating attachment upload urls

## 2.1.0

### Minor Changes

- f55d303: Add support for creating attachment upload urls for use with custom timeline entries, emails and chat

## 2.0.0

### Major Changes

- 39bc31b: Changed return type of upserting customer to include the upsert 'result' (e.g. if it the customer was created, updated or not modified). This means you will have to slight adjust your code to account for this.

  For example in the below code this would be the change you now have to make:

  ```diff
    const client = new PlainClient({ apiKey: '' });

    const res = await client.upsertCustomer({
      identifier: {
        email: 'foo@bar.com',
      },
      onCreate: {
        fullName: 'Foo Bar',
        email: {
          email: 'foo@bar.com',
          isVerified: true,
        },
      },
      onUpdate: {},
    });

    if (res.error) {
      console.error(res.error);
      throw new Error(res.error.message);
    }

  -  console.log(`Created customer with id=${res.data.id}`);
  +  console.log(`Created customer with id=${res.data.customer.id}`);
  ```

### Minor Changes

- 39bc31b: Added a query to get the customer by their email (`getCustomerByEmail`) and the ability to send and reply to emails via `sendNewEmail` and `replyToEmail` respectively.

## 1.2.1

### Patch Changes

- be8a61d: Added a new 'requestId' field to all errors for better debugging and support when something unexpected happens.

## 1.2.0

### Minor Changes

- 4cda0b8: Support providing a custom API endpoint for testing internally at Plain against staging and other environments.

## 1.1.1

### Patch Changes

- d1404de: Conform [including TypeScript declarations for the npm package](https://www.typescriptlang.org/docs/handbook/declaration-files/publishing.html#including-declarations-in-your-npm-package), `typings` to `types`

## 1.1.0

### Minor Changes

- ae66dd3: Export useful graphql enums
- ada8307: Export useful graphql types

## 1.0.0

### Major Changes

- d70cbd4: Rename the exported client from `PlainSDKClient` to `PlainClient`

## 0.2.0

### Minor Changes

- 60ce422: Update input types to allow omiting null inputs

### Patch Changes

- 60ce422: Fix the return type of of upserting a customer (it can not be null)

## 0.1.0

### Minor Changes

- fd25dcc: Add the ability to add and remove customers from groups as well as create custom timeline entries.

### Patch Changes

- 006f20a: First public release 🎉
