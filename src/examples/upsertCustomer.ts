/**
 * This example calls upsert customer. This file acts as kind of type 'test'
 * since breaking the API would result in this file not typechecking.
 */

import { PlainSDKClient } from '../client';

export async function upsertCustomerExample() {
  const client = new PlainSDKClient({ apiKey: '' });

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

  console.log(`Created customer with ${res.data.id}`);
}
