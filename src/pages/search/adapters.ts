import type { ApiResponse, ApiFlight, ApiSegment } from './api/types';
import type { Fare } from '@/features/TicketSearch/ui/FlightRowCard';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';

dayjs.locale('ru');

export type CardRow = {
  key: string;
  airlineName: string;
  fromCity: string;
  fromCode: string;
  depTime: string;
  depDate: string;
  toCity: string;
  toCode: string;
  arrTime: string;
  arrDate: string;
  durationText: string;
  rightLabel: string;
  fares: [Fare, Fare, Fare];
};

function segToParts(seg: ApiSegment) {
  const dep = dayjs(seg.departureDateTime);
  const arr = dayjs(seg.arrivalDateTime);
  return {
    depTime: dep.format('HH:mm'),
    depDate: dep.format('D MMM, dd'),
    arrTime: arr.format('HH:mm'),
    arrDate: arr.format('D MMM, dd'),
  };
}

function makeFares(base: number): [Fare, Fare, Fare] {
  const b = Math.max(0, Math.round(base));
  const s = Math.round(b * 1.35);
  const p = Math.round(b * 1.95);
  return [
    { name: 'Эконом Базовый', price: b, note: b ? undefined : 'Нет цены' },
    { name: 'Эконом Стандарт', price: s },
    { name: 'Эконом Плюс', price: p },
  ];
}

export function adaptApiToCards(resp: ApiResponse): CardRow[] {
  return (resp.flights ?? []).map((f: ApiFlight, i) => {
    const to = f.dataTo;
    const parts = segToParts(to);
    return {
      key: `f-${i}`,
      airlineName: 'Globus LLC',
      fromCity: to.cityFrom,
      fromCode: to.airportFrom,
      depTime: parts.depTime,
      depDate: parts.depDate,
      toCity: to.cityTo,
      toCode: to.airportTo,
      arrTime: parts.arrTime,
      arrDate: parts.arrDate,
      durationText: `в пути ${to.flightTime}`,
      rightLabel: f.dataBack ? 'С пересадками' : 'Прямой рейс',
      fares: makeFares(f.totalPrice),
    };
  });
}

export function paramsFromUrl(sp: URLSearchParams) {
  const airportFrom = sp.get('airportFrom') ?? sp.get('from') ?? sp.get('currentLocation') ?? '';
  const airportTo = sp.get('airportTo') ?? sp.get('to') ?? sp.get('destination') ?? '';
  const departureDate = sp.get('departureDate') ?? sp.get('dateFrom') ?? '';
  const returnDate = sp.get('returnDate') ?? sp.get('dateTo') ?? undefined;
  const numberOfPassengers = Number(sp.get('numberOfPassengers') ?? sp.get('passengers') ?? 1);
  const categoryOfSeats =
    (sp.get('categoryOfSeats') ?? sp.get('seatType') ?? '').toUpperCase() || undefined;

  return {
    airportFrom,
    airportTo,
    departureDate,
    returnDate,
    numberOfPassengers,
    categoryOfSeats,
  };
}
