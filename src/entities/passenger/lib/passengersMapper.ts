import type { ApiPassenger } from '../../../entities/passenger';
import { defaultPassenger } from '../model/defaultPassenger';
import { createPhoneNumber } from '../model/types';

const cashe = new WeakMap<ApiPassenger[], unknown[]>();

export const passengersMapper = (content?: ApiPassenger[]) => {
  if (!content || !Array.isArray(content)) return [];
  if (cashe.has(content)) return cashe.get(content) as ApiPassenger[];

  const result = content.map((passenger: ApiPassenger) => ({
    ...defaultPassenger,
    id: passenger.id,
    FIO: `${passenger.lastName} ${passenger.firstName} ${passenger.passport.middleName}`.trim(),
    gender: passenger.passport.gender,
    phone: createPhoneNumber(passenger.phoneNumber),
    birthDate: new Date(passenger.birthDate).toLocaleDateString(),
    serialNumber: passenger.passport?.serialNumberPassport,
    citizenship: passenger.passport?.passportIssuingCountry,
    passportIssuingDate: new Date(passenger.passport?.passportIssuingDate).toLocaleDateString(),
    email: passenger.email,
  }));

  cashe.set(content, result);
  return result;
};
