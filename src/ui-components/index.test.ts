import { describe, expect, test } from 'vitest';

import { uiComponent } from '.';
import { ComponentBadgeColor, ComponentTextColor, ComponentTextSize } from '../graphql/types';

describe('ui components builder', () => {
  test('basic example', () => {
    expect([
      uiComponent.text({ text: 'hello world' }),
      uiComponent.text({ text: 'hello world', color: 'MUTED', size: 'S' }),
    ]).toEqual([
      {
        componentText: {
          text: 'hello world',
          textColor: null,
          textSize: null,
        },
      },
      {
        componentText: {
          text: 'hello world',
          textColor: ComponentTextColor.Muted,
          textSize: ComponentTextSize.S,
        },
      },
    ]);
  });

  test('container component', () => {
    expect([
      uiComponent.container({
        content: [
          uiComponent.text({ text: 'hello world' }),
          uiComponent.badge({ label: 'success', color: 'GREEN' }),
        ],
      }),
    ]).toEqual([
      {
        componentContainer: {
          containerContent: [
            {
              componentText: {
                text: 'hello world',
                textColor: null,
                textSize: null,
              },
            },
            {
              componentBadge: {
                badgeLabel: 'success',
                badgeColor: ComponentBadgeColor.Green,
              },
            },
          ],
        },
      },
    ]);
  });
});
