import { useRef } from 'react';
import { Link } from 'react-router-dom';

import { showMoreLink } from './productSearchResultPreivewList.css';
import SearchNotFound from '../SearchNotFound/SearchNotFound';

import { Text } from '@/components/Common';
import { ProductOverviewList } from '@/components/Product';
import { PATH } from '@/constants/path';
import { useIntersectionObserver } from '@/hooks/common';
import { useInfiniteProductSearchResultsQuery } from '@/hooks/queries/search';
import displaySlice from '@/utils/displaySlice';

interface ProductSearchResultPreviewListProps {
  searchQuery: string;
}

const ProductSearchResultPreviewList = ({ searchQuery }: ProductSearchResultPreviewListProps) => {
  const {
    data: searchResponse,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteProductSearchResultsQuery(searchQuery, 'products');
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
      <Link to={`${PATH.SEARCH}/products?query=${searchQuery}`} className={showMoreLink}>
        <Text size="caption1" weight="medium" color="info">
          더보기
        </Text>
      </Link>
      <div ref={scrollRef} aria-hidden />
    </>
  );
};

export default ProductSearchResultPreviewList;
