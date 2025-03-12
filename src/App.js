import React, { Component } from 'react'
import Greeting from './Component/Greeting'
import Counter from './Component/Counter'
import Logger from './Component/Logger'
import Counter2 from './Component/Counter2'
import Button from './Component/Button'
import Garrage from './Component/Garrage'

export default class App extends Component {
  render() {
    return (
      <>
        <Greeting name='Vikas'/>
        <hr/>
        <Counter/>
        <hr/>
        <Logger/>
        <hr/>
        <Counter2/>
        <hr/>
        <Button name='Submit'/>
        <Button name='Click me'/>
        <hr/>
        <Garrage/>
      </>
    )
  }
}



