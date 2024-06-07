import { style } from '@vanilla-extract/css';

export const titleWrapper = style({
  display: 'flex',
  justifyContent: 'space-between',
});

export const reviewImage = style({
  width: 164,
  height: 90,
  borderRadius: 6,
  objectFit: 'cover',
});
