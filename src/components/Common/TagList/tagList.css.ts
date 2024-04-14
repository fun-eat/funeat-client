import { vars } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const tagList = style({
  display: 'flex',
  gap: 4,
});

export const tag = style({
  display: 'flex',
  alignItems: 'center',
  height: 23,
  padding: '0 6px',
  textAlign: 'center',
  borderRadius: 4,
  backgroundColor: vars.colors.background.category,
});
