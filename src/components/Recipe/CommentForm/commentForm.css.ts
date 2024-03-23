import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  gap: 8,
  alignItems: 'baseline',
  marginBottom: 24,
});

export const commentForm = style({
  width: '100%',
  height: 20,
});

export const commentTextarea = style({
  width: '100%',
  height: '100%',
  border: 'none',
  outline: 'none',

  selectors: {
    '&:placeholder': {
      color: '#808080',
    },
  },
});
