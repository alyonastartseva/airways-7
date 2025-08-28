import {
  useGetPassengersQuery,
  useCreatePassengerMutation,
  type Passenger,
} from '../../../entities/passenger';
import type { Column } from '../../../shared/model/Column.types';
import { BaseAdminModal } from '../../../shared/ui/BaseAdminModal/BaseAdminModal';
import type { AdminModalField } from '../../../shared/ui/BaseAdminModal/types';
import { Table } from '../../admin-table';
import styles from './PassengersTable.module.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const COLUMNS: Column<Passenger>[] = [
  { key: 'id', title: 'ID', sortable: true, width: 60 },
  { key: 'fullname', title: 'Имя, Фамилия, Отчество', sortable: true, width: 254 },
  { key: 'gender', title: 'Пол', sortable: true, width: 80 },
  { key: 'phone', title: 'Телефон', sortable: true, width: 130 },
  { key: 'birthDate', title: 'Дата рождения', sortable: true, width: 115 },
  { key: 'serialNumber', title: 'Серийный номер', sortable: true, width: 125 },
  { key: 'citizenship', title: 'Гражданство', sortable: true, width: 150 },
  { key: 'passportIssuingDate', title: 'Дата выдачи паспорта', sortable: true, width: 115 },
];

const PASSENGER_FIELDS: AdminModalField[] = [
  { title: 'Имя', name: 'firstName', type: 'input', required: true },
  { title: 'Фамилия', name: 'lastName', type: 'input', required: true },
  { title: 'Гражданство', name: 'citizenship', type: 'input', required: true },
  {
    title: 'Пол',
    name: 'gender',
    type: 'select',
    required: true,
    options: [
      { label: 'Мужской', value: 'male' },
      { label: 'Женский', value: 'female' },
    ],
  },
  { title: 'Телефон', name: 'phoneNumber', type: 'input' },
  { title: 'Дата рождения', name: 'birthDate', type: 'date' },
];

const PassengersTable = () => {
  const navigate = useNavigate();
  const { data, isLoading, isError, refetch } = useGetPassengersQuery();
  const [createPassenger] = useCreatePassengerMutation();
  const [isModalOpen, setModalOpen] = useState(false);

  const handleRowClick = (passenger: Passenger) => {
    console.log('Selected user:', passenger);
  };

  const handleSelectionChange = (selected: Passenger[]) => {
    console.log('Selected rows:', selected);
  };

  const handleError = () => {
    navigate('/');
  };

  const handleCreatePassenger = async (formData: Record<string, string>) => {
    try {
      await createPassenger(formData).unwrap();
    } catch {
      throw new Error('Не удалось создать пассажира');
    }
  };

  return (
    <>
      <BaseAdminModal
        title="Добавление пассажира"
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        fields={PASSENGER_FIELDS}
        onSubmit={handleCreatePassenger}
        afterSuccess={() => {
          refetch();
          setModalOpen(false);
        }}
      />

      <Table
        title="Пассажиры"
        columns={COLUMNS}
        data={data}
        isLoading={isLoading}
        isError={isError}
        rowKey="id"
        selectable
        onRowClick={handleRowClick}
        onSelectionChange={handleSelectionChange}
        onError={handleError}
      >
        <button className={styles.addButton} onClick={() => setModalOpen(true)}>
          Добавить пассажира
          <svg
            className={styles.addIcon}
            style={{
              backgroundImage: 'url("src/features/passengers-management/ui/Add.svg")',
              height: '20px',
              width: '20px',
            }}
          />
        </button>
      </Table>
    </>
  );
};

export default PassengersTable;
