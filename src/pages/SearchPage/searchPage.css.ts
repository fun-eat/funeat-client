import { globalStyle, style } from '@vanilla-extract/css';

export const searchSection = style({
  position: 'relative',
});

export const subTitle = style({
  fontSize: 14,
});

export const badgeContainer = style({
  display: 'flex',
  gap: 8,
  marginTop: 10,
  overflow: 'auto',
});

globalStyle(`${badgeContainer}::-webkit-scrollbar`, {
  display: 'none',
});
