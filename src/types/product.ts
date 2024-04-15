import type { Category, Tag } from './common';

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  averageRating: number;
  reviewCount?: number;
}

export interface ProductDetail {
  id: number;
  name: string;
  price: number;
  image: string;
  content: string;
  averageRating: number;
  reviewCount: number;
  category: Category;
  tags: Tag[];
}

export interface PBProduct {
  id: number;
  name: string;
  price: number;
  image: string;
  averageRating: number;
  reviewCount?: number;
}
