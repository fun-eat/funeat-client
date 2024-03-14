import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: 8,
});

export const title = style({
  fontSize: '1.8rem',
  fontWeight: 600,
});
