import { BottomSheet, useBottomSheet } from '@fun-eat/design-system';
import { useQueryErrorResetBoundary } from '@tanstack/react-query';
import cx from 'classnames';
import { Suspense, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import { categoryButton, listSection, main, selectButton, selectSection, sortButton } from './productListPage.css';
import NotFoundPage from '../NotFoundPage/NotFoundPage';

import { ErrorBoundary, ErrorComponent, Loading, SelectOptionList, SvgIcon, TopBar } from '@/components/Common';
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
      <TopBar>
        <TopBar.BackLink state={category} />
        <TopBar.Title title={pageTitle} />
        <TopBar.SearchLink />
      </TopBar>

      <main className={main}>
        <section className={selectSection}>
          <button type="button" className={cx(selectButton, sortButton)} onClick={openBottomSheet('sort')}>
            <span>{currentSortOption.label}</span>
            <span>
              <SvgIcon variant="arrow" width={8} height={8} style={{ transform: 'rotate(-90deg)' }} />
            </span>
          </button>
          <button
            type="button"
            className={cx(selectButton, categoryButton[currentCategory.label as keyof typeof categoryButton])}
            onClick={openBottomSheet('category')}
          >
            <span>{currentCategory.label}</span>
            <span>
              <SvgIcon variant="arrow" width={8} height={8} style={{ transform: 'rotate(-90deg)' }} />
            </span>
          </button>
        </section>

        <section className={listSection}>
          <ErrorBoundary fallback={ErrorComponent} handleReset={reset}>
            <Suspense fallback={<Loading />}>
              <ProductList category={category} categoryId={currentCategory.value} sortOption={currentSortOption} />
            </Suspense>
          </ErrorBoundary>
        </section>
      </main>

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
