import type { Tag } from './common';

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  averageRating: number;
  reviewCount?: number;
  // recipe type 때문에 일단 넣음. 추후 옵셔널을 필수로 변경
  categoryType?: string;
}

export interface ProductDetail {
  id: number;
  name: string;
  price: number;
  image: string;
  content: string;
  averageRating: number;
  reviewCount: number;
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
