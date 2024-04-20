import { vars } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const main = style({
  paddingBottom: 70,
});

export const section = style({
  position: 'relative',
  margin: '12px 0 24px',
});

export const sortWrapper = style({
  position: 'absolute',
  top: 0,
  right: 20,
});

export const linkWrapper = style({
  position: 'fixed',
  left: '50%',
  bottom: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-end',
  width: '100%',
  height: 70,
  maxWidth: 440,
  padding: '0 20px',
  border: `1px solid ${vars.colors.border.default}`,
  backgroundColor: vars.colors.background.default,
  transform: 'translateX(-50%)',
});

export const link = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: 56,
  backgroundColor: vars.colors.primary,
  color: vars.colors.white,
  borderRadius: 6,
  fontWeight: 700,
});
