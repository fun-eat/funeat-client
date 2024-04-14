import { vars } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  rowGap: '30px',
});

export const productImage = style({
  width: '100%',
  objectFit: 'cover',
});

export const productOverview = style({
  margin: '20px 0 25px',
  padding: '0 20px',
});

export const productInfo = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
});

export const productDetails = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
});

export const categoryName = style({
  color: vars.colors.gray4,
});

export const productName = style({
  fontSize: '1.6rem',
  fontWeight: 600,
  lineHeight: 1.4,
});

export const summaryWrapper = style({
  display: 'flex',
  gap: 12,
});

export const previewWrapper = style({
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'center',
  gap: 4,
});

export const productContent = style({
  margin: '16px 0 8px',
  whiteSpace: 'pre-line',
});
