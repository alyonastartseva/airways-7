import { useState } from "react";
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { getPassangers } from "../../api/passangers";
import type { Column } from "../../../../shared/ui/DataTable/Table";

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

interface TablePassenger {
  id: number;
  FIO: string;
  gender: string;
  phone: string | number;
  birthDate: string;
  serialNumber: string;
  citizenship: string;
  passportIssuingDate: string;
  email: string;
  rawData: ApiPassenger;
};

export const usePassangersTable = () => {
    const [page, setPage] = useState(1);
    const { data, isLoading, isError, error } = useQuery<ApiPassenger[], Error>({
        queryKey: ['passenger', page],
        queryFn: () => getPassangers(page),
        placeholderData: keepPreviousData,
        staleTime: 60_000,
      });

      const tableData = data?.map((passenger): TablePassenger => ({
        id: passenger.id,
        FIO: `${passenger.lastName} ${passenger.firstName} ${passenger.passport.middleName}`,
        gender: passenger.passport.gender,
        phone: passenger.phoneNumber,
        birthDate: new Date(passenger.birthDate).toLocaleDateString(),
        serialNumber: passenger.passport.serialNumberPassport,
        citizenship: passenger.passport.passportIssuingCountry,
        passportIssuingDate: new Date(passenger.passport.passportIssuingDate).toLocaleDateString(),
        email: passenger.email,
        rawData: passenger,
      })) || []

    const columns: Column<TablePassenger>[] = [
      { key: 'id', title: 'ID', width: 100 },
      { key: 'FIO', title: 'Имя, Фамилия, Отчество'},
      { key: 'gender', title: 'Пол'},
      { key: 'phone', title: 'Телефон'},
      { key: 'birthDate', title: 'Дата рождения'},
      { key: 'serialNumber', title: 'Серийный номер'},
      { key: 'citizenship', title: 'Гражданство'},
      { key: 'passportIssuingDate', title: 'Дата выдачи паспорта'},
    ];
    const handleEdit = (passenger: TablePassenger) => {
      console.log(passenger.rawData, 'handleEdit');
    };

    return { data: tableData, columns, isLoading, handleEdit };
};