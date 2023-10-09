import { PlainClient } from '../client';

export async function assignThread() {
  const client = new PlainClient({
    apiKey: process.env.API_KEY || '',
  });

  const res = await client.unassignThread({
    threadId: 'th_01H8H46YPB2S4MAJM382FG9423',
  });

  if (res.error) {
    console.error(res.error);
  } else {
    console.log(`Thread assigned!`);
    console.log(res.data);
  }
}
