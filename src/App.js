import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login, logout, toggleTheme } from './Store/action'

const App = () => {
  const dispatch = useDispatch()
  const {isAuthenticated, user} = useSelector((state)=>state.auth)

  const handlelogin = ()=>{
    const userData = {name: 'John Doe', email: 'johnDoe@gmail.com'}
    dispatch(login(userData))
  }

  const handlelogout = ()=>{
    dispatch(logout())
  }


  // Theme functionality

  const theme = useSelector((state)=>state.theme.mode)

  const handleToggleTheme = ()=>{
    dispatch(toggleTheme())
  }

  const appStyle = {
    backgroundColor: theme === 'light'? '#ffffff': '#333333',
    color: theme === 'light'? '#000000': '#ffffff',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  }
  return (
    <>
      <h1>React Redux Authentication</h1>
      {isAuthenticated?(
        <div>
          <h2>Welcome, {user.name}</h2>
          <button onClick={handlelogout}>Logout</button>
        </div>
      ):(
        <div>
          <h2>Please Log In</h2>
          <button onClick={handlelogin}>Log In</button>
        </div>
      )}

      <hr/>
      <div style={appStyle}>
        <h1>{theme.charAt(0).toUpperCase()+theme.slice(1)} Theme</h1>
        <button onClick={handleToggleTheme}>
          Switch To {theme === 'light'? 'Dark':'Light'}
        </button>
      </div>

    </>
  )
}

export default App
