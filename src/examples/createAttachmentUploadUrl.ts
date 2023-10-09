import { AttachmentType, PlainClient } from '../';

export async function createAttachmentUploadUrl() {
  const client = new PlainClient({ apiKey: process.env.API_KEY || '' });

  const res = await client.createAttachmentUploadUrl({
    customerId: 'c_XXXXXXXXXXXXXXXXXXXXXXXXXX',
    fileName: 'the-filename.jpeg',
    fileSizeBytes: 32318,
    attachmentType: AttachmentType.CustomTimelineEntry,
  });

  if (res.error) {
    console.error(res.error);
  } else {
    console.log(`Attachment upload url created!`, res.data);
  }
}
