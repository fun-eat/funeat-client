import { MouseEvent, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

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

  const navigate = useNavigate();

  const handleRecipeLink = (id: number) => (event: MouseEvent<HTMLLIElement>) => {
    event.preventDefault();
    navigate(id);
  };

  return (
    <>
      <ul className={container}>
        {recipes.map((recipe) => (
          <li key={recipe.id} onClick={() => handleRecipeLink(recipe.id)}>
            <RecipeItem recipe={recipe} />
          </li>
        ))}
      </ul>
      <div ref={scrollRef} aria-hidden style={{ height: '1px' }} />
    </>
  );
};

export default RecipeList;
