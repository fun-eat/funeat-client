import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  rowGap: 40,
  padding: '0 20px',
});

export const notFound = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 6,
  textAlign: 'center',
});
