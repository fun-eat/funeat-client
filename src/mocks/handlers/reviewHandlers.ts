import { rest } from 'msw';

import { isReviewSortOption, isSortOrder } from './utils';
import mockReviewDetail from '../data/reviewDetail.json';
import mockReviewRanking from '../data/reviewRankingList.json';
import mockReviews from '../data/reviews.json';
import mockReviewTags from '../data/reviewTagList.json';

import type { ReviewFavoriteRequestBody } from '@/types/review';

export const reviewHandlers = [
  rest.get('/api/products/:productId/reviews', (req, res, ctx) => {
    const sortOptions = req.url.searchParams.get('sort');

    if (sortOptions === null) {
      return res(ctx.status(400));
    }

    const [key, sortOrder] = sortOptions.split(',');

    if (!isReviewSortOption(key) || !isSortOrder(sortOrder)) {
      return res(ctx.status(400));
    }

    const sortedReviews = {
      ...mockReviews,
      reviews: [...mockReviews.reviews].sort((cur, next) => {
        if (key === 'createdAt') {
          return sortOrder === 'asc'
            ? new Date(cur[key]).getTime() - new Date(next[key]).getTime()
            : new Date(next[key]).getTime() - new Date(cur[key]).getTime();
        }

        return sortOrder === 'asc' ? cur[key] - next[key] : next[key] - cur[key];
      }),
    };

    return res(
      ctx.status(200),
      ctx.json({ hasNext: sortedReviews.hasNext, reviews: sortedReviews.reviews }),
      ctx.delay(1000)
    );
  }),

  rest.post('/api/products/:productId/reviews', (req, res, ctx) => {
    const { mockSessionId } = req.cookies;

    if (!mockSessionId) {
      return res(ctx.status(401), ctx.json({ message: '로그인이 필요합니다.' }));
    }

    const formData = req.body;

    if (!formData) {
      return res(ctx.status(400), ctx.json({ error: 'formData를 제공하지 않았습니다.' }));
    }

    return res(ctx.status(200), ctx.json({ message: '리뷰가 작성되었습니다.' }));
  }),

  rest.patch<ReviewFavoriteRequestBody>('/api/products/:productId/reviews/:reviewId', (_, res, ctx) => {
    return res(ctx.status(200));
  }),

  rest.get('/api/ranks/review', (_, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockReviewRanking));
  }),

  rest.get('/api/tags', (_, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockReviewTags));
  }),

  rest.get('/api/reviews/:reviewId', (_, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockReviewDetail));
  }),
];
