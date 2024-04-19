import { useRef } from 'react';

import { listWrapper } from './recipeSearchResultPreviewList.css';
import SearchNotFound from '../SearchNotFound/SearchNotFound';

import { ShowAllButton } from '@/components/Common';
import { DefaultRecipeItem } from '@/components/Recipe';
import { PATH } from '@/constants/path';
import { useIntersectionObserver } from '@/hooks/common';
import { useInfiniteRecipeSearchResultsQuery } from '@/hooks/queries/search';
import displaySlice from '@/utils/displaySlice';

interface RecipeSearchResultPreviewListProps {
  searchQuery: string;
}

const RecipeSearchResultPreviewList = ({ searchQuery }: RecipeSearchResultPreviewListProps) => {
  const { data: searchResponse, fetchNextPage, hasNextPage } = useInfiniteRecipeSearchResultsQuery(searchQuery);
  const scrollRef = useRef<HTMLDivElement>(null);
  useIntersectionObserver<HTMLDivElement>(fetchNextPage, scrollRef, hasNextPage);

  const recipes = searchResponse.pages.flatMap((page) => page.recipes);

  if (recipes.length === 0) {
    return <SearchNotFound />;
  }

  return (
    <ul className={listWrapper}>
      {displaySlice(false, recipes, 4).map((recipe, idx) => (
        <li key={recipe.id}>
          {idx < 4 ? (
            <DefaultRecipeItem recipe={recipe} />
          ) : (
            <ShowAllButton link={`${PATH.SEARCH}/recipes?query=${searchQuery}`} />
          )}
        </li>
      ))}
    </ul>
  );
};

export default RecipeSearchResultPreviewList;
