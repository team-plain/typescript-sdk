import type { ComponentInput } from '../graphql/types';

/**
 * Returns a ComponentInput which can be used with the API.
 */
export function linkButtonComponent(args: { label: string; url: string }): ComponentInput {
  return {
    componentLinkButton: {
      linkButtonLabel: args.label,
      linkButtonUrl: args.url,
    },
  };
}
