import { useRef } from 'react';
import { Link } from 'react-router-dom';

import { container } from './productSearchResultList.css';

import { ProductOverviewItem } from '@/components/Product';
import { PATH } from '@/constants/path';
import { useIntersectionObserver } from '@/hooks/common';
import { useInfiniteProductSearchResultsQuery } from '@/hooks/queries/search';

interface ProductSearchResultListProps {
  searchQuery: string;
  isTagSearch: boolean;
}

const ProductSearchResultList = ({ searchQuery, isTagSearch }: ProductSearchResultListProps) => {
  const {
    data: searchResponse,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteProductSearchResultsQuery(searchQuery, isTagSearch);
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
      <ul className={container}>
        {products.map(({ id, categoryType, image, name, price, averageRating }) => (
          <li key={id}>
            <Link to={`${PATH.PRODUCT_LIST}/${categoryType}/${id}`}>
              <ProductOverviewItem image={image} name={name} price={price} rate={averageRating} />
            </Link>
          </li>
        ))}
      </ul>
      <div ref={scrollRef} aria-hidden />
    </>
  );
};

export default ProductSearchResultList;
