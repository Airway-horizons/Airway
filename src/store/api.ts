// src/services/api.ts
import { createApi } from '@reduxjs/toolkit/query/react';
import { axiosBaseQuery } from './axiosInstance'; // Import the new axiosBaseQuery

// Creating the base API
export const api = createApi({
  reducerPath: 'api',
  baseQuery: axiosBaseQuery, // Use the baseQuery function directly from axiosInstance
  endpoints: () => ({}), // Empty at the moment, will inject endpoints dynamically
});

export default api;
