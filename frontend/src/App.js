import { Routes, Route } from 'react-router-dom'

import Layout from './components/Layout';
import Public from './components/Public'
import DashLayout from './components/DashLayout';

// auth 
import Login from './features/auth/Login';
import Welcome from './features/auth/Welcome';

// users: 
import UsersList from './features/users/UsersList';

// notes: 
import NotesList from './features/notes/NotesList';


function App() {
  
  return (
      <Routes >
			<Route path= '/' element= {<Layout/>} >

				<Route index element= {<Public/>} />
				<Route path= 'login' element= {<Login/>} />

				<Route path= 'dash' element= {<DashLayout/>}>
				
					<Route index element= {<Welcome/>} />

					<Route path= 'users'>
						<Route index element= {<UsersList/>} />
					</Route>

					<Route path= 'notes'>
						<Route index element= {<NotesList/>	} />
					</Route>

				</Route>

			</Route >
	  </Routes >
  )
}

export default App;
