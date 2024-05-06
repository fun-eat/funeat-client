import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const wrapper = style({
  display: 'flex',
  alignItems: 'center',
  gap: 12,
});

export const priceRateWrapper = style({
  display: 'flex',
  gap: 8,
});

export const rateWrapper = style({
  display: 'flex',
  gap: 3,
});

export const priceRate = style({
  fontSize: 11,
  color: '#999999',
});

export const closeWrapper = style({
  marginRight: 15,
});
