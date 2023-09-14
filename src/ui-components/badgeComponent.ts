import { ComponentBadgeColor, type ComponentInput } from '../graphql/types';

type Color = `${ComponentBadgeColor}`;

function colorToEnum(color?: Color): ComponentBadgeColor | null {
  if (!color) {
    return null;
  }
  const map: Record<Color, ComponentBadgeColor> = {
    BLUE: ComponentBadgeColor.Blue,
    GREEN: ComponentBadgeColor.Green,
    GREY: ComponentBadgeColor.Grey,
    RED: ComponentBadgeColor.Red,
    YELLOW: ComponentBadgeColor.Yellow,
  };
  return map[color];
}

/**
 * Returns a ComponentInput which can be used with the API.
 */
export function badgeComponent(args: { label: string; color?: Color }): ComponentInput {
  return {
    componentBadge: {
      badgeLabel: args.label,
      badgeColor: colorToEnum(args.color),
    },
  };
}
