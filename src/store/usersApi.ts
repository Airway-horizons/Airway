// src/services/usersApi.ts

import { api } from './api';

export const usersApi = api.injectEndpoints({
  endpoints: (builder: any) => ({
    getUsers: builder.query({
      query: () => ({ url: 'api/users', method: 'GET' }),
    }),
    login: builder.mutation({
      query: (data: any) => ({ url: 'api/users/login', method: 'POST', data }),
    }),
    addUser: builder.mutation({
      query: (data: any) => ({ url: 'api/users/signup', method: 'POST', data }),
    }),
    forgetUser: builder.mutation({
      query: (data: any) => ({ url: 'api/users/forget', method: 'POST', data }),
    }),
    verify: builder.mutation({
      query: (data: any) => ({ url: 'api/users/verify-otp', method: 'POST', data }),
    }),
    newPassword: builder.mutation({
      query: (data: any) => ({ url: 'api/users/change-password', method: 'POST', data }),
    }),
    reSentOtp: builder.mutation({
      query: (data: any) => ({ url: 'api/users/resent-otp', method: 'POST', data }),
    }),
    deleteUser: builder.mutation({
      query: (id: any) => ({ url: `api/users/delete/${id}`, method: 'DELETE' }),
    }),
    updateUser: builder.mutation({
      query: ({ id, data }: any) => ({
        url: `api/users/update/${id}`,
        method: 'PATCH',
        data,
        formUpload: true,
      }),
    }),
    getUserById: builder.query({
      query: (id: any) => ({ url: `api/users/${id}`, method: 'GET' }),
    }),
  }),
});

export const {
  useGetUsersQuery,
  useLoginMutation,
  useAddUserMutation,
  useForgetUserMutation,
  useNewPasswordMutation,
  useReSentOtpMutation,
  useVerifyMutation,
  useDeleteUserMutation,
  useUpdateUserMutation,
  useGetUserByIdQuery,
} = usersApi;
