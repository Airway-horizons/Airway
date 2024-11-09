// src/services/bookingsApi.ts

import { api } from './api';

export const bookingsApi = api.injectEndpoints({
  endpoints: (builder: any) => ({
    getBookings: builder.query({
      query: () => ({ url: '/bookings', method: 'GET' }),
    }),
    addBooking: builder.mutation({
      query: (data: any) => ({ url: '/bookings/add', method: 'POST', data }),
    }),
    deleteBooking: builder.mutation({
      query: (id: any) => ({ url: `/bookings/delete/${id}`, method: 'DELETE' }),
    }),
    updateBooking: builder.mutation({
      query: ({ id, data }: any) => ({ url: `/bookings/update/${id}`, method: 'PATCH', data }),
    }),
    getBookingById: builder.query({
      query: (id: any) => ({ url: `/bookings/${id}`, method: 'GET' }),
    }),
  }),
});

export const {
  useGetBookingsQuery,
  useAddBookingMutation,
  useDeleteBookingMutation,
  useUpdateBookingMutation,
  useGetBookingByIdQuery,
} = bookingsApi;
