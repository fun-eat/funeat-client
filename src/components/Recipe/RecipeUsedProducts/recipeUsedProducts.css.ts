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
