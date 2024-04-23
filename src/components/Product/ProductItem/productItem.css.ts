import { style } from '@vanilla-extract/css';

export const container = style({
  position: 'relative',
});

export const imageWrapper = style({
  position: 'relative',
  width: '100%',
});

export const productImage = style({
  width: '100%',
  height: 'auto',
  minWidth: 163,
  objectFit: 'cover',
  aspectRatio: '1 / 1',
});

export const summaryWrapper = style({
  display: 'flex',
  gap: 12,
});

export const previewWrapper = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 4,
});

export const preview = style({
  paddingTop: 2,
  fontSize: 12,
  fontWeight: 500,
  lineHeight: 1.4,
  color: '#999',
});
