import { vars } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const markText = style({
  color: vars.colors.primary,
  fontWeight: 700,
  background: vars.colors.background.default,
});
