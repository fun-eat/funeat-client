import { useRef } from 'react';

import { ProductOverviewList } from '@/components/Product';
import { useIntersectionObserver } from '@/hooks/common';
import { useInfiniteProductSearchResultsQuery } from '@/hooks/queries/search';

interface ProductSearchResultListProps {
  searchQuery: string;
}

const ProductSearchResultList = ({ searchQuery }: ProductSearchResultListProps) => {
  const { data: searchResponse, fetchNextPage, hasNextPage } = useInfiniteProductSearchResultsQuery(searchQuery);
  const scrollRef = useRef<HTMLDivElement>(null);
  useIntersectionObserver<HTMLDivElement>(fetchNextPage, scrollRef, hasNextPage);

  if (!searchResponse) {
    return null;
  }

  const products = searchResponse.pages.flatMap((page) => page.products);

  if (products.length === 0) {
    return <p>검색한 상품을 찾을 수 없습니다.</p>;
  }

  return (
    <>
      <ProductOverviewList products={products} />
      <div ref={scrollRef} aria-hidden />
    </>
  );
};

export default ProductSearchResultList;
