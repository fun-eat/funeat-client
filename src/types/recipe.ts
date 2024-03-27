import type { Member } from './member';
import type { Product } from './product';

export interface RecipeRequest {
  title: string;
  productIds: number[];
  content: string;
}

export type RecipeRequestKey = keyof RecipeRequest;

export interface RecipeDetail extends Recipe {
  images: string[];
  content: string;
  totalPrice: number;
  favorite: boolean;
}

export interface Recipe {
  id: number;
  image: string | null;
  title: string;
  author: Member;
  createdAt: string;
  favoriteCount: number;
  favorite: boolean;
  content: string;
  products: Product[];
}

export interface MemberRecipe extends Recipe {
  // 추후 멤버 레시피 type 정의
  // products: RecipeProduct[];
}

export interface RecipeFavoriteRequestBody {
  favorite: boolean;
}

export interface Comment {
  id: number;
  author: Member;
  comment: string;
  createdAt: string;
}
