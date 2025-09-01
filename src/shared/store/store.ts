import { ticketSearchApi } from '@/features/TicketSearch/model/ticketSearchApi';
import adminTableReducer from '@/features/admin-table/model/adminTableSlice';
import { authApi } from '@/features/auth/api/authApi';
import { baseApi } from '@/shared/api/baseApi';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    [ticketSearchApi.reducerPath]: ticketSearchApi.reducer,
    adminTable: adminTableReducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      baseApi.middleware,
      ticketSearchApi.middleware,
      authApi.middleware,
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
