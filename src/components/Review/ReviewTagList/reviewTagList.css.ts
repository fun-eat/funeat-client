import { vars } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 32,
});

export const itemTitle = style({
  fontSize: '1.6rem',
  fontWeight: 600,
  marginBottom: 12,
});

export const tagList = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: 4,
});

export const checkbox = style({
  display: 'none',
});

export const tagLabel = style({
  display: 'inline-block',
  padding: '6px 12px',
  borderRadius: 30,
  backgroundColor: vars.colors.background.category,
  fontSize: '1.4rem',
  fontWeight: 500,
  cursor: 'pointer',
  userSelect: 'none',

  selectors: {
    [`${checkbox}:checked + &`]: {
      backgroundColor: vars.colors.gray5,
      color: vars.colors.white,
    },
  },
});
