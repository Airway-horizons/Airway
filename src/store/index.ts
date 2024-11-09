// src/store/index.ts

import { configureStore } from '@reduxjs/toolkit';
import { api } from './api'; // The base API setup (common API)
import { bookingsApi } from './bookingsApi'; // Bookings API slice
import { toursApi } from './toursApi'; // Tours API slice
import { usersApi } from './usersApi'; // Users API slice

export const store = configureStore({
  reducer: {
    // Adding all reducers from the API slices with unique names
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware: any) => getDefaultMiddleware().concat(api.middleware), // Middleware for the base API
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
