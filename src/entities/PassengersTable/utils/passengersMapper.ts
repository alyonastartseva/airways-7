import type { Passenger } from '../types';

export function passengersMapper(idk: string): Passenger[] {
  return [{ content: idk }];
}
