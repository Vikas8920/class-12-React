import React from 'react'
import Car from './Car'

const Garrage = () => {
    const CarInfo = {name: 'Ford', model: 'Mustang'}
  return (
    <>
      <h1>Who lives in my Garrage?</h1>
      <Car brand={CarInfo}/>
    </>
  )
}

export default Garrage
