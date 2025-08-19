import { baseApi } from '../../../shared/api/baseApi';
import type { LoginRequest, TokenResponse } from '../types';

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    loginUser: builder.mutation<TokenResponse, LoginRequest>({
      query: ({ username, password }) => {
        const body = new URLSearchParams();
        body.append('grant_type', 'password');
        body.append('client_id', 'airline-project-client');
        body.append('username', username);
        body.append('password', password);

        return {
          url: 'token',
          method: 'POST',
          body: body.toString(),
        };
      },
    }),
  }),
});

export const { useLoginUserMutation } = authApi;
