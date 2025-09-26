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
