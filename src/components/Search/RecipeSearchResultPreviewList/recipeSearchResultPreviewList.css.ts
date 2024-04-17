import { vars } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const listWrapper = style({
  display: 'flex',
  gap: 10,
  alignItems: 'center',
  overflowY: 'scroll',
});

export const showMore = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 40,
  height: 40,
  background: vars.colors.secondary1,
  borderRadius: '50%',
});
