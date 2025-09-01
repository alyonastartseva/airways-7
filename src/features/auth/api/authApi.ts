import type { LoginRequest, TokenResponse } from '../types';
import { baseQueryWithReauth } from '@/shared/lib/baseQueryWithReauth';
import { createApi } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: baseQueryWithReauth,
  endpoints: (b) => ({
    loginUser: b.mutation<TokenResponse, LoginRequest>({
      query: ({ username, password }) => ({
        url: 'token',
        method: 'POST',
        body: new URLSearchParams({
          grant_type: 'password',
          client_id: 'airline-project-client',
          username,
          password,
        }),
      }),
    }),
  }),
});

export const { useLoginUserMutation } = authApi;
