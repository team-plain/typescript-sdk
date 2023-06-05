# @team-plain/typescript-sdk

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
