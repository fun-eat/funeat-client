import { useRef } from 'react';
import { Link } from 'react-router-dom';

import RecipeItem from '../RecipeItem/RecipeItem';

import { useIntersectionObserver } from '@/hooks/common';
import { useInfiniteRecipesQuery } from '@/hooks/queries/recipe';
import type { SortOption } from '@/types/common';
import { container } from './recipeList.css';

interface RecipeListProps {
  selectedOption: SortOption;
}

const RecipeList = ({ selectedOption }: RecipeListProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { fetchNextPage, hasNextPage, data } = useInfiniteRecipesQuery(selectedOption.value);
  useIntersectionObserver<HTMLDivElement>(fetchNextPage, scrollRef, hasNextPage);

  const recipes = data.pages.flatMap((page) => page.recipes);

  return (
    <>
      <ul className={container}>
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            <Link to={`${recipe.id}`}>
              <RecipeItem recipe={recipe} />
            </Link>
          </li>
        ))}
      </ul>
      <div ref={scrollRef} aria-hidden style={{ height: '1px' }} />
    </>
  );
};

export default RecipeList;
