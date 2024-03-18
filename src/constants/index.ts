import { PATH } from './path';

import type { NavigationMenu } from '@/types/common';

export const NAVIGATION_MENU: NavigationMenu[] = [
  {
    variant: 'category2',
    name: '카테고리',
    path: `${PATH.PRODUCT_LIST}/food`,
  },
  {
    variant: 'home2',
    name: '홈',
    path: PATH.HOME,
  },
  {
    variant: 'recipe2',
    name: '조합실',
    path: PATH.RECIPE,
  },
  {
    variant: 'member2',
    name: '마이',
    path: PATH.MEMBER,
  },
];

export const PRODUCT_SORT_OPTIONS = [
  { label: '리뷰 많은순', value: 'reviewCount,desc' },
  { label: '높은 가격순', value: 'price,desc' },
  { label: '낮은 가격순', value: 'price,asc' },
  { label: '높은 평점순', value: 'averageRating,desc' },
  { label: '낮은 평점순', value: 'averageRating,asc' },
] as const;

export const REVIEW_SORT_OPTIONS = [
  { label: '최신 작성순', value: 'createdAt,desc' },
  { label: '높은 평점순', value: 'rating,desc' },
  { label: '낮은 평점순', value: 'rating,asc' },
  { label: '추천순', value: 'favoriteCount,desc' },
] as const;

export const RECIPE_SORT_OPTIONS = [
  { label: '최신 작성순', value: 'createdAt,desc' },
  { label: '추천순', value: 'favoriteCount,desc' },
] as const;

export const TAG_TITLE = {
  TASTE: '맛',
  QUANTITY: '가격/양',
  ETC: '기타',
} as const;

export const MIN_DISPLAYED_TAGS_LENGTH = 3;

export const CATEGORY_TYPE = {
  FOOD: 'food',
  STORE: 'store',
} as const;

export const IMAGE_MAX_SIZE = 5 * 1024 * 1024;

export const ENVIRONMENT = window.location.href.includes('dev')
  ? 'dev'
  : process.env.NODE_ENV === 'production'
  ? 'prod'
  : 'local';

export const PREVIOUS_PATH_LOCAL_STORAGE_KEY = `funeat-previous-path-${ENVIRONMENT}`;

export const RECOMMENDED_TAGS = [
  { id: 1, name: '맛있어요', tagType: 'TASTE' },
  { id: 2, name: '간식', tagType: 'ETC' },
  { id: 3, name: '갓성비', tagType: 'QUANTITY' },
  { id: 4, name: '달달해요', tagType: 'TASTE' },
];
