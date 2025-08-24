import { useLazyGetDestinationsQuery, useSearchTicketsMutation } from '../model/ticketSearchApi';
import type { Destination, SearchCriteria } from '../model/types';
import styles from './TicketSearch.module.scss';
import { Select, Input, Checkbox, DatePicker, Radio, Button, Space, Spin } from 'antd';
import dayjs, { Dayjs } from 'dayjs';
import { useCallback, useEffect, useRef, useState } from 'react';

const { RangePicker } = DatePicker;
const { Group: RadioGroup } = Radio;
const DEFAULT_DEST_LIMIT = 20;

const toDestArray = (raw: unknown): Destination[] => {
  if (Array.isArray(raw)) return raw as Destination[];
  if (raw && typeof raw === 'object') {
    const r = raw as Record<string, unknown>;
    const keys = ['items', 'data', 'content', 'results', 'list'] as const;
    for (const k of keys) {
      const v = r[k];
      if (Array.isArray(v)) return v as Destination[];
    }
  }
  return [];
};

const TicketSearch: React.FC = () => {
  const [fetchOrig, { isFetching: origLoading }] = useLazyGetDestinationsQuery();
  const [fetchDest, { isFetching: destLoading }] = useLazyGetDestinationsQuery();

  const [origList, setOrigList] = useState<Destination[]>([]);
  const [origPage, setOrigPage] = useState(1);
  const [origSearch, setOrigSearch] = useState('');

  const [destList, setDestList] = useState<Destination[]>([]);
  const [destPage, setDestPage] = useState(1);
  const [destSearch, setDestSearch] = useState('');

  const [criteria, setCriteria] = useState<SearchCriteria>({
    currentLocation: '',
    destination: '',
    passengers: 1,
    dateFrom: undefined,
    dateTo: undefined,
    tripType: 'roundTrip',
    noTransfer: false,
    seatType: 'business',
  });

  const [searchTickets, { isLoading: searching }] = useSearchTicketsMutation();

  const initialListRef = useRef<Destination[] | null>(null);
  const didInit = useRef(false);

  const loadOrig = useCallback(
    (search: string, page: number) => {
      fetchOrig({ search, page, limit: DEFAULT_DEST_LIMIT })
        .unwrap()
        .then((data) => {
          const list = toDestArray(data);
          setOrigList((prev) => (page === 1 ? list : [...prev, ...list]));
          setOrigPage(page);
        })
        .catch((e) => {
          console.error('loadOrig failed', e);
        });
    },
    [fetchOrig],
  );

  const loadDest = useCallback(
    (search: string, page: number) => {
      fetchDest({ search, page, limit: DEFAULT_DEST_LIMIT })
        .unwrap()
        .then((data) => {
          const list = toDestArray(data);
          setDestList((prev) => (page === 1 ? list : [...prev, ...list]));
          setDestPage(page);
        })
        .catch((e) => {
          console.error('loadDest failed', e);
        });
    },
    [fetchDest],
  );

  useEffect(() => {
    if (didInit.current) return;
    didInit.current = true;

    fetchOrig({ search: '', page: 1, limit: DEFAULT_DEST_LIMIT })
      .unwrap()
      .then((data) => {
        const list = toDestArray(data);
        initialListRef.current = list;
        setOrigList(list);
        setDestList(list);
        setOrigPage(1);
        setDestPage(1);
      })
      .catch((e: unknown) => {
        type ApiError = { status?: number; data?: unknown };

        const toMessage = (data: unknown): string | undefined => {
          if (typeof data === 'string') return data;
          if (data && typeof data === 'object') {
            const d = data as { message?: unknown; error?: unknown };
            if (typeof d.message === 'string') return d.message;
            if (typeof d.error === 'string') return d.error;
          }
          return undefined;
        };

        const err = e as ApiError;
        console.error('initial destinations load failed', {
          status: err?.status,
          message: toMessage(err?.data),
        });
      });
  }, [fetchOrig]);

  const origTimer = useRef<number | null>(null);
  useEffect(() => {
    if (origTimer.current) window.clearTimeout(origTimer.current);
    origTimer.current = window.setTimeout(() => {
      const q = origSearch.trim();
      if (!q) {
        if (initialListRef.current) {
          setOrigList(initialListRef.current);
          setOrigPage(1);
        } else {
          loadOrig('', 1);
        }
      } else {
        loadOrig(q, 1);
      }
    }, 250);
    return () => {
      if (origTimer.current) window.clearTimeout(origTimer.current);
    };
  }, [origSearch, loadOrig]);

  const destTimer = useRef<number | null>(null);
  useEffect(() => {
    if (destTimer.current) window.clearTimeout(destTimer.current);
    destTimer.current = window.setTimeout(() => {
      const q = destSearch.trim();
      if (!q) {
        if (initialListRef.current) {
          setDestList(initialListRef.current);
          setDestPage(1);
        } else {
          loadDest('', 1);
        }
      } else {
        loadDest(q, 1);
      }
    }, 250);
    return () => {
      if (destTimer.current) window.clearTimeout(destTimer.current);
    };
  }, [destSearch, loadDest]);

  const onOrigSearch = (val: string) => setOrigSearch(val);
  const onDestSearch = (val: string) => setDestSearch(val);

  const onOrigScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const t = e.currentTarget;
    if (t.scrollHeight - t.scrollTop === t.clientHeight && !origLoading) {
      loadOrig(origSearch.trim(), origPage + 1);
    }
  };

  const onDestScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const t = e.currentTarget;
    if (t.scrollHeight - t.scrollTop === t.clientHeight && !destLoading) {
      loadDest(destSearch.trim(), destPage + 1);
    }
  };

  const updateField = <K extends keyof SearchCriteria>(field: K, value: SearchCriteria[K]) => {
    setCriteria((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const tickets = await searchTickets(criteria).unwrap();
      console.log('Получили билеты:', tickets);
    } catch (err) {
      console.error('Ошибка поиска', err);
    }
  };

  return (
    <div className={styles.searchTicketsBlock}>
      <h2 className={styles.header}>Найти билеты</h2>
      <form onSubmit={handleSubmit} className={styles.searchForm}>
        <Space className={styles.row} style={{ width: '100%' }}>
          <Space className={styles.column} direction="vertical">
            <div className={styles.formGroup}>
              <label>Откуда</label>
              <Select
                showSearch
                filterOption={false}
                placeholder="Город откуда"
                className={styles.input}
                value={criteria.currentLocation || undefined}
                notFoundContent={origLoading ? <Spin size="small" /> : null}
                onSearch={onOrigSearch}
                onPopupScroll={onOrigScroll}
                onChange={(v) => updateField('currentLocation', v as string)}
                options={origList.map((d) => ({ label: d.name, value: d.id }))}
                autoFocus
              />
            </div>
            <div className={styles.formGroup}>
              <label>Куда</label>
              <Select
                showSearch
                filterOption={false}
                placeholder="Город куда"
                className={styles.input}
                value={criteria.destination || undefined}
                notFoundContent={destLoading ? <Spin size="small" /> : null}
                onSearch={onDestSearch}
                onPopupScroll={onDestScroll}
                onChange={(v) => updateField('destination', v as string)}
                options={destList.map((d) => ({ label: d.name, value: d.id }))}
              />
            </div>
          </Space>

          <Space className={styles.column} direction="vertical">
            <div className={styles.formGroup}>
              <label>Количество пассажиров</label>
              <Input
                type="number"
                min={1}
                className={styles.input}
                value={criteria.passengers}
                onChange={(e) => updateField('passengers', +e.target.value)}
              />
            </div>
            <div className={styles.formGroup}>
              <Checkbox
                className={styles.transferCheckbox}
                checked={criteria.noTransfer}
                onChange={(e) => updateField('noTransfer', e.target.checked)}
              >
                Искать билеты без пересадок
              </Checkbox>
            </div>
          </Space>

          <Space className={styles.column} direction="vertical" align="center">
            <div className={styles.formGroup}>
              <label>Дата</label>
              <RangePicker
                className={styles.datePicker}
                value={
                  criteria.dateFrom && criteria.dateTo
                    ? ([dayjs(criteria.dateFrom), dayjs(criteria.dateTo)] as [Dayjs, Dayjs])
                    : null
                }
                onChange={(vals) => {
                  const [from, to] = vals ?? [];
                  if (from && to) {
                    updateField('dateFrom', from.format('YYYY-MM-DD'));
                    updateField('dateTo', to.format('YYYY-MM-DD'));
                  } else {
                    updateField('dateFrom', undefined);
                    updateField('dateTo', undefined);
                  }
                }}
                placeholder={['Туда', 'Обратно']}
              />
            </div>
          </Space>

          <Space className={styles.column} direction="vertical" align="center">
            <div className={styles.formGroup}>
              <RadioGroup
                className={styles.radio}
                value={criteria.tripType}
                onChange={(e) => updateField('tripType', e.target.value)}
                style={{ display: 'flex', flexDirection: 'column', gap: 8 }}
              >
                <Radio value="roundTrip">Туда и обратно</Radio>
                <Radio value="oneWay">В одну сторону</Radio>
              </RadioGroup>
            </div>
            <div className={styles.formGroup}>
              <Button
                type="primary"
                htmlType="submit"
                className={styles.button}
                loading={searching}
              >
                Найти
              </Button>
            </div>
          </Space>
        </Space>
      </form>
    </div>
  );
};

export default TicketSearch;
