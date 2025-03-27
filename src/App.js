import React from 'react'
import UseRefHook from './Component/UseRefHook'
import Counter from './Component/Counter'
import AuthProvider from './Context/AuthProvider'
import Login from './Component/Login'
import UserProfile from './Component/UserProfile'

const App = () => {
 
  return (
    <>
     <UseRefHook/>
     <hr/>
     <Counter/>
     <hr/>
     <AuthProvider>
      <h1>Simple Authentication System</h1>
      <Login />
      <UserProfile/>
     </AuthProvider>
    </>
  )
}

export default App
