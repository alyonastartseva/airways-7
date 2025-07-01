import type { ColumnType } from '../../../../shared/model/Column.types';
import Pagination from '../../../../shared/ui/Pagination';
import { SkeletonTable } from '../SkeletonTable/SkeletonTable';
import { Table } from './Table';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';

interface TestColumn<T> {
  key: string;
  title: string;
  type?: ColumnType;
  sortable?: boolean;
  width?: number;
  render?: (value: any, row: T) => React.ReactNode;
}

interface Passenger {
  id: number;
  FIO: string;
  gender: string;
  phone: string | number;
  birthDate: string;
  serialNumber: string;
  citizenship: string;
  passportIssuingDate: string;
  email: string;
}

const mockColumns: TestColumn<Passenger>[] = [
  { key: 'id', title: 'ID', sortable: true, width: 60 },
  { key: 'FIO', title: 'Имя, Фамилия, Отчество', sortable: true, width: 200 },
  { key: 'gender', title: 'Пол', sortable: true, width: 80 },
  { key: 'phone', title: 'Телефон', sortable: true, width: 130 },
  { key: 'birthDate', title: 'Дата рождения', sortable: true, width: 110 },
  { key: 'serialNumber', title: 'Серийный номер', sortable: true, width: 125 },
  { key: 'citizenship', title: 'Гражданство', sortable: true, width: 130 },
  { key: 'passportIssuingDate', title: 'Дата выдачи паспорта', sortable: true, width: 110 },
];

const mockData: Passenger[] = [
  {
    id: 406,
    FIO: 'Иванов Олегзззззззззззз Иванович',
    gender: 'male',
    phone: '123456',
    birthDate: '21.02.1990',
    serialNumber: '1234 123539',
    citizenship: 'Российская Федерация',
    passportIssuingDate: '21.02.2020',
    email: 'tes21@test.ru',
  },
  {
    id: 26,
    FIO: 'string22 string string',
    gender: 'male',
    phone: 'RRRRrR4',
    birthDate: '06.05.2005',
    serialNumber: '5516 093035',
    citizenship: 'string',
    passportIssuingDate: '06.05.2005',
    email: 'stri33ng@GMAIL.COM',
  },
  {
    id: 28,
    FIO: 'string22 string string',
    gender: 'male',
    phone: '#$%^#####',
    birthDate: '06.05.2005',
    serialNumber: '5516 093035',
    citizenship: 'string',
    passportIssuingDate: '06.05.2005',
    email: 'stri3543ng@GMAIL.COM',
  },
  {
    id: 29,
    FIO: 'string22 string string',
    gender: 'male',
    phone: '79292783634',
    birthDate: '06.05.2005',
    serialNumber: '5516 093035',
    citizenship: 'string',
    passportIssuingDate: '06.05.2005',
    email: 'str3i3543ng@GMAIL.COM',
  },
  {
    id: 31,
    FIO: 'string22 string qqq',
    gender: 'male',
    phone: '79292783634',
    birthDate: '06.05.2005',
    serialNumber: '5516 093035',
    citizenship: 'string',
    passportIssuingDate: '06.05.2005',
    email: 'str4443@GMAIL.COM',
  },
  {
    id: 32,
    FIO: 'string22 string TNVDzxfJMtGnylfavMUOeSyVPHMRCsguBkYTUSvpYzkmgSqnRrSqJEPMBugFVqgEhqPdAmzEeuFqMXyYqzffhUtHiAwBgQHlNdWcxTGajJhUwWDbjQMcBJKInwWKFzJ',
    gender: 'male',
    phone: '79292783634',
    birthDate: '06.05.2005',
    serialNumber: '5516 093035',
    citizenship: 'string',
    passportIssuingDate: '06.05.2005',
    email: 'str34443@GMAIL.COM',
  },
  {
    id: 33,
    FIO: 'string22 string TNVDzxfJMtGnylfavMUOeSyVPHMRCsguBkYTUSvpYzkmgSqnRrSqJEPMBugFVqgEhqPdAmzEeuFqMXyYqzffhUtHiAwBgQHlNdWcxTGajJhUwWDbjQMcBJKInwWKFzJe',
    gender: 'male',
    phone: '79292783634',
    birthDate: '06.05.2005',
    serialNumber: '5516 093035',
    citizenship: 'string',
    passportIssuingDate: '06.05.2005',
    email: 'str3f4443@GMAIL.COM',
  },
  {
    id: 34,
    FIO: 'string22 string @#',
    gender: 'male',
    phone: '79292783634',
    birthDate: '06.05.2005',
    serialNumber: '5516 093035',
    citizenship: 'string',
    passportIssuingDate: '06.05.2005',
    email: 'str3f44433@GMAIL.COM',
  },
  {
    id: 35,
    FIO: 'string22 string 4444',
    gender: 'male',
    phone: '79292783634',
    birthDate: '06.05.2005',
    serialNumber: '5516 093035',
    citizenship: 'string',
    passportIssuingDate: '06.05.2005',
    email: 'str3f2444433@GMAIL.COM',
  },
  {
    id: 36,
    FIO: 'string22 string 4444',
    gender: 'male',
    phone: '79292783634',
    birthDate: '06.05.2005',
    serialNumber: '5516 093035',
    citizenship: 'ggg',
    passportIssuingDate: '06.05.2005',
    email: 'q4433@GMAIL.COM',
  },
];

const mockPagination = {
  current: 1,
  pageSize: 10,
  total: 2,
};

const mockFetchData = vi.fn().mockImplementation(({ page, pageSize }) => {
  const start = page(page - 1) * pageSize;
  const end = start + pageSize;
  const paginatedData = mockData.slice(start, end);

  return Promise.resolve({
    data: paginatedData,
    pagination: {
      current: page,
      pageSize,
      total: mockData.length,
    },
  });
});

describe('TableComponent', () => {
  beforeEach(() => {
    mockFetchData.mockResolvedValue({
      data: mockData,
      pagination: mockPagination,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('render loading state initially', () => {
    render(
      <Table title="Test Table" columns={mockColumns} fetchData={mockFetchData} rowKey="id" />,
    );

    expect(screen.getByTestId('skeleton')).toBeInTheDocument();
  });
});
