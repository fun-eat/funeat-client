import { style } from '@vanilla-extract/css';

export const container = style({
  width: '100%',
  height: 50,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const headerTitle = style({
  color: '#232527',
  fontSize: 18,
  fontWeight: 600,
});
