import { Table } from './Table';
import { mockData } from './mockData';
import '@testing-library/jest-dom';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect, vi, beforeEach, beforeAll } from 'vitest';

interface MockColumnType {
  key: string;
  title: string;
  sortable?: boolean;
  width?: number;
}

const mockColumns: MockColumnType[] = [
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

interface defaultPropsType {
  title: string;
  columns: MockColumnType[];
  useQuery: ReturnType<typeof mockUseGetMockDataQuery>;
  rowKey: string;
}

const defaultProps: defaultPropsType = {
  title: 'Test Table',
  columns: mockColumns,
  useQuery: mockUseGetMockDataQuery,
  rowKey: 'id',
};

const TestComponent = (props: defaultPropsType) => (
  <MemoryRouter>
    <Table {...props} />
  </MemoryRouter>
);
const renderTable = (props: defaultPropsType = defaultProps) =>
  render(<TestComponent {...props} />);

beforeEach(() => {
  vi.clearAllMocks();
});
beforeAll(() => {
  vi.spyOn(console, 'log').mockImplementation(() => {});
});

describe('Тесирование состояний', () => {
  it('Проверка успешного отображения данных после загрузки', async () => {
    mockUseGetMockDataQuery.mockReturnValue({
      data: mockData,
      isLoading: false,
      isError: false,
    });

    renderTable(defaultProps);
    await waitFor(() => {
      expect(mockUseGetMockDataQuery).toHaveBeenCalled();
      expect(
        screen.getByRole('cell', { name: mockData.sort((a, b) => a.id - b.id)[0].FIO }),
      ).toBeInTheDocument();
    });
  });

  it('отображает скелетон во время загрузки данных', () => {
    mockUseGetMockDataQuery.mockReturnValue({
      data: undefined,
      isLoading: true,
      isError: false,
    });

    renderTable();
    expect(screen.getByTestId('skeleton-loader')).toBeInTheDocument();
  });

  it('Проверка отображения ошибки при неудачном запросе', async () => {
    mockUseGetMockDataQuery.mockReturnValue({
      data: [],
      isLoading: false,
      isError: true,
      error: {
        status: 500,
        data: {
          message: 'Ошибка сервера: не удалось загрузить данные',
        },
      },
    });

    renderTable();
    await waitFor(() => {
      expect(screen.getByTestId('error')).toBeInTheDocument();
    });
  });
});

describe('Тестирование заголовка', () => {
  it('Проверка наличия data-testid="table-title"', () => {
    mockUseGetMockDataQuery.mockReturnValue({
      data: mockData,
      isLoading: false,
      isError: false,
    });
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
    mockUseGetMockDataQuery.mockReturnValue({
      data: mockData,
      isLoading: false,
      isError: false,
    });
    renderTable();
    await waitFor(() => expect(mockUseGetMockDataQuery).toHaveBeenCalled());

    fireEvent.click(screen.getByTestId('sort-id'));

    await waitFor(() => {
      const ids = screen.getAllByTestId('test-id').map((el) => parseInt(el.textContent || ''));
      expect(ids).toEqual([...ids].sort((a, b) => b - a));
    });
  });

  it('Проверка правильности сортировки (по возрастанию/убыванию)', async () => {
    mockUseGetMockDataQuery.mockReturnValue({
      data: mockData.slice(0, 10),
      isLoading: false,
      isError: false,
    });
    renderTable();
    await waitFor(() => expect(mockUseGetMockDataQuery).toHaveBeenCalled());

    const th = screen.getByTestId('sort-id');

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
  });

  it('Проверка визуального отображения активной сортировки (иконки)', async () => {
    mockUseGetMockDataQuery.mockReturnValue({
      data: mockData,
      isLoading: false,
      isError: false,
    });
    const getActiveIcon = (columnName: string) => {
      const header = screen.getByRole('columnheader', { name: columnName });
      return header?.querySelector('[class*=_active_]');
    };

    renderTable();
    await waitFor(() => expect(mockUseGetMockDataQuery).toHaveBeenCalled());

    const columnName = mockColumns[1].title;
    fireEvent.click(screen.getByRole('columnheader', { name: columnName }));
    await waitFor(() => {
      const activeIcon = getActiveIcon(columnName);
      expect(activeIcon).toBeInTheDocument();
    });

    const anotherColumnName = mockColumns[2].title;
    fireEvent.click(screen.getByRole('columnheader', { name: anotherColumnName }));
    await waitFor(() => {
      const activeIcon = getActiveIcon(columnName);
      expect(activeIcon).not.toBeInTheDocument();
    });
  });
});
