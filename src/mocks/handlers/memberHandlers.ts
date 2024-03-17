import { rest } from 'msw';

import mockMemberRecipes from '../data/memberRecipes.json';
import mockMemberReviews from '../data/memberReviews.json';

export const memberHandlers = [
  rest.get('/api/members', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        nickname: '냐미',
        profileImage:
          'https://github.com/woowacourse-teams/2023-fun-eat/assets/78616893/991f7b69-53bf-4d03-96e1-988c34d010ed',
      })
    );
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
