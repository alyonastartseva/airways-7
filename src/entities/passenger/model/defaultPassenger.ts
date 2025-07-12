import { createPhoneNumber } from './types';

export const defaultPassenger = {
  id: 0,
  FIO: '',
  gender: '',
  phone: createPhoneNumber(''),
  birthDate: '',
  serialNumber: '',
  citizenship: '',
  passportIssuingDate: '',
  email: '',
};
