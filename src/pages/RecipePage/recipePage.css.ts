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
  right: 16,
  bottom: 100,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  float: 'right',
  gap: 8,
});
