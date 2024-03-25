import type { Member } from './member';
import type { Product } from './product';

export interface RecipeRequest {
  title: string;
  productIds: number[];
  content: string;
}

export type RecipeRequestKey = keyof RecipeRequest;

export interface Recipe {
  id: number;
  image: string | null;
  title: string;
  author: Member;
  content: string;
  favorite: boolean;
}

export interface RecipeDetail extends Recipe {
  images: string[];
  totalPrice: number;
  createdAt: string;
  favoriteCount: number;
  products: RecipeProductWithPrice[];
}

export interface MemberRecipe extends Recipe {
  products: RecipeProduct[];
}

export interface RecipeFavoriteRequestBody {
  favorite: boolean;
}

type RecipeProductWithPrice = Pick<Product, 'id' | 'name' | 'price'>;
export type RecipeProduct = Omit<RecipeProductWithPrice, 'price'>;

export interface Comment {
  id: number;
  author: Member;
  comment: string;
  createdAt: string;
}
