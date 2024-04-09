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

export const favoriteButtonWrapper = style({
  position: 'absolute',
  top: 8,
  right: 8,
  zIndex: 100,
});

export const productButtonWrapper = style({
  position: 'absolute',
  bottom: 8,
  left: 8,
  zIndex: 100,
});

export const recipeTitle = style({
  color: '#232527',
  fontSize: 14,
  fontWeight: 600,
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});

export const recipeAuthor = style({
  color: '#3D3D3D',
  fontSize: 11,
});

export const recipeContent = style({
  color: '#808080',
  fontSize: 11,
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});
