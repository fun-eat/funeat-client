import { style } from '@vanilla-extract/css';

export const selectSection = style({
  display: 'flex',
  gap: 8,
  padding: '0 20px',
  margin: '8px 0 11px',
});

export const selectButton = style({
  display: 'flex',
  gap: 4,
  padding: '6px 12px',
  fontSize: 12,
  border: '1px solid #e6e6e6',
  borderRadius: 61,
});

export const sortButton = style({
  fontWeight: 500,
});

export const categoryButton = style({
  fontWeight: 700,
});

export const listSection = style({
  marginBottom: 32,
});
