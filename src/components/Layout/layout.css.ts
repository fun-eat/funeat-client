import { style, styleVariants } from '@vanilla-extract/css';

export const containerBase = style({
  position: 'relative',
});

export const container = styleVariants({
  default: [containerBase, { padding: '50px 0 70px' }],
  minimal: [containerBase, { paddingTop: 50 }],
});
