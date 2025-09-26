export type Destination = {
  id: number | string;
  name: string;
  code?: string;
  iata?: string;
};

export type DestinationsServerResponse =
  | Destination[]
  | {
      items?: Destination[];
      data?: Destination[];
      content?: Destination[];
      results?: Destination[];
      list?: Destination[];
      [k: string]: unknown;
    };
