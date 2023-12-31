import type { ProductSortOption, RecipeSortOption, ReviewSortOption } from '@/types/common';

export const isProductSortOption = (sortKey: string): sortKey is ProductSortOption =>
  sortKey === 'price' || sortKey === 'averageRating' || sortKey === 'reviewCount';

export const isReviewSortOption = (sortKey: string): sortKey is ReviewSortOption =>
  sortKey === 'favoriteCount' || sortKey === 'rating' || sortKey === 'createdAt';

export const isSortOrder = (sortOrder: string) => sortOrder === 'asc' || sortOrder === 'desc';

export const isRecipeSortOption = (sortKey: string): sortKey is RecipeSortOption =>
  sortKey === 'favoriteCount' || sortKey === 'createdAt';
