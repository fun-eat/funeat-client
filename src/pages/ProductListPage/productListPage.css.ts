import { style, styleVariants } from '@vanilla-extract/css';

export const tabMenuWrapper = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const tabMenu = style({
  flexGrow: 1,
  width: '50%',
  height: 40,
  textAlign: 'center',
  borderBottom: '1px solid #e6e6e6',
});

const menuNameBase = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
});

export const menuName = styleVariants({
  active: [menuNameBase, { fontWeight: 700, color: '#232527', borderBottom: '3px solid #444' }],
  default: [menuNameBase, { fontWeight: 600, color: '#999' }],
});

export const productSection = style({
  padding: '28px 0',
});

export const listWrapper = style({
  marginBottom: 32,

  selectors: {
    '&:last-of-type': {
      marginBottom: 0,
    },
  },
});

export const list = style({
  overflowX: 'auto',
});
