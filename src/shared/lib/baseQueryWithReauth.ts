import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { BaseQueryFn } from '@reduxjs/toolkit/query';
import type { FetchArgs, FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { getToken, saveToken } from './token';

const baseUrl = 'http://92.118.114.29:8180/realms/airline-realm/protocol/openid-connect/';

const baseQuery = fetchBaseQuery({
  baseUrl,
  prepareHeaders: (headers) => {
    const token = getToken();
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    headers.set('Content-Type', 'application/x-www-form-urlencoded');
    return headers;
  },
});

export const baseQueryWithReauth: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (
  args,
  api,
  extraOptions
) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result.error && result.error.status === 401) {
    const refresh_token = localStorage.getItem('refresh_token');
    if (!refresh_token) return result;

    const body = new URLSearchParams();
    body.append('grant_type', 'refresh_token');
    body.append('client_id', 'airline-project-client');
    body.append('refresh_token', refresh_token);

    const refreshResult = await baseQuery(
      {
        url: 'token',
        method: 'POST',
        body: body.toString(),
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      },
      api,
      extraOptions
    );

    if (refreshResult.data && typeof refreshResult.data === 'object') {
      const { access_token, refresh_token: newRefreshToken } = refreshResult.data as {
        access_token: string;
        refresh_token: string;
      };

      saveToken(access_token);
      localStorage.setItem('refresh_token', newRefreshToken);

      result = await baseQuery(args, api, extraOptions);
    } else {
      localStorage.removeItem('token');
      localStorage.removeItem('refresh_token');
    }
  }

  return result;
};
