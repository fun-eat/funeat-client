import { createVar, styleVariants } from '@vanilla-extract/css';

export const spacingSize = createVar();

export const spacing = styleVariants({
  vertical: [{ height: spacingSize }],
  horizontal: [{ width: spacingSize }],
});
