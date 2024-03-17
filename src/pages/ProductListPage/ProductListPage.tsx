import { Spacing } from '@fun-eat/design-system';
import { useQueryErrorResetBoundary } from '@tanstack/react-query';
import { Suspense } from 'react';

import { productSection } from './productListPage.css';

import {
  Loading,
  ErrorBoundary,
  ErrorComponent,
  CategoryFoodList,
  CategoryStoreList,
  TabMenu,
  SectionHeader,
} from '@/components/Common';
import ProductPreviewList from '@/components/Product/ProductPreviewList/ProductPreviewList';
import { CATEGORY_TYPE } from '@/constants';
import { useTabMenu } from '@/hooks/common';
import type { CategoryVariant, Tab } from '@/types/common';

const TAB_MENUS: Tab<CategoryVariant>[] = [
  { value: CATEGORY_TYPE.FOOD, label: '공통 상품' },
  { value: CATEGORY_TYPE.STORE, label: '오직!여기서' },
];

export const ProductListPage = () => {
  const { selectedTabMenu, handleTabMenuClick } = useTabMenu(TAB_MENUS[0].value);
  const { reset } = useQueryErrorResetBoundary();

  return (
    <>
      <TabMenu tabMenus={TAB_MENUS} selectedTabMenu={selectedTabMenu} handleTabMenuSelect={handleTabMenuClick} />
      <Spacing size={28} />
      <Suspense fallback={null}>
        {selectedTabMenu === TAB_MENUS[0].value ? (
          <CategoryFoodList location="products" hasName isCircular />
        ) : (
          <CategoryStoreList location="products" hasName />
        )}
      </Suspense>
      <Spacing size={20} />
      <section className={productSection}>
        <ErrorBoundary fallback={ErrorComponent} handleReset={reset}>
          <Suspense fallback={<Loading />}>
            <SectionHeader name="떠오르는 조합" />
            <ProductPreviewList category={selectedTabMenu} categoryId={1} />
          </Suspense>
        </ErrorBoundary>
      </section>
    </>
  );
};
