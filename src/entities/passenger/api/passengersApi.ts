import { baseApi } from '../../../shared/api/baseApi';
import { passengersMapper } from '../lib/passengersMapper';
import { validatePassengersResponse } from '../lib/schemas';
import type { Passenger } from '../model/types';

const passengersApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getPassengers: builder.query<Passenger[], void>({
      query: () => '/passengers',
      providesTags: ['Passengers'],
      transformResponse: (response: unknown): Passenger[] => {
        try {
          const validateResponse = validatePassengersResponse(response);
          return validateResponse.content?.length
            ? (passengersMapper(validateResponse.content) as Passenger[])
            : [];
        } catch (error) {
          console.error('Validation error', error);
          throw error;
        }
      },
    }),
  }),
});

export const { useGetPassengersQuery } = passengersApi;
