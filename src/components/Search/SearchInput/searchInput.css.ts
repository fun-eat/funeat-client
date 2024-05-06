import { vars } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const inputContainer = style({
  position: 'relative',
  marginTop: 5,

  selectors: {
    '&:focus-within': {
      outline: `1px solid ${vars.colors.primary}`,
      borderRadius: '20px',
    },
  },
});

export const searchInput = style({
  width: '90%',
  height: 40,
  padding: '10px 0 10px 18px',
  background: vars.colors.background.category,
  borderRadius: '20px 0 0 20px',
  fontSize: '1.4rem',
  outline: 'none',

  selectors: {
    '&:placeholder': {
      color: vars.colors.gray3,
    },
  },
});

export const tagInputWrapper = style({
  position: 'absolute',
  top: 5,
  left: 6,
  display: 'flex',
  alignItems: 'baseline',
  gap: 6,
  width: 'fit-content',
  padding: '5px 12px',
  background: vars.colors.white,
  borderRadius: 20,
});

export const iconWrapperButton = style({
  position: 'absolute',
  top: 0,
  right: 0,
  display: 'flex',
  alignItems: 'center',
  width: '10%',
  height: 40,
  paddingLeft: 4,
  background: vars.colors.background.category,
  borderRadius: '0 20px 20px 0',
});
