---
'@team-plain/typescript-sdk': major
---

Changed return type of upserting customer to include the upsert 'result' (e.g. if it the customer was created, updated or not modified). This means you will have to slight adjust your code to account for this. 

For example in the below code this would be the change you now have to make:

```diff
  const client = new PlainClient({ apiKey: '' });

  const res = await client.upsertCustomer({
    identifier: {
      customerId: '',
    },
    onCreate: {
      fullName: '',
      email: {
        email: '',
        isVerified: false,
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
