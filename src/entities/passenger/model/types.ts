export interface PassengersResponse {
  content: ApiPassenger[];
  totalElements: number;
  totalPages: number;
  number: number;
  size: number;
}

type phoneNumber = string & { __brand: 'phoneNumber' };

// Валидацию закомментил т.к. с бэка приходит не номер, а ерунда
// export const createPhoneNumber = (value: string): phoneNumber => {
//   if (!/^\+?[1-9]\d{1,14}$/.test(value.replace(/[\s()-]/g, ''))) {
//     throw new Error('Invalid phone number format');
//   }
//   return value as phoneNumber;
// };

export const createPhoneNumber = (value: string): phoneNumber => value as phoneNumber;

export interface Passenger {
  id: number;
  FIO: string;
  gender: string;
  phone: phoneNumber;
  birthDate: string;
  serialNumber: string;
  citizenship: string;
  passportIssuingDate: string;
  email: string;
}

interface PassportData {
  middleName: string;
  gender: string;
  serialNumberPassport: string;
  passportIssuingDate: string;
  passportIssuingCountry: string;
}

export interface ApiPassenger {
  id: number;
  firstName: string;
  lastName: string;
  birthDate: string;
  phoneNumber: phoneNumber;
  passport: PassportData;
  email: string;
}
