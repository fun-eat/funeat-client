import { useRef } from 'react';
import { Link } from 'react-router-dom';

import { listWrapper, showMore } from './recipeSearchResultPreviewList.css';
import SearchNotFound from '../SearchNotFound/SearchNotFound';

import { SvgIcon, Text } from '@/components/Common';
import { RecipeItem } from '@/components/Recipe';
import { PATH } from '@/constants/path';
import { useIntersectionObserver } from '@/hooks/common';
import { useInfiniteRecipeSearchResultsQuery } from '@/hooks/queries/search';
import { vars } from '@/styles/theme.css';
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
            <Link to={`${PATH.RECIPE}/${recipe.id}`}>
              <RecipeItem recipe={recipe} />
            </Link>
          ) : (
            <Link to={`${PATH.SEARCH}/recipes?query=${searchQuery}`}>
              <div className={showMore}>
                <SvgIcon variant="arrowRight" stroke={vars.colors.gray5} />
              </div>
              <Text size="caption2" weight="semiBold" color="info">
                더보기
              </Text>
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
};

export default RecipeSearchResultPreviewList;
