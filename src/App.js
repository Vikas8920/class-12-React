import React from 'react'
import Football from './Component/Football'
import KeyPress from './Component/KeyPress'
import Garrage from './Component/Garrage'
import Form from './Component/Form'
import MultipleInput from './Component/MultipleInput'
import TextArea from './Component/TextArea'
import Select from './Component/Select'
import RadioButton from './Component/RadioButton'
import Checkboxes from './Component/Checkboxes'

const App = () => {
  return (
    <div>
      <Football/>
      <hr/>
      <KeyPress/>
      <hr/>
      <Garrage/>
      <hr/>
      <Form/>
      <hr/>
      <MultipleInput/>
      <hr/>
      <TextArea/>
      <hr/>
      <Select/>
      <hr/>
      <RadioButton/>
      <hr/>
      <Checkboxes/>
    </div>
  )
}

export default App
