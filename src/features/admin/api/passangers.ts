interface PassportData { 
  middleName: string;
  gender: string;
  serialNumberPassport: string;
  passportIssuingDate: Date;
  passportIssuingCountry: string;
};

interface ApiPassenger {
  id: number;
  firstName: string;
  lastName: string;
  birthDate: Date;
  phoneNumber: string | number;
  passport: PassportData;
  email: string;
};

export const getPassangers = async (params: {
  page: number;
  pageSize: number;
  sortField?: string;
  sortOrder?: 'asc' | 'desc'
}) => {
  const query = new URLSearchParams({
    page: params.page.toString(),
    size: params.pageSize.toString(),
  })

  const response = await fetch(`http://92.118.114.29:8080/api/passengers?${query}`, {
    headers: {
      "Content-Type": "application/json"
    }
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`)
  }

  const data = await response.json()

  const tableData = data.content?.map((passenger: ApiPassenger) => ({
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
      current: params.page,
      pageSize: params.pageSize,
      total: data.totalElements,
    },
  };
};