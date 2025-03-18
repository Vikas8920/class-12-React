import React, { useState } from 'react'

const TextArea = () => {
    const [textarea, setTextArea] = useState('The content of the textarea goes in the value attribute')
    const handleChange = (e) =>{
        setTextArea(e.target.value)
    }
  return (
    <>
      <form>
        <textarea rows={10} cols={40} value={textarea} onChange={handleChange}></textarea>
      </form>
    </>
  )
}

export default TextArea
