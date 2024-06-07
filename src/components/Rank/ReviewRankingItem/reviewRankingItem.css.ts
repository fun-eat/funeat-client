import { vars } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const reviewImage = style({
  width: '100%',
  height: 90,
  borderRadius: '6px',
  objectFit: 'cover',
  aspectRatio: '164 / 90',
});

export const reviewContent = style({
  display: '-webkit-inline-box',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
});

export const tagList = style({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 24px',
  columnGap: 4,
});

export const tag = style({
  height: 26,
  padding: '0 4px',
  textAlign: 'center',
  borderRadius: 4,
  backgroundColor: vars.colors.gray2,
});

export const tagName = style({
  display: 'inline-block',
  lineHeight: '26px',
});
