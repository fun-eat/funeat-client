import { Suspense } from 'react';

import { searchResultTitle, searchSection } from './searchPage.css';

import { ErrorBoundary, ErrorComponent, Loading, Text } from '@/components/Common';
import { SearchInput, TagSearchResultList } from '@/components/Search';
import { useSearch } from '@/hooks/search';

export const TagSearchResultPage = () => {
  const { inputRef, searchQuery, isSubmitted, handleSearchQuery, handleSearchForm } = useSearch();

  return (
    <section className={searchSection}>
      <form onSubmit={handleSearchForm}>
        <SearchInput
          value={searchQuery}
          onChange={handleSearchQuery}
          isInputSubmitted={isSubmitted}
          ref={inputRef}
          isTagSearch
        />
      </form>
      <div>
        <Text size="caption3" color="info" weight="semiBold" className={searchResultTitle}>
          '{searchQuery}'가 포함된 상품
        </Text>
        <ErrorBoundary fallback={ErrorComponent}>
          <Suspense fallback={<Loading />}>
            <TagSearchResultList searchQuery={searchQuery} />
          </Suspense>
        </ErrorBoundary>
      </div>
    </section>
  );
};
