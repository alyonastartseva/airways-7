import type { Category, Destination } from '../model/types';
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

export type ApiSegment = {
  airportFrom: string;
  airportTo: string;
  cityFrom: string;
  cityTo: string;
  departureDateTime: string;
  arrivalDateTime: string;
  flightTime: string;
  flightSeatId: number;
};

export type ApiFlight = {
  totalPrice: number;
  dataTo: ApiSegment;
  dataBack: ApiSegment | null;
};

export type ApiSearchEcho = {
  from: string;
  to: string;
  departureDate: string;
  returnDate?: string | null;
  numberOfPassengers?: number;
  categoryOfSeats?: string;
};

export type ApiSearchResponse = {
  flights: ApiFlight[];
  search: ApiSearchEcho;
};

export type ApiParams = {
  airportFrom: string;
  airportTo: string;
  departureDate: string;
  returnDate?: string;
  numberOfPassengers?: number;
  categoryOfSeats?: string;
};

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

    searchTickets: builder.query<ApiSearchResponse, ApiParams>({
      query: (params) => ({
        url: 'search',
        method: 'GET',
        params,
      }),

      serializeQueryArgs: ({ queryArgs }) => JSON.stringify(queryArgs),
    }),
  }),
});

export const { useGetCategoriesQuery, useLazyGetDestinationsQuery, useLazySearchTicketsQuery } =
  ticketSearchApi;
