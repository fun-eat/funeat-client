import { vars } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  position: 'fixed',
  top: 0,
  left: '50%',
  width: '100%',
  maxWidth: 440,
  height: 50,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: vars.colors.white,
  transform: 'translateX(-50%)',
  zIndex: 1001,
});

export const LeftNavigationWrapper = style({
  display: 'flex',
  alignItems: 'center',
});

export const leftTitle = style({
  marginLeft: 6,
  color: vars.colors.black,
  fontSize: 18,
  fontWeight: 600,
});

export const headerTitle = style({
  color: vars.colors.black,
  fontSize: 18,
  fontWeight: 600,
});

export const register = style({
  selectors: {
    'button:disabled > &': {
      color: vars.colors.text.disabled,
    },
  },
});
