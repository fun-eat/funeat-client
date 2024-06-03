import { vars } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

export const buttonWrapper = style({
  display: 'flex',
  justifyContent: 'center',
});

export const button = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 124,
  height: 36,
  padding: '8px 16px',
  border: `1px solid ${vars.colors.border.default}`,
  borderRadius: 44,
});
