import { createContext } from 'react';

import type { Recipe } from '@/types/recipe';

interface RecipeItemValue {
  recipe: Recipe;
  children?: React.ReactNode;
}

export const RecipeItemValueContext = createContext<RecipeItemValue | null>(null);

const RecipeItemProvider = ({ children, recipe }: RecipeItemValue) => {
  const recipeItemValue = {
    recipe,
    children,
  };

  return <RecipeItemValueContext.Provider value={recipeItemValue}>{children}</RecipeItemValueContext.Provider>;
};

export default RecipeItemProvider;
