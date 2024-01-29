import { useSuspendedInfiniteQuery } from '..';

import { searchApi } from '@/apis';
import type { ProductSearchAutocompleteResponse } from '@/types/response';

const fetchProductSearchAutocomplete = async (query: string, pageParam: number) => {
  const response = await searchApi.get({ params: '/products', queries: `?query=${query}&lastProductId=${pageParam}` });
  const data: ProductSearchAutocompleteResponse = await response.json();

  return data;
};

const useInfiniteProductSearchAutocompleteQuery = (query: string) => {
  return useSuspendedInfiniteQuery(
    ['search', 'products', query],
    ({ pageParam = 0 }) => fetchProductSearchAutocomplete(query, pageParam),
    {
      getNextPageParam: (prevResponse: ProductSearchAutocompleteResponse) => {
        const lastCursor = prevResponse.products.length
          ? prevResponse.products[prevResponse.products.length - 1].id
          : 0;
        return prevResponse.hasNext ? lastCursor : undefined;
      },
    }
  );
};

export default useInfiniteProductSearchAutocompleteQuery;
