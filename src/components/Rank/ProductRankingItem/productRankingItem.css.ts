import { style } from '@vanilla-extract/css';

export const container = style({
  width: 144,
});

export const imageWrapper = style({
  position: 'relative',
  width: '100%',
  height: 144,
  border: '1px solid #E6E6E6',
  borderRadius: 6,
});

export const productImage = style({
  width: '100%',
  height: '100%',
  borderRadius: 6,
});

export const productRank = style({
  position: 'absolute',
  top: 10,
  left: 10,
  color: '#808080',
  fontSize: 36,
  fontFamily: 'Poppins, sans-serif',
  fontStyle: 'italic',
  fontWeight: '500',
});

export const productTitle = style({
  color: '#232527',
  fontSize: 13,
  fontWeight: 600,
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
});

export const productPrice = style({
  color: '#808080',
  fontSize: 12,
  fontWeight: 600,
});
