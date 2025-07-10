import type { ApiPassenger } from '../PassengersTable.types';

export const passengersMapper = (content?: ApiPassenger[]) => {
  if (content === undefined) return [];

  return (
    content.map((passenger: ApiPassenger) => ({
      id: passenger.id,
      FIO: `${passenger.lastName} ${passenger.firstName} ${passenger.passport.middleName}`,
      gender: passenger.passport.gender,
      phone: passenger.phoneNumber,
      birthDate: new Date(passenger.birthDate).toLocaleDateString(),
      serialNumber: passenger.passport.serialNumberPassport,
      citizenship: passenger.passport.passportIssuingCountry,
      passportIssuingDate: new Date(passenger.passport.passportIssuingDate).toLocaleDateString(),
      email: passenger.email,
    })) || []
  );
};
