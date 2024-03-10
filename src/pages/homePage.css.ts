import { style } from '@vanilla-extract/css';

export const sectionWrapper = style({
  padding: '0 20px',
});

export const categoryListWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 20,
  padding: '20px 0 28px 0',
  background: '#f2f2f2',
});

export const rankingInfoWrapper = style({
  display: 'flex',
  gap: 2,
  alignItems: 'center',
  margin: '8px 0 16px',
});
