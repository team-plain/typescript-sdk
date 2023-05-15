# @team-plain/typescript-sdk

[Changelog]('./CHANGELOG.md')

This is the typescript/node SDK for Plain.com's Core GraphQL API.  It makes it easy to make common API calls in just a few lines of code.

If you run into any issues please open an issue or get in touch with us at help@plain.com.

## Basic example

```ts
import { PlainSDKClient } from "@team-plain/typescript-sdk"

const client = new PlainSDKClient({
  apiKey: 'plainApiKey__tmRD_xF5qiMH0657LkbLCC1maN4hLsBIbyOgjqEP4w'
})

const result = await client.getCustomerById({ customerId: 'c_01GHC4A88A9D49Q30AAWR3BN7P' });

if (result.error) {
  console.log(result.error);        
} else {
  console.log(result.data.fullName);
}
```

You can find out how to make an API key in our documentation: https://docs.plain.com/core-api/authentication


## Documentation

Every method in the SDK corresponds to a graphql [query](./src/graphql/queries/) or [mutation](./src/graphql/mutations/).

You can find the generated documentation here:

**[Documentation](https://plain-typescript-sdk-docs.vercel.app/classes/PlainSDKClient.html)**

If you would like to add a query or mutation please open an issue and we can add it for you.


## Error handling
Every SDK method will return an object with either data or an error.

**You will either receive an error or data, never both.**

Here is an example: 

```ts
function doThing() {
  const result = await client.getCustomerById({ customerId: 'c_01GHC4A88A9D49Q30AAWR3BN7P' });

  if (result.error) {
    console.log(result.error);          
  } else {
    console.log(result.data.fullName);
  }
}
```

An error can be **one of**

### MutationError
[(view source)](./src/error.ts)
If you only handle one error when using the SDK, handle this one. This is an error returned by a mutation within Plain's API and contains lots of information of what went wrong. It is called `MutationError` since every mutation 
error has a `errorDetails` field which contains the full error details.

Here is an example error:
- **message**: an English technical description of the error. This error is usually meant to be read by a developer and not an end user.
- **type**: one of `VALIDATION`, `FORBIDDEN`, `INTERNAL`. See [MutationErrorType](https://docs.plain.com/core-api/reference/enums/mutation-error-type) for a description of each value.
- **code**: a unique error code for each type of error returned. This code can be used to provide a localized or user-friendly error message. You can find the list of error codes [in our docs](https://docs.plain.com/error-codes) .
- **fields**: an array containing all the fields that errored. Each field:
  - **field**: the name of the input field the error is for
  - **message**: an English technical description of the error. This error is usually meant to be read by a developer and not an end user.
type: one of `VALIDATION`, `REQUIRED`, `NOT_FOUND`. See [MutationFieldErrorType](https://docs.plain.com/core-api/reference/enums/mutation-field-error-type) for a description of each value.

### BadRequestError
[(view source)](./src/error.ts)
Equivalent to a 400 response. If you are using typescript it's unlikely you will run into this since types will prevent this but if you are using javascript this likely means you are providing a wrong input/argument to a query or mutation. 

### ForbiddenError
[(view source)](./src/error.ts)
Equivalent to a 401 response. Normally means your API key is wrong or has insufficient permissions

### InternalServerError
[(view source)](./src/error.ts)
Equivalent to a 500 response. If this happens something unexpected within Plain happened.

