import { style } from '@vanilla-extract/css';

export const recipeRankingContainer = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  columnGap: '10px',
  rowGap: '20px',
});
