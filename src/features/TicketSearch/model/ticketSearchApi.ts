import type { Category, Destination, SearchCriteria } from '../model/types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const settingLimit = 20;

type DestinationsServerResponse =
  | Destination[]
  | {
      items?: Destination[];
      data?: Destination[];
      content?: Destination[];
      results?: Destination[];
      list?: Destination[];
      [k: string]: unknown;
    };

function normalizeDestinations(raw: DestinationsServerResponse): Destination[] {
  if (Array.isArray(raw)) return raw;
  if (raw && typeof raw === 'object') {
    const r = raw as Record<string, unknown>;
    const candidates = ['items', 'data', 'content', 'results', 'list'] as const;
    for (const key of candidates) {
      const v = r[key];
      if (Array.isArray(v)) return v as Destination[];
    }
  }
  return [];
}

export const ticketSearchApi = createApi({
  reducerPath: 'ticketSearchApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: (builder) => ({
    getCategories: builder.query<Category[], void>({
      query: () => 'categories',
    }),

    getDestinations: builder.query<
      Destination[],
      { search?: string; page?: number; limit?: number } | void
    >({
      query: ({ search, page = 1, limit = settingLimit } = {}) => {
        const q = (search ?? '').trim();
        const includeSearch = typeof search === 'string';

        return {
          url: 'destinations',
          params: {
            ...(includeSearch ? { search: q } : {}),
            page: Math.max(0, page - 1),
            size: limit,
          },
        };
      },

      transformResponse: (raw: DestinationsServerResponse) => normalizeDestinations(raw),
      keepUnusedDataFor: 300,
    }),

    searchTickets: builder.mutation<unknown, SearchCriteria>({
      query: (criteria) => ({
        url: 'search',
        method: 'POST',
        body: criteria,
      }),
    }),
  }),
});

export const { useGetCategoriesQuery, useLazyGetDestinationsQuery, useSearchTicketsMutation } =
  ticketSearchApi;
