import { vars } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const reviewImage = style({
  width: '100%',
  height: 'auto',
  minWidth: 164,
  borderRadius: '6px',
  objectFit: 'cover',
  aspectRatio: '164 / 90',
});

export const reviewTitle = style({
  fontSize: 13,
  fontWeight: 600,
  color: '#3d3d3d',
});

export const reviewContent = style({
  fontSize: 11,
  color: '#808080',
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
