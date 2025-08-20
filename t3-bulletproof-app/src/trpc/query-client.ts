import { QueryClient } from "@tanstack/react-query";
import { cache } from "react";

const createQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 30 * 1000,
      },
    },
  });

export const getQueryClient = cache(createQueryClient);