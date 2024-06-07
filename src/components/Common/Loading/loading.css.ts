import { vars } from '@/styles/theme.css';
import { keyframes, style } from '@vanilla-extract/css';

const loadingAnimation = keyframes({
  '0%': {
    opacity: 0,
    transform: `scale(0.5)`,
  },
  '50%': {
    opacity: 1,
    transform: `scale(1.1)`,
  },
  '100%': {
    opacity: 0,
    transform: `scale(0.5)`,
  },
});

export const container = style({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 24,
});

export const wrapper = style({
  display: 'flex',
  gap: 15,
});

export const loadingDot = style({
  display: 'inline-block',
  width: 12,
  height: 12,
  borderRadius: '50%',
  background: vars.colors.primary,
  animation: `${loadingAnimation} 1s linear infinite`,

  selectors: {
    '&:nth-child(1)': {
      animationDelay: '0s',
    },
    '&:nth-child(2)': {
      animationDelay: '0.2s',
    },
    '&:nth-child(3)': {
      animationDelay: '0.4s',
    },
  },
});
