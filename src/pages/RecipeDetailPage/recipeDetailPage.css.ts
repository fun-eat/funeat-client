import { style } from '@vanilla-extract/css';

export const container = style({
  padding: '0 20px',
});

export const authorWrapper = style({
  display: 'flex',
  gap: 12,
  alignItems: 'center',
});

export const nickname = style({
  fontSize: '1.3rem',
  fontWeight: 600,
});

export const created = style({
  color: '#808080',
  fontSize: '1.1rem',
  fontWeight: 600,
});

export const recipeImageContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 20,
  alignItems: 'center',
});

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
  background: '#D9D9D9',
  borderRadius: '50%',
});

export const recipeUsedProductsTitle = style({
  marginLeft: 8,
  color: '#808080',
  fontSize: '1.2rem',
  fontWeight: 500,
});

export const recipeUsedProductsImageList = style({
  display: 'flex',
  gap: 6,
});

export const recipeContent = style({
  whiteSpace: 'break-spaces',
});
