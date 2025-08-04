import type { ApiPassenger, Passenger } from '../api/PassengersTable.types';

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

const formatDate = (value: Date | string): string => {
  const date = new Date(value);
  return date.toISOString().slice(0, 10);
};
