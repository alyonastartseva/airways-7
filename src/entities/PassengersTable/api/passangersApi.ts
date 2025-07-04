import { API_BASE } from '../../../shared/config/config';
import { paramsConfigurer } from '../../../shared/lib/utils/paramsConfigurer';
import type { paramsType } from '../../../shared/lib/utils/paramsConfigurer';
import { passengersMapper } from '../utils/passengersMapper';

export const getPassengers = async (params?: paramsType) => {
  const url = paramsConfigurer(`${API_BASE}/passengers`, params);

  const response = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();

  const tableData = passengersMapper(data.content);

  return {
    data: tableData,
    pagination: {
      current: params?.page ?? 1,
      pageSize: params?.pageSize ?? 10,
      total: data.totalElements,
    },
  };
};
