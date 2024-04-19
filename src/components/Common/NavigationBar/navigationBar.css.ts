import { vars } from '@/styles/theme.css';
import { style, styleVariants } from '@vanilla-extract/css';

export const container = style({
  position: 'fixed',
  bottom: 0,
  left: '50%',
  width: '100%',
  maxWidth: 440,
  backgroundColor: vars.colors.white,
  transform: 'translateX(-50%)',
});

export const list = style({
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'flex-end',
  height: 60,
  borderTop: `1px solid ${vars.colors.border.light}`,
});

export const link = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 6,
  justifyContent: 'center',
  alignItems: 'center',
});

const menuNameBase = style({
  fontSize: 11,
  textAlign: 'center',
});

export const menuName = styleVariants({
  active: [menuNameBase, { color: vars.colors.primary }],
  default: [menuNameBase, { color: vars.colors.gray3 }],
});
