import { useGetPassengersQuery } from './api/passengersApi';
import { passengersMapper } from './lib/passengersMapper';
import type { Passenger, ApiPassenger, PassengersResponse } from './model/types';

export type { Passenger, ApiPassenger, PassengersResponse };
export { passengersMapper, useGetPassengersQuery };
