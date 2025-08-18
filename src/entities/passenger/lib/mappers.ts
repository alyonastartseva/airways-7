import type { Passenger, PassengerDto } from '../model/types';
import { createPhoneNumber } from './helpers';

export const getFullName = (dto: PassengerDto): string =>
  `${dto.lastName} ${dto.firstName} ${dto.passport.middleName}`.trim();

export const mapDtoToPassengers = (dto: PassengerDto): Passenger => ({
  id: dto.id,

  // для формы
  firstName: dto.firstName,
  lastName: dto.lastName,
  middleName: dto.passport.middleName,

  // для таблицы
  fullname: getFullName(dto),

  gender: dto.passport.gender,
  phone: createPhoneNumber(dto.phoneNumber),
  birthDate: dto.birthDate,

  serialNumber: dto.passport.serialNumberPassport,
  citizenship: dto.passport.passportIssuingCountry,
  passportIssuingDate: dto.passport.passportIssuingDate,

  email: dto.email,
});
