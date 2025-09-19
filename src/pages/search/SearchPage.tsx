import { adaptApiToCards, paramsFromUrl, type CardRow } from './adapters';
import { blueBigPlane, ecoAir, ecoStd, ecoPlus, warnIcon } from '@/assets/icons';
import landingIcon from '@/assets/icons/plane-landing.svg';
import takeoffIcon from '@/assets/icons/plane-takeoff.svg';
import TicketSearch from '@/features/TicketSearch/TicketSearch/TicketSearch';
import { useLazySearchTicketsQuery } from '@/features/TicketSearch/model/ticketSearchApi';
import type { SearchCriteria } from '@/features/TicketSearch/model/types';
import FlightRowCard, { type Fare } from '@/features/TicketSearch/ui/FlightRowCard';
import { getJSON, setJSON } from '@/shared/lib/storage';
import SearchHero from '@/widgets/hero/SearchHero';
import type { SerializedError } from '@reduxjs/toolkit';
import type { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { Alert, Spin } from 'antd';
import { useCallback, useEffect, useMemo, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';

const DEFAULT_QUERY = {
  airportFrom: 'DME',
  airportTo: 'OVB',
  departureDate: '2024-02-07',
  numberOfPassengers: 1,
  categoryOfSeats: 'BUSINESS',
};

type SavedParams = {
  airportFrom: string;
  airportTo: string;
  departureDate: string;
  returnDate?: string;
  numberOfPassengers: number;
  categoryOfSeats?: string;
};

function formatError(err: unknown): string {
  const fbq = err as FetchBaseQueryError | undefined;
  if (fbq && typeof fbq === 'object' && 'status' in fbq) {
    const data = (fbq as FetchBaseQueryError & { data?: unknown }).data;
    if (typeof (data as unknown) === 'string') return data as string;
    try {
      return data ? JSON.stringify(data, null, 2) : `HTTP ${String(fbq.status)}`;
    } catch {
      return `HTTP ${String(fbq.status)}`;
    }
  }
  const se = err as SerializedError | undefined;
  if (se && typeof se === 'object') {
    if (typeof se.message === 'string') return se.message;
    if (typeof se.code === 'string') return se.code;
  }
  return String(err ?? 'Unknown error');
}

export default function SearchPage() {
  const [sp, setSp] = useSearchParams();

  const urlParams = useMemo(() => paramsFromUrl(sp), [sp]);

  const didSetDefaults = useRef(false);
  useEffect(() => {
    const empty =
      !sp.get('airportFrom') &&
      !sp.get('airportTo') &&
      !sp.get('departureDate') &&
      !sp.get('dateFrom') &&
      !sp.get('from');

    if (!didSetDefaults.current && empty) {
      didSetDefaults.current = true;

      const defStorage: SavedParams = {
        airportFrom: DEFAULT_QUERY.airportFrom,
        airportTo: DEFAULT_QUERY.airportTo,
        departureDate: DEFAULT_QUERY.departureDate,
        numberOfPassengers: DEFAULT_QUERY.numberOfPassengers,
        categoryOfSeats: DEFAULT_QUERY.categoryOfSeats,
      };

      const defUrl = {
        airportFrom: DEFAULT_QUERY.airportFrom,
        airportTo: DEFAULT_QUERY.airportTo,
        departureDate: DEFAULT_QUERY.departureDate,
        numberOfPassengers: String(DEFAULT_QUERY.numberOfPassengers),
        categoryOfSeats: DEFAULT_QUERY.categoryOfSeats,
      };

      setJSON<SavedParams>('search.params', defStorage);
      setSp(defUrl, { replace: true });
    }
  }, [sp, setSp]);

  useEffect(() => {
    const ready = urlParams.airportFrom && urlParams.airportTo && urlParams.departureDate;
    if (ready) setJSON<SavedParams>('search.params', urlParams as SavedParams);
  }, [urlParams]);

  const initialCriteria: Partial<SearchCriteria> = useMemo(() => {
    const saved = getJSON<SavedParams>('search.params');
    const hasUrl = Boolean(urlParams.airportFrom && urlParams.airportTo && urlParams.departureDate);

    const src: Partial<SavedParams> = hasUrl ? (urlParams as SavedParams) : (saved ?? {});

    return {
      currentLocation: src.airportFrom ?? '',
      destination: src.airportTo ?? '',
      dateFrom: src.departureDate ?? undefined,
      dateTo: src.returnDate ?? undefined,
      passengers: src.numberOfPassengers ?? 1,
      seatType:
        typeof src.categoryOfSeats === 'string' ? src.categoryOfSeats.toLowerCase() : 'business',
      tripType: src.returnDate ? 'roundTrip' : 'oneWay',
      noTransfer: false,
    };
  }, [urlParams]);

  const [trigger, { data, isFetching, isError, error }] = useLazySearchTicketsQuery();

  const lastKey = useRef('');
  useEffect(() => {
    const ready = urlParams.airportFrom && urlParams.airportTo && urlParams.departureDate;
    if (!ready) return;

    const key = JSON.stringify(urlParams);
    if (key === lastKey.current) return;
    lastKey.current = key;

    void trigger(urlParams);
  }, [urlParams, trigger]);

  const handleSubmit = useCallback(
    (criteria: SearchCriteria) => {
      const urlOut: Record<string, string> = {};
      if (criteria.currentLocation)
        urlOut.airportFrom = String(criteria.currentLocation).toUpperCase();
      if (criteria.destination) urlOut.airportTo = String(criteria.destination).toUpperCase();
      if (criteria.dateFrom) urlOut.departureDate = String(criteria.dateFrom);
      if (criteria.tripType !== 'oneWay' && criteria.dateTo)
        urlOut.returnDate = String(criteria.dateTo);
      if (typeof criteria.passengers === 'number')
        urlOut.numberOfPassengers = String(criteria.passengers);
      if (criteria.seatType) urlOut.categoryOfSeats = String(criteria.seatType).toUpperCase();

      const storageOut: SavedParams = {
        airportFrom: urlOut.airportFrom ?? '',
        airportTo: urlOut.airportTo ?? '',
        departureDate: urlOut.departureDate ?? '',
        returnDate: urlOut.returnDate,
        numberOfPassengers:
          typeof criteria.passengers === 'number'
            ? criteria.passengers
            : DEFAULT_QUERY.numberOfPassengers,
        categoryOfSeats: urlOut.categoryOfSeats,
      };

      setJSON<SavedParams>('search.params', storageOut);
      setSp(urlOut, { replace: false });
    },
    [setSp],
  );

  const rows: CardRow[] = useMemo(() => (data ? adaptApiToCards(data) : []), [data]);

  const errorText = useMemo(() => formatError(error), [error]);

  return (
    <div className="search-page" style={{ padding: 16, display: 'grid', gap: 16 }}>
      <SearchHero />
      <TicketSearch initialCriteria={initialCriteria} onSubmit={handleSubmit} />

      <div style={{ minHeight: 80, display: 'grid', gap: 12 }}>
        {isFetching && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <Spin /> <span>Ищем билеты…</span>
          </div>
        )}

        {isError && (
          <Alert
            type="error"
            message="Не удалось получить билеты"
            description={<pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>{errorText}</pre>}
            showIcon
          />
        )}

        {rows.map((r) => {
          const fares: [Fare, Fare, Fare] = [
            r.fares[0] ?? { name: 'Эконом', price: 0 },
            r.fares[1] ?? r.fares[0] ?? { name: 'Эконом', price: 0 },
            r.fares[2] ?? r.fares[1] ?? r.fares[0] ?? { name: 'Эконом', price: 0 },
          ];
          return (
            <FlightRowCard
              key={r.key}
              airlineName={r.airlineName || 'Globus LLC'}
              fromCity={r.fromCity}
              fromCode={r.fromCode}
              depTime={r.depTime}
              depDate={r.depDate}
              toCity={r.toCity}
              toCode={r.toCode}
              arrTime={r.arrTime}
              arrDate={r.arrDate}
              durationText={r.durationText}
              rightLabel={r.rightLabel}
              fares={fares}
              airlineLogoSrc={blueBigPlane}
              durationLeftIconSrc={takeoffIcon}
              durationRightIconSrc={landingIcon}
              fareIconSrcs={[ecoAir, ecoStd, ecoPlus]}
              warnIconSrc={warnIcon}
            />
          );
        })}

        {!isFetching && !isError && rows.length === 0 && (
          <div style={{ color: '#667085' }}>Ничего не найдено. Измени параметры поиска.</div>
        )}
      </div>
    </div>
  );
}
