import { style } from '@vanilla-extract/css';

export const link = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 6,
});

export const imageWrapper = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 6,
});

export const categoryImage = style({
  objectFit: 'cover',
});

export const circle = style({
  borderRadius: '50%',
});
