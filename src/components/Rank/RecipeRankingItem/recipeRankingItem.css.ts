import { style } from '@vanilla-extract/css';

export const recipeRankingImageWrapper = style({
  position: 'relative',
  width: 166,
  height: 146,
});

export const recipeRankingImage = style({
  width: '100%',
  height: '100%',
  borderRadius: '6px',
  objectFit: 'cover',
});

export const recipeRankingButtonWrapper = style({
  position: 'absolute',
  top: 8,
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
