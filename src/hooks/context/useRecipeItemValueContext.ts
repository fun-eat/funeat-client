import { useContext } from 'react';

import { RecipeItemValueContext } from '@/contexts/RecipeItemContext';

const useRecipeItemValueContext = () => {
  const RecipeItemValue = useContext(RecipeItemValueContext);
  if (RecipeItemValue === null || RecipeItemValue === undefined) {
    throw new Error('useRecipeItemValueContext는 RecipeItem Provider 안에서 사용해야 합니다.');
  }

  return RecipeItemValue;
};

export default useRecipeItemValueContext;
