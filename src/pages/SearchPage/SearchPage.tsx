import { useQueryErrorResetBoundary } from '@tanstack/react-query';
import { Suspense, useEffect, useState } from 'react';

import { badgeContainer, searchWrapper, searchResultTitle, searchSection, subTitle, main } from './searchPage.css';

import { Text, Badge, ErrorBoundary, ErrorComponent, Loading, TopBar } from '@/components/Common';
import {
  ProductSearchResultPreviewList,
  RecipeSearchResultPreviewList,
  RecommendList,
  SearchInput,
} from '@/components/Search';
import { RECOMMENDED_TAGS } from '@/constants';
import { useDebounce } from '@/hooks/common';
import { useSearch } from '@/hooks/search';
import { vars } from '@/styles/theme.css';
import { getLocalStorage } from '@/utils/localStorage';

export const SearchPage = () => {
  const {
    inputRef,
    searchQuery,
    isSubmitted,
    isAutocompleteOpen,
    handleSearchQuery,
    handleSearchForm,
    handleSearchByClick,
    handleAutocompleteClose,
    handleTagSearch,
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
      <TopBar>
        <TopBar.BackLink />
        <TopBar.Title title="검색" />
        <TopBar.Spacer />
      </TopBar>

      <main className={main}>
        <section className={searchSection}>
          <form onSubmit={handleSearchForm}>
            <SearchInput
              value={searchQuery}
              onChange={handleSearchQuery}
              isInputSubmitted={isSubmitted}
              ref={inputRef}
            />
          </form>
          {!isSubmitted && debouncedSearchQuery && isAutocompleteOpen && (
            <ErrorBoundary fallback={ErrorComponent} handleReset={reset}>
              <Suspense fallback={<Loading />}>
                <RecommendList
                  searchQuery={debouncedSearchQuery}
                  handleSearchClick={handleSearchByClick}
                  handleAutocompleteClose={handleAutocompleteClose}
                />
              </Suspense>
            </ErrorBoundary>
          )}
        </section>
        <section>
          {isSubmitted && searchQuery ? (
            <>
              <div className={searchWrapper}>
                <Text size="caption3" color="info" weight="semiBold" className={searchResultTitle}>
                  상품 바로가기
                </Text>
                <ErrorBoundary fallback={ErrorComponent}>
                  <Suspense fallback={<Loading />}>
                    <ProductSearchResultPreviewList searchQuery={searchQuery} />
                  </Suspense>
                </ErrorBoundary>
              </div>
              <hr style={{ border: `6px solid ${vars.colors.border.light}` }} />
              <div className={searchWrapper}>
                <Text size="caption3" color="info" weight="semiBold" className={searchResultTitle}>
                  꿀!조합 바로가기
                </Text>
                <ErrorBoundary fallback={ErrorComponent}>
                  <Suspense fallback={<Loading />}>
                    <RecipeSearchResultPreviewList searchQuery={searchQuery} />
                  </Suspense>
                </ErrorBoundary>
              </div>
            </>
          ) : (
            <div className={searchWrapper}>
              <Text size="caption1" weight="medium" className={subTitle}>
                최근 검색어
              </Text>
              <div className={badgeContainer}>
                {recentSearchedKeywords?.map((keyword, index) => (
                  <button type="button" key={index} value={keyword} onClick={handleSearchByClick}>
                    <Badge color="#e6e6e6" textColor="#808080" outlined>
                      {keyword}
                    </Badge>
                  </button>
                ))}
              </div>
              <Text size="caption1" weight="medium" className={subTitle}>
                추천 태그
              </Text>
              <div className={badgeContainer}>
                {RECOMMENDED_TAGS.map(({ id, name }) => (
                  <button type="button" key={id} value={name} onClick={handleTagSearch}>
                    <Badge color="#e6e6e6" textColor="#808080">
                      {name}
                    </Badge>
                  </button>
                ))}
              </div>
            </div>
          )}
        </section>
      </main>
    </>
  );
};
