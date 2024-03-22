import { style } from '@vanilla-extract/css';

export const link = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 6,
});

export const imageWrapper = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 6,
});

export const categoryImage = style({
  objectFit: 'cover',
});

export const circle = style({
  borderRadius: '50%',
});

export const bordered = style({
  border: '1px solid #e6e6e6',
});

export const categoryName = style({
  fontSize: '1.2rem',
  lineHeight: 1.4,
});
