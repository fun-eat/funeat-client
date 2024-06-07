import { vars } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  justifyContent: 'space-between',
  gap: 10,
  padding: '0 20px',
  overflowX: 'auto',
});

export const reviewItemWrapper = style({
  maxWidth: 164,
});

export const bottomSheetWrapper = style({
  padding: '40px 20px',
});

export const productLink = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: 56,
  background: vars.colors.primary,
  borderRadius: 6,
});
