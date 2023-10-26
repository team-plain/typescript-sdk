import { type ComponentInput, ComponentSpacerSize } from '../graphql/types';

type Size = `${ComponentSpacerSize}`;

function spacingSizeToEnum(size?: Size): ComponentSpacerSize | null {
  if (!size) {
    return null;
  }
  const map: Record<Size, ComponentSpacerSize> = {
    XL: ComponentSpacerSize.Xl,
    L: ComponentSpacerSize.L,
    M: ComponentSpacerSize.M,
    S: ComponentSpacerSize.S,
    XS: ComponentSpacerSize.Xs,
  };
  return map[size];
}

/**
 * Returns a ComponentInput which can be used with the API.
 */
export function spacerComponent(args: { size?: Size }): ComponentInput {
  return {
    componentSpacer: {
      spacerSize: spacingSizeToEnum(args.size),
    },
  };
}
