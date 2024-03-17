import { style } from '@vanilla-extract/css';

export const imageWrapper = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '10px',
});

export const categoryImage = style({
  objectFit: 'cover',
});

export const circle = style({
  borderRadius: '50%',
});

export const categoryName = style({
  marginTop: 6,
  fontSize: '1.2rem',
  lineHeight: 1.4,
});
