import React, { useEffect, useRef, useState } from 'react'

const UseRefHook = () => {
    const [inputValue, setInputValue] = useState('')
    const previousInputValue = useRef('')
  
    useEffect(()=>{
      previousInputValue.current = inputValue
    }, [inputValue])
  return (
    <>
    <input type='text' value={inputValue} onChange={(e)=>setInputValue(e.target.value)}/>
      <h1>Current Value: {inputValue}</h1>
      <h1>Previous Value: {previousInputValue.current}</h1>
    </>
  )
}

export default UseRefHook
