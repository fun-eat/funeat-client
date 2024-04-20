import { vars } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  gap: 10,
  padding: '0 10px 0 20px',
  overflowX: 'auto',
});

export const moreItem = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minWidth: 108,
});

export const notFound = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 6,
  textAlign: 'center',
});

export const recipeLink = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: 34,
  padding: '0 16px',
  backgroundColor: vars.colors.gray2,
  borderRadius: 44,
});
