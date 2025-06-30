interface PassportData { 
  middleName: string;
  gender: string;
  serialNumberPassport: string;
  passportIssuingDate: Date;
  passportIssuingCountry: string;
};

export interface ApiPassenger {
  id: number;
  firstName: string;
  lastName: string;
  birthDate: Date;
  phoneNumber: string | number;
  passport: PassportData;
  email: string;
};

export type PaginationParams = {
    page: number; 
    limit?: number;
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
};