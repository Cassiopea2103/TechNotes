import { apiSlice } from "../../app/api/apiSlice";

import { logout } from "./authSlice";

// queries to communicate with auth endpoints of the server 
export const authApiSlice= apiSlice.injectEndpoints({
    endpoints: builder=> ({
        
        // login : 
        login : builder.mutation({
            query: ( credentials )=> ({
                url: '/auth/login',
                method: 'POST',
                body: { ...credentials }
            })
        }),

        refresh: builder.query({
            query: ()=> '/auth/refresh'
        }),

        sendLogout: builder.mutation({
            query: ()=> ({
                url: '/auth/logout',
                method: 'POST'
            }),
            async onQueryStarted( arg, { dispatch, queryFulfilled }){
                try {
                    // await query to be fulfilled
                    const response= await queryFulfilled 
                    console.log(response)

                    // initiate the logout action creator to set token to null 
                    dispatch( logout() )
                    dispatch ( apiSlice.util.resetApiState() )
                }
                catch( error ){
                    console.log( error )
                }
            }
        })
    })
})

export const { 
    useLoginMutation,
    useRefreshQuery,
    useSendLogoutMutation
}= authApiSlice