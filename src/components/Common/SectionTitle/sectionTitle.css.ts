import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const wrapper = style({
  display: 'flex',
  gap: 18,
  alignItems: 'flex-start',
});
