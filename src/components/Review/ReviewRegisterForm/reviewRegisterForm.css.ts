import { vars } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const itemTitle = style({
  fontSize: '1.3rem',
  fontWeight: 600,
  marginBottom: 8,
});

export const requiredMark = style({
  color: vars.colors.error,
});

export const tagAddButton = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: 44,
  fontSize: '1.4rem',
  fontWeight: 500,
  borderRadius: 6,
  border: `1px solid ${vars.colors.border.default}`,
  color: vars.colors.gray3,
});

export const tagList = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: 4,
  marginTop: 12,
});

export const tagButton = style({
  display: 'flex',
  alignItems: 'center',
  gap: 4,
  height: 28,
  padding: '0 6px',
  borderRadius: 4,
  backgroundColor: vars.colors.gray2,
});
