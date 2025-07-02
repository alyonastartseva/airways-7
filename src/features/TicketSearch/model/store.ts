import type { SearchState } from './searchSlice';
import { ticketSearchApi } from './ticketSearchApi';
import { configureStore } from '@reduxjs/toolkit';

export interface RootState {
  search: SearchState;
}

export const store = configureStore({
  reducer: {
    [ticketSearchApi.reducerPath]: ticketSearchApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(ticketSearchApi.middleware),
});
