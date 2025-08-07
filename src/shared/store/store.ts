import { configureStore } from '@reduxjs/toolkit';
import adminTableReducer from '@/features/admin-table/model/adminTableSlice';
import { baseApi } from '@/shared/api/baseApi';
import { ticketSearchApi } from '@/features/TicketSearch/model/ticketSearchApi';

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    [ticketSearchApi.reducerPath]: ticketSearchApi.reducer,
    adminTable: adminTableReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      baseApi.middleware,
      ticketSearchApi.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
