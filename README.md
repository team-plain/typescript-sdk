# @team-plain/typescript-sdk

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

## Creating an API key
You can find out how to make an API key in our documentation: https://docs.plain.com/core-api/authentication




## Error handling
Calling methods on the client will not throw an error. Instead calling any client method will return an object with either data or an error.

**You wil either receive an error or data, never both.**

Here is an example: 

```

function doThing() {
  const result = await client.getCustomerById({ customerId: 'c_01GHC4A88A9D49Q30AAWR3BN7P' });

  if (result.error) {
    console.log(result.error);        
    return;
  } 

  console.log(result.data.fullName);
}
```

Errors are a union which 