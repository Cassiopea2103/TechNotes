import { Routes, Route } from 'react-router-dom'

import Layout from './components/Layout';
import Public from './components/Public'
import DashLayout from './components/DashLayout';

// auth 
import Login from './features/auth/Login';
import PersistLogin from './features/auth/PersistLogin';
import Welcome from './features/auth/Welcome';
import Prefetch from './features/auth/Prefetch';

// users: 
import UsersList from './features/users/UsersList';
import NewUserForm from './features/users/NewUserForm';
import EditUser from './features/users/EditUser';

// notes: 
import NotesList from './features/notes/NotesList';
import NewNote from './features/notes/NewNote';
import EditNote from './features/notes/EditNote';


function App() {
  
  return (
      <Routes >
			<Route path= '/' element= {<Layout/>} >

				<Route index element= {<Public/>} />
				<Route path= 'login' element= {<Login/>} />

				<Route path= 'dash' element= {<DashLayout/>}>
				
					<Route index element= {<Welcome/>} />

					<Route element= {<PersistLogin/>} >
						<Route element= {<Prefetch/>} >
							<Route path= 'users'>
								<Route index element= {<UsersList/>} />
								<Route path= 'new' element= {<NewUserForm/>} />
								<Route path= 'edit/:userId' element= {<EditUser/>} />
							</Route>

							<Route path= 'notes'>
								<Route index element= {<NotesList/>	} />
								<Route path= 'new' element= {<NewNote/>} />
								<Route path= 'edit/:noteId' element= {<EditNote/>} />
							</Route>
						</Route>
					</Route>

				</Route>

			</Route >
	  </Routes >
  )
}

export default App;
