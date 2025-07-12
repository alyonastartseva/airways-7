import { baseQueryWithRetry } from '../lib/utils/retry';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQueryWithValidation = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_API_URL,
});

export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: baseQueryWithRetry(baseQueryWithValidation),
  tagTypes: ['Passengers'],
  endpoints: () => ({}),
});
