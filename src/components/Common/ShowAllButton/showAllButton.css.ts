import { vars } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const linkWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
  alignItems: 'center',
  width: 45,
});

export const moreIconWrapper = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: 40,
  height: 40,
  borderRadius: '50%',
  background: vars.colors.secondary1,
});
