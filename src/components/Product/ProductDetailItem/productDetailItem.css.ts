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
});

export const productInfo = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  padding: '0 20px',
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

export const productPrice = style({
  fontSize: '2.2rem',
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
  padding: '0 20px',
  marginTop: 16,
  whiteSpace: 'pre-line',
});

export const tagList = style({
  display: 'flex',
  gap: 8,
  padding: '0 20px',
  marginTop: 8,
});

export const tag = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: 26,
  padding: '0 10px',
  textAlign: 'center',
  borderRadius: 4,
  backgroundColor: '#f2f2f2',
});
