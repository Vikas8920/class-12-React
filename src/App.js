import React, { useEffect, useState } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './Component/Home'
import UserCard from './Component/UserCard'
import Navbar from './Component/Navbar'
import UserDetail from './Component/UserDetail'

const App = () => {
  const [users, setUsers] = useState([])

  useEffect(()=>{
    fetch('https://dummyjson.com/users')
    .then((response)=>response.json())
    .then((data)=>{setUsers(data.users)})
  }, [])
  return (
    <>
      <Router>
        <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/users' element={
              <div className='container mt-3'>
                <h1 className='text-center mb-3'>User List</h1>
                <div className='row'>
                  {(users.length!==0) ? users.map((user)=>(
                    <div key={user.id} className='col-md-4 mb-4'>
                      <UserCard user={user}/>
                    </div>
                  )):<div className='display-1'>User data is loading...</div>}
                </div>
              </div>
            }/>
            <Route path='/users/:userId' element={<UserDetail/>}/>
          </Routes>
      </Router>
    </>
  )
}

export default App
