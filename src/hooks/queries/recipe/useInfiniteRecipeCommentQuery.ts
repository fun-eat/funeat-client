import { useSuspendedInfiniteQuery } from '../useSuspendedInfiniteQuery';

import { recipeApi } from '@/apis';
import type { CommentResponse } from '@/types/response';

interface PageParam {
  lastId: number;
  totalElements: number | null;
}

const fetchRecipeComments = async (pageParam: PageParam, recipeId: number) => {
  const { lastId, totalElements } = pageParam;
  const queries = totalElements === null ? '' : `?lastId=${lastId}&totalElements=${totalElements}`;

  const response = await recipeApi.get({
    params: `/${recipeId}/comments`,
    queries: queries,
    credentials: true,
  });
  const data: CommentResponse = await response.json();
  return data;
};

const useInfiniteRecipeCommentQuery = (recipeId: number) => {
  return useSuspendedInfiniteQuery(
    ['recipeComment', recipeId],
    ({ pageParam = { lastId: 0, totalElements: null } }) => fetchRecipeComments(pageParam, recipeId),
    {
      getNextPageParam: (prevResponse: CommentResponse) => {
        const lastId = prevResponse.comments.length ? prevResponse.comments[prevResponse.comments.length - 1].id : 0;
        const totalElements = prevResponse.totalElements;
        const lastCursor = { lastId: lastId, totalElements: totalElements };
        return prevResponse.hasNext ? lastCursor : undefined;
      },
    }
  );
};

export default useInfiniteRecipeCommentQuery;
