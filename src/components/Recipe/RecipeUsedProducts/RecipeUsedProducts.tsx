import { useQueryErrorResetBoundary } from '@tanstack/react-query';
import { Suspense } from 'react';
import { Link } from 'react-router-dom';

import { addProduct, disabled, iconWrapper } from './recipeUsedProducts.css';

import { ErrorBoundary, ErrorComponent, Loading, SvgIcon, Text } from '@/components/Common';
import { ProductOverviewList } from '@/components/Product';
import { PATH } from '@/constants/path';
import { useRecipeFormValueContext } from '@/hooks/context';
import { itemTitle, requiredMark } from '@/styles/form.css';
import { vars } from '@/styles/theme.css';

const MAX_USED_PRODUCTS_COUNT = 6;

const RecipeUsedProducts = () => {
  const { formValue: recipeFormValue } = useRecipeFormValueContext();
  const { reset } = useQueryErrorResetBoundary();

  const isValid = recipeFormValue.products.length < MAX_USED_PRODUCTS_COUNT;

  return (
    <>
      <h2 className={itemTitle} tabIndex={0}>
        사용한 상품
        <sup className={requiredMark} aria-label="필수 작성">
          *
        </sup>
      </h2>
      <div style={{ height: 8 }} />

      {isValid ? (
        <Link to={`${PATH.RECIPE}/used-products`} className={addProduct}>
          <Text size="caption1" weight="medium" color="info">
            상품 추가({recipeFormValue.products.length}/{MAX_USED_PRODUCTS_COUNT})
            <SvgIcon variant="plus" width={14} height={14} stroke={vars.colors.gray3} className={iconWrapper} />
          </Text>
        </Link>
      ) : (
        <div className={disabled}>
          <Text size="caption1" weight="medium" color="info">
            상품 추가({recipeFormValue.products.length}/{MAX_USED_PRODUCTS_COUNT})
          </Text>
        </div>
      )}
      <div style={{ height: 8 }} />

      <ErrorBoundary fallback={ErrorComponent} handleReset={reset}>
        <Suspense fallback={<Loading />}>
          <ProductOverviewList products={recipeFormValue.products} hasRemoved />
        </Suspense>
      </ErrorBoundary>
    </>
  );
};

export default RecipeUsedProducts;
