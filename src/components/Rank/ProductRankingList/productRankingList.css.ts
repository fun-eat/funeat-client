import { globalStyle, style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  padding: '0 20px',
  overflowX: 'auto',
  overflowY: 'hidden',
  columnGap: '9px',
});

globalStyle(`${container}::-webkit-scrollbar`, {
  display: 'none',
});
