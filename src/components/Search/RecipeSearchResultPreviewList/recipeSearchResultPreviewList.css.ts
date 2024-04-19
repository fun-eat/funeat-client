import { style } from '@vanilla-extract/css';

export const listWrapper = style({
  display: 'flex',
  gap: 10,
  alignItems: 'center',
  overflowY: 'scroll',
});
