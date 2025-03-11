// import React from 'react'
// import './heading.css'
// import HelloWorld from './Component/HelloWorld'

// const App = () => {
//   const x = 5
//   // let text = 'Good bye'

//   // if(x<10){
//   //   text = 'Hello React'
//   // }
//   return (
//     <>
//       <h1 className='heading'>React is {5 + 5} times better with JSX</h1>
//       <h1>Hello</h1>
//      <img src='' alt='name'/>
//      <br/>
//      <hr/>
//      <h1>{(x)<10?'Hello React':'Good bye'}</h1>
//      <hr/>
//      <HelloWorld name='Vikas'/>
//      <HelloWorld name='Aditya'/>
     
//     </>
//   )
// }

// export default App

import React, { Component } from 'react'
import Greeting from './Component/Greeting'

export default class App extends Component {
  render() {
    return (
      <>
        <Greeting name='Vikas'/>
      </>
    )
  }
}

