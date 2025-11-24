import type { ErrorResponse } from '@/types/response';

export const fetchApi = async (url: string, options: RequestInit) => {
  const response = await fetch(url, options);

  if (!response.ok) {
    const errorData: ErrorResponse = await response.json();
    throw new Error(errorData.message);
  }

  return response;
};
