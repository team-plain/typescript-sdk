# @team-plain/typescript-sdk

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
