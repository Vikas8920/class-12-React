import React, { useState } from 'react'

const Select = () => {
    const [myCar, setMyCar] = useState('')
    const handleChange = (e) =>{
        setMyCar(e.target.value)
    }
  return (
    <>
      <form>
        <select value={myCar} onChange={handleChange}>
            <option>Select</option>
            <option>Ford</option>
            <option>Volvo</option>
            <option>Mercedes</option>
        </select>
      </form>
    </>
  )
}

export default Select
