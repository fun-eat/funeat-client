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

export const moreLink = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

export const moreIconWrapper = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: 40,
  height: 40,
  marginBottom: 12,
  borderRadius: '50%',
  background: vars.colors.secondary1,
});

export const moreIcon = style({
  transform: 'rotate(180deg)',
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
