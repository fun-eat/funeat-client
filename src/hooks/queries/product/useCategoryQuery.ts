import { useSuspendedQuery } from '..';

import { categoryApi } from '@/apis';
import { CATEGORY_TYPE } from '@/constants';
import type { Category, CategoryVariant } from '@/types/common';

const fetchCategories = async (type: CategoryVariant) => {
  const response = await categoryApi.get({ queries: `?type=${type}` });
  const data: Category[] = await response.json();
  return data;
};

export const useCategoryFoodQuery = () => {
  return useSuspendedQuery(['categories', CATEGORY_TYPE.FOOD], () => fetchCategories(CATEGORY_TYPE.FOOD), {
    staleTime: Infinity,
  });
};

export const useCategoryStoreQuery = () => {
  return useSuspendedQuery(['categories', CATEGORY_TYPE.STORE], () => fetchCategories(CATEGORY_TYPE.STORE), {
    staleTime: Infinity,
  });
};

export const useCategoryQuery = (type: CategoryVariant) => {
  return useSuspendedQuery(['categories', type], () => fetchCategories(type), {
    staleTime: Infinity,
  });
};
