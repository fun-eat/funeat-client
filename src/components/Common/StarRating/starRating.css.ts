import { vars } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';

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
