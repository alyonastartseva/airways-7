import { baseApi } from '../../../shared/api/baseApi.ts';
import type { Category, Destination, SearchCriteria } from '../model/types.ts';

const settingLimit = 20;

export const ticketSearchApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query<Category[], void>({
      query: () => 'categories',
    }),
    getDestinations: builder.query<Destination[], { search: string; page: number; limit?: number }>(
      {
        query: ({ search, page, limit = settingLimit }) => ({
          url: 'destinations',
          params: { q: search, page, limit },
        }),
      },
    ),
    searchTickets: builder.mutation<object, SearchCriteria>({
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
