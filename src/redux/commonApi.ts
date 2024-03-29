import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseURL } from './../constants/constAuth';

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
        }),
        checkEmail: builder.mutation({
            query: (email)=>({
                url: 'auth/check-email',
                method: 'POST',
                body: email,
            })
        }),
        confirmEmail: builder.mutation({
            query: (body)=>({
                url: 'auth/confirm-email',
                method: 'POST',
                body,
                credentials: 'include',
            })
        }),
        changePassword: builder.mutation({
            query: (body)=>({
                url: 'auth/change-password',
                method: 'POST',
                body,
                credentials: 'include',
            })
        }),
        authGoogle: builder.query({
            query: ()=> ({
                url: 'auth/google',
            })
        })

    }),
});

export const { useAuthLoginMutation, useAuthRegistationMutation, useCheckEmailMutation, useChangePasswordMutation, useConfirmEmailMutation, useAuthGoogleQuery } = authApi;
