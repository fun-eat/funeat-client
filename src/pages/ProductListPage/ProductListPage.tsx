import { Spacing } from '@fun-eat/design-system';
import { useQueryErrorResetBoundary } from '@tanstack/react-query';
import { Suspense } from 'react';
import { Navigate, useParams } from 'react-router-dom';

import {
  Loading,
  ErrorBoundary,
  ErrorComponent,
  CategoryFoodList,
  CategoryStoreList,
  TabMenu,
} from '@/components/Common';
import { CATEGORY_TYPE } from '@/constants';
import { PATH } from '@/constants/path';
import { useTabMenu } from '@/hooks/common';
import { isCategoryVariant } from '@/types/common';

const TAB_MENUS = ['공통 상품', '오직!여기서'] as const;

export const ProductListPage = () => {
  const { category } = useParams();
  const { selectedTabMenu, handleTabMenuClick } = useTabMenu(TAB_MENUS[0]);

  const { reset } = useQueryErrorResetBoundary();

  if (!category || !isCategoryVariant(category)) {
    return <Navigate to={`${PATH.PRODUCT_LIST}/${CATEGORY_TYPE.FOOD}`} replace />;
  }

  return (
    <>
      <TabMenu tabMenus={TAB_MENUS} selectedTabMenu={selectedTabMenu} handleTabMenuSelect={handleTabMenuClick} />
      <Spacing size={20} />
      <Suspense fallback={null}>{category === 'food' ? <CategoryFoodList /> : <CategoryStoreList />}</Suspense>
      <Spacing size={20} />
      <div>
        <ErrorBoundary fallback={ErrorComponent} handleReset={reset}>
          <Suspense fallback={<Loading />}>
            {/*<ProductList category={category} selectedOption={selectedOption} />*/}
          </Suspense>
        </ErrorBoundary>
      </div>
    </>
  );
};
