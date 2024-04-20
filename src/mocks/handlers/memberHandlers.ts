import { rest } from 'msw';

import mockMember from '../data/members.json';
import mockMemberRecipes from '../data/memberRecipes.json';
import mockMemberReviews from '../data/memberReviews.json';

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

  rest.delete('/api/members/reviews/:reviewId', (req, res, ctx) => {
    return res(ctx.status(204));
  }),
];
