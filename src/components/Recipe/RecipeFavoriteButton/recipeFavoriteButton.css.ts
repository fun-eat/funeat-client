import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  gap: 6,
  alignItems: 'center',
});

export const favoriteCountText = style({
  color: '#999999',
  fontSize: '1.4rem',
  fontWeight: 500,
});
