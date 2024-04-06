import { style } from '@vanilla-extract/css';

export const memberInfo = style({
  display: 'flex',
  alignItems: 'center',
  gap: 8,
});

export const memberImage = style({
  borderRadius: '50%',
  objectFit: 'cover',
});

export const memberName = style({
  fontWeight: 600,
});

export const favoriteWrapper = style({
  marginLeft: 'auto',
});
