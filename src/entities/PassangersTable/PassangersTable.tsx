import { Table } from '../../features/admin/components/DataTable/Table';
import type { Column } from '../../shared/model/Column.types';
import type { Passenger } from './PassangersTable.types';
import { getPassangers } from './api/passangersApi';

const columns: Column<Passenger>[] = [
  { key: 'id', title: 'ID', sortable: true, width: 60 },
  { key: 'FIO', title: 'Имя, Фамилия, Отчество', sortable: true, width: 200 },
  { key: 'gender', title: 'Пол', sortable: true, width: 80 },
  { key: 'phone', title: 'Телефон', sortable: true, width: 130 },
  { key: 'birthDate', title: 'Дата рождения', sortable: true, width: 110 },
  { key: 'serialNumber', title: 'Серийный номер', sortable: true, width: 125 },
  { key: 'citizenship', title: 'Гражданство', sortable: true, width: 130 },
  { key: 'passportIssuingDate', title: 'Дата выдачи паспорта', sortable: true, width: 110 },
];

export const PassangersTable = () => {
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
        fetchData={getPassangers}
        rowKey="id"
        selectable
        onRowClick={handleRowClick}
        onSelectionChange={handleSelectionChange}
      />
    </>
  );
};
