import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '0 20px',
});

export const title = style({
  fontSize: '1.6rem',
  fontWeight: 700,
});
