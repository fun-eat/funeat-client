import { style } from '@vanilla-extract/css';

export const container = style({
  position: 'fixed',
  right: 20,
  width: 40,
  height: 40,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: '#F9F9F9',
  borderRadius: '50%',
});
