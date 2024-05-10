import { vars } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const addProduct = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: 44,
  border: `1px solid ${vars.colors.border.default}`,
  borderRadius: 6,
});

export const disabled = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: 44,
  background: vars.colors.background.category,
  border: 'none',
  borderRadius: 6,
  cursor: 'not-allowed',
});

export const iconWrapper = style({
  marginLeft: 4,
  transform: 'translateY(2.5px)',
});
