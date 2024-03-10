import { style } from '@vanilla-extract/css';

export const headerWithSearchContainer = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: 'calc(100% - 40px)',
  height: 60,
  margin: '0 auto',
});

export const headerContainer = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: 60,
});
