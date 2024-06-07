import { rest } from 'msw';

import mockMemberRecipeBookmark from '../data/memberRecipeBookmark.json';
import mockMemberRecipes from '../data/memberRecipes.json';
import mockMemberReviews from '../data/memberReviews.json';
import mockMember from '../data/members.json';

export const memberHandlers = [
  rest.get('/api/members', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockMember));
  }),

  rest.put('/api/members', (req, res, ctx) => {
    return res(ctx.status(200));
  }),

  rest.get('/api/members/reviews', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockMemberReviews));
  }),

  rest.get('/api/members/recipes', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockMemberRecipes));
  }),

  rest.get('/api/members/recipes/bookmark', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockMemberRecipeBookmark));
  }),

  rest.delete('/api/members/reviews/:reviewId', (req, res, ctx) => {
    return res(ctx.status(204));
  }),
];
