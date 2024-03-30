import { useRef } from 'react';
import { Link } from 'react-router-dom';

import { container, showMoreButton } from './productSearchResultList.css';
import SearchNotFound from '../SearchNotFound/SearchNotFound';

import { ProductOverviewItem } from '@/components/Product';
import { PATH } from '@/constants/path';
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
    return <SearchNotFound />;
  }

  return (
    <>
      <ul className={container}>
        {products.slice(0, 2).map(({ id, categoryType, image, name, price, averageRating }) => (
          <li key={id}>
            <Link to={`${PATH.PRODUCT_LIST}/${categoryType}/${id}`}>
              <ProductOverviewItem image={image} name={name} price={price} rate={averageRating} />
            </Link>
          </li>
        ))}
      </ul>
      <Link to={`${PATH.SEARCH}/products?query=${searchQuery}`} className={showMoreButton}>
        더보기
      </Link>
    </>
  );
};

export default ProductSearchResultList;
