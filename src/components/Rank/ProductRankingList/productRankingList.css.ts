import { globalStyle, style } from '@vanilla-extract/css';

export const productRankingListContainer = style({
  display: 'flex',
  overflowX: 'auto',
  overflowY: 'hidden',
  columnGap: '9px',
});

globalStyle(`${productRankingListContainer}::-webkit-scrollbar`, {
  display: 'none',
});
