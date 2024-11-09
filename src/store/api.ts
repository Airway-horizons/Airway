// src/services/api.ts

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import axiosInstance from './axiosInstance';

// Base API configuration using axios
const axiosBaseQuery =
  ({ baseUrl }: { baseUrl: any }) =>
  async ({ url, method, data }: { url: string; method: string; data?: any }) => {
    try {
      const response = await axiosInstance({
        url: `${baseUrl}${url}`,
        method,
        data,
      });
      return { data: response.data };
    } catch (error) {
      return {
        error: {
          status: error.response?.status || 500,
          message: error.response?.data?.message || 'An error occurred',
        },
      };
    }
  };

// Creating the base API
export const api = createApi({
  reducerPath: 'api',
  baseQuery: axiosBaseQuery({ baseUrl: '' }), // Pass baseURL from .env
  endpoints: () => ({}), // Empty at the moment, will inject endpoints dynamically
});
