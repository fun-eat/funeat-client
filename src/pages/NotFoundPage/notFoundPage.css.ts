import { vars } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';

export const main = style({
  paddingTop: 50,
  height: calc.subtract('100vh', '50px'),
});

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
  padding: '0 20px',
  textAlign: 'center',
});

export const linkWrapper = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 124,
  height: 36,
  padding: '8px 16px',
  border: `1px solid ${vars.colors.border.default}`,
  borderRadius: 44,
});
