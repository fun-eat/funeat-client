import { globalStyle, style } from '@vanilla-extract/css';

export const main = style({
  paddingTop: 50,
});

export const formWrapper = style({
  display: 'flex',
  alignItems: 'center',
  height: 50,
  padding: '0 20px',
});

export const form = style({
  flexGrow: 1,
});

export const searchSection = style({
  padding: '0 20px',
});

export const searchWrapper = style({
  padding: '0 20px',
  margin: '24px 0 27px',
});

export const tagSearchWrapper = style({
  padding: '0 20px',
  marginBottom: 20,
});

export const subTitle = style({
  marginTop: 24,
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
