// src/services/usersApi.ts

import { api } from './api';

export const usersApi = api.injectEndpoints({
  endpoints: (builder: any) => ({
    getUsers: builder.query({
      query: () => ({ url: '/users', method: 'GET' }),
    }),
    addUser: builder.mutation({
      query: (data: any) => ({ url: '/users/add', method: 'POST', data }),
    }),
    deleteUser: builder.mutation({
      query: (id: any) => ({ url: `/users/delete/${id}`, method: 'DELETE' }),
    }),
    updateUser: builder.mutation({
      query: ({ id, data }: any) => ({ url: `/users/update/${id}`, method: 'PATCH', data }),
    }),
    getUserById: builder.query({
      query: (id: any) => ({ url: `/users/${id}`, method: 'GET' }),
    }),
  }),
});

export const {
  useGetUsersQuery,
  useAddUserMutation,
  useDeleteUserMutation,
  useUpdateUserMutation,
  useGetUserByIdQuery,
} = usersApi;
