import { vars } from '@/styles/theme.css';
import { style, styleVariants } from '@vanilla-extract/css';

export const favoriteButton = style({
  display: 'flex',
  alignItems: 'center',
  gap: 4,
  cursor: 'pointer',
});

export const countBase = style({
  fontSize: '1.4rem',
  fontWeight: 500,
});

export const count = styleVariants({
  favorite: [countBase, { color: vars.colors.gray4 }],
  default: [countBase, { color: vars.colors.gray3 }],
});
