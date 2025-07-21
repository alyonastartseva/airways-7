export interface FareOption {
  type: string;
  price: number;
  baggage: string | null;
  carryOn: string;
  sportsEquipment: boolean;
  bonusMiles: number;
  exchangePolicy: string;
  refundPolicy: string;
  services: string[];
  remainingSeats?: number;
}

export interface FlightSegment {
  flightNumber: string;
  aircraft: string;

  departureTime: string;
  departureDate: string;
  departureCity: string;
  departureCountry: string;
  departureAirportName: string;
  departureAirportCode: string;

  arrivalTime: string;
  arrivalDate: string;
  arrivalCity: string;
  arrivalCountry: string;
  arrivalAirportName: string;
  arrivalAirportCode: string;

  distance: string;
  duration: string;
  meal: string;
  petsAllowed: boolean;
}

export interface ExtendedTicketData {
  ticketNumber: string;
  airline: string;
  departureAirport: string;
  arrivalAirport: string;
  transferAirports?: string[];
  duration: string;

  segments: FlightSegment[];
  layoverTimes?: string[];

  fares: FareOption[];
}
