import EditNoteForm from './EditNoteForm'

import { useParams } from "react-router-dom"

import { useSelector } from "react-redux"
import { selectNoteById } from "./notesApiSlice"

const EditNote= ()=> {

    const { noteId }= useParams()

    const note= useSelector(state=> selectNoteById(state, noteId))

    const content= note 
                 ? <EditNoteForm note= {note}/>
                 : <p>Note not found!</p>

    return content

}

export default EditNote