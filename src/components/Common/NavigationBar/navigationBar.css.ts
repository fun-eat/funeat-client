import { style, styleVariants } from '@vanilla-extract/css';

export const navigationBarContainer = style({
  width: '100%',
  height: 70,
  paddingBottom: 6,
});

export const navigationList = style({
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  height: '100%',
  border: '1px solid #f9f9f9',
});

export const navigationLink = style({
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
