import { style } from '@vanilla-extract/css';

export const main = style({
  paddingTop: 50,
});

export const listWrapper = style({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '16px 10px',
  padding: '0 20px',
});
