import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 20,
});

export const showMoreButton = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: 38,
  padding: '9px 0',
  margin: '20px 0',
  background: '#efefef',
  fontSize: 14,
  borderRadius: 6,
});
