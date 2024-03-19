import { useQueryErrorResetBoundary } from '@tanstack/react-query';
import { Suspense } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import { listSection } from './productListPage.css';
import NotFoundPage from '../NotFoundPage';

import { ErrorBoundary, ErrorComponent, Loading } from '@/components/Common';
import PageHeader from '@/components/Common/PageHeader/PageHeader';
import { ProductList } from '@/components/Product';
import { CATEGORY_TYPE, PAGE_TITLE } from '@/constants';
import { useCategoryQuery } from '@/hooks/queries/product';
import { isCategoryVariant } from '@/types/common';

export const ProductListPage = () => {
  const { state: categoryId } = useLocation();
  const { category } = useParams();
  const { data: categories } = useCategoryQuery(isCategoryVariant(category) ? category : CATEGORY_TYPE.FOOD);
  const { reset } = useQueryErrorResetBoundary();

  if (!isCategoryVariant(category)) {
    return <NotFoundPage />;
  }

  const pageTitle = category === 'food' ? PAGE_TITLE.FOOD : PAGE_TITLE.STORE;

  return (
    <>
      <PageHeader title={pageTitle} hasBackLink hasSearchLink state={category} />

      <section className={listSection}>
        <ErrorBoundary fallback={ErrorComponent} handleReset={reset}>
          <Suspense fallback={<Loading />}>
            <ProductList category={category} categoryId={categoryId} />
          </Suspense>
        </ErrorBoundary>
      </section>
    </>
  );
};
