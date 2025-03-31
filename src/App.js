import React from 'react'
import ThemeProvider from './Context/ThemeProvider'
import ThemeToggle from './Component/ThemeToggle'

const App = () => {
  return (
    <>
      <ThemeProvider>
        <h1>Theme Toggle</h1>
        <ThemeToggle/>
      </ThemeProvider>
    </>
  )
}

export default App
