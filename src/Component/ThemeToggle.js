import React, { useContext } from 'react'
import { ThemeContext } from '../Context/ThemeContext'

const ThemeToggle = () => {
    const {theme, toggleTheme} = useContext(ThemeContext)
  return (
    <>
      <div style={{
        background:theme==='light'?'#fff':'#000',
        color: theme==='light'?'#000':'#fff',
        padding:'20px',
        textAlign:'center'
      }}>
        <p>The current theme is {theme}</p>
        <button onClick={toggleTheme}>Toggle Theme</button>
      </div>
    </>
  )
}

export default ThemeToggle
