import { style, styleVariants } from '@vanilla-extract/css';

export const container = style({
  position: 'fixed',
  bottom: 0,
  left: '50%',
  width: '100%',
  maxWidth: 400,
  height: 70,
  backgroundColor: '#fff',
  transform: 'translateX(-50%)',
});

export const list = style({
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  height: '100%',
  border: '1px solid #f9f9f9',
});

export const link = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 6,
  justifyContent: 'center',
  alignItems: 'center',
});

const menuNameBase = style({
  fontSize: 11,
  textAlign: 'center',
  lineHeight: 1.4,
});

export const menuName = styleVariants({
  active: [menuNameBase, { color: '#ffb017' }],
  default: [menuNameBase, { color: '#a0a0a0' }],
});
