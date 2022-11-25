import NewNoteForm from "./NewNoteForm";

import { useSelector } from "react-redux";
import { selectAllUsers } from "../users/usersApiSlice";

const NewNote= ()=> {

    const users= useSelector(selectAllUsers)

    const content= users 
                 ? <NewNoteForm users= { users } />
                 : <>
                      <h1>Impossible to create a note</h1>
                      <p>No users found in the database!</p>
                   </>

    return content
}

export default NewNote