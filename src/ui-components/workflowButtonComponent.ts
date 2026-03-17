import type { ComponentInput } from '../graphql/types';

/**
 * Returns a ComponentInput which can be used with the API.
 */
export function workflowButtonComponent(args: {
  label: string;
  workflowId: string;
}): ComponentInput {
  return {
    componentWorkflowButton: {
      workflowButtonLabel: args.label,
      workflowButtonWorkflowIdentifier: {
        workflowId: args.workflowId,
      },
    },
  };
}
