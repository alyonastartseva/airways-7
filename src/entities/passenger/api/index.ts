import { baseApi } from '../../../shared/api/baseApi';
import { mapDtoToPassengers } from '../lib/mappers';
import { validatePassengersResponse } from '../lib/validation';
import type { Passenger, PassengerDto, PassengersResponse } from '../model/types';

const passengersApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getPassengers: builder.query<Passenger[], void>({
      query: () => '/passengers',
      providesTags: ['Passengers'],

      transformResponse: (response: unknown): Passenger[] => {
        try {
          const validated: PassengersResponse = validatePassengersResponse(response);
          const content = validated.content;
          return content.map(mapDtoToPassengers);
        } catch (e: unknown) {
          console.warn('[API] getPassengers: validation failed, trying fallback []', e);

          const maybe = response as Partial<PassengersResponse> | undefined;
          const content = Array.isArray(maybe?.content) ? (maybe!.content as PassengerDto[]) : [];
          try {
            return content.map(mapDtoToPassengers);
          } catch {
            return [];
          }
        }
      },

      onQueryStarted: async (_arg, { queryFulfilled }) => {
        console.log('[API] getPassengers:start');
        try {
          await queryFulfilled;
          console.log('[API] getPassengers:ok — список обновлён');
        } catch (e: unknown) {
          console.error('[API] getPassengers:fail', e);
        }
      },
    }),
  }),
});

export const { useGetPassengersQuery } = passengersApi;
