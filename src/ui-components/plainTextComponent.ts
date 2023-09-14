import {
  type ComponentInput,
  ComponentPlainTextColor,
  ComponentPlainTextSize,
} from '../graphql/types';

type Size = `${ComponentPlainTextSize}`;

function textSizeToEnum(size?: Size): ComponentPlainTextSize | null {
  if (!size) {
    return null;
  }
  return ComponentPlainTextSize[size];
}

type Color = `${ComponentPlainTextColor}`;

function textColorToEnum(color?: Color): ComponentPlainTextColor | null {
  if (!color) {
    return null;
  }

  const map: Record<Color, ComponentPlainTextColor> = {
    ERROR: ComponentPlainTextColor.Error,
    MUTED: ComponentPlainTextColor.Muted,
    NORMAL: ComponentPlainTextColor.Normal,
    SUCCESS: ComponentPlainTextColor.Success,
    WARNING: ComponentPlainTextColor.Warning,
  };
  return map[color];
}

/**
 * Returns a ComponentInput which can be used with the API.
 */
export function plainTextComponent(args: {
  text: string;
  size?: Size;
  color?: Color;
}): ComponentInput {
  return {
    componentPlainText: {
      plainText: args.text,
      plainTextColor: textColorToEnum(args.color),
      plainTextSize: textSizeToEnum(args.size),
    },
  };
}
