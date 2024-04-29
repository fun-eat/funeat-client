import { useSuspendedInfiniteQuery } from '../useSuspendedInfiniteQuery';

import { memberApi } from '@/apis';
import type { MemberRecipeResponse } from '@/types/response';

const fetchMemberRecipeBookmark = async (pageParam: number) => {
  const response = await memberApi.get({
    // 임시로 적은거라 params 확정되면 수정할 것 (json도 수정해야 함)
    params: '/bookmarkRecipes',
    queries: `?page=${pageParam}`,
    credentials: true,
  });
  const data: MemberRecipeResponse = await response.json();
  return data;
};

const useInfiniteMemberRecipeBookmarkQuery = () => {
  return useSuspendedInfiniteQuery(
    ['member', 'bookmarkRecipes'],
    ({ pageParam = 0 }) => fetchMemberRecipeBookmark(pageParam),
    {
      getNextPageParam: (prevResponse: MemberRecipeResponse) => {
        const isLast = prevResponse.page.lastPage;
        const nextPage = prevResponse.page.requestPage + 1;
        return isLast ? undefined : nextPage;
      },
    }
  );
};

export default useInfiniteMemberRecipeBookmarkQuery;
