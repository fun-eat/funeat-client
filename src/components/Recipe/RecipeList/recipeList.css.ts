import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
  gridAutoRows: 'auto',
  columnGap: 10,
  rowGap: 20,
});
