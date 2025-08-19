import searchReducer from '../features/TicketSearch/model/searchSlice';
import adminTableReducer from '../features/admin-table/model/adminTableSlice';
import { baseApi } from '../shared/api/baseApi';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    adminTable: adminTableReducer,
    search: searchReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
