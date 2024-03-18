import { useQueryErrorResetBoundary } from '@tanstack/react-query';
import { Suspense, useEffect, useState } from 'react';

import { badgeContainer, subTitle } from './searchPage.css';

import { Badge, ErrorBoundary, ErrorComponent, Loading, PageHeader } from '@/components/Common';
import { RecommendList, SearchInput } from '@/components/Search';
import { useDebounce } from '@/hooks/common';
import { useSearch } from '@/hooks/search';
import { RECOMMENDED_TAGS } from '@/constants';

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

  return (
    <>
      <section>
        <PageHeader title="검색" hasBackLink />
        <div style={{ height: '16px' }} />
        <form onSubmit={handleSearch}>
          <SearchInput value={searchQuery} onChange={handleSearchQuery} />
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
      <div style={{ height: '28px' }} />
      <section>
        <p className={subTitle}>최근 검색어</p>
        <div className={badgeContainer}>
          <button>
            <Badge color="#e6e6e6" textColor="#808080" outlined>
              맛있어요
            </Badge>
          </button>
        </div>
        <div style={{ height: '28px' }} />
        <section>
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
        </section>
      </section>
    </>
  );
};
