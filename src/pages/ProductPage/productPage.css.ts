import { vars } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const tabMenuWrapper = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const tabMenu = style({
  flexGrow: 1,
  width: '50%',
  height: 40,
  textAlign: 'center',
  borderBottom: `1px solid ${vars.colors.border.default}`,
});

export const categorySection = style({
  margin: '28px 0 24px',
});

export const productSection = style({
  margin: '28px 0 36px',
});

export const list = style({
  overflowX: 'auto',
});
