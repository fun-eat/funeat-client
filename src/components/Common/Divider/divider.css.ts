import { vars } from '@/styles/theme.css';
import { createVar, style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const dividerWidth = createVar();
export const dividerHeight = createVar();

export const dividerBase = style({
  width: dividerWidth,
  height: dividerHeight,
  border: 0,
});

export const divider = recipe({
  base: dividerBase,
  variants: {
    variant: {
      default: { backgroundColor: vars.colors.border.default },
      light: { backgroundColor: vars.colors.border.light },
      navigation: { backgroundColor: vars.colors.border.navigation },
    },
  },
});
