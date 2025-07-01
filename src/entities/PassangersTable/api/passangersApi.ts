interface PassportData {
  middleName: string;
  gender: string;
  serialNumberPassport: string;
  passportIssuingDate: Date;
  passportIssuingCountry: string;
}

interface ApiPassenger {
  id: number;
  firstName: string;
  lastName: string;
  birthDate: Date;
  phoneNumber: string | number;
  passport: PassportData;
  email: string;
}

const API_BASE = 'http://92.118.114.29:8080/api';

export const getPassangers = async (params?: {
  page?: number;
  pageSize?: number;
  sortField?: string;
  sortOrder?: 'asc' | 'desc';
}) => {
  let url = `${API_BASE}/passengers`;
  if (params) {
    const query = new URLSearchParams();

    if (params.page !== undefined) {
      query.append('page', params.page.toString());
    }

    if (params.pageSize !== undefined) {
      query.append('size', params.pageSize.toString());
    }

    if (params.sortField) {
      query.append('sort', `${params.sortField},${params.sortOrder ?? 'asc'}`);
    }

    if (Array.from(query).length > 0) {
      url += `?${query}`;
    }
  }
  const response = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();

  const tableData =
    data.content?.map((passenger: ApiPassenger) => ({
      id: passenger.id,
      FIO: `${passenger.lastName} ${passenger.firstName} ${passenger.passport.middleName}`,
      gender: passenger.passport.gender,
      phone: passenger.phoneNumber,
      birthDate: new Date(passenger.birthDate).toLocaleDateString(),
      serialNumber: passenger.passport.serialNumberPassport,
      citizenship: passenger.passport.passportIssuingCountry,
      passportIssuingDate: new Date(passenger.passport.passportIssuingDate).toLocaleDateString(),
      email: passenger.email,
    })) || [];

  return {
    data: tableData,
    pagination: {
      current: params?.page ?? 1,
      pageSize: params?.pageSize ?? 10,
      total: data.totalElements,
    },
  };
};
