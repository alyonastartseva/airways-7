export type ApiSegment = {
  airportFrom: string;
  airportTo: string;
  cityFrom: string;
  cityTo: string;
  departureDateTime: string;
  arrivalDateTime: string;
  flightTime: string;
  flightSeatId: number;
};

export type ApiFlight = {
  totalPrice: number;
  dataTo: ApiSegment;
  dataBack: ApiSegment | null;
};

export type ApiResponse = {
  flights: ApiFlight[];
  search: {
    from: string;
    to: string;
    departureDate: string;
    returnDate?: string | null;
    numberOfPassengers?: number;
    categoryOfSeats?: string;
  };
};

export type ApiParams = {
  airportFrom: string;
  airportTo: string;
  departureDate: string;
  returnDate?: string;
  numberOfPassengers?: number;
  categoryOfSeats?: 'ECONOMY' | 'BUSINESS' | 'FIRST' | string;
};

export async function searchFlightsApi(params: ApiParams): Promise<ApiResponse> {
  const url = new URL('/api/search', window.location.origin);
  Object.entries(params).forEach(([k, v]) => {
    if (v !== undefined && v !== null && String(v).length) url.searchParams.set(k, String(v));
  });

  const res = await fetch(url.toString(), { method: 'GET' });
  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(text || `HTTP ${res.status}`);
  }
  return res.json();
}
