import { vars } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 335,
  height: 80,

  background: vars.colors.border.light,
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
  margin: '0 49.5px',
  background: vars.colors.border.default,
});
