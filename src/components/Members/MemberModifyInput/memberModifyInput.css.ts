import { vars } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  position: 'relative',
  width: '100%',
  border: `1px solid ${vars.colors.border.default}`,
  borderRadius: 6,
  boxSizing: 'border-box',

  selectors: {
    '&:focus-within': {
      outline: `1px solid ${vars.colors.primary}`,
      border: `1px solid transparent`,
    },
  },
});

export const inputWrapper = style({
  width: '90%',
  height: 44,
  paddingLeft: 16,
  outline: 'none',
});

export const letterCount = style({
  position: 'absolute',
  width: '10%',
  top: 14.5,
  right: 16,
  display: 'flex',
  alignItems: 'center',
  background: vars.colors.white,
});
