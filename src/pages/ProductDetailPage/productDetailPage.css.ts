import { vars } from '@/styles/theme.css';
import { style, styleVariants } from '@vanilla-extract/css';

export const section = style({
  margin: '12px 0 24px',
});

export const registerButtonWrapper = style({
  position: 'fixed',
  left: '50%',
  bottom: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-end',
  width: '100%',
  height: 70,
  maxWidth: 400,
  padding: '0 20px',
  border: `1px solid ${vars.colors.border.default}`,
  backgroundColor: vars.colors.background.default,
  transform: 'translateX(-50%)',
});

const registerButtonBase = style({
  width: '100%',
  height: 56,
  backgroundColor: vars.colors.primary,
  color: vars.colors.white,
  borderRadius: 6,
  fontWeight: 700,
});

export const registerButton = styleVariants({
  active: [registerButtonBase, { backgroundColor: vars.colors.primary }],
  disabled: [registerButtonBase, { backgroundColor: vars.colors.background.tag }],
});