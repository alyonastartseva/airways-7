import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://92.118.114.29:8180/realms/airline-realm/protocol/openid-connect/',
    prepareHeaders: (headers) => {
      headers.set('Content-Type', 'application/x-www-form-urlencoded');
      return headers;
    },
  }),
  endpoints: (builder) => ({
    loginUser: builder.mutation<{ access_token: string }, { username: string; password: string }>({
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
