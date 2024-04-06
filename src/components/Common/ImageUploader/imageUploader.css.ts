import { vars } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const uploadLabel = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: 80,
  height: 80,
  backgroundColor: vars.colors.background.category,
  borderRadius: 6,
  cursor: 'pointer',
});

export const uploadInput = style({
  display: 'none',
});
