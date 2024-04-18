import { vars } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const imageWrapper = style({
  position: 'relative',
  lineHeight: 0,
});

export const recipeImage = style({
  width: '100%',
  height: 'auto',
  minWidth: 163,
  borderRadius: '6px',
  objectFit: 'cover',
  aspectRatio: '4 / 5',
});

export const favoriteButtonWrapper = style({
  position: 'absolute',
  top: 8,
  right: 8,
});

export const productButtonWrapper = style({
  position: 'absolute',
  bottom: 8,
  left: 8,
});

export const productCircleWrapper = style({
  position: 'absolute',
  bottom: 10,
  left: 10,
  display: 'flex',
});

export const productCircleListWrapper = style({
  position: 'relative',
  width: '100%',
  height: '40px',
  marginRight: '-10px',
  borderRadius: '50%',
  border: `2px solid ${vars.colors.border.light}`,
  boxSizing: 'content-box',
});

export const productImage = style({
  width: '40px',
  height: '40px',
  borderRadius: '50%',
});

export const thirdProductImage = style({
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  filter: 'brightness(50%)',
});

export const recipeProductsCount = style({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate( -50%, -50% )',
  color: vars.colors.white,
});

export const ellipsis = style({
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});
