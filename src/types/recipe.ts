import type { Member } from './member';
import type { Product } from './product';

export interface RecipeRequest {
  title: string;
  products: RecipeProduct[];
  content: string;
}

export type RecipeRequestKey = keyof RecipeRequest;

export interface RecipeDetail extends Recipe {
  images: string[];
  content: string;
  totalPrice: number;
  favorite: boolean;
  favoriteCount: number;
  products: RecipeProduct[];
}

export interface Recipe {
  id: number;
  image: string | null;
  title: string;
  author: Member;
  createdAt: string;
  favorite: boolean;
  content?: string;
  products?: RecipeProduct[];
}

export interface RecipeFavoriteRequestBody {
  favorite: boolean;
}

export type RecipeProduct = Omit<Product, 'reviewCount'>;

export interface Comment {
  id: number;
  author: Member;
  comment: string;
  createdAt: string;
}
