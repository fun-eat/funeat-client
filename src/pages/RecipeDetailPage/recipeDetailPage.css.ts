import { style } from '@vanilla-extract/css';

export const flexRowContainer = style({
  display: 'flex',
});

export const flexColContainer = style({
  display: 'flex',
  flexDirection: 'column',
});

export const container = style({
  padding: '0 20px',
});

export const authorWrapper = style({
  display: 'flex',
  gap: 12,
  alignItems: 'center',
});

export const recipeImageContainer = style([
  flexColContainer,
  {
    gap: 20,
    alignItems: 'center',
  },
]);

export const recipeImage = style({
  width: '100%',
  height: 'auto',
  borderRadius: 6,
  objectFit: 'cover',
});

export const recipeUsedProductsWrapper = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const boxIconWrapper = style({
  display: 'flex',
  alignItems: 'center',
});

export const boxIcon = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 26,
  height: 26,
  marginRight: 8,
  background: '#D9D9D9',
  borderRadius: '50%',
});

export const recipeUsedProductsImageList = style({
  display: 'flex',
  gap: 6,
});

export const recipeContent = style({
  whiteSpace: 'break-spaces',
});
