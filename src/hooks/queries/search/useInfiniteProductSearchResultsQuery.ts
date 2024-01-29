import { useSuspendedInfiniteQuery } from '..';

import { searchApi } from '@/apis';
import type { ProductSearchResultResponse } from '@/types/response';

const fetchProductSearchResults = async (query: string, pageParam: number) => {
  const response = await searchApi.get({
    params: '/products/results',
    queries: `?query=${query}&lastProductId=${pageParam}`,
  });
  const data: ProductSearchResultResponse = await response.json();

  return data;
};

const useInfiniteProductSearchResultsQuery = (query: string) => {
  return useSuspendedInfiniteQuery(
    ['search', 'products', 'results', query],
    ({ pageParam = 0 }) => fetchProductSearchResults(query, pageParam),
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
