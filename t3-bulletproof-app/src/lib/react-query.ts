import { QueryClient, DefaultOptions } from '@tanstack/react-query';

const queryConfig: DefaultOptions = {
  queries: {
    // throw errors, for easier error handling
    throwOnError: true,
    // wait 20 seconds before retrying
    refetchOnWindowFocus: false,
    retry: false,
    staleTime: 1000 * 60,
  },
};

export const queryClient = new QueryClient({ defaultOptions: queryConfig });