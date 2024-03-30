import { useRef } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

import { container } from './productSearchListPage.css';

import { PageHeader } from '@/components/Common';
import { ProductOverviewItem } from '@/components/Product';
import { PATH } from '@/constants/path';
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
      <ul className={container}>
        {products.map(({ id, categoryType, image, name, price, averageRating }) => (
          <li key={id}>
            <Link to={`${PATH.PRODUCT_LIST}/${categoryType}/${id}`}>
              <ProductOverviewItem image={image} name={name} price={price} rate={averageRating} />
            </Link>
            <div style={{ height: '20px' }} />
            <hr style={{ border: '0.5px solid #e6e6e6' }} />
            <div style={{ height: '20px' }} />
          </li>
        ))}
      </ul>
      <div ref={scrollRef} aria-hidden />
    </>
  );
};

export default ProductSearchListPage;
