import { style } from '@vanilla-extract/css';

export const container = style({
  position: 'fixed',
  top: 0,
  left: '50%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  height: 50,
  maxWidth: 400,
  backgroundColor: '#fff',
  transform: 'translateX(-50%)',
  zIndex: 1001,
});
