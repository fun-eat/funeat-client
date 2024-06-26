import type { ReactNode } from 'react';

import type { SvgIconVariant } from '@/components/Common/Svg/SvgIcon';
import type {
  TAG_TITLE,
  PRODUCT_SORT_OPTIONS,
  REVIEW_SORT_OPTIONS,
  RECIPE_SORT_OPTIONS,
  CATEGORY_TYPE,
} from '@/constants';
import type { PATH } from '@/constants/path';

export type CategoryVariant = 'food' | 'store';
export type MemberPostVariant = 'recipe' | 'review';
export type TabVariant = CategoryVariant | MemberPostVariant;

export type Food = (typeof CATEGORY_TYPE)['FOOD'];
export type Store = (typeof CATEGORY_TYPE)['STORE'];

export const isCategoryVariant = (value: string | undefined): value is CategoryVariant => {
  return value === 'store' || value === 'food';
};
export interface Category {
  id: number;
  name: string;
  image: string;
}

export interface Tag {
  id: number;
  name: string;
  tagType?: string;
}

export interface NavigationMenu {
  variant: SvgIconVariant;
  name: '상품' | '홈' | '조합실' | '마이';
  path: (typeof PATH)[keyof typeof PATH] | '/products/food' | '/products/store';
}

export interface CarouselChildren {
  id: number;
  children: ReactNode;
}

export type ProductSortOption = 'price' | 'averageRating' | 'reviewCount';

export type ReviewSortOption = 'favoriteCount' | 'rating' | 'createdAt';

export type RecipeSortOption = 'favoriteCount' | 'createdAt';

export type SortOption =
  | (typeof PRODUCT_SORT_OPTIONS)[number]
  | (typeof REVIEW_SORT_OPTIONS)[number]
  | (typeof RECIPE_SORT_OPTIONS)[number];

export type TagVariants = keyof typeof TAG_TITLE;

export interface Tab<T = string> {
  value: T;
  label: string;
}

export interface Option {
  label: string | number;
  value: string | number;
}
