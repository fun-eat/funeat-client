import { useRef } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

import { listWrapper } from './recipeSearchListPage.css';

import { PageHeader } from '@/components/Common';
import { DefaultRecipeItem } from '@/components/Recipe';
import SearchNotFound from '@/components/Search/SearchNotFound/SearchNotFound';
import { PATH } from '@/constants/path';
import { useIntersectionObserver } from '@/hooks/common';
import { useInfiniteRecipeSearchResultsQuery } from '@/hooks/queries/search';

export const RecipeSearchListPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
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
      <PageHeader title={`'${searchQuery}'이/가 포함된 꿀조합`} hasBackLink />
      <ul className={listWrapper}>
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            <Link to={`${PATH.RECIPE}/${recipe.id}`}>
              <DefaultRecipeItem recipe={recipe} />
            </Link>
          </li>
        ))}
      </ul>
      <div ref={scrollRef} aria-hidden />
    </>
  );
};
