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


## Methods

This SDK is a thin wrapper on on-top of our GraphQL API. As such a lot of these documentation will link to our GraphQL documentation. If your requirements are more complex you should consider using our API directly for which you can find docs at https://docs.plain.com/. 

### getCustomerById(variables)
Allows you to fetch a customer by their id.

Arguments:
  - `variables`
    - `variables.customerId`: The id of the customer you want to fetch

Required permissions:
- `customer:read`

### createIssue
This allows you create an issue for a customer