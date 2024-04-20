import { useRef } from 'react';
import { useSearchParams } from 'react-router-dom';

import { container } from './productSearchListPage.css';

import { TopBar } from '@/components/Common';
import { ProductOverviewList } from '@/components/Product';
import { useIntersectionObserver } from '@/hooks/common';
import { useInfiniteProductSearchResultsQuery } from '@/hooks/queries/search';

export const ProductSearchListPage = () => {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('query') || '';

  const {
    data: searchResponse,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteProductSearchResultsQuery(searchQuery, 'products');
  const scrollRef = useRef<HTMLDivElement>(null);
  useIntersectionObserver<HTMLDivElement>(fetchNextPage, scrollRef, hasNextPage);

  const products = searchResponse.pages.flatMap((page) => page.products);

  return (
    <>
      <TopBar>
        <TopBar.BackLink />
        <TopBar.Title title={`'${searchQuery}'이/가 포함된 상품`} />
        <TopBar.Spacer />
      </TopBar>
      <main className={container}>
        <ProductOverviewList products={products} hasBorder />
        <div ref={scrollRef} aria-hidden />
      </main>
    </>
  );
};

export default ProductSearchListPage;
