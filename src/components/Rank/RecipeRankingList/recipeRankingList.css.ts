import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  justifyContent: 'space-between',
  rowGap: 20,
  flexWrap: 'wrap',
  padding: '0 20px',
});
