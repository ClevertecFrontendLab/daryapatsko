import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseURL = 'https://marathon-api.clevertec.ru';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({baseUrl: baseURL}),
  endpoints: (builder) => ({
    auth: builder.mutation({
      query:(data) =>({
        url: 'auth/login',
        method: "POST",
        headers:{
          'Content-Type': 'application/json',
        },
        data,
      })
    })
  })
})

export const { useAuthMutation } = authApi;