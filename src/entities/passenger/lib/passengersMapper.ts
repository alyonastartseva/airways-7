import { MAX_CACHE_SIZE } from '../../../shared/config/config';
import { defaultPassenger } from '../model/defaultPassenger';
import { type ApiPassenger, createPhoneNumber } from '../model/types';

const cache = new Map<string, unknown[]>();

export const passengersMapper = (content?: ApiPassenger[]) => {
  if (!content || !Array.isArray(content)) return [];

  const cacheKey = content
    .map((p) => p.id)
    .sort()
    .join(',');

  if (cache.has(cacheKey)) return cache.get(cacheKey) as ApiPassenger[];

  if (cache.size >= MAX_CACHE_SIZE) {
    const firstKey = cache.keys().next().value;
    if (firstKey) cache.delete(firstKey);
  }

  const result = content.map((passenger: ApiPassenger) => ({
    ...defaultPassenger,
    id: passenger.id,
    FIO: `${passenger.lastName} ${passenger.firstName} ${passenger.passport.middleName}`.trim(),
    gender: passenger.passport.gender,
    phone: createPhoneNumber(passenger.phoneNumber),
    birthDate: new Date(passenger.birthDate).toLocaleDateString(),
    serialNumber: passenger.passport?.serialNumberPassport,
    citizenship: passenger.passport?.passportIssuingCountry,
    passportIssuingDate: new Date(passenger.passport?.passportIssuingDate).toLocaleDateString(),
    email: passenger.email,
  }));

  cache.set(cacheKey, result);
  return result;
};
