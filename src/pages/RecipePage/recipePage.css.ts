import { style } from '@vanilla-extract/css';

export const container = style({
  padding: '0 20px',
  height: '100vh',
  overflowY: 'scroll',
});

export const sortButtonWrapper = style({
  display: 'flex',
  justifyContent: 'flex-end',
});

export const floatingButtonWrapper = style({
  position: 'sticky',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  float: 'right',
  bottom: 80,
  gap: 8,
});
