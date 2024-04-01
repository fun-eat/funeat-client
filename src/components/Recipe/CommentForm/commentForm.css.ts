import { vars } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  gap: 8,
  alignItems: 'center',
  marginBottom: 24,
  padding: '6px 13px 6px 6px',
  background: vars.colors.background.category,
  borderRadius: 20,
});

export const commentForm = style({
  display: 'flex',
  gap: 8,
  alignItems: 'center',
  width: '100%',
});

export const commentTextarea = style({
  width: '100%',
  height: '100%',
  border: 'none',
  outline: 'none',
  background: 'none',
  fontSize: '1.4rem',

  selectors: {
    '&:placeholder': {
      color: '#808080',
    },
  },
});
