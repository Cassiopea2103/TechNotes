import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const serverUrl= 'http://localhost:3500'

export const apiSlice= createApi(
    {
        reducerPath: 'api',
        baseQuery: fetchBaseQuery({ baseUrl: serverUrl}),
        tagTypes: ['Users', 'Notes'],
        endpoints: builder=> ({})
    }
)