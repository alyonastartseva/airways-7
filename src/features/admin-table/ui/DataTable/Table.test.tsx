import { Table } from './Table';
import { mockData, type MockPassengerType } from './mockData';
import '@testing-library/jest-dom';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect, vi, beforeEach, beforeAll } from 'vitest';

interface MockColumnType<T> {
  key: keyof T;
  title: string;
  sortable?: boolean;
  width?: number;
}

const mockColumns: MockColumnType<MockPassengerType>[] = [
  { key: 'id', title: 'ID', sortable: true, width: 60 },
  { key: 'FIO', title: 'Имя, Фамилия, Отчество', sortable: true, width: 200 },
  { key: 'gender', title: 'Пол', sortable: true, width: 80 },
  { key: 'phone', title: 'Телефон', sortable: true, width: 130 },
  { key: 'birthDate', title: 'Дата рождения', sortable: true, width: 110 },
  { key: 'serialNumber', title: 'Серийный номер', sortable: true, width: 125 },
  { key: 'citizenship', title: 'Гражданство', sortable: true, width: 130 },
  { key: 'passportIssuingDate', title: 'Дата выдачи паспорта', sortable: true, width: 110 },
];

const mockUseGetMockDataQuery = vi.fn();

vi.mock('../../../../shared/api/mockApi', () => ({
  useGetMockDataQuery: mockUseGetMockDataQuery,
}));

interface defaultPropsType<T> {
  title: string;
  columns: MockColumnType<MockPassengerType>[];
  data?: T[];
  isLoading?: boolean;
  isError?: boolean;
  rowKey: keyof T;
  onError?: () => void;
}

const defaultProps: defaultPropsType<MockPassengerType> = {
  title: 'Test Table',
  columns: mockColumns,
  data: mockData,
  isLoading: false,
  isError: false,
  rowKey: 'id',
  onError: vi.fn(),
};

const TestComponent = (props: defaultPropsType<MockPassengerType>) => (
  <MemoryRouter>
    <Table {...props} />
  </MemoryRouter>
);
const renderTable = (overrideProps: Partial<defaultPropsType<MockPassengerType>> = {}) => {
  const props = { ...defaultProps, ...overrideProps };

  return render(<TestComponent {...props} />);
};

beforeEach(() => {
  vi.clearAllMocks();
});
beforeAll(() => {
  vi.spyOn(console, 'log').mockImplementation(() => {});
});

describe('Тесирование состояний', () => {
  it('Проверка отображения ошибки при неудачном запросе', async () => {
    renderTable({
      data: [],
      isError: true,
    });

    await waitFor(() => {
      expect(screen.getByTestId('error')).toBeInTheDocument();
    });
  });

  it('отображает скелетон во время загрузки данных', () => {
    renderTable({ isLoading: true, data: undefined });

    expect(screen.getByTestId('skeleton-loader')).toBeInTheDocument();
  });

  it('Проверка успешного отображения данных после загрузки', async () => {
    renderTable();

    await waitFor(() => {
      expect(
        screen.getByRole('cell', { name: mockData.sort((a, b) => a.id - b.id)[0].FIO }),
      ).toBeInTheDocument();
    });
  });
});

describe('Тестирование заголовка', () => {
  it('Проверка наличия data-testid="table-title"', () => {
    renderTable();

    expect(screen.getByTestId('table-title')).toHaveTextContent('Test Table');
  });

  it('Проверка корректного отображения переданного заголовка таблицы', () => {
    renderTable();

    expect(screen.getByTestId('table-title')).toHaveStyle({
      fontSize: '$text-xl',
    });
  });
});

describe('Тестирование сортировки', () => {
  it('сортирует данные по клику на заголовок', async () => {
    renderTable();

    const originalIds = screen
      .getAllByTestId('test-id')
      .map((el) => parseInt(el.textContent || ''));

    fireEvent.click(screen.getByTestId('sort-id'));

    await waitFor(() => {
      const sortedIds = screen
        .getAllByTestId('test-id')
        .map((el) => parseInt(el.textContent || ''));
      expect(sortedIds).toEqual([...originalIds].sort((a, b) => a - b));
    });
  });

  it('Проверка правильности сортировки (по возрастанию/убыванию)', async () => {
    renderTable({ data: mockData.slice(0, 10) });

    const th = screen.getByTestId('sort-id');

    fireEvent.click(th);
    await waitFor(() => {
      const renderedIDs = screen
        .getAllByTestId('test-id')
        .map((th) => parseInt(th.textContent || ''));
      const sortedMockData = mockData
        .slice(0, 10)
        .sort((a, b) => a.id - b.id)
        .map((item) => item.id);
      expect(renderedIDs).toEqual(sortedMockData);
    });

    fireEvent.click(th);
    await waitFor(() => {
      const renderedIDs = screen
        .getAllByTestId('test-id')
        .map((th) => parseInt(th.textContent || ''));
      const sortedMockData = mockData
        .slice(0, 10)
        .sort((a, b) => b.id - a.id)
        .map((item) => item.id);
      expect(renderedIDs).toEqual(sortedMockData);
    });
  });

  it('Проверка визуального отображения активной сортировки (иконки)', async () => {
    const getActiveIcon = (columnName: string) => {
      const header = screen.getByText(columnName);
      return header?.querySelector('[class*=_active_]');
    };

    renderTable();

    const columnName = mockColumns[1].title;
    fireEvent.click(screen.getByText(columnName));
    await waitFor(() => {
      const activeIcon = getActiveIcon(columnName);
      expect(activeIcon).toBeInTheDocument();
    });

    const anotherColumnName = mockColumns[2].title;
    fireEvent.click(screen.getByText(anotherColumnName));
    await waitFor(() => {
      const activeIcon = getActiveIcon(columnName);
      expect(activeIcon).not.toBeInTheDocument();
    });
  });
});
