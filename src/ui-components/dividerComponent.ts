import { ComponentDividerSpacingSize, type ComponentInput } from '../graphql/types';

type Size = `${ComponentDividerSpacingSize}`;

function spacingSizeToEnum(size?: Size): ComponentDividerSpacingSize | null {
  if (!size) {
    return null;
  }
  const map: Record<Size, ComponentDividerSpacingSize> = {
    XL: ComponentDividerSpacingSize.Xl,
    L: ComponentDividerSpacingSize.L,
    M: ComponentDividerSpacingSize.M,
    S: ComponentDividerSpacingSize.S,
    XS: ComponentDividerSpacingSize.Xs,
  };
  return map[size];
}

/**
 * Returns a ComponentInput which can be used with the API.
 */
export function dividerComponent(args: { spacingSize?: Size }): ComponentInput {
  return {
    componentDivider: {
      dividerSpacingSize: spacingSizeToEnum(args.spacingSize),
    },
  };
}
