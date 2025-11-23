import { rest } from 'msw';

import { isProductSortOption, isSortOrder } from './utils';
import foodCategory from '../data/foodCategory.json';
import productDetails from '../data/productDetails.json';
import instantfoodProducts from '../data/instantfoodProducts.json';
import snackProducts from '../data/snackProducts.json';
import icecreamProducts from '../data/icecreamProducts.json';
import foodProducts from '../data/foodProducts.json';
import drinkProducts from '../data/drinkProducts.json';
import cuProducts from '../data/cuProducts.json';
import gs25Products from '../data/gs25Products.json';
import emart24Products from '../data/emart24Products.json';
import sevenelevenProducts from '../data/sevenelevenProducts.json';
import storeCategory from '../data/storeCategory.json';

export const productHandlers = [
  rest.get('/api/categories', (req, res, ctx) => {
    const categoryType = req.url.searchParams.get('type');

    if (categoryType === 'food') {
      return res(ctx.status(200), ctx.json(foodCategory));
    }

    if (categoryType === 'store') {
      return res(ctx.status(200), ctx.json(storeCategory));
    }

    return res(ctx.status(400));
  }),

  rest.get('/api/categories/:categoryId/products', (req, res, ctx) => {
    const sortOptions = req.url.searchParams.get('sort');
    const categoryId = req.params.categoryId;

    if (sortOptions === null) {
      return res(ctx.status(400));
    }

    if (typeof categoryId !== 'string') {
      return res(ctx.status(400));
    }

    const categoryProductMap: Record<string, any> = {
      '1': instantfoodProducts,
      '2': snackProducts,
      '3': icecreamProducts,
      '4': foodProducts,
      '5': drinkProducts,
      '6': cuProducts,
      '7': gs25Products,
      '8': emart24Products,
      '9': sevenelevenProducts,
    };

    const products = categoryProductMap[categoryId] || instantfoodProducts;

    const [key, sortOrder] = sortOptions.split(',');

    if (!isProductSortOption(key) || !isSortOrder(sortOrder)) {
      return res(ctx.status(400));
    }

    const sortedProducts = {
      ...products,
      products: [...products.products].sort((cur, next) =>
        sortOrder === 'asc' ? cur[key] - next[key] : next[key] - cur[key]
      ),
    };
    return res(ctx.status(200), ctx.json(sortedProducts), ctx.delay(500));
  }),

  rest.get('/api/products/:productId', (req, res, ctx) => {
    const { productId } = req.params;

    const allProducts = [
      ...instantfoodProducts.products,
      ...snackProducts.products,
      ...icecreamProducts.products,
      ...foodProducts.products,
      ...drinkProducts.products,
      ...cuProducts.products,
      ...gs25Products.products,
      ...emart24Products.products,
      ...sevenelevenProducts.products,
    ];

    const isProductIdValid = allProducts.some(({ id }: { id: number }) => id === Number(productId));

    if (!isProductIdValid) {
      return res(ctx.status(400), ctx.json({ message: '존재하지 않는 상품입니다.' }));
    }

    const targetProduct = productDetails.find(({ id }: { id: number }) => id === Number(productId));

    if (!targetProduct) {
      return res(ctx.status(400));
    }

    return res(ctx.status(200), ctx.json(targetProduct), ctx.delay(1000));
  }),
];
