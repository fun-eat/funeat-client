import { createVar, style, styleVariants } from '@vanilla-extract/css';

const categoryBorder = createVar();
const categoryColor = createVar();

export const selectSection = style({
  display: 'flex',
  gap: 8,
  padding: '0 20px',
  margin: '8px 0 11px',
});

export const listSection = style({
  marginBottom: 32,
});

export const selectButton = style({
  display: 'flex',
  gap: 4,
  padding: '6px 12px',
  fontSize: 12,
  border: '1px solid #e6e6e6',
  borderRadius: 61,
});

export const sortButton = style({
  fontWeight: 500,
});

export const categoryButtonBase = style({
  fontWeight: 700,
});

export const cu = style({
  vars: {
    [categoryBorder]: '#aace37',
    [categoryColor]: '#652d8d',
  },
  color: categoryColor,
  borderColor: categoryBorder,
});

export const gs = style({
  vars: {
    [categoryBorder]: '#00d4ea',
    [categoryColor]: '#007cff',
  },
  color: categoryColor,
  borderColor: categoryBorder,
});

export const emart = style({
  vars: {
    [categoryBorder]: '#ffb81c',
    [categoryColor]: '#63666a',
  },
  color: categoryColor,
  borderColor: categoryBorder,
});

export const sevenEleven = style({
  vars: {
    [categoryBorder]: '#147350',
    [categoryColor]: '#eb0f2a',
  },
  color: categoryColor,
  borderColor: categoryBorder,
});

export const categoryButton = styleVariants({
  CU: [categoryButtonBase, cu],
  GS25: [categoryButtonBase, gs],
  이마트24: [categoryButtonBase, emart],
  세븐일레븐: [categoryButtonBase, sevenEleven],
});
