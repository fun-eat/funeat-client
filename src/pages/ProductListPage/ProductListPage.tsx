import { Spacing } from '@fun-eat/design-system';
import { useQueryErrorResetBoundary } from '@tanstack/react-query';
import { Suspense } from 'react';

import {
  Loading,
  ErrorBoundary,
  ErrorComponent,
  CategoryFoodList,
  CategoryStoreList,
  TabMenu,
} from '@/components/Common';
import { useTabMenu } from '@/hooks/common';

const TAB_MENUS = ['공통 상품', '오직!여기서'] as const;

export const ProductListPage = () => {
  const { selectedTabMenu, handleTabMenuClick } = useTabMenu(TAB_MENUS[0]);
  const { reset } = useQueryErrorResetBoundary();

  return (
    <>
      <TabMenu tabMenus={TAB_MENUS} selectedTabMenu={selectedTabMenu} handleTabMenuSelect={handleTabMenuClick} />
      <Spacing size={20} />
      <Suspense fallback={null}>
        {selectedTabMenu === TAB_MENUS[0] ? <CategoryFoodList /> : <CategoryStoreList />}
      </Suspense>
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
