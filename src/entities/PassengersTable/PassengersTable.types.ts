interface PassportData {
  middleName: string;
  gender: string;
  serialNumberPassport: string;
  passportIssuingDate: Date;
  passportIssuingCountry: string;
}

export interface ApiPassenger {
  id: number;
  firstName: string;
  lastName: string;
  birthDate: Date;
  phoneNumber: string | number;
  passport: PassportData;
  email: string;
}

export interface PassengersResponse {
  content: ApiPassenger[];
  totalElements: number;
  totalPages: number;
  number: number;
  size: number;
}

export interface Passenger {
  id: number;
  FIO: string;
  gender: string;
  phone: string | number;
  birthDate: string;
  serialNumber: string;
  citizenship: string;
  passportIssuingDate: string;
  email: string;
}
