// src/services/toursApi.ts

import { api } from './api';

export const toursApi = api.injectEndpoints({
  endpoints: (builder: any) => ({
    getTours: builder.query({
      query: () => ({ url: '/tours', method: 'GET' }),
    }),
    addTour: builder.mutation({
      query: (data: any) => ({ url: '/tours/add', method: 'POST', data }),
    }),
    deleteTour: builder.mutation({
      query: (id: any) => ({ url: `/tours/delete/${id}`, method: 'DELETE' }),
    }),
    updateTour: builder.mutation({
      query: ({ id, data }: any) => ({ url: `/tours/update/${id}`, method: 'PATCH', data }),
    }),
    getTourById: builder.query({
      query: (id: any) => ({ url: `/tours/${id}`, method: 'GET' }),
    }),
  }),
});

export const {
  useGetToursQuery,
  useAddTourMutation,
  useDeleteTourMutation,
  useUpdateTourMutation,
  useGetTourByIdQuery,
} = toursApi;
