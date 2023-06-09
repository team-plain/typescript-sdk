/**
 * This example calls upsert customer. This file acts as kind of type 'test'
 * since breaking the API would result in this file not typechecking.
 */

import { PlainClient } from '../client';

export async function createCustomer() {
  const client = new PlainClient({ apiKey: 'XXX' });

  const res = await client.upsertCustomer({
    identifier: {
      emailAddress: 'jane@gmail.com',
    },
    onCreate: {
      fullName: 'Jane Fargate',
      email: {
        email: 'jane@gmail.com',
        isVerified: true,
      },
    },
    onUpdate: {},
  });

  if (res.error) {
    console.error(res.error);
  } else {
    console.log(`Created customer with id=${res.data.customer.id}`);
  }
}
