import { style } from '@vanilla-extract/css';

export const recipeRankingContainer = style({
  display: 'flex',
  flexWrap: 'wrap',
});

export const recipeRankingItemList = style({
  flex: '0 50%',
  marginBottom: 20,
});
