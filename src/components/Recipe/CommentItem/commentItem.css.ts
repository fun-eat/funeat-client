import { style, styleVariants } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  gap: 6,
});

const baseText = style({
  color: '#3D3D3D',
  fontSize: '1.2rem',
});

export const commentItem = styleVariants({
  nickname: [baseText, { fontWeight: 600, whiteSpace: 'nowrap' }],
  content: [baseText, { fontWeight: 400 }],
});
