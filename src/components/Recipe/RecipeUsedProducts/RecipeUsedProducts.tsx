import { useQueryErrorResetBoundary } from '@tanstack/react-query';
import { Suspense, useState } from 'react';
import { Link } from 'react-router-dom';

import { addProduct } from './recipeUsedProducts.css';

import { ErrorBoundary, ErrorComponent, Loading, Text } from '@/components/Common';
import { ProductOverviewList } from '@/components/Product';
import { PATH } from '@/constants/path';
import { useDebounce } from '@/hooks/common';
import { useRecipeFormValueContext } from '@/hooks/context';
import { useSearch } from '@/hooks/search';
import { itemTitle, requiredMark } from '@/styles/form.css';

const MAX_USED_PRODUCTS_COUNT = 6;

const RecipeUsedProducts = () => {
  const { formValue: recipeFormValue } = useRecipeFormValueContext();
  const { reset } = useQueryErrorResetBoundary();

  const { searchQuery, handleSearchQuery, isAutocompleteOpen, handleAutocompleteClose, resetSearchQuery } = useSearch();
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState(searchQuery || '');

  useDebounce(
    () => {
      setDebouncedSearchQuery(searchQuery);
    },
    200,
    [searchQuery]
  );

  return (
    <>
      <h2 className={itemTitle} tabIndex={0}>
        사용한 상품
        <sup className={requiredMark} aria-label="필수 작성">
          *
        </sup>
      </h2>
      <div style={{ height: 8 }} />

      <Link to={`${PATH.RECIPE}/used-products`} className={addProduct}>
        <Text size="caption1" weight="medium" color="info">
          상품 추가({recipeFormValue.products.length}/{MAX_USED_PRODUCTS_COUNT})
        </Text>
      </Link>
      <div style={{ height: 8 }} />

      <ErrorBoundary fallback={ErrorComponent} handleReset={reset}>
        <Suspense fallback={<Loading />}>
          <ProductOverviewList products={recipeFormValue.products} />
        </Suspense>
      </ErrorBoundary>
    </>
  );
};

export default RecipeUsedProducts;
