import { createPhoneNumber } from '../lib/helpers';
import type { Passenger } from './types';

export const DEFAULT_PASSENGERS: Passenger = {
  id: 0,
  firstName: '',
  lastName: '',
  middleName: '',
  fullname: '',
  gender: '',
  phone: createPhoneNumber(''),
  birthDate: '',
  serialNumber: '',
  citizenship: '',
  passportIssuingDate: '',
  email: '',
};
