import { PlainClient } from '../client';
import { ThreadFieldSchemaType } from '../graphql/types';

const client = new PlainClient({
  apiKey: process.env.API_KEY || '',
});

export async function upsertThreadField() {
  const res = await client.upsertThreadField({
    identifier: {
      key: 'topic',
      threadId: 'th_01HVNWFJS395XVPPBJNE6A8BHP',
    },
    type: ThreadFieldSchemaType.String,
    stringValue: 'security',
  });

  if (res.error) {
    console.log('There was an error upserting thread field');
    console.error(res.error);
  } else {
    console.log(`Thread field upserted!`);
    console.log(res.data);
  }
}

export async function deleteThreadField() {
  const res = await client.deleteThreadField({
    threadFieldId: 'tf_01HVTN2VTNYP91P5XGDQ57M2ZX',
  });

  if (res.error) {
    console.log('There was an error deleting thread field');
    console.error(res.error);
  } else {
    console.log(`Thread field deleted!`);
    console.log(res.data);
  }
}

export async function getThread() {
  const res = await client.getThread({
    threadId: 'th_01HVNWFJS395XVPPBJNE6A8BHP',
  });

  if (res.error) {
    console.log('There was an error getting thread');
    console.error(res.error);
  } else {
    console.log(`Fetched thread!`);
    console.log(res.data);
  }
}

// upsertThreadField()
//   .then(() => {
//     console.log('finish');
//   })
//   .catch((e) => {
//     console.error(e);
//   });

getThread()
  .then(() => {
    console.log('finish');
  })
  .catch((e) => {
    console.error(e);
  });
