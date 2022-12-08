import { createSlice } from "@reduxjs/toolkit";

import { useGetAllNotesQuery } from "./notesApiSlice";

const {
    data: notes
}= useGetAllNotesQuery()

console.log( notes )

export const notesSlice= createSlice({
    name: 'notes',
    initialState,
    reducers: {
        getNoteUser: (state, action)=> {
            
        }
    }
})

export default notesSlice.reducer