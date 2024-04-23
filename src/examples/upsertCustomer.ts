import { PlainClient } from '../index';

export async function createCustomer() {
  const client = new PlainClient({ apiKey: process.env.API_KEY || '' });

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
