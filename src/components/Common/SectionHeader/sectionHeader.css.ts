import { style } from '@vanilla-extract/css';

export const headerContainer = style({
  display: 'flex',
  justifyContent: 'space-between',
});

export const headerTitle = style({
  fontSize: '1.8rem',
  fontWeight: 600,
});
