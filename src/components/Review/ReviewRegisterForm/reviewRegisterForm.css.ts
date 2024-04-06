import { vars } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const itemTitle = style({
  fontSize: '1.3rem',
  fontWeight: 600,
  marginBottom: 8,
});

export const requiredMark = style({
  color: vars.colors.error,
});
