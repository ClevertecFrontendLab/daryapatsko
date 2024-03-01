import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { FeedBackT } from './../types/types';

const baseURL = 'https://marathon-api.clevertec.ru';

export const feedBackApi = createApi({
    reducerPath: 'feedBackApi',
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
        getFeedBack: builder.query<FeedBackT[], void>({
            query: () => 'feedback',
        })
               
        }),
        
});

export const { useGetFeedBackQuery } = feedBackApi