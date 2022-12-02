import NewNoteForm from "./NewNoteForm";

import { useSelector } from "react-redux";
import { selectAllUsers } from "../users/usersApiSlice";

const NewNote= ()=> {

    const users= useSelector(selectAllUsers)

    const content= users.length
                 ? <NewNoteForm users= { users } />
                 :
                    <h1>Impossible to create a note for the moment</h1>

    return content
}

export default NewNote