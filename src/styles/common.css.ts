import { style } from '@vanilla-extract/css';

export const ellipsis = style({
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});
