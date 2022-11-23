import { configureStore } from "@reduxjs/toolkit";

import { setupListeners } from "@reduxjs/toolkit/dist/query";

import { apiSlice } from "./api/apiSlice";

export const store= configureStore(
    {
        reducer: {
            [apiSlice.reducerPath]: apiSlice.reducer
        },
        devTools: true,
        middleware: getDefaultMiddleware=>
            getDefaultMiddleware().concat(apiSlice.middleware)
    }
)

store.dispatch(setupListeners())