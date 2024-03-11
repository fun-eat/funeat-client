import type { CategoryVariant, Tag } from './common';
import type { Product } from './product';

export type ProductRanking = Pick<Product, 'id' | 'name' | 'image' | 'price'> & { categoryType: string };

export interface ReviewRanking {
  reviewId: number;
  productId: number;
  productName: string;
  content: string;
  image: string | null;
  categoryType: CategoryVariant;
  tags: Tag[];
}

export interface RecipeRanking {
  id: number;
  image: string | null;
  title: string;
  author: string;
  favorite: boolean;
  createdAt: string;
}
