import { Suspense } from 'react';

import { form, formWrapper, searchResultTitle, searchSection } from './searchPage.css';

import { ErrorBoundary, ErrorComponent, Loading, Text } from '@/components/Common';
import { SearchInput, TagSearchResultList } from '@/components/Search';
import { useSearch } from '@/hooks/search';

export const TagSearchResultPage = () => {
  const { inputRef, searchQuery, isSubmitted, handleSearchQuery, handleSearchForm } = useSearch();

  return (
    <>
      <div className={formWrapper}>
        <form className={form} onSubmit={handleSearchForm}>
          <SearchInput
            value={searchQuery}
            onChange={handleSearchQuery}
            isInputSubmitted={isSubmitted}
            ref={inputRef}
            isTagSearch
          />
        </form>
      </div>
      <section className={searchSection}>
        <Text size="caption3" color="info" weight="semiBold" className={searchResultTitle}>
          &apos;{searchQuery}&apos;가 포함된 상품
        </Text>
        <ErrorBoundary fallback={ErrorComponent}>
          <Suspense fallback={<Loading />}>
            <TagSearchResultList searchQuery={searchQuery} />
          </Suspense>
        </ErrorBoundary>
      </section>
    </>
  );
};
