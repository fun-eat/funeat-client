import { useRef } from 'react';
import { useSearchParams } from 'react-router-dom';

import { listWrapper, main } from './recipeSearchListPage.css';

import { TopBar } from '@/components/Common';
import { DefaultRecipeItem } from '@/components/Recipe';
import SearchNotFound from '@/components/Search/SearchNotFound/SearchNotFound';
import { useIntersectionObserver } from '@/hooks/common';
import { useInfiniteRecipeSearchResultsQuery } from '@/hooks/queries/search';

export const RecipeSearchListPage = () => {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('query') || '';

  const { data: searchResponse, fetchNextPage, hasNextPage } = useInfiniteRecipeSearchResultsQuery(searchQuery);
  const scrollRef = useRef<HTMLDivElement>(null);
  useIntersectionObserver<HTMLDivElement>(fetchNextPage, scrollRef, hasNextPage);

  const recipes = searchResponse.pages.flatMap((page) => page.recipes);

  if (recipes.length === 0) {
    return <SearchNotFound />;
  }

  return (
    <>
      <TopBar>
        <TopBar.BackLink />
        <TopBar.Title title={`'${searchQuery}'이/가 포함된 꿀조합`} />
        <TopBar.Spacer />
      </TopBar>
      <main className={main}>
        <ul className={listWrapper}>
          {recipes.map((recipe) => (
            <li key={recipe.id}>
              <DefaultRecipeItem recipe={recipe} />
            </li>
          ))}
        </ul>
        <div ref={scrollRef} aria-hidden />
      </main>
    </>
  );
};
