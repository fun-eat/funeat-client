import { style } from '@vanilla-extract/css';

export const imageWrapper = style({
  position: 'relative',
});

export const recipeImage = style({
  width: '100%',
  height: 'auto',
  minWidth: 163,
  objectFit: 'cover',
  aspectRatio: '1 / 1',
});

export const buttonWrapper = style({
  position: 'absolute',
  top: 8,
  right: 8,
});

export const recipeTitle = style({
  color: '#232527',
  fontSize: 14,
  fontWeight: 600,
});

export const recipeAuthor = style({
  color: '#3D3D3D',
  fontSize: 11,
});

export const recipeDescription = style({
  color: '#808080',
  fontSize: 11,
});
