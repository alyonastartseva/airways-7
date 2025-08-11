import type { PassengersResponse, Passenger } from '../types.ts';
import { passengersMapper } from '../utils/passengersMapper.ts';
import { baseApi } from '@shared/api/baseApi';

export const passengersApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getPassengers: builder.query<Passenger[], void>({
      query: () => {
        return '/passengers';
      },
      transformResponse: (response: PassengersResponse) => passengersMapper(response.content),
    }),
  }),
});

export const { useGetPassengersQuery } = passengersApi;
