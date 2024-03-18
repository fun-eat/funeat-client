import { createVar, style, styleVariants } from '@vanilla-extract/css';

export const outline = createVar();
export const fill = createVar();
export const text = createVar();

const baseBadgeStyle = style({
  width: 'fit-content',
  padding: '5.5px 12px',
  fontSize: 12,
  color: text,
  borderRadius: 6,
  whiteSpace: 'nowrap',
});

export const badge = styleVariants({
  outlined: [baseBadgeStyle, { border: outline }],
  filled: [baseBadgeStyle, { background: fill }],
});
