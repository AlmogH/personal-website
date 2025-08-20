import {
  queryOptions,
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';
import { z } from 'zod';
import { useSession, signIn, signOut } from 'next-auth/react';

import { AuthResponse, User } from '@/types/api';
import { api } from './api-client';

export const getUserQueryOptions = () => {
  return queryOptions({
    queryKey: ['user'],
    queryFn: async (): Promise<User | null> => {
      try {
        const response = await api.get('/auth/me');
        return (response as { data: User }).data;
      } catch {
        return null;
      }
    },
  });
};

export const useUser = () => {
  const { data: session } = useSession();
  const query = useQuery({
    ...getUserQueryOptions(),
    enabled: !!session,
  });

  return {
    ...query,
    data: session?.user ?? query.data ?? null,
  };
};

export const useLogin = ({ onSuccess }: { onSuccess?: () => void } = {}) => {
  return useMutation({
    mutationFn: async (data: LoginInput) => {
      const result = await signIn('credentials', {
        ...data,
        redirect: false,
      });
      if (result?.error) {
        throw new Error(result.error);
      }
      return result;
    },
    onSuccess,
  });
};

export const useLogout = ({ onSuccess }: { onSuccess?: () => void } = {}) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => signOut({ redirect: false }),
    onSuccess: () => {
      queryClient.removeQueries({ queryKey: ['user'] });
      onSuccess?.();
    },
  });
};

export const loginInputSchema = z.object({
  email: z.string().min(1, 'Required').email('Invalid email'),
  password: z.string().min(5, 'Required'),
});

export type LoginInput = z.infer<typeof loginInputSchema>;

export const registerInputSchema = z
  .object({
    email: z.string().min(1, 'Required'),
    firstName: z.string().min(1, 'Required'),
    lastName: z.string().min(1, 'Required'),
    password: z.string().min(5, 'Required'),
  })
  .and(
    z
      .object({
        teamId: z.string().min(1, 'Required'),
        teamName: z.null().default(null),
      })
      .or(
        z.object({
          teamName: z.string().min(1, 'Required'),
          teamId: z.null().default(null),
        }),
      ),
  );

export type RegisterInput = z.infer<typeof registerInputSchema>;