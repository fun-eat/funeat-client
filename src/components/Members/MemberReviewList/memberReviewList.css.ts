import { style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';

export const notFoundContainer = style({
  height: calc.subtract('100vh', '110px'),
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
