import { useRef } from 'react';
import { Link } from 'react-router-dom';

import { container } from './productList.css';
import ProductItem from '../ProductItem/ProductItem';

import { PATH } from '@/constants/path';
import { useIntersectionObserver } from '@/hooks/common';
import { useInfiniteProductsQuery } from '@/hooks/queries/product';
import type { CategoryVariant, SortOption } from '@/types/common';

interface ProductListProps {
  category: CategoryVariant;
  categoryId: number;
  sortOption?: SortOption;
}

const ProductList = ({ category, categoryId, sortOption }: ProductListProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const { fetchNextPage, hasNextPage, data } = useInfiniteProductsQuery(
    categoryId,
    sortOption?.value ?? 'reviewCount,desc'
  );

  useIntersectionObserver<HTMLDivElement>(fetchNextPage, scrollRef, hasNextPage);

  const products = data.pages.flatMap((page) => page.products);

  return (
    <>
      <ul className={container}>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`${PATH.PRODUCT_LIST}/${category}/${product.id}`}>
              <ProductItem product={product} />
            </Link>
          </li>
        ))}
      </ul>
      <div ref={scrollRef} aria-hidden style={{ height: '1px' }} />
    </>
  );
};

export default ProductList;
