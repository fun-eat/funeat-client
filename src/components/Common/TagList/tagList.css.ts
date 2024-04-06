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
  color: vars.colors.text.info,
  fontSize: '1.1rem',
  fontWeight: 500,
  textAlign: 'center',
  borderRadius: 4,
  backgroundColor: vars.colors.background.category,
});
