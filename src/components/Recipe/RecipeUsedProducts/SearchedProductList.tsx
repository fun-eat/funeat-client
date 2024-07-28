import type { MouseEventHandler } from 'react';
import { useRef } from 'react';

import { Divider, MarkedText, Spacing, Text } from '@/components/Common';
import { container, backdrop, wrapper, productButton } from '@/components/Search/RecommendList/recommendList.css';
import { useIntersectionObserver } from '@/hooks/common';
import { useInfiniteProductSearchAutocompleteQuery } from '@/hooks/queries/search';
import type { RecipeProduct } from '@/types/recipe';

interface SearchedProductListProps {
  searchQuery: string;
  addUsedProducts: (product: RecipeProduct) => void;
  handleAutocompleteClose: MouseEventHandler<HTMLDivElement>;
}

const SearchedProductList = ({ searchQuery, addUsedProducts, handleAutocompleteClose }: SearchedProductListProps) => {
  const { data: searchResponse, fetchNextPage, hasNextPage } = useInfiniteProductSearchAutocompleteQuery(searchQuery);
  const scrollRef = useRef<HTMLDivElement>(null);
  useIntersectionObserver<HTMLDivElement>(fetchNextPage, scrollRef, hasNextPage);

  if (!searchResponse) {
    return null;
  }

  const products = searchResponse.pages.flatMap((page) => page.products);

  if (products.length === 0) {
    return <Text>검색어가 포함된 상품을 찾지 못했어요</Text>;
  }

  return (
    <div className={container}>
      <div className={backdrop} onClick={handleAutocompleteClose} />
      <ul className={wrapper}>
        {products.map((product) => (
          <li key={product.id}>
            <button
              className={productButton}
              type="button"
              color="white"
              value={product.name}
              onClick={() => addUsedProducts(product)}
            >
              <MarkedText text={product.name} mark={searchQuery} />
              <Spacing direction="horizontal" size={10} />
              <Text size="caption4" weight="semiBold" color="disabled">
                상품
              </Text>
            </button>
            <Divider variant="default" />
          </li>
        ))}
      </ul>
      <div ref={scrollRef} aria-hidden />
    </div>
  );
};

export default SearchedProductList;
