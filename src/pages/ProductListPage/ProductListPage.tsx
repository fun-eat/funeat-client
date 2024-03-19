import { BottomSheet, useBottomSheet } from '@fun-eat/design-system';
import { useQueryErrorResetBoundary } from '@tanstack/react-query';
import { Suspense, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import { listSection } from './productListPage.css';
import NotFoundPage from '../NotFoundPage';

import { ErrorBoundary, ErrorComponent, Loading, SortOptionList } from '@/components/Common';
import PageHeader from '@/components/Common/PageHeader/PageHeader';
import { ProductList } from '@/components/Product';
import { CATEGORY_TYPE, PAGE_TITLE, PRODUCT_SORT_OPTIONS } from '@/constants';
import { useSortOption } from '@/hooks/common';
import { useCategoryQuery } from '@/hooks/queries/product';
import { isCategoryVariant } from '@/types/common';

export const ProductListPage = () => {
  const { state: categoryId } = useLocation();
  const { category } = useParams();
  const { data: categories } = useCategoryQuery(isCategoryVariant(category) ? category : CATEGORY_TYPE.FOOD);
  const { isOpen, isClosing, handleOpenBottomSheet, handleCloseBottomSheet } = useBottomSheet();
  const { reset } = useQueryErrorResetBoundary();

  const [activeSheet, setActiveSheet] = useState<'categories' | 'sortOption'>('sortOption');
  const { selectedOption, selectSortOption } = useSortOption(PRODUCT_SORT_OPTIONS[0]);

  if (!isCategoryVariant(category)) {
    return <NotFoundPage />;
  }

  const pageTitle = category === 'food' ? PAGE_TITLE.FOOD : PAGE_TITLE.STORE;

  return (
    <>
      <PageHeader title={pageTitle} hasBackLink hasSearchLink state={category} />

      <button onClick={handleOpenBottomSheet}>{selectedOption.label}</button>

      <section className={listSection}>
        <ErrorBoundary fallback={ErrorComponent} handleReset={reset}>
          <Suspense fallback={<Loading />}>
            <ProductList category={category} categoryId={categoryId} sortOption={selectedOption} />
          </Suspense>
        </ErrorBoundary>
      </section>

      <BottomSheet isOpen={isOpen} isClosing={isClosing} maxWidth="400px" close={handleCloseBottomSheet}>
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
