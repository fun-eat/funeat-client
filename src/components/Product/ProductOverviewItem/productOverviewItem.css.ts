import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  gap: 12,
});

export const detailWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 6,
});

export const priceRateWrapper = style({
  display: 'flex',
  gap: 8,
});

export const rateWrapper = style({
  display: 'flex',
  gap: 3,
});

export const productName = style({
  fontSize: 16,
});

export const priceRate = style({
  fontSize: 11,
  color: '#999999',
});
