import { vars } from '@/styles/theme.css';
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

export const ratingWrapper = style({
  display: 'flex',
  alignItems: 'center',
  gap: 8,
});

export const ratingInfo = style({
  display: 'flex',
  alignItems: 'center',
  gap: 4,
});

export const sub = style({
  paddingTop: 4,
});

export const ratingNumber = style([
  sub,
  {
    fontSize: '1.2rem',
    color: vars.colors.gray5,
    fontWeight: 500,
  },
]);

export const date = style([
  sub,
  {
    fontSize: '1.1rem',
    fontWeight: 500,
    color: vars.colors.text.disabled,
  },
]);
