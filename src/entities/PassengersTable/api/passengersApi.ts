import { baseApi } from '../../../shared/api/baseApi';
import type { PassengersResponse, Passenger } from '../PassengersTable.types';
import { passengersMapper } from '../utils/passengersMapper';

export const passengersApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getPassengers: builder.query<Passenger[], void>({
      query: () => {
        return '/passengers';
      },
      providesTags: ['Passengers'],
      transformResponse: (response: PassengersResponse) =>
        response.content?.length ? passengersMapper(response.content) : [],
    }),
  }),
});

export const { useGetPassengersQuery } = passengersApi;
