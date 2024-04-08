import { useRef } from 'react';

import SearchNotFound from '../SearchNotFound/SearchNotFound';

import { ProductOverviewList } from '@/components/Product';
import { useIntersectionObserver } from '@/hooks/common';
import { useInfiniteProductSearchResultsQuery } from '@/hooks/queries/search';
import displaySlice from '@/utils/displaySlice';

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
  const productToDisplay = displaySlice(true, products);

  if (products.length === 0) {
    return <SearchNotFound />;
  }

  return (
    <>
      <ProductOverviewList products={productToDisplay} />
      <div ref={scrollRef} aria-hidden />
    </>
  );
};

export default ProductSearchResultList;
