export type phoneNumber = string & { __brand: 'phoneNumber' };

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

export interface PassengerDto {
  id: number;
  firstName: string;
  lastName: string;
  birthDate: string;
  phoneNumber: string;
  email: string;
  passport: {
    middleName: string;
    gender: string;
    serialNumberPassport: string;
    passportIssuingDate: string;
    passportIssuingCountry: string;
  };
}

export interface PassengersResponse {
  content: PassengerDto[];
  totalElements: number;
  totalPages: number;
  number: number;
  size: number;
}
