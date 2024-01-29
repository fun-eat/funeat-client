import { useSuspendedInfiniteQuery } from '..';

import { searchApi } from '@/apis';
import type { RecipeSearchResponse } from '@/types/response';

const fetchRecipeSearchResults = async (query: string, pageParam: number) => {
  const response = await searchApi.get({
    params: '/recipes/results',
    queries: `?query=${query}&lastRecipeId=${pageParam}`,
  });
  const data: RecipeSearchResponse = await response.json();

  return data;
};

const useInfiniteRecipeSearchResultsQuery = (query: string) => {
  return useSuspendedInfiniteQuery(
    ['search', 'recipes', query],
    ({ pageParam = 0 }) => fetchRecipeSearchResults(query, pageParam),
    {
      getNextPageParam: (prevResponse: RecipeSearchResponse) => {
        const lastCursor = prevResponse.recipes.length ? prevResponse.recipes[prevResponse.recipes.length - 1].id : 0;
        return prevResponse.hasNext ? lastCursor : undefined;
      },
    }
  );
};

export default useInfiniteRecipeSearchResultsQuery;
