import { configureStore } from "@reduxjs/toolkit";

import { setupListeners } from "@reduxjs/toolkit/dist/query";

import { apiSlice } from "./api/apiSlice";

import usersReducer from '../features/users/usersSlice'

import authReducer from '../features/auth/authSlice'

export const store= configureStore(
    {
        reducer: {
            [apiSlice.reducerPath]: apiSlice.reducer,
            auth: authReducer,
            users: usersReducer
        },
        devTools: true,
        middleware: getDefaultMiddleware=>
            getDefaultMiddleware().concat(apiSlice.middleware)
    }
)

setupListeners(store.dispatch)