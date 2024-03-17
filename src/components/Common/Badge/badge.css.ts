import { createVar, style } from '@vanilla-extract/css';

export const outline = createVar();
export const fill = createVar();
export const text = createVar();

const baseBadgeStyle = {
  width: 'fit-content',
  padding: '5.5px 12px',
  fontSize: 12,
  color: text,
  borderRadius: 6,
};

export const outlinedBadge = style({
  ...baseBadgeStyle,
  border: outline,
});

export const filledBadge = style({
  ...baseBadgeStyle,
  background: fill,
});
