import { style } from '@vanilla-extract/css';

export const imageWrapper = style({
  position: 'relative',
});

export const recipeImage = style({
  width: '100%',
  height: 'auto',
  minWidth: 163,
  borderRadius: '6px',
  objectFit: 'cover',
  aspectRatio: '1 / 1',
});

export const buttonWrapper = style({
  position: 'absolute',
  top: 8,
  right: 8,
});

export const recipeTitle = style({
  fontSize: 14,
  fontWeight: 600,
  color: '#232527',
});

export const info = style({
  fontSize: 12,
  color: '#808080',
});
