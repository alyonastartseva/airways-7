export interface Passenger {
  id: number;

  // для формы редактирования
  firstName: string;
  lastName: string;
  middleName: string;

  // для таблицы
  fullname: string;

  gender: string;
  phone: phoneNumber;
  birthDate: string;

  // паспорт
  serialNumber: string;
  citizenship: string;
  passportIssuingDate: string;

  email: string;
}

export type phoneNumber = string & { __brand: 'phoneNumber' };

export const mapDtoToPassengers = (dto: PassengerDto): Passenger => ({
  id: dto.id,
  fullname: getFullName(dto),
  firstName: dto.firstName,
  lastName: dto.lastName,
  middleName: dto.passport.middleName,
  gender: dto.passport.gender,
  phone: createPhoneNumber(dto.phoneNumber),
  birthDate: dto.birthDate,
  serialNumber: dto.passport.serialNumberPassport,
  citizenship: dto.passport.passportIssuingCountry,
  passportIssuingDate: dto.passport.passportIssuingDate,
  email: dto.email,
});

export interface PassengersResponse {
  content: PassengerDto[];
  totalElements: number;
  totalPages: number;
  number: number;
  size: number;
}
