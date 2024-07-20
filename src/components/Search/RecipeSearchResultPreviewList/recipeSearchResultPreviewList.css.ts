import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  gap: 10,
  alignItems: 'center',
  overflowY: 'scroll',
});

export const wrapper = style({
  height: '100%',
  display: 'flex',
  flex: '0 0 160px',
});
