import { globalStyle, style } from '@vanilla-extract/css';

export const searchSection = style({
  padding: '0 20px',
});

export const subTitle = style({
  fontSize: 14,
  marginTop: 28,
});

export const searchResultTitle = style({
  fontSize: 12,
  color: '#808080',
  margin: '20px 0',
});

export const showMoreButton = style({
  width: '100%',
  height: 38,
  padding: '9px 0',
  margin: '20px 0',
  background: '#efefef',
  fontSize: 14,
  borderRadius: 6,
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
