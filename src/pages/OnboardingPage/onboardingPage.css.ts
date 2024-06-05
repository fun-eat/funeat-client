import { vars } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  height: '100%',
  padding: '0 20px',
});

export const contentWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

export const titleWrapper = style({
  width: 'fit-content',
  padding: '6px 16px',
  borderRadius: 40,
  background: vars.colors.black,
});

export const link = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: 48,
  padding: 16,
  backgroundColor: vars.colors.primary,
});

export const descriptionText = style({
  whiteSpace: 'pre-wrap',
  textAlign: 'center',
});
