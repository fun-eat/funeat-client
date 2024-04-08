import { useRef } from 'react';
import { useSearchParams } from 'react-router-dom';

import { container } from './productSearchListPage.css';

import { PageHeader } from '@/components/Common';
import { ProductOverviewList } from '@/components/Product';
import { useIntersectionObserver } from '@/hooks/common';
import { useInfiniteProductSearchResultsQuery } from '@/hooks/queries/search';

export const ProductSearchListPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query') || '';

  const { data: searchResponse, fetchNextPage, hasNextPage } = useInfiniteProductSearchResultsQuery(searchQuery);
  const scrollRef = useRef<HTMLDivElement>(null);
  useIntersectionObserver<HTMLDivElement>(fetchNextPage, scrollRef, hasNextPage);

  const products = searchResponse.pages.flatMap((page) => page.products);

  return (
    <>
      <PageHeader title={`'${searchQuery}'이/가 포함된 상품`} hasBackLink />
      <div className={container}>
        <ProductOverviewList products={products} isSearchPage />
      </div>
      <div ref={scrollRef} aria-hidden />
    </>
  );
};

export default ProductSearchListPage;
