import { vars } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const formInput = style({
  width: '100%',
  padding: '12px 16px',
  fontSize: '1.2rem',
  backgroundColor: vars.colors.border.light,
  border: 'none',
  borderRadius: 6,
  resize: 'vertical',

  selectors: {
    '&::placeholder': {
      fontSize: '1.2rem',
      fontWeight: 500,
      color: vars.colors.gray3,
    },

    '&:invalid': {
      border: `1px solid ${vars.colors.error}`,
    },
  },
});
