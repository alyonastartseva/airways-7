import { baseApi } from '@shared/api/baseApi';
import type { Gender } from '@shared/model/types/gender';

interface PassportPayload {
  middleName: string;
  gender: Gender;
  serialNumberPassport: string;
  passportIssuingCountry: string;
  passportIssuingDate: string | null;
}

interface CreatePassengerPayload {
  firstName: string;
  lastName: string;
  birthDate: string | null;
  phoneNumber: string;
  email?: string;
  passport: PassportPayload;
}

type UpdatePassengerPayload = CreatePassengerPayload;

export const passengersApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createPassenger: builder.mutation<void, CreatePassengerPayload>({
      query: (body) => ({
        url: '/passengers',
        method: 'POST',
        body,
        responseHandler: (res: Response) => res.text(),
      }),
      invalidatesTags: ['Passengers'],
    }),

    updatePassenger: builder.mutation<void, { id: number; body: UpdatePassengerPayload }>({
      query: ({ id, body }) => ({
        url: `/passengers/${id}`,
        method: 'PATCH',
        body,
        responseHandler: (res: Response) => res.text(),
      }),
      invalidatesTags: ['Passengers'],
    }),

    deletePassenger: builder.mutation<void, number>({
      query: (id) => ({
        url: `/passengers/${id}`,
        method: 'DELETE',
        responseHandler: (res: Response) => res.text(),
      }),
      invalidatesTags: ['Passengers'],
    }),
  }),
});

export const {
  useCreatePassengerMutation,
  useUpdatePassengerMutation,
  useDeletePassengerMutation,
} = passengersApi;
