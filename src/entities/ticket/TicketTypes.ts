export interface FareOption {
  name: string;
  price: number;
  features: {
    luggage: boolean;
    handLuggage: boolean;
    exchange: boolean;
    refund: boolean;
  };
  remainingSeats?: number;
  selected?: boolean;
}

export interface TicketData {
  airline: string;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  from: string;
  to: string;
  departureReduction: string;
  arrivalReduction: string;
  date: string;
  fares: FareOption[];
}
