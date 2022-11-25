import EditUserForm from './EditUserForm'

import { useParams } from 'react-router-dom'

import { useSelector } from 'react-redux'
import { selectUserById } from './usersApiSlice'

const EditUser= ()=> {

    const { userId }= useParams()

    const user= useSelector(state=> selectUserById(state, userId))

    const content= user 
                 ? <EditUserForm user= {user}/>
                 : <>
                        <h2>User not found!</h2>
                        <p>An error occured while fetching the  user!</p>
                   </>

    return content
    
}

export default EditUser