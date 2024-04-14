import { useSuspendedInfiniteQuery } from '..';

import { searchApi } from '@/apis';
import type { ProductSearchResultResponse } from '@/types/response';

type SearchResultEndPoint = 'tags' | 'products';

const fetchProductSearchResults = async (query: string, endpoint: SearchResultEndPoint, pageParam: number) => {
  const response = await searchApi.get({
    params: `/${endpoint}/results`,
    queries: `?query=${query}&lastProductId=${pageParam}`,
  });
  const data: ProductSearchResultResponse = await response.json();

  return data;
};

const useInfiniteProductSearchResultsQuery = (query: string, endpoint: SearchResultEndPoint) => {
  return useSuspendedInfiniteQuery(
    ['search', endpoint, 'results', query],
    ({ pageParam = 0 }) => fetchProductSearchResults(query, endpoint, pageParam),
    {
      getNextPageParam: (prevResponse: ProductSearchResultResponse) => {
        const lastCursor = prevResponse.products.length
          ? prevResponse.products[prevResponse.products.length - 1].id
          : 0;
        return prevResponse.hasNext ? lastCursor : undefined;
      },
    }
  );
};

export default useInfiniteProductSearchResultsQuery;
