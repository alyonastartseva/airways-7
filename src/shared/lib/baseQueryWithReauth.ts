import {
  getToken,
  setToken,
  getRefreshToken,
  setRefreshToken,
  clearTokens,
} from '@/shared/lib/token';
import type { FetchArgs, FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { fetchBaseQuery, type BaseQueryFn } from '@reduxjs/toolkit/query/react';

const BASE_URL = '/auth/realms/airline-realm/protocol/openid-connect/';

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  prepareHeaders: (headers) => {
    const token = getToken();
    if (token) headers.set('Authorization', `Bearer ${token}`);
    return headers;
  },
});

type TokenResp = { access_token: string; refresh_token?: string };

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null;
}

function isTokenResponse(data: unknown): data is TokenResp {
  if (!isRecord(data)) return false;
  const access = data['access_token'];
  return typeof access === 'string';
}

export const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extra) => {
  const doRequest = () => baseQuery(args, api, extra);
  let result = await doRequest();

  if (result.error?.status === 401) {
    const refresh = getRefreshToken();
    if (!refresh) return result;

    const refreshBody = new URLSearchParams({
      grant_type: 'refresh_token',
      client_id: 'airline-project-client',
      refresh_token: refresh,
    });

    const refreshResult = await baseQuery(
      { url: 'token', method: 'POST', body: refreshBody },
      api,
      extra,
    );

    if (refreshResult.error) {
      clearTokens();
      return result;
    }

    if (isTokenResponse(refreshResult.data)) {
      setToken(refreshResult.data.access_token);
      if (refreshResult.data.refresh_token) setRefreshToken(refreshResult.data.refresh_token);
      result = await doRequest();
    } else {
      clearTokens();
    }
  }

  return result;
};
