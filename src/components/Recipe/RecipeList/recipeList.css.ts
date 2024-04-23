import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'grid',
  gridTemplateColumns: 'minmax(0, 1fr) 1fr',
  gridAutoRows: 'auto',
  columnGap: 10,
  rowGap: 20,
});
