import { style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';

export const notFoundContainer = style({
  height: calc.subtract('100vh', '50px'),
});

export const notFound = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
  gap: 6,
  textAlign: 'center',
});

export const previewContainer = style({
  display: 'flex',
  gap: 10,
  padding: '0 10px 0 20px',
  overflowX: 'auto',
});

export const moreItem = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minWidth: 108,
});

export const main = style({
  paddingTop: 50,
});

export const container = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gridAutoRows: 'auto',
  columnGap: 10,
  rowGap: 20,
  padding: '0 20px',
});
