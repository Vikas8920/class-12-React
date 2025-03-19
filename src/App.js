import React, { useState } from 'react'
import Form from './Component/Form'
import Display from './Component/Display'
import ParentComponent from './Component/ParentComponent'

const App = () => {
  const [formData, setFormData] = useState(null)

  const handleFormSubmit = (data) =>{
    setFormData(data)
  }
  return (
    <>
      <Form onFormSubmit={handleFormSubmit}/>
      {formData && <Display data={formData}/>}
      {/* if formdata exists, render the display component */}

      <hr/>
      <ParentComponent/>
    </>
  )
}

export default App
