import { Table } from './Table';
import { mockData, type MockPassengerType } from './mockData';
import '@testing-library/jest-dom';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { MemoryRouter } from 'react-router-dom';

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

interface ServerResponse<T> {
  data: T[];
  pagination: {
    current: number;
    pageSize: number;
    total: number;
  };
}

const mockFetchData = vi.fn().mockImplementation((): Promise<ServerResponse<MockPassengerType>> => {
  const start = (1 - 1) * 10;
  const end = start + 10;
  const paginatedData = mockData.slice(start, end);

  return Promise.resolve({
    data: paginatedData,
    pagination: {
      current: 1,
      pageSize: 10,
      total: mockData.length,
    },
  });
});

type SortDirection = 'asc' | 'desc';

interface defaultPropsType {
  title: string;
  columns: MockColumnType[];
  fetchData: (params?: {
    page: number;
    pageSize: number;
    sortField?: string;
    sortOrder?: SortDirection;
  }) => Promise<ServerResponse<MockPassengerType>>;
  rowKey: string;
}

const defaultProps: defaultPropsType = {
  title: 'Test Table',
  columns: mockColumns,
  fetchData: mockFetchData,
  rowKey: 'id',
};

const TestComponent = (props) => (
  <MemoryRouter>
    <Table {...props} />
  </MemoryRouter>
)
  

beforeEach(() => {
  vi.clearAllMocks();
});

describe('Тесирование состояний', () => {
  it('Проверка успешного отображения данных после загрузки', async () => {
    render(
      <TestComponent {...defaultProps}/>,
        
    );

    await waitFor(() => {
      expect(mockFetchData).toHaveBeenCalled();
      expect(screen.getByText(mockData[0].FIO)).toBeInTheDocument();
    });
  });

  it('отображает скелетон во время загрузки данных', async () => {
    const delayedFetch = vi.fn().mockImplementation(
      () =>
        new Promise((resolve) => {
          setTimeout(() => {
            resolve({
              data: mockData,
              pagination: { current: 1, pageSize: 10, total: mockData.length },
            });
          }, 0);
        }),
    );

    render(<TestComponent title="Test Table" columns={mockColumns} fetchData={delayedFetch} rowKey="id" />);

    expect(screen.getByTestId('skeleton-loader')).toBeInTheDocument();
    await waitFor(
      () => {
        expect(screen.queryByTestId('skeleton-loader')).not.toBeInTheDocument();
      },
      { timeout: 2000 },
    );
  });

  it('Проверка отображения ошибки пре неудачном запросе', async () => {
    const errorFetch = vi.fn().mockRejectedValue(new Error('Fetch failed'));

    render(<TestComponent {...defaultProps} fetchData={errorFetch} />);

    await waitFor(() => {
      expect(screen.getByTestId('error')).toBeInTheDocument();
    });
  });
});

describe('Тестирование заголовка', () => {
  it('Проверка наличия data-testid="table-title"', () => {
    render(<TestComponent {...defaultProps} />);

    expect(screen.getByTestId('table-title')).toHaveTextContent('Test Table');
  });

  it('Проверка корректного отображения переданного заголовка таблицы', () => {
    render(<TestComponent {...defaultProps} />);

    expect(screen.getByTestId('table-title')).toHaveStyle({
      fontSize: '$text-xl',
    });
  });
});

describe('Тестирование сортировки', () => {
  it('Проверка реакции на клик по заголовкам сортируемых колонок', async () => {
    render(<TestComponent {...defaultProps} />);
    await waitFor(() => expect(mockFetchData).toHaveBeenCalled());

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
  });

  it('Проверка правильности сортировки (по возрастанию/убыванию)', async () => {
    render(<TestComponent {...defaultProps} />);
    await waitFor(() => expect(mockFetchData).toHaveBeenCalled());

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
    const getActiveIcon = (columnName: string) => {
      const header = screen.getByText(columnName).closest('th');
      return header?.querySelector('[class*=_active_]');
    };

    render(<TestComponent {...defaultProps} />);
    await waitFor(() => expect(mockFetchData).toHaveBeenCalled());

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
