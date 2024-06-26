import { ComponentTextColor, ComponentTextSize, PlainClient, uiComponent } from '../index';

export async function createThread() {
  const client = new PlainClient({ apiKey: 'XXX' });

  const res = await client.createThread({
    title: 'Contact form',
    customerIdentifier: {
      customerId: 'c_123',
    },
    components: [
      {
        componentText: {
          text: 'hello world',
        },
      },
      {
        componentText: {
          text: 'hello world',
          textColor: ComponentTextColor.Error,
        },
      },
      {
        componentText: {
          text: 'hello world',
          textSize: ComponentTextSize.M,
        },
      },
    ],
  });

  if (res.error) {
    console.error(res.error);
  } else {
    console.log(`Thread created with id=${res.data.id}`);
  }
}

export async function createThreadWithUiComponentBuilder() {
  const client = new PlainClient({ apiKey: 'XXX' });

  const res = await client.createThread({
    title: 'Contact form',
    customerIdentifier: {
      customerId: 'c_123',
    },
    components: [
      uiComponent.text({ text: 'hello world' }),
      uiComponent.text({ text: 'hello world', color: 'ERROR' }),
      uiComponent.text({ text: 'hello world', size: 'M' }),
    ],
  });

  if (res.error) {
    console.error(res.error);
  } else {
    console.log(`Thread created with id=${res.data.id}`);
  }
}
