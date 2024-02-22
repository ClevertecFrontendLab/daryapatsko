import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseURL = 'https://marathon-api.clevertec.ru';

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({
        baseUrl: baseURL,
        prepareHeaders(headers) {
            const token = localStorage.getItem('token');
            if (token) {
                headers.set('Authorization', `Bearer ${token}`);
            }
            return headers;
        },
    }),
    endpoints: (builder) => ({
        authLogin: builder.mutation({
            query: (body) => ({
                url: 'auth/login',
                method: 'POST',
                body,
                credentials: 'include',
            }),
        }),
        authRegistation: builder.mutation({
            query: (body)=> ({
              url: 'auth/registration',
              method: 'POST',
              body,
            })
        })
    }),
});

export const { useAuthLoginMutation, useAuthRegistationMutation } = authApi;
