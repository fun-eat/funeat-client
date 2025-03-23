import { vars } from '@/styles/theme.css';
import { keyframes, style } from '@vanilla-extract/css';

const fadeOut = keyframes({
  '0%': {
    transform: 'translateY(70px)',
    opacity: 1,
  },
  '100%': {
    transform: 'translateY(70px)',
    opacity: 0,
  },
});

const slideIn = keyframes({
  '0%': {
    transform: 'translateY(-100px)',
  },
  '100%': {
    transform: 'translateY(70px)',
  },
});

export const container = style({
  position: 'fixed',
  zIndex: 1000,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  transform: 'translate(0, -10px)',
});

export const wrapper = style({
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  width: 'calc(100% - 20px)',
  height: 55,
  maxWidth: 560,
  borderRadius: 10,
  background: vars.colors.black,
  selectors: {
    '&.isError': {
      backgroundColor: vars.colors.error,
    },
    '&.isShown': {
      animation: `${slideIn} 0.3s ease-in-out forwards`,
    },
    '&:not(.isShown)': {
      animation: `${fadeOut} 0.3s ease-in-out forwards`,
    },
  },
});

export const isError = style({
  background: vars.colors.error,
});

export const toastMessage = style({
  marginLeft: 20,
});
