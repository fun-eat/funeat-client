import { Spacing } from '@fun-eat/design-system';
import { useQueryErrorResetBoundary } from '@tanstack/react-query';
import { Suspense } from 'react';
import { useLocation } from 'react-router-dom';

import { categorySection, productSection } from './productPage.css';

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
import { PRODUCT_BANNER, STORE_BANNER } from '@/constants/image';
import { useTabMenu } from '@/hooks/common';
import { useCategoryQuery } from '@/hooks/queries/product';
import { vars } from '@/styles/theme.css';
import type { CategoryVariant, Tab } from '@/types/common';

const TAB_MENUS: Tab<CategoryVariant>[] = [
  { value: CATEGORY_TYPE.FOOD, label: '공통 상품' },
  { value: CATEGORY_TYPE.STORE, label: '오직!여기서' },
];

const getSectionTitle = (categoryType: CategoryVariant, name: string) =>
  categoryType === CATEGORY_TYPE.FOOD ? `${name} 둘러보기` : `오직! ${name}에서`;

export const ProductPage = () => {
  const { state: prevCategory } = useLocation();
  const { selectedTabMenu, handleTabMenuClick } = useTabMenu(prevCategory ?? CATEGORY_TYPE.FOOD);
  const { data: categories } = useCategoryQuery(selectedTabMenu);
  const { reset } = useQueryErrorResetBoundary();

  return (
    <>
      <TabMenu tabMenus={TAB_MENUS} selectedTabMenu={selectedTabMenu} handleTabMenuSelect={handleTabMenuClick} />

      {selectedTabMenu === TAB_MENUS[1].value && (
        <img src={STORE_BANNER} width={'100%'} height={180} alt="편의점 배너" />
      )}

      <section className={categorySection}>
        <Suspense fallback={null}>
          {selectedTabMenu === TAB_MENUS[0].value ? (
            <CategoryFoodList location="products" hasName isCircular />
          ) : (
            <CategoryStoreList hasName isBordered />
          )}
        </Suspense>
      </section>

      {selectedTabMenu === TAB_MENUS[0].value ? (
        <img src={PRODUCT_BANNER} width={'100%'} height={72} alt="상품 배너" />
      ) : (
        <div style={{ height: '12px', backgroundColor: vars.colors.border.light }} aria-hidden />
      )}

      <ErrorBoundary fallback={ErrorComponent} handleReset={reset}>
        <Suspense fallback={<Loading />}>
          {categories.map(({ id, name }) => (
            <section key={id} className={productSection}>
              <SectionHeader name={getSectionTitle(selectedTabMenu, name)} link={`${selectedTabMenu}`} state={id} />
              <Spacing size={8} />
              <ProductPreviewList key={id} category={selectedTabMenu} categoryId={id} />
            </section>
          ))}
        </Suspense>
      </ErrorBoundary>
    </>
  );
};
