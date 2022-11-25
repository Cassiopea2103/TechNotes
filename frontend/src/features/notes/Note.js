import { useSelector } from "react-redux";
import { selectNoteById } from "./notesApiSlice";

import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

const Note= ({ noteId })=> {

    const navigate= useNavigate()
    
    const note= useSelector(state=> selectNoteById(state, noteId))

    if (note){

        const handleEdit= ()=> navigate(`/dash/notes/edit/${noteId}`)

        const noteRow= (
            <tr className= 'table__row'>
                <th className = 'table__th note__status'>
                    {
                        note.completed
                        ? <span className= 'note__status--completed'>Completed</span>
                        : <span className= 'note__stutus--incompleted'>Open</span>
                    }
                </th>
                <th className="table__cell note__created">
                    {note.createdAt}
                </th>
                <th className="table__cell note__updated">
                    {note.updatedAt}
                </th>
                <th className="table__cell note__title">
                    {note.title}
                </th>
                <th className="table__cell note__username">
                    {note.username}
                </th>
                <th className="table__cell">
                    <button
                        className= 'table__button icon-button'
                        title= 'Edit Note'
                        onClick= { handleEdit }
                    >
                        <FontAwesomeIcon
                            icon={ faPenToSquare }
                        />
                    </button>
                </th>
            </tr>
        )

        return noteRow
    }
    
    else {
        return null
    }
}

export default Note