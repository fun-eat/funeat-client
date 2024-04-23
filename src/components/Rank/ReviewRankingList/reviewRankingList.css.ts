import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  gap: 10,
  padding: '0 20px',
  overflowX: 'auto',
});

export const reviewItemWrapper = style({
  minWidth: 164,
});
