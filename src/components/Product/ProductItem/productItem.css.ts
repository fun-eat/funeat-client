import { style } from '@vanilla-extract/css';

export const container = style({
  position: 'relative',
});

export const productImage = style({
  width: '100%',
  height: 'auto',
  minWidth: 163,
  border: '1px solid #e6e6e6',
  borderRadius: 6,
  objectFit: 'cover',
  aspectRatio: '1 / 1',
});

export const productName = style({
  fontWeight: 600,
  lineHeight: 1.4,
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});

export const productPrice = style({
  fontWeight: 500,
  lineHeight: 1.4,
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
