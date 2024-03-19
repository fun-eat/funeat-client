import { BottomSheet, useBottomSheet } from '@fun-eat/design-system';
import { useQueryErrorResetBoundary } from '@tanstack/react-query';
import { Suspense, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import { listSection } from './productListPage.css';
import NotFoundPage from '../NotFoundPage';

import { ErrorBoundary, ErrorComponent, Loading, SelectOptionList } from '@/components/Common';
import PageHeader from '@/components/Common/PageHeader/PageHeader';
import { ProductList } from '@/components/Product';
import { CATEGORY_TYPE, PAGE_TITLE, PRODUCT_SORT_OPTIONS } from '@/constants';
import { useSelect } from '@/hooks/common';
import { useCategoryQuery } from '@/hooks/queries/product';
import type { SortOption } from '@/types/common';
import { isCategoryVariant } from '@/types/common';

type BottomSheetOption = 'category' | 'sort';

export const ProductListPage = () => {
  const { state: categoryId } = useLocation();
  const { category } = useParams();
  const { data: categories } = useCategoryQuery(isCategoryVariant(category) ? category : CATEGORY_TYPE.FOOD);
  const { isOpen, isClosing, handleOpenBottomSheet, handleCloseBottomSheet } = useBottomSheet();
  const { reset } = useQueryErrorResetBoundary();

  const categoryOptions = categories.map((category) => ({
    value: category.id,
    label: category.name,
  }));
  const initCategory = categoryOptions.find((option) => option.value === categoryId) ?? categoryOptions[0];

  const [activeSheet, setActiveSheet] = useState<BottomSheetOption>('sort');
  const [currentSortOption, setSortOption] = useSelect<SortOption>(PRODUCT_SORT_OPTIONS[0]);
  const [currentCategory, setCategory] = useSelect(initCategory);

  if (!isCategoryVariant(category)) {
    return <NotFoundPage />;
  }

  const pageTitle = category === 'food' ? PAGE_TITLE.FOOD : PAGE_TITLE.STORE;
  const openBottomSheet = (option: BottomSheetOption) => () => {
    setActiveSheet(option);
    handleOpenBottomSheet();
  };

  return (
    <>
      <PageHeader title={pageTitle} hasBackLink hasSearchLink state={category} />

      <button type="button" onClick={openBottomSheet('sort')}>
        {currentSortOption.label}
      </button>
      <button type="button" onClick={openBottomSheet('category')}>
        {currentCategory.label}
      </button>

      <section className={listSection}>
        <ErrorBoundary fallback={ErrorComponent} handleReset={reset}>
          <Suspense fallback={<Loading />}>
            <ProductList category={category} categoryId={categoryId} sortOption={currentSortOption} />
          </Suspense>
        </ErrorBoundary>
      </section>

      <BottomSheet isOpen={isOpen} isClosing={isClosing} maxWidth="400px" close={handleCloseBottomSheet}>
        {activeSheet === 'sort' && (
          <SelectOptionList
            options={PRODUCT_SORT_OPTIONS}
            currentOption={currentSortOption}
            selectOption={setSortOption}
            close={handleCloseBottomSheet}
          />
        )}
        {activeSheet === 'category' && (
          <SelectOptionList
            options={categoryOptions}
            currentOption={currentCategory}
            selectOption={setCategory}
            close={handleCloseBottomSheet}
          />
        )}
      </BottomSheet>
    </>
  );
};
