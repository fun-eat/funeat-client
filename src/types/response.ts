import type { Product } from './product';
import type { ProductRanking } from './ranking';
import type { Comment, Recipe } from './recipe';
import type { MemberReview, Review, ReviewDetail } from './review';
import type { ProductSearchResult, ProductSearchAutocomplete } from './search';

export interface Page {
  totalDataCount: number;
  totalPages: number;
  firstPage: boolean;
  lastPage: boolean;
  requestPage: number;
  requestSize: number;
}
export interface ErrorResponse {
  code: number;
  message: string;
}

type DataKeys = 'products' | 'reviews' | 'recipes' | 'comments';

type CommonInfiniteQueryResponse<T, K extends DataKeys> = {
  hasNext: boolean;
} & {
  [P in K]: T[];
};

export type CategoryProductResponse = CommonInfiniteQueryResponse<Product, 'products'>;

export type ProductReviewResponse = CommonInfiniteQueryResponse<Review, 'reviews'>;

export type RecipeSearchResponse = CommonInfiniteQueryResponse<Recipe, 'recipes'>;

export type ProductSearchAutocompleteResponse = CommonInfiniteQueryResponse<ProductSearchAutocomplete, 'products'>;

export type ProductSearchResultResponse = CommonInfiniteQueryResponse<ProductSearchResult, 'products'>;

export type CommentResponse = CommonInfiniteQueryResponse<Comment, 'comments'> & { totalElements: number | null };

export interface RecipeResponse {
  page: Page;
  recipes: Recipe[];
}

export interface MemberReviewResponse {
  page: Page;
  reviews: MemberReview[];
}

export interface MemberRecipeResponse {
  page: Page;
  recipes: Recipe[];
}

export interface ReviewRankingResponse {
  reviews: ReviewDetail[];
}

export interface ProductRankingResponse {
  products: ProductRanking[];
}

export interface RecipeRankingResponse {
  recipes: Recipe[];
}
