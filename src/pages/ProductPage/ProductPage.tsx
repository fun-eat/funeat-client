import { Spacing } from '@fun-eat/design-system';
import { useQueryErrorResetBoundary } from '@tanstack/react-query';
import { Suspense } from 'react';

import { list, listWrapper, productSection } from './productPage.css';

import {
  Loading,
  ErrorBoundary,
  ErrorComponent,
  CategoryFoodList,
  CategoryStoreList,
  TabMenu,
  SectionHeader,
} from '@/components/Common';
import { ProductPreviewList } from '@/components/Product';
import { CATEGORY_TYPE } from '@/constants';
import { useTabMenu } from '@/hooks/common';
import { useCategoryQuery } from '@/hooks/queries/product';
import type { CategoryVariant, Tab } from '@/types/common';

const TAB_MENUS: Tab<CategoryVariant>[] = [
  { value: CATEGORY_TYPE.FOOD, label: '공통 상품' },
  { value: CATEGORY_TYPE.STORE, label: '오직!여기서' },
];

export const ProductPage = () => {
  const { selectedTabMenu, handleTabMenuClick } = useTabMenu(TAB_MENUS[0].value);
  const { data: categories } = useCategoryQuery(selectedTabMenu);
  const { reset } = useQueryErrorResetBoundary();

  const getSectionTitle = (categoryType: CategoryVariant, name: string) =>
    categoryType === CATEGORY_TYPE.FOOD ? `${name} 둘러보기` : `오직! ${name}에서`;

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
      <Spacing size={12} />
      <section className={productSection}>
        <ErrorBoundary fallback={ErrorComponent} handleReset={reset}>
          <Suspense fallback={<Loading />}>
            {categories.map(({ id, name }) => (
              <div key={id} className={listWrapper}>
                <SectionHeader name={getSectionTitle(selectedTabMenu, name)} link={`${selectedTabMenu}`} />
                <div className={list}>
                  <ProductPreviewList key={id} category={selectedTabMenu} categoryId={id} />
                </div>
              </div>
            ))}
          </Suspense>
        </ErrorBoundary>
      </section>
    </>
  );
};
