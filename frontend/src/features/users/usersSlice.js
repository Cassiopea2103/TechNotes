import { createSlice } from "@reduxjs/toolkit";

const initialState= { 
    users: []
}

export const usersSlice= createSlice({
    name: 'users',
    initialState,
    reducers: {
        setUsers: ( state, action )=> {
            state.users= action.payload 
        }
    }
})

export default usersSlice.reducer 

export const { setUsers }= usersSlice.actions

export const getUsers= state=> state.users.users