import {
  useGetPassengersQuery,
  useCreatePassengerMutation,
  useUpdatePassengerMutation,
  useDeletePassengerMutation,
  type Passenger,
} from '../../../entities/passenger';
import type { Column } from '../../../shared/model/Column.types';
import { BaseAdminModal } from '../../../shared/ui/BaseAdminModal/BaseAdminModal';
import type { AdminModalField } from '../../../shared/ui/BaseAdminModal/types';
import { Table } from '../../admin-table';
import styles from './PassengersTable.layout.module.scss';
import { PlusOutlined, MoreOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { Button, message, Dropdown, Modal } from 'antd';
import type { Dayjs } from 'dayjs';
import { useMemo, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

type Gender = 'MALE' | 'FEMALE';
type ISODate = string;
type CountryCode = string;

type FormDataShape = {
  firstName?: string;
  lastName?: string;
  middleName?: string;
  gender?: Gender | string;
  phoneNumber?: string;
  birthDate?: Dayjs | Date | string | null;
  serialNumber?: string;
  citizenship?: string;
  passportIssuingDate?: Dayjs | Date | string | null;
  email?: string;
};

const PASSENGER_FIELDS: AdminModalField[] = [
  { title: 'Имя', name: 'firstName', type: 'input', required: true },
  { title: 'Фамилия', name: 'lastName', type: 'input', required: true },
  { title: 'Отчество', name: 'middleName', type: 'input' },
  { title: 'Гражданство', name: 'citizenship', type: 'input', required: true },
  {
    title: 'Пол',
    name: 'gender',
    type: 'select',
    required: true,
    options: [
      { label: 'Мужской', value: 'MALE' },
      { label: 'Женский', value: 'FEMALE' },
    ],
  },
  { title: 'Телефон', name: 'phoneNumber', type: 'input' },
  { title: 'Дата рождения', name: 'birthDate', type: 'date' },
  { title: 'Серийный номер', name: 'serialNumber', type: 'input' },
  { title: 'Дата выдачи паспорта', name: 'passportIssuingDate', type: 'date' },
];

const errMsg = (e: unknown): string => {
  const maybe = e as { status?: number; data?: unknown; error?: string };

  const data = maybe?.data;
  const dataMessage =
    typeof data === 'string'
      ? data
      : data && typeof (data as { message?: unknown }).message === 'string'
        ? (data as { message: string }).message
        : null;

  if (typeof maybe?.error === 'string' && maybe.error) return maybe.error;
  if (dataMessage) return dataMessage;
  if (typeof maybe?.status === 'number') return `Ошибка ${maybe.status}`;
  return 'Неизвестная ошибка';
};

const normDate = (d: Dayjs | Date | string | null | undefined): ISODate | null => {
  if (!d) return null;
  if (typeof (d as Dayjs).format === 'function') return (d as Dayjs).format('YYYY-MM-DD');
  if (d instanceof Date && !Number.isNaN(d.getTime())) return d.toISOString().slice(0, 10);
  if (typeof d === 'string') return d.slice(0, 10);
  return null;
};

const normCountry = (v: string | null | undefined): CountryCode | null =>
  v ? (v.trim().toUpperCase() as CountryCode) : null;

const PassengersTable = () => {
  const navigate = useNavigate();

  const { data, isLoading, isError, refetch } = useGetPassengersQuery();
  const [createPassenger] = useCreatePassengerMutation();
  const [updatePassenger] = useUpdatePassengerMutation();
  const [deletePassenger] = useDeletePassengerMutation();

  const [isCreateModalOpen, setCreateModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [current, setCurrent] = useState<Passenger | null>(null);

  const [modal, modalCtx] = Modal.useModal();
  const [msgApi, msgCtx] = message.useMessage();

  const baseColumns = useMemo<Column<Passenger>[]>(
    () => [
      { key: 'id', title: 'ID', sortable: true },
      { key: 'fullname', title: 'Имя, Фамилия, Отчество', sortable: true },
      { key: 'gender', title: 'Пол', sortable: true },
      { key: 'phone', title: 'Телефон', sortable: true },
      { key: 'birthDate', title: 'Дата рождения', sortable: true },
      { key: 'serialNumber', title: 'Серийный номер', sortable: true },
      { key: 'citizenship', title: 'Гражданство', sortable: true },
      { key: 'passportIssuingDate', title: 'Дата выдачи паспорта', sortable: true },
    ],
    [],
  );

  const handleCreatePassenger = useCallback(
    async (formData: Record<string, unknown>) => {
      try {
        const fv = formData as FormDataShape;
        const payload = {
          firstName: fv.firstName?.trim() || '',
          lastName: fv.lastName?.trim() || '',
          birthDate: normDate(fv.birthDate),
          phoneNumber: fv.phoneNumber?.trim() || '',
          passport: {
            middleName: fv.middleName?.trim() || '',
            gender: (fv.gender as Gender) || 'MALE',
            serialNumberPassport: fv.serialNumber?.trim() || '',
            passportIssuingCountry: normCountry(fv.citizenship) || '',
            passportIssuingDate: normDate(fv.passportIssuingDate),
          },
        };
        await createPassenger(payload).unwrap();
        msgApi.success('Создано — всё окей');
      } catch (e) {
        msgApi.error(`Всё плохо: ${errMsg(e)}`);
      }
    },
    [createPassenger, msgApi],
  );

  const openEdit = useCallback((row: Passenger) => {
    setCurrent(row);
    setEditModalOpen(true);
  }, []);

  const handleEditSubmit = useCallback(
    async (formData: Record<string, unknown>) => {
      if (!current) return;

      const fv = formData as FormDataShape;
      const payload = {
        firstName: fv.firstName?.trim() ?? current.firstName,
        lastName: fv.lastName?.trim() ?? current.lastName,
        birthDate: normDate(fv.birthDate) ?? current.birthDate,
        phoneNumber: (fv.phoneNumber ?? current.phone)?.toString().trim(),
        email: current.email,
        passport: {
          middleName: fv.middleName?.trim() ?? current.middleName,
          gender: (fv.gender as Gender) ?? (current.gender as Gender),
          serialNumberPassport: fv.serialNumber?.trim() ?? current.serialNumber,
          passportIssuingCountry:
            normCountry(fv.citizenship) ?? (current.citizenship as CountryCode),
          passportIssuingDate: normDate(fv.passportIssuingDate) ?? current.passportIssuingDate,
        },
      };

      try {
        await updatePassenger({ id: current.id, body: payload }).unwrap();
        msgApi.success('Сохранено — всё окей');
        setEditModalOpen(false);
        setCurrent(null);
        refetch();
      } catch (e) {
        msgApi.error(`Всё плохо: ${errMsg(e)}`);
      }
    },
    [current, updatePassenger, refetch, msgApi],
  );

  const columnsWithActions: Column<Passenger>[] = useMemo(() => {
    return [
      ...baseColumns,
      {
        key: 'actions' as unknown as keyof Passenger & string,
        title: '',
        width: 44,
        render: (_value, row) => (
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Dropdown
              trigger={['click']}
              getPopupContainer={() => document.body}
              placement="bottomRight"
              menu={{
                items: [
                  {
                    key: 'edit',
                    label: (
                      <div className="action-menu__item">
                        <EditOutlined /> <span>Редактировать</span>
                      </div>
                    ),
                    onClick: () => openEdit(row),
                  },
                  { type: 'divider' as const },
                  {
                    key: 'delete',
                    label: (
                      <div className="action-menu__item action-menu__item--danger">
                        <DeleteOutlined /> <span>Удалить</span>
                      </div>
                    ),
                    onClick: () => {
                      modal.confirm({
                        title: 'Удалить пассажира?',
                        content: 'Действие необратимо. Продолжить?',
                        okText: 'Удалить',
                        cancelText: 'Отмена',
                        okButtonProps: { danger: true },
                        onOk: () =>
                          deletePassenger(row.id)
                            .unwrap()
                            .then(() => {
                              msgApi.success('Удалено — всё окей');
                              refetch();
                            }),
                      });
                    },
                  },
                ],
              }}
            >
              <Button
                type="text"
                shape="circle"
                className={styles.moreBtn}
                icon={<MoreOutlined />}
                onClick={(e) => {
                  e.stopPropagation();
                }}
              />
            </Dropdown>
          </div>
        ),
      },
    ];
  }, [baseColumns, openEdit, deletePassenger, refetch, modal, msgApi]);

  const handleRowClick = useCallback(() => {}, []);
  const handleError = useCallback(() => navigate('/'), [navigate]);

  return (
    <div className={styles.page}>
      {modalCtx}
      {msgCtx}
      <div className={styles.header}>
        <h2 className={styles.title}>Пассажиры</h2>
        <button className={styles.addBtn} onClick={() => setCreateModalOpen(true)}>
          Добавить пассажира <PlusOutlined />
        </button>
      </div>

      <div className={styles.tableArea}>
        <Table
          title="Пассажиры"
          columns={columnsWithActions}
          data={data}
          isLoading={isLoading}
          isError={isError}
          rowKey="id"
          onRowClick={handleRowClick}
          onError={handleError}
        />
      </div>

      <BaseAdminModal
        title="Добавление пассажира"
        isOpen={isCreateModalOpen}
        onClose={() => setCreateModalOpen(false)}
        fields={PASSENGER_FIELDS}
        onSubmit={handleCreatePassenger}
        afterSuccess={() => {
          refetch();
          setCreateModalOpen(false);
        }}
      />

      <BaseAdminModal
        title="Редактировать пассажира"
        isOpen={isEditModalOpen}
        onClose={() => {
          setEditModalOpen(false);
          setCurrent(null);
        }}
        fields={PASSENGER_FIELDS}
        onSubmit={handleEditSubmit}
        defaultValues={
          current
            ? {
                firstName: current.firstName ?? '',
                lastName: current.lastName ?? '',
                middleName: current.middleName ?? '',
                citizenship: current.citizenship ?? '',
                gender: (current.gender as Gender) ?? 'MALE',
                phoneNumber: current.phone ?? '',
                birthDate: current.birthDate ? String(current.birthDate).slice(0, 10) : '',
                serialNumber: current.serialNumber ?? '',
                passportIssuingDate: current.passportIssuingDate
                  ? String(current.passportIssuingDate).slice(0, 10)
                  : '',
              }
            : undefined
        }
        afterSuccess={() => {
          refetch();
          setEditModalOpen(false);
          setCurrent(null);
        }}
      />
    </div>
  );
};

export default PassengersTable;
