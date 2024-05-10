import type { CategoryVariant } from './common';
import type { Product } from './product';

export interface ProductSearchResult extends Product {
  categoryType: CategoryVariant;
}

export type ProductSearchAutocomplete = Omit<ProductSearchResult, 'reviewCount'>;
