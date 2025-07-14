import type { TableApiConfig } from '../model/types';

export const createTableApi = <T>(config: TableApiConfig<T>) => {
  return config.useQuery;
};
