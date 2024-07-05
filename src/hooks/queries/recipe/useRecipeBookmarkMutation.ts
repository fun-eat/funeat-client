import { useMutation, useQueryClient } from '@tanstack/react-query';

import { recipeApi } from '@/apis';
import type { RecipeBookmarkRequestBody, RecipeDetail } from '@/types/recipe';

const headers = { 'Content-Type': 'application/json' };

const patchRecipeBookmark = (recipeId: number, body: RecipeBookmarkRequestBody) => {
  return recipeApi.patch({ params: `/${recipeId}/bookmark`, credentials: true }, headers, body);
};

const useRecipeBookmarkMutation = (recipeId: number) => {
  const queryClient = useQueryClient();

  const queryKey = ['recipeDetail', recipeId];

  return useMutation({
    mutationFn: (body: RecipeBookmarkRequestBody) => patchRecipeBookmark(recipeId, body),
    onMutate: async (newBookmarkRequest) => {
      await queryClient.cancelQueries({ queryKey: queryKey });

      const previousRequest = queryClient.getQueryData<RecipeDetail>(queryKey);

      if (previousRequest) {
        queryClient.setQueryData(queryKey, () => ({
          ...previousRequest,
          bookmark: newBookmarkRequest.bookmark,
        }));
      }

      return { previousRequest };
    },
    onError: (error, _, context) => {
      queryClient.setQueryData(queryKey, context?.previousRequest);

      if (error instanceof Error) {
        throw new Error(error.message);
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: queryKey });
    },
  });
};

export default useRecipeBookmarkMutation;
