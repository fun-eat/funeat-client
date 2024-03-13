import { Spacing } from '@fun-eat/design-system';
import { useQueryErrorResetBoundary } from '@tanstack/react-query';
import { Suspense } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import styled from 'styled-components';

import { menuName, tabMenu, tabMenuWrapper } from './productListPage.css';

import { CategoryFoodTab, CategoryStoreTab, Loading, ErrorBoundary, ErrorComponent } from '@/components/Common';
import { isCategoryVariant } from '@/types/common';

const TAB_MENUS = [
  { type: 'food', label: '공통 상품' },
  { type: 'store', label: '오직!여기서' },
];

export const ProductListPage = () => {
  const { category } = useParams();

  const { reset } = useQueryErrorResetBoundary();

  if (!category || !isCategoryVariant(category)) {
    return null;
  }

  return (
    <>
      <ul className={tabMenuWrapper}>
        {TAB_MENUS.map(({ type, label }) => (
          <li key={type} className={tabMenu}>
            <NavLink to={`/products/${type}`}>
              {({ isActive }) => <span className={isActive ? menuName['active'] : menuName['default']}>{label}</span>}
            </NavLink>
          </li>
        ))}
      </ul>
      <Spacing size={20} />
      <Suspense fallback={null}>{category === 'food' ? <CategoryFoodTab /> : <CategoryStoreTab />}</Suspense>
      <Spacing size={20} />
      <ProductListContainer>
        <ErrorBoundary fallback={ErrorComponent} handleReset={reset}>
          <Suspense fallback={<Loading />}>
            {/*<ProductList category={category} selectedOption={selectedOption} />*/}
          </Suspense>
        </ErrorBoundary>
      </ProductListContainer>
    </>
  );
};

const ProductListContainer = styled.div`
  height: calc(100% - 100px);
  overflow-y: auto;
`;
