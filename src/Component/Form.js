import React from 'react'
import LoginForm from './LoginForm'
import RegistrationForm from './RegistrationForm'

const Form = ({form}) => {
    if(form === true){
        return (
            <>
              <LoginForm/>
            </>
          )
    }else{
        return (
            <>
              <RegistrationForm/>
            </>
          )
    }
 
}

export default Form
