import { style } from '@vanilla-extract/css';

export const recipeRankingImageWrapper = style({
  position: 'relative',
  width: 166,
  height: 146,
});

export const recipeRankingImage = style({
  width: 166,
  height: 146,
  borderRadius: '6px',
});

export const recipeRankingButtonWrapper = style({
  position: 'absolute',
  top: 10,
  right: 8,
});

export const recipeRankingTitle = style({
  fontSize: 14,
  fontWeight: 600,
  color: '#232527',
});

export const recipeRankingInfo = style({
  fontSize: 12,
  color: '#808080',
});
