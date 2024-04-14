import { vars } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  position: 'relative',
});

export const reviewTextarea = style({
  width: '100%',
  padding: '12px 16px',
  fontSize: '1.2rem',
  backgroundColor: vars.colors.background.category,
  border: 'none',
  resize: 'vertical',

  selectors: {
    '&::placeholder': {
      fontSize: '1.2rem',
      fontWeight: 500,
      color: vars.colors.gray3,
    },
  },
});

export const statusWrapper = style({
  position: 'absolute',
  bottom: 12,
  right: 16,
});

export const currentLength = style({
  color: vars.colors.black,
  fontWeight: 500,
});
