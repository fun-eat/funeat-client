import { style, styleVariants } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 20,
  margin: '48px 0',
});

export const item = style({
  height: 22,
  padding: '0 20px',
});

export const optionButtonBase = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  height: '100%',
});

export const optionButton = styleVariants({
  default: [optionButtonBase, { color: '#999', fontWeight: 400 }],
  active: [optionButtonBase, { fontWeight: 700 }],
});
