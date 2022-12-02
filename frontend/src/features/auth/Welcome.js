import { Link } from "react-router-dom";

const Welcome= ()=> {

    const date= new Date()

    const dateOptions= {
        dateStyle: 'full',
        timeStyle: 'long'
    }

    const today= new Intl.DateTimeFormat('en-US', dateOptions).format(date)

    const content= (
        
        <section className= 'welcome'>

            <p>{today}</p>

            <h1>Welcome to TechNotes</h1>

            <p><Link to= {'/dash/users'}>View Users</Link></p>
            <p><Link to={'/dash/users/new'}>Create User</Link></p>

            <p><Link to= {'/dash/notes'}>View Notes</Link></p>
            <p><Link to={'/dash/notes/new'}>Create Note</Link></p>

        </section>
    )

    return content; 
}

export default Welcome