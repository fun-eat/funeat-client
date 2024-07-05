import { style } from '@vanilla-extract/css';

export const memberInfo = style({
  display: 'flex',
  alignItems: 'center',
  gap: 8,
});

export const memberImage = style({
  borderRadius: '50%',
  objectFit: 'cover',
});

export const favoriteWrapper = style({
  marginLeft: 'auto',
});

export const reviewImage = style({
  borderRadius: 6,
  objectFit: 'cover',
});

export const reviewContent = style({
  whiteSpace: 'pre-wrap',
});
