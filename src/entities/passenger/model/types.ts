export interface Passenger {
  id: number;
  firstName?: string;
  lastName?: string;
  middleName?: string;
  gender: string;
  phone: phoneNumber;
  birthDate: string;
  citizenship: string;
  email: string;
  passport?: {
    serialNumber: string;
    issuingDate: string;
    issuingCountry: string;
  };
  fullname?: string;
  serialNumber?: string;
  passportIssuingDate?: string;
}

export type phoneNumber = string & { __brand: 'phoneNumber' };

export interface PassengerDto {
  id: number;
  firstName: string;
  lastName: string;
  birthDate: string;
  phoneNumber: phoneNumber;
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
