import React, { useState } from 'react'

const RadioButton = () => {
    const [selectedOption, setSelectedOption] = useState('option1')
    const handleChange = (e) =>{
        setSelectedOption(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        document.write(`Selected radio button:`, selectedOption)
    }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor='1'>Option1</label>
        <input type='radio' value='option1' checked={selectedOption==='option1'} onChange={handleChange} id='1'/>
        <br/>
        <label htmlFor='2'>Option2</label>
        <input type='radio' value='option2' checked={selectedOption==='option2'} onChange={handleChange} id='2'/>
        <br/>
        <label htmlFor='3'>Option3</label>
        <input type='radio' value='option3' checked={selectedOption==='option3'} onChange={handleChange} id='3'/>
        <br/>
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default RadioButton
