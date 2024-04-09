import type { MouseEventHandler } from 'react';
import { useRef } from 'react';

import { backdrop, container, productButton, wrapper } from './recommendList.css';

import { MarkedText, Text } from '@/components/Common';
import { useIntersectionObserver } from '@/hooks/common';
import { useInfiniteProductSearchAutocompleteQuery } from '@/hooks/queries/search';
import { vars } from '@/styles/theme.css';

interface RecommendListProps {
  searchQuery: string;
  handleSearchClick: MouseEventHandler<HTMLButtonElement>;
  handleAutocompleteClose: MouseEventHandler<HTMLDivElement>;
}

const RecommendList = ({ searchQuery, handleSearchClick, handleAutocompleteClose }: RecommendListProps) => {
  const { data: searchResponse, fetchNextPage, hasNextPage } = useInfiniteProductSearchAutocompleteQuery(searchQuery);
  const scrollRef = useRef<HTMLDivElement>(null);
  useIntersectionObserver<HTMLDivElement>(fetchNextPage, scrollRef, hasNextPage);

  const products = searchResponse.pages.flatMap((page) => page.products);

  if (products.length === 0) {
    return <Text>검색어가 포함된 상품을 찾지 못했어요</Text>;
  }

  return (
    <div className={container}>
      <div className={backdrop} onClick={handleAutocompleteClose} />
      <ul className={wrapper}>
        {products.map(({ id, name }) => (
          <li key={id}>
            <button className={productButton} type="button" color="white" value={name} onClick={handleSearchClick}>
              <MarkedText text={name} mark={searchQuery} />
              <div style={{ width: '10px' }} />
              <Text size="caption4" weight="semiBold" color="disabled">
                상품
              </Text>
            </button>
            <hr style={{ border: `0.5px solid ${vars.colors.border.default}` }} />
          </li>
        ))}
      </ul>
      <div ref={scrollRef} aria-hidden />
    </div>
  );
};

export default RecommendList;
