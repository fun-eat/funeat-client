import { vars } from '@/styles/theme.css';
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

export const ratingWrapper = style({
  display: 'flex',
  alignItems: 'center',
  gap: 8,
});

export const ratingInfo = style({
  display: 'flex',
  alignItems: 'center',
  gap: 4,
});

export const ratingNumber = style({
  paddingTop: 4,
  color: vars.colors.gray5,
});

export const date = style({
  paddingTop: 2,
});

export const reviewImage = style({
  borderRadius: 6,
  objectFit: 'cover',
});

export const reviewContent = style({
  whiteSpace: 'pre-wrap',
});
