export type { Passenger, PassengerDto, PassengersResponse } from './model/types';
export { useGetPassengersQuery } from './api/index.ts';
export { mapDtoToPassengers, getFullName } from './lib/mappers.ts';
export { useCreatePassengerMutation } from '../PassengersTable/api/passengersApi.ts';
