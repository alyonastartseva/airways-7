<<<<<<< HEAD
import type { Passenger } from '../types';

export function passengersMapper(idk: string): Passenger[] {
  return [{ content: idk }];
}
=======
import type { ApiPassenger, Passenger } from '../api/PassengersTable.types';
import { formatDate } from '@/shared/utils/date';

export const passengersMapper = (apiPassengers: ApiPassenger[]): Passenger[] => {
  return apiPassengers.map((p) => ({
    id: p.id,
    FIO: `${p.lastName} ${p.firstName} ${p.passport.middleName || ''}`.trim(),
    gender: p.passport.gender,
    phone: p.phoneNumber,
    birthDate: formatDate(p.birthDate),
    serialNumber: p.passport.serialNumberPassport,
    citizenship: p.passport.passportIssuingCountry,
    passportIssuingDate: formatDate(p.passport.passportIssuingDate),
    email: p.email,
  }));
};
>>>>>>> 200771425dca2615ec0233552dfde191781b594a
