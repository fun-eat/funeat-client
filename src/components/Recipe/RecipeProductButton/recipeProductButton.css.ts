import { style } from '@vanilla-extract/css';

export const container = style({
  width: 26,
  height: 26,
  background: '#000000',
  borderRadius: '50%',
});

export const translucent = style({
  opacity: '50%',
});

export const recipeProductWrapper = style({
  margin: '48px 20px',
});
