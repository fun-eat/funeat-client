import { globalStyle, style } from '@vanilla-extract/css';

export const searchSection = style({
  padding: '0 20px',
});

export const searchWrapper = style({
  padding: '0 20px',
  marginBottom: 20,
});

export const subTitle = style({
  marginTop: 28,
});

export const searchResultTitle = style({
  margin: '20px 0',
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
