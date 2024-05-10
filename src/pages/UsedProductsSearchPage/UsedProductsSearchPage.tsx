import { useQueryErrorResetBoundary } from '@tanstack/react-query';
import { Suspense, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { main, searchSection } from './usedProductsSearchPage.css';

import { ErrorBoundary, ErrorComponent, Loading, TopBar } from '@/components/Common';
import { SearchedProductList } from '@/components/Recipe';
import { SearchInput } from '@/components/Search';
import { useDebounce } from '@/hooks/common';
import { useRecipeFormActionContext } from '@/hooks/context';
import { useSearch } from '@/hooks/search';
import type { RecipeProduct } from '@/types/recipe';

export const UsedProductsSearchPage = () => {
  const {
    inputRef,
    searchQuery,
    isSubmitted,
    isAutocompleteOpen,
    handleSearchQuery,
    handleAutocompleteClose,
    resetSearchQuery,
  } = useSearch();
  const { reset } = useQueryErrorResetBoundary();
  const { handleRecipeFormValue } = useRecipeFormActionContext();

  const navigate = useNavigate();

  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState(searchQuery || '');

  useDebounce(
    () => {
      setDebouncedSearchQuery(searchQuery);
    },
    200,
    [searchQuery]
  );

  const addUsedProducts = (newProduct: RecipeProduct) => {
    handleRecipeFormValue({ target: 'products', value: newProduct, action: 'add' });

    navigate(-1);

    handleAutocompleteClose();
    resetSearchQuery();
  };

  return (
    <>
      <TopBar>
        <TopBar.BackLink />
        <TopBar.Title title="검색" />
        <TopBar.Spacer />
      </TopBar>

      <main className={main}>
        <section className={searchSection}>
          <SearchInput
            value={searchQuery}
            onChange={handleSearchQuery}
            isInputSubmitted={isSubmitted}
            placeholder="상품을 검색해보세요"
            ref={inputRef}
          />
          {!isSubmitted && debouncedSearchQuery && isAutocompleteOpen && (
            <ErrorBoundary fallback={ErrorComponent} handleReset={reset}>
              <Suspense fallback={<Loading />}>
                <SearchedProductList
                  searchQuery={debouncedSearchQuery}
                  addUsedProducts={addUsedProducts}
                  handleAutocompleteClose={handleAutocompleteClose}
                />
              </Suspense>
            </ErrorBoundary>
          )}
        </section>
      </main>
    </>
  );
};

export default UsedProductsSearchPage;
