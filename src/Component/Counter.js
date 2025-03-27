import React, { useReducer } from 'react'

// Define the initail state
const initialState = {count: 0}

// Define the Reducer Function
function Reducer(state, action){
    switch(action.type){
        case 'INCREMENT':
            return {count: state.count + 1}
        case 'DECREMENT':
            return {count: state.count - 1}
        case 'RESET':
            return initialState
        default:
            throw new Error('Unknown Action Type')
    }
}

const Counter = () => {
    const [state, dispatch] = useReducer(Reducer, initialState)
  return (
    <>
      <p>Count: {state.count}</p>
      <button onClick={()=>dispatch({type: 'INCREMENT'})}>INCREMENT</button>
      <button onClick={()=>dispatch({type: 'DECREMENT'})}>DECREMENT</button>
      <button onClick={()=>dispatch({type: 'RESET'})}>RESET</button>
    </>
  )
}

export default Counter
