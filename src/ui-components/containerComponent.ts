import type { ComponentInput } from '../graphql/types';

/**
 * Returns a ComponentInput which can be used with the API.
 */
export function containerComponent(args: { content: ComponentInput[] }): ComponentInput {
  return {
    componentContainer: {
      containerContent: args.content,
    },
  };
}
