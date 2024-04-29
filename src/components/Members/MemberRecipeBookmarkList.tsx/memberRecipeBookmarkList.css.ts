import { style } from '@vanilla-extract/css';

export const main = style({
  paddingTop: 50,
});

export const container = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gridAutoRows: 'auto',
  columnGap: 10,
  rowGap: 20,
});
