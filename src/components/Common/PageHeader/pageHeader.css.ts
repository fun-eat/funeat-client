import { style } from '@vanilla-extract/css';

export const container = style({
  position: 'fixed',
  top: 0,
  left: '50%',
  width: '100%',
  maxWidth: 400,
  height: 50,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0 20px',
  backgroundColor: '#fff',
  transform: 'translateX(-50%)',
  zIndex: 1001,
});

export const headerTitle = style({
  color: '#232527',
  fontSize: 18,
  fontWeight: 600,
});
