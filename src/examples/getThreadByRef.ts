import { PlainClient } from '../index';

export async function getThreadByRef() {
  const client = new PlainClient({ apiKey: process.env.API_KEY || '' });

  const ref = 'T-12345';
  const res = await client.getThreadByRef({
    ref,
  });
  if (res.error) {
    console.error(res.error);
  } else if (res.data === null) {
    console.log(`Thread with ref=${ref} not found`);
  } else {
    console.log(`Thread with id=${res.data.id} and ref=${res.data.ref} found`);
  }
}
