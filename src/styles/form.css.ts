import { vars } from './theme.css';

import { style, styleVariants } from '@vanilla-extract/css';

export const itemTitle = style({
  fontSize: '1.3rem',
  fontWeight: 600,
  marginBottom: 8,
});

export const requiredMark = style({
  color: vars.colors.error,
});

export const errorWrapperBase = style({
  display: 'flex',
  alignItems: 'center',
  gap: 4,
});

export const errorWrapper = styleVariants({
  show: [errorWrapperBase, { opacity: 1 }],
  hidden: [errorWrapperBase, { opacity: 0 }],
});

export const errorMessage = style({
  color: vars.colors.error,
});
