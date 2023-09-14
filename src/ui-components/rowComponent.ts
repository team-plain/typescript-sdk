import { type ComponentInput } from '../graphql/types';

/**
 * Returns a ComponentInput which can be used with the API.
 */
export function rowComponent(args: {
  mainContent: ComponentInput[];
  asideContent: ComponentInput[];
}): ComponentInput {
  return {
    componentRow: {
      rowMainContent: args.mainContent,
      rowAsideContent: args.asideContent,
    },
  };
}
