import { vars } from '@/styles/theme.css';
import { style, styleVariants } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  alignItems: 'flex-end',
  marginBottom: 24,
  gap: 8,
});

export const commentForm = style({
  display: 'flex',
  alignItems: 'flex-end',
  width: '100%',
  padding: '6px 16px',
  gap: 8,
  background: vars.colors.background.category,
  borderRadius: 20,
});

export const commentTextarea = style({
  width: '100%',
  height: '100%',
  padding: '6px 0',
  border: 'none',
  outline: 'none',
  background: 'none',
  fontSize: '1.4rem',
  resize: 'none',

  selectors: {
    '&:placeholder': {
      color: '#808080',
    },
  },
});

export const buttonWrapper = style({
  display: 'flex',
  alignItems: 'center',
  gap: 6,
});

export const sendButtonStyles = style({
  width: 36,
  borderRadius: 45,
  padding: '4px 10px',
});

export const sendButton = styleVariants({
  active: [sendButtonStyles, { background: vars.colors.primary }],
  disabled: [sendButtonStyles, { background: vars.colors.gray3 }],
});
