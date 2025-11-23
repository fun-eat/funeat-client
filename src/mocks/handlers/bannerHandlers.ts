import { rest } from 'msw';

import banner1 from '@/assets/banner1.png';
import banner2 from '@/assets/banner2.png';

const banners = [
  {
    id: 2,
    link: '/products',
    image: banner2,
  },
  {
    id: 1,
    link: '/recipes',
    image: banner1,
  },
];

export const bannerHandlers = [
  rest.get('/api/banners', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(banners));
  }),
];
