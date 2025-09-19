import { useLazyGetDestinationsQuery } from '../model/ticketSearchApi';
import type { Destination, SearchCriteria } from '../model/types';
import styles from './TicketSearch.module.scss';
import { idToIata, CITY_BY_IATA, ensureOption } from '@/shared/data/iataMap';
import { Select, Input, Checkbox, DatePicker, Radio, Button, Space, Spin } from 'antd';
import dayjs, { Dayjs } from 'dayjs';
import { useCallback, useEffect, useRef, useState } from 'react';

const { RangePicker } = DatePicker;
const { Group: RadioGroup } = Radio;
const DEFAULT_DEST_LIMIT = 20;

type TicketSearchProps = {
  initialCriteria?: Partial<SearchCriteria>;
  onSubmit?: (criteria: SearchCriteria) => void;
};

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

type DestinationLike = Destination & { code?: string; iata?: string };

const normIata = (v: unknown): string => {
  const s = String(v ?? '');
  return /^[A-Za-z]{3}$/.test(s) ? s.toUpperCase() : s;
};

function getIataFromDest(d: DestinationLike): string {
  const raw = d.code ?? d.iata ?? idToIata((d as Destination).id);
  return normIata(raw ?? (d as Destination).id);
}

function getNameWithIata(d: DestinationLike, code: string): string {
  const baseName = (d as Destination).name || CITY_BY_IATA[code] || code;
  return `${baseName} (${code})`;
}

const TicketSearch: React.FC<TicketSearchProps> = ({ initialCriteria, onSubmit }) => {
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

  const searching = false;

  const initialListRef = useRef<Destination[] | null>(null);
  const didInit = useRef(false);

  // гидратация из initialCriteria
  const hydrated = useRef(false);
  useEffect(() => {
    if (hydrated.current) return;
    if (initialCriteria && Object.keys(initialCriteria).length) {
      setCriteria((prev: SearchCriteria) => ({
        ...prev,
        ...initialCriteria,
        currentLocation: initialCriteria.currentLocation
          ? String(initialCriteria.currentLocation).toUpperCase()
          : prev.currentLocation,
        destination: initialCriteria.destination
          ? String(initialCriteria.destination).toUpperCase()
          : prev.destination,
      }));
      hydrated.current = true;
    }
  }, [initialCriteria]);

  const loadOrig = useCallback(
    (search: string, page: number) => {
      fetchOrig({ search, page, limit: DEFAULT_DEST_LIMIT })
        .unwrap()
        .then((data) => {
          const list = toDestArray(data);
          setOrigList((prev) => (page === 1 ? list : [...prev, ...list]));
          setOrigPage(page);
        })
        .catch((e) => console.error('loadOrig failed', e));
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
        .catch((e) => console.error('loadDest failed', e));
    },
    [fetchDest],
  );

  // начальная загрузка опций
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

  // дебаунс поиска «Откуда»
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

  // дебаунс поиска «Куда»
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
    setCriteria((prev: SearchCriteria) => ({ ...prev, [field]: value }));
  };

  const isValid =
    !!criteria.currentLocation &&
    !!criteria.destination &&
    !!criteria.dateFrom &&
    (criteria.tripType === 'oneWay' || !!criteria.dateTo);

  const onTripTypeChange = (v: 'roundTrip' | 'oneWay') => {
    setCriteria((prev: SearchCriteria) => ({
      ...prev,
      tripType: v,
      dateTo: v === 'oneWay' ? undefined : prev.dateTo,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (onSubmit) onSubmit(criteria);
  };

  const origOptionsBase = origList.map((d: DestinationLike) => {
    const code = getIataFromDest(d);
    return { label: getNameWithIata(d, code), value: code };
  });
  const selectedFrom = (criteria.currentLocation || '').toUpperCase() || undefined;
  const origOptions = ensureOption(
    origOptionsBase,
    selectedFrom,
    selectedFrom &&
      (CITY_BY_IATA[selectedFrom]
        ? `${CITY_BY_IATA[selectedFrom]} (${selectedFrom})`
        : selectedFrom),
  );

  const destOptionsBase = destList.map((d: DestinationLike) => {
    const code = getIataFromDest(d);
    return { label: getNameWithIata(d, code), value: code };
  });
  const selectedTo = (criteria.destination || '').toUpperCase() || undefined;
  const destOptions = ensureOption(
    destOptionsBase,
    selectedTo,
    selectedTo &&
      (CITY_BY_IATA[selectedTo] ? `${CITY_BY_IATA[selectedTo]} (${selectedTo})` : selectedTo),
  );

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
                optionFilterProp="label"
                filterOption={(input, option) =>
                  (option?.label as string)?.toLowerCase().includes(input.toLowerCase())
                }
                placeholder="Город откуда"
                className={styles.input}
                value={criteria.currentLocation || undefined}
                notFoundContent={origLoading ? <Spin size="small" /> : null}
                onSearch={onOrigSearch}
                onPopupScroll={onOrigScroll}
                onChange={(v) => updateField('currentLocation', (v as string).toUpperCase())}
                options={origOptions}
              />
            </div>

            <div className={styles.formGroup}>
              <label>Куда</label>
              <Select
                showSearch
                optionFilterProp="label"
                filterOption={(input, option) =>
                  (option?.label as string)?.toLowerCase().includes(input.toLowerCase())
                }
                placeholder="Город куда"
                className={styles.input}
                value={criteria.destination || undefined}
                notFoundContent={destLoading ? <Spin size="small" /> : null}
                onSearch={onDestSearch}
                onPopupScroll={onDestScroll}
                onChange={(v) => updateField('destination', (v as string).toUpperCase())}
                options={destOptions}
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
              {criteria.tripType === 'oneWay' ? (
                <DatePicker
                  className={styles.datePicker}
                  value={criteria.dateFrom ? dayjs(criteria.dateFrom) : null}
                  onChange={(val) => {
                    updateField('dateFrom', val ? val.format('YYYY-MM-DD') : undefined);
                    updateField('dateTo', undefined);
                  }}
                  placeholder="Туда"
                />
              ) : (
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
              )}
            </div>
          </Space>

          <Space className={styles.column} direction="vertical" align="center">
            <div className={styles.formGroup}>
              <RadioGroup
                className={styles.radio}
                value={criteria.tripType}
                onChange={(e) => onTripTypeChange(e.target.value)}
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
                disabled={!isValid}
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
