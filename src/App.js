import React, { useState } from 'react'
import Form from './Component/Form'
import Navbar from './Component/Navbar'
import './Component/Navbar.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Component/Home'
import Blogs from './Component/Blogs'
import NoPage from './Component/NoPage'

const App = () => {
  const [form, setForm] =  useState(true)
  const [msg, setMsg] = useState('')

  const handleForm = () =>{
    if(form===false){
      setForm(true)
      setMsg('Login Form shows successfully')
    }
  }
  const handleForm2 = () =>{
    if(form===true){
      setForm(false)
      setMsg('Registration Form shows successfully')
    }
  }
  return (
    <>
      <div className='container d-flex justify-content-evenly'>
        <div className='mt-5'>
          <button onClick={handleForm} className='btn btn-success mx-4 px-4'>Login Form</button>
          <button onClick={handleForm2} className='btn btn-primary'>Registration Form</button>
          <h4 className='mt-5 pt-5 ms-4 text-primary'>{msg}</h4>
        </div>
        <div>
          <Form form={form}/>
        </div>
      </div>

      <hr/>

      

      <Router>
         <Navbar/>
         <Routes>
           <Route path='/' element={<Home/>}/>
           <Route path='/blogs' element={<Blogs/>}/>
           <Route path='/contact' element={<Form/>}/>
           <Route path='*' element={<NoPage/>}/>
         </Routes>
      </Router>
    </>
  )
}

export default App
