import { vars } from '@/styles/theme.css';
import { style, styleVariants } from '@vanilla-extract/css';

export const container = style({
  position: 'relative',
});

export const formTextarea = style({
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

export const statusWrapper = style({
  position: 'absolute',
  bottom: 28,
  right: 16,
});

export const currentLength = style({
  color: vars.colors.black,
  fontWeight: 500,
});

export const errorWrapperBase = style({
  display: 'flex',
  alignItems: 'center',
  gap: 4,
});

export const errorWrapper = styleVariants({
  show: [errorWrapperBase, { opacity: 1 }],
  hidden: [errorWrapperBase, { opacity: 0 }],
});

export const errorMessage = style({
  color: vars.colors.error,
});
