import { style } from '@vanilla-extract/css';

export const container = style({
  position: 'relative',
  width: 163,
});

export const productImage = style({
  border: '1px solid #e6e6e6',
  borderRadius: 6,
  objectFit: 'cover',
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
