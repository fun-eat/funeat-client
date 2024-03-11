import { style } from '@vanilla-extract/css';

export const container = style({
  width: 166,
});

export const reviewImage = style({
  borderRadius: '6px',
  objectFit: 'cover',
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
  display: 'flex',
  gap: 8,
});

export const tag = style({
  width: 63,
  height: 26,
  color: '#232527',
  fontSize: 11,
  fontWeight: 500,
  lineHeight: '26px',
  textAlign: 'center',
  borderRadius: '2px',
  backgroundColor: '#ddd',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});
