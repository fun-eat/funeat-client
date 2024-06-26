import { vars } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  width: '100%',
  height: 80,
  background: vars.colors.border.light,
  borderRadius: 6,
});

export const box = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
});

export const border = style({
  width: 1,
  height: 53,
  background: vars.colors.border.default,
});
