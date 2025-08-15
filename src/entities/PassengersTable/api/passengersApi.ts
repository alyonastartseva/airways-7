import { baseApi } from '@shared/api/baseApi';

export const passengersApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createPassenger: builder.mutation<void, Record<string, string>>({
      query: (body) => ({
        url: '/passengers',
        method: 'POST',
        body,
        responseHandler: (res) => res.text(),
      }),
      invalidatesTags: ['Passengers'],
      onQueryStarted: async (arg, { queryFulfilled }) => {
        console.log('[API] createPassenger:start', arg);
        try {
          await queryFulfilled;
          console.log('[API] createPassenger:ok — всё окей');
        } catch (e) {
          console.error('[API] createPassenger:fail — всё плохо', e);
        }
      },
    }),

    updatePassenger: builder.mutation<void, { id: string; body: Record<string, string> }>({
      query: ({ id, body }) => ({
        url: `/passengers/${id}`,
        method: 'PATCH',
        body,
        responseHandler: (res) => res.text(),
      }),
      invalidatesTags: ['Passengers'],
      onQueryStarted: async (arg, { queryFulfilled }) => {
        console.log('[API] updatePassenger:start', arg);
        try {
          await queryFulfilled;
          console.log('[API] updatePassenger:ok — всё окей');
        } catch (e) {
          console.error('[API] updatePassenger:fail — всё плохо', e);
        }
      },
    }),

    deletePassenger: builder.mutation<void, string>({
      query: (id) => ({
        url: `/passengers/${id}`,
        method: 'DELETE',
        responseHandler: (res) => res.text(),
      }),
      invalidatesTags: ['Passengers'],
      onQueryStarted: async (id, { queryFulfilled }) => {
        console.log('[API] deletePassenger:start', { id });
        try {
          await queryFulfilled;
          console.log('[API] deletePassenger:ok — всё окей');
        } catch (e) {
          console.error('[API] deletePassenger:fail — всё плохо', e);
        }
      },
    }),
  }),
});

export const {
  useCreatePassengerMutation,
  useUpdatePassengerMutation,
  useDeletePassengerMutation,
} = passengersApi;
