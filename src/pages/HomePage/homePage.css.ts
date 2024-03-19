import { style } from '@vanilla-extract/css';

export const sectionWrapper = style({
  margin: '28px 0 32px',
});

export const categorySection = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 20,
  padding: '20px 0 28px 0',
  background: '#f2f2f2',
});

export const categoryListWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 20,
});

export const rankingInfoWrapper = style({
  display: 'flex',
  gap: 2,
  margin: '8px 0 16px',
});

export const searchRouterWrapper = style({
  display: 'flex',
  justifyContent: 'space-between',
  width: 343,
  height: 40,
  padding: '10px 18px',
  color: '#808080',
  background: '#FFFFFF',
  borderRadius: 20,
  fontSize: '1.4rem',
});
