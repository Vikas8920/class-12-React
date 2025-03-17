import React from 'react'
import Car from './Car'

const Garrage = () => {
    // const cars = ['Ford', 'BMW', 'Mercedes']
    const cars = [
        {id:1, brand:'Ford'},
        {id:2, brand:'BMW'},
        {id:3, brand:'Mercedes'}
    ]
  return (
    <>
      <h1>Who lives in my Garrage?</h1>
      <ul>
        {cars.map((car)=> <Car key={car.id} brand={car.brand}/>)}
      </ul>
    </>
  )
}

export default Garrage
