import type { SearchState } from './searchSlice';
import { configureStore } from '@reduxjs/toolkit';

export interface RootState {
  search: SearchState;
}

export const store = configureStore({});
