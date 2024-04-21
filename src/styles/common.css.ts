import { style } from '@vanilla-extract/css';

export const ellipsis = style({
  maxWidth: 163,
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});
