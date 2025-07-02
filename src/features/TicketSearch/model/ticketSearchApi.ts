import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface Category {
  id: string;
  name: string;
}
interface Destination {
  id: string;
  name: string;
}
interface SearchCriteria {
  currentLocation: string;
  destination: string;
  passengers: number;
  dateFrom?: string;
  dateTo?: string;
  tripType: 'roundTrip' | 'oneWay';
  noTransfer: boolean;
  seatType: string;
}

export const ticketSearchApi = createApi({
  reducerPath: 'ticketSearchApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: (builder) => ({
    getCategories: builder.query<Category[], void>({
      query: () => 'categories',
    }),
    getDestinations: builder.query<Destination[], { search: string; page: number }>({
      query: ({ search, page }) => ({
        url: 'destinations',
        params: { q: search, page, limit: 20 },
      }),
    }),
    searchTickets: builder.mutation<any, SearchCriteria>({
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
