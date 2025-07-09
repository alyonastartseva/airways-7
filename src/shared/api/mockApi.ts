import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query';

export const mockApi = createApi({
  baseQuery: fakeBaseQuery(),
  endpoints: () => ({}),
  reducerPath: 'mockApi',
});
