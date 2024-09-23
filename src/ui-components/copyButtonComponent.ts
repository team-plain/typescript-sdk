import type { ComponentInput } from '../graphql/types';

/**
 * Returns a ComponentInput which can be used with the API.
 */
export function copyButtonComponent(args: { value: string; tooltip?: string }): ComponentInput {
  return {
    componentCopyButton: {
      copyButtonValue: args.value,
      copyButtonTooltipLabel: args.tooltip,
    },
  };
}
