import { vars } from '@/styles/theme.css';
import { style, styleVariants } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  gap: 8,
});

export const uploadLabelBase = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: 80,
  height: 80,
  borderRadius: 6,
  cursor: 'pointer',
});

export const uploadLabel = styleVariants({
  default: [uploadLabelBase, { backgroundColor: vars.colors.background.category }],
  uploaded: [
    uploadLabelBase,
    { backgroundColor: vars.colors.background.default, border: `1px solid ${vars.colors.border.default}` },
  ],
});

export const uploadInput = style({
  display: 'none',
});

export const imageWrapper = style({
  position: 'relative',
  width: 80,
  height: 80,
});

export const image = style({
  objectFit: 'cover',
  borderRadius: 6,
});

export const deleteButton = style({
  position: 'absolute',
  top: 4,
  right: 4,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: 18,
  height: 18,
  borderRadius: '50%',
  backgroundColor: vars.colors.black,
  opacity: 0.5,
  cursor: 'pointer',
});
