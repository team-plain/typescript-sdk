# @team-plain/typescript-sdk

[Changelog](./CHANGELOG.md)

## Plain Client

This is the typescript/node SDK for Plain.com's Core GraphQL API. It makes it easy to make common API calls in just a few lines of code.

If you run into any issues please open an issue or get in touch with us at <help@plain.com>.

#### Basic example

```ts
import { PlainClient } from '@team-plain/typescript-sdk';

const client = new PlainClient({
  apiKey: 'plainApiKey__tmRD_xF5qiMH0657LkbLCC1maN4hLsBIbyOgjqEP4w',
});

const result = await client.getCustomerById({ customerId: 'c_01GHC4A88A9D49Q30AAWR3BN7P' });

if (result.error) {
  console.log(result.error);
} else {
  console.log(result.data.fullName);
}
```

You can find out how to make an API key in our documentation: <https://docs.plain.com/core-api/authentication>

#### Documentation

Every method in the SDK corresponds to a graphql [query](./src/graphql/queries/) or [mutation](./src/graphql/mutations/).

You can find the generated documentation here:

**[Documentation](https://plain-typescript-sdk-docs.vercel.app/classes/PlainClient.html)**

If you would like to add a query or mutation please open an issue and we can add it for you.

#### Error handling

Every SDK method will return an object with either data or an error.

**You will either receive an error or data, never both.**

Here is an example:

```ts
const client = new PlainClient({
  apiKey: 'plainApiKey__tmRD_xF5qiMH0667LkbLCC1maN2hLsBIbyOgjqEP4w',
});

function doThing() {
  const result = await client.getCustomerById({ customerId: 'c_01GHC4A88A9D49Q30AAWR3BN7P' });

  if (result.error) {
    console.log(result.error);
  } else {
    console.log(result.data.fullName);
  }
}
```

An error can be **one of** the below:

###### MutationError

[(view source)](./src/error.ts)
This is the richest error type. It is called `MutationError` since it maps to the `MutationError` type in our GraphQL schema and is returned as part of every mutation in our API.

You can view the full details of this error under `errorDetails`.

Every mutation error will contain:

- **message**: an English technical description of the error. This error is usually meant to be read by a developer and not an end user.
- **type**: one of `VALIDATION`, `FORBIDDEN`, `INTERNAL`. See [MutationErrorType](https://docs.plain.com/core-api/reference/enums/mutation-error-type) for a description of each value.
- **code**: a unique error code for each type of error returned. This code can be used to provide a localized or user-friendly error message. You can find the list of error codes [in our docs](https://docs.plain.com/error-codes) .
- **fields**: an array containing all the fields that errored. Each field:
  - **field**: the name of the input field the error is for
  - **message**: an English technical description of the error. This error is usually meant to be read by a developer and not an end user.
    type: one of `VALIDATION`, `REQUIRED`, `NOT_FOUND`. See [Error codes
    ](https://www.plain.com/docs/graphql/error-codes) in our docs for a description of each value.

###### BadRequestError

[(view source)](./src/error.ts)
Equivalent to a 400 response. If you are using typescript it's unlikely you will run into this since types will prevent this but if you are using javascript this likely means you are providing a wrong input/argument to a query or mutation.

###### ForbiddenError

[(view source)](./src/error.ts)
Equivalent to a 401 or 403 response. Normally means your API key doesn't exist or that you are trying to query something that you do not have permissions for.

###### InternalServerError

[(view source)](./src/error.ts)
Equivalent to a 500 response. If this happens something unexpected within Plain happened.

###### UnknownError

[(view source)](./src/error.ts)
Fallback error type when something unexpected happens.

## Webhooks

Plain signs the [webhooks](https://www.plain.com/docs/api-reference/webhooks) it sends to your endpoint,
allowing you to validate that they were not sent by a third-party. You can read more about it [here](https://www.plain.com/docs/api-reference/request-signing).
The SDK provides a convenient helper function to verify the signature, prevent replay attacks, and parse the payload to a typed object.

```ts
import {
  PlainWebhookSignatureVerificationError,
  PlainWebhookVersionMismatchError,
  verifyPlainWebhook,
} from '@team-plain/typescript-sdk';

// You must pass the raw request body, exactly as received from Plain,
// this will not work with a parsed (i.e., JSON) request body.
const payload = '...';

// The value of the `Plain-Request-Signature` header from the webhook request.
const signature = '...';

// Plain Request Signature Secret. You can find this in Plain's settings.
const secret = '...';

const webhookResult = verifyPlainWebhook(payload, signature, secret);
if (webhookResult.error instanceof PlainWebhookSignatureVerificationError) {
  // Signature verification failed.
} else if (webhookResult.error instanceof PlainWebhookVersionMismatchError) {
  // The SDK is not compatible with the received webhook version.
  // Consider updating the SDK and the webhook target to the latest version.
  // Consult the changelog or https://plain.com/docs/api-reference/webhooks/versions for more information.
} else if (webhookResult.error) {
  // Unexpected error. Most likely due to an error in Plain's webhook server or a bug in the SDK.
  // Treat this as a 500 response from Plain.
  // We also recommend logging the error and sharing it with Plain's support team.
} else {
  // webhookResult.data is now a typed object.
}
```

## Contributing

When submitting a PR, remember to run `pnpm changeset` and provide an easy to understand description of the changes you're making so that the changelog is populated.

When a PR with a changelog is merged a separate PR will be automatically raised which rolls up any merged changes and handles assigning a new version for release and publishing to NPM.
