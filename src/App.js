import React from 'react'
import DisplayData from './Component/DisplayData'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import UserDetail from './Component/UserDetail'

const App = () => {
  return (
    <>
      <DisplayData/>

      <BrowserRouter>
         <h1>Welcome to the user Information app</h1>
         <ul>
           <li><Link to='/user/1'>User1</Link></li>
           <li><Link to='/user/2'>User2</Link></li>
           <li><Link to='/user/3'>User3</Link></li>
         </ul>
         <Routes>
          <Route path='/user/:userId' element={<UserDetail/>}/>
         </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
