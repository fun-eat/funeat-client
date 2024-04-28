import { vars } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  padding: '50px 20px 0 20px',
});

export const imageUploaderContainer = style({
  display: ' flex',
  justifyContent: 'center',
});

export const imageUploaderWrapper = style({
  position: 'relative',
});

export const profileImageWrapper = style({
  width: 84,
  height: 84,
  borderRadius: '50%',
  overflow: 'hidden',
});

export const profileImage = style({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

export const imageUploaderLabel = style({
  position: 'absolute',
  top: 54,
  right: -5,
  width: 24,
  height: 24,
  background: vars.colors.white,
  border: `1px solid ${vars.colors.border.default}`,
  borderRadius: '50%',
  textAlign: 'center',
  cursor: 'pointer',
});

export const imageUploaderInput = style({
  display: 'none',
});

export const imageUploaderIcon = style({
  transform: 'translateY(1px)',
});

export const buttonWrapper = style({
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
  borderTop: `1px solid ${vars.colors.border.default}`,
  background: vars.colors.background.default,
  transform: 'translateX(-50%)',
});

export const button = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: 56,
  background: vars.colors.primary,
  color: vars.colors.white,
  borderRadius: 6,
  fontWeight: 700,

  selectors: {
    '&:disabled': {
      background: vars.colors.text.disabled,
    },
  },
});
