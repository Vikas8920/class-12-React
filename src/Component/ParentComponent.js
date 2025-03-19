import React, { useState } from 'react'

const ParentComponent = () => {
    // this is a simple functional component that displays a value
    const DisplayValue = ({value}) =>{
        console.log(`Display Value Rendered`)
        return <div>Value: {value}</div>
    }

    // We create a memoized version of Display value
    const MemoizedDisplayValue = React.memo(DisplayValue)

    const [counter, setCounter] = useState(0)
    const [otherValue, setOtherValue] = useState(0)

    const incrementCounter = () =>{
        setCounter(counter + 1)
    }
    const incrementOtherValue = () =>{
        setOtherValue(otherValue + 1)
    }
  return (
    <>
      <button onClick={incrementCounter}>Increment Counter</button>
      <button onClick={incrementOtherValue}>Increment Other Value</button>

      {/* Using the memoized version of Display value */}
      <MemoizedDisplayValue value={counter}/>
      <DisplayValue value={otherValue}/>
    </>
  )
}

export default ParentComponent
