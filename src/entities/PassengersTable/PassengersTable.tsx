import { Table } from '../../features/admin/components/DataTable/Table';
import type { Column } from '../../shared/model/Column.types';
import type { Passenger } from './PassengersTable.types';
import { useGetPassengersQuery } from './api/passengersApi';

const columns: Column<Passenger>[] = [
  { key: 'id', title: 'ID', sortable: true, width: 60 },
  { key: 'FIO', title: 'Имя, Фамилия, Отчество', sortable: true, width: 200 },
  { key: 'gender', title: 'Пол', sortable: true, width: 80 },
  { key: 'phone', title: 'Телефон', sortable: true, width: 130 },
  { key: 'birthDate', title: 'Дата рождения', sortable: true, width: 115 },
  { key: 'serialNumber', title: 'Серийный номер', sortable: true, width: 125 },
  { key: 'citizenship', title: 'Гражданство', sortable: true, width: 150 },
  { key: 'passportIssuingDate', title: 'Дата выдачи паспорта', sortable: true, width: 115 },
];

export const PassengersTable = () => {
  const handleRowClick = (passenger: Passenger) => {
    console.log('Selected user:', passenger);
  };

  const handleSelectionChange = (selected: Passenger[]) => {
    console.log('Selected rows:', selected);
  };

  return (
    <>
      <Table
        title="Пассажиры"
        columns={columns}
        useQuery={useGetPassengersQuery}
        rowKey="id"
        selectable
        onRowClick={handleRowClick}
        onSelectionChange={handleSelectionChange}
      />
    </>
  );
};
