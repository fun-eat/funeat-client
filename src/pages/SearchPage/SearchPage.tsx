import { useQueryErrorResetBoundary } from '@tanstack/react-query';
import { Suspense, useEffect, useState } from 'react';

import { badgeContainer, searchResultTitle, searchSection, showMoreButton, subTitle } from './searchPage.css';

import { Badge, ErrorBoundary, ErrorComponent, Loading, PageHeader } from '@/components/Common';
import { ProductSearchResultList, RecipeSearchResultList, RecommendList, SearchInput } from '@/components/Search';
import { RECOMMENDED_TAGS } from '@/constants';
import { useDebounce } from '@/hooks/common';
import { useSearch } from '@/hooks/search';
import { getLocalStorage } from '@/utils/localStorage';

export const SearchPage = () => {
  const {
    inputRef,
    searchQuery,
    isSubmitted,
    isAutocompleteOpen,
    handleSearchQuery,
    handleSearch,
    handleSearchClick,
    handleAutocompleteClose,
    searchKeyword,
    resetSearchQuery,
  } = useSearch();
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState(searchQuery || '');
  const { reset } = useQueryErrorResetBoundary();

  useDebounce(
    () => {
      setDebouncedSearchQuery(searchQuery);
    },
    200,
    [searchQuery]
  );

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const recentSearchedKeywords = getLocalStorage<string[]>('recentSearchedKeywords');

  return (
    <>
      <section className={searchSection}>
        <PageHeader title="검색" hasBackLink />
        <div style={{ height: '16px' }} />
        <form onSubmit={isSubmitted ? resetSearchQuery : handleSearch}>
          <SearchInput value={searchQuery} onChange={handleSearchQuery} isInputSubmitted={isSubmitted} ref={inputRef} />
        </form>
        {!isSubmitted && debouncedSearchQuery && isAutocompleteOpen && (
          <ErrorBoundary fallback={ErrorComponent} handleReset={reset}>
            <Suspense fallback={<Loading />}>
              <RecommendList
                searchQuery={debouncedSearchQuery}
                handleSearchClick={handleSearchClick}
                handleAutocompleteClose={handleAutocompleteClose}
              />
            </Suspense>
          </ErrorBoundary>
        )}
      </section>
      <section className={searchSection}>
        {isSubmitted && searchQuery ? (
          <div>
            <p className={searchResultTitle}>상품 바로가기</p>
            <ErrorBoundary fallback={ErrorComponent}>
              <Suspense fallback={<Loading />}>
                <ProductSearchResultList searchQuery={searchQuery} />
              </Suspense>
            </ErrorBoundary>
            <button className={showMoreButton}>더보기</button>
            {/* divider 컴포넌트 */}
            <hr style={{ border: '1px solid #e6e6e6' }} />
            <div style={{ height: '12px' }} />
            <p className={searchResultTitle}>꿀!조합 바로가기</p>
            <ErrorBoundary fallback={ErrorComponent}>
              <Suspense fallback={<Loading />}>
                <RecipeSearchResultList searchQuery={searchQuery} />
              </Suspense>
            </ErrorBoundary>
          </div>
        ) : (
          <div>
            <p className={subTitle}>최근 검색어</p>
            <div className={badgeContainer}>
              {recentSearchedKeywords?.map((keyword, index) => (
                <button key={index} onClick={() => searchKeyword(keyword)}>
                  <Badge color="#e6e6e6" textColor="#808080" outlined>
                    {keyword}
                  </Badge>
                </button>
              ))}
            </div>
            <p className={subTitle}>추천 태그</p>
            <div className={badgeContainer}>
              {RECOMMENDED_TAGS.map(({ id, name }) => (
                <button key={id}>
                  <Badge color="#e6e6e6" textColor="#808080">
                    {name}
                  </Badge>
                </button>
              ))}
            </div>
          </div>
        )}
      </section>
    </>
  );
};
