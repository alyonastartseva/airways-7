import type { Category, SearchCriteria } from './types';
import type { ApiResponse } from '@/pages/search/api/types';
import type { Destination, DestinationsServerResponse } from '@/shared/model/destinations.types';
import { DEST_PAGE_LIMIT, normalizeDestinations } from '@/shared/utils/destinations';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const ticketSearchApi = createApi({
  reducerPath: 'ticketSearchApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: (builder) => ({
    getCategories: builder.query<Category[], void>({
      query: () => 'categories',
    }),

    getDestinations: builder.query<
      Destination[],
      void | {
        search?: string;
        page?: number;
        limit?: number;
      }
    >({
      query: ({ search, page = 1, limit = DEST_PAGE_LIMIT } = {}) => {
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

    searchTickets: builder.query<ApiResponse, SearchCriteria>({
      query: (criteria) => {
        const params: Record<string, string> = {};
        if (criteria.currentLocation)
          params.airportFrom = String(criteria.currentLocation).toUpperCase();
        if (criteria.destination) params.airportTo = String(criteria.destination).toUpperCase();
        if (criteria.dateFrom) params.departureDate = String(criteria.dateFrom);
        if (criteria.tripType !== 'oneWay' && criteria.dateTo)
          params.returnDate = String(criteria.dateTo);
        if (typeof criteria.passengers === 'number')
          params.numberOfPassengers = String(criteria.passengers);
        if (criteria.seatType) params.categoryOfSeats = String(criteria.seatType).toUpperCase();

        return { url: 'search', params };
      },
    }),
  }),
});

export const { useGetCategoriesQuery, useLazyGetDestinationsQuery, useLazySearchTicketsQuery } =
  ticketSearchApi;
