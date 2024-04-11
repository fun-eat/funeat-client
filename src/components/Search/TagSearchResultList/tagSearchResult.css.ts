import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  rowGap: 20,
  columnGap: 10,
});
