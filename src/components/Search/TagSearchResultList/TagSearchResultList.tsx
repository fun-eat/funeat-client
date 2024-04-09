import { useRef } from 'react';
import { Link } from 'react-router-dom';

import { container } from './tagSearchResult.css';
import SearchNotFound from '../SearchNotFound/SearchNotFound';

import { ProductItem } from '@/components/Product';
import { PATH } from '@/constants/path';
import { useIntersectionObserver } from '@/hooks/common';
import { useInfiniteProductSearchResultsQuery } from '@/hooks/queries/search';

interface TagSearchResultListProps {
  searchQuery: string;
}

const TagSearchResultList = ({ searchQuery }: TagSearchResultListProps) => {
  const { data: searchResponse, fetchNextPage, hasNextPage } = useInfiniteProductSearchResultsQuery(searchQuery, true);

  const scrollRef = useRef<HTMLDivElement>(null);
  useIntersectionObserver<HTMLDivElement>(fetchNextPage, scrollRef, hasNextPage);

  if (!searchResponse) {
    return null;
  }

  const products = searchResponse.pages.flatMap((page) => page.products);

  if (products.length === 0) {
    return <SearchNotFound />;
  }

  return (
    <>
      <ul className={container}>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`${PATH.PRODUCT_LIST}/detail/${product.id}`}>
              <ProductItem product={product} />
            </Link>
          </li>
        ))}
      </ul>
      <div ref={scrollRef} aria-hidden />
    </>
  );
};

export default TagSearchResultList;
