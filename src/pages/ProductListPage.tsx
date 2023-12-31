import { BottomSheet, Spacing, useBottomSheet } from '@fun-eat/design-system';
import { useQueryErrorResetBoundary } from '@tanstack/react-query';
import { Suspense, useRef } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import {
  CategoryFoodTab,
  CategoryStoreTab,
  SortButton,
  SortOptionList,
  ScrollButton,
  Loading,
  ErrorBoundary,
  ErrorComponent,
} from '@/components/Common';
import { ProductTitle, ProductList } from '@/components/Product';
import { PRODUCT_SORT_OPTIONS } from '@/constants';
import { PATH } from '@/constants/path';
import type { CategoryIds } from '@/contexts/CategoryContext';
import { useGA, useScrollRestoration, useSortOption } from '@/hooks/common';
import { useCategoryValueContext } from '@/hooks/context';
import { isCategoryVariant } from '@/types/common';

const PAGE_TITLE = { food: '공통 상품', store: 'PB 상품' };

export const ProductListPage = () => {
  const { category } = useParams();
  const productListRef = useRef<HTMLDivElement>(null);

  const { isOpen, isClosing, handleOpenBottomSheet, handleCloseBottomSheet } = useBottomSheet();
  const { selectedOption, selectSortOption } = useSortOption(PRODUCT_SORT_OPTIONS[0]);
  const { reset } = useQueryErrorResetBoundary();
  const { gaEvent } = useGA();

  const { categoryIds } = useCategoryValueContext();

  useScrollRestoration(categoryIds[category as keyof CategoryIds], productListRef);

  if (!category || !isCategoryVariant(category)) {
    return null;
  }

  const handleSortButtonClick = () => {
    handleOpenBottomSheet();
    gaEvent({ category: 'button', action: '상품 정렬 버튼 클릭', label: '상품 정렬' });
  };

  return (
    <>
      <ProductListSection>
        <ProductTitle
          content={PAGE_TITLE[category]}
          routeDestination={PATH.PRODUCT_LIST + '/' + (category === 'store' ? 'food' : 'store')}
        />
        <Spacing size={20} />
        <Suspense fallback={null}>{category === 'food' ? <CategoryFoodTab /> : <CategoryStoreTab />}</Suspense>
        <Spacing size={20} />
        <ProductListContainer ref={productListRef}>
          <ErrorBoundary fallback={ErrorComponent} handleReset={reset}>
            <Suspense fallback={<Loading />}>
              <SortButtonWrapper>
                <SortButton option={selectedOption} onClick={handleSortButtonClick} />
              </SortButtonWrapper>
              <ProductList category={category} selectedOption={selectedOption} />
            </Suspense>
          </ErrorBoundary>
        </ProductListContainer>
      </ProductListSection>
      <ScrollButton targetRef={productListRef} />
      <BottomSheet isOpen={isOpen} isClosing={isClosing} maxWidth="600px" close={handleCloseBottomSheet}>
        <SortOptionList
          options={PRODUCT_SORT_OPTIONS}
          selectedOption={selectedOption}
          selectSortOption={selectSortOption}
          close={handleCloseBottomSheet}
        />
      </BottomSheet>
    </>
  );
};

const ProductListSection = styled.section`
  height: 100%;
`;

const SortButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const ProductListContainer = styled.div`
  height: calc(100% - 100px);
  overflow-y: auto;
`;
