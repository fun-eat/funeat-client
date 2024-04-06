import { vars } from '@/styles/theme.css';
import { style, styleVariants } from '@vanilla-extract/css';

export const container = style({
  display: 'inline-flex',
  alignItems: 'center',
  gap: 8,
  cursor: 'pointer',
});

export const checkbox = style({
  display: 'none',
});

const checkBase = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: 17,
  height: 17,
  borderRadius: '50%',
});

export const check = styleVariants({
  default: [checkBase, { backgroundColor: vars.colors.icon.light }],
  checked: [checkBase, { backgroundColor: vars.colors.black }],
});

export const label = style({
  fontWeight: 600,
});
