import { type ComponentInput, ComponentTextColor, ComponentTextSize } from '../graphql/types';

type Size = `${ComponentTextSize}`;

function textSizeToEnum(size?: Size): ComponentTextSize | null {
  if (!size) {
    return null;
  }
  return ComponentTextSize[size];
}

type Color = `${ComponentTextColor}`;

function textColorToEnum(color?: Color): ComponentTextColor | null {
  if (!color) {
    return null;
  }

  const map: Record<Color, ComponentTextColor> = {
    ERROR: ComponentTextColor.Error,
    MUTED: ComponentTextColor.Muted,
    NORMAL: ComponentTextColor.Normal,
    SUCCESS: ComponentTextColor.Success,
    WARNING: ComponentTextColor.Warning,
  };
  return map[color];
}

/**
 * Returns a ComponentInput which can be used with the API.
 */
export function textComponent(args: { text: string; size?: Size; color?: Color }): ComponentInput {
  return {
    componentText: {
      text: args.text,
      textColor: textColorToEnum(args.color),
      textSize: textSizeToEnum(args.size),
    },
  };
}
