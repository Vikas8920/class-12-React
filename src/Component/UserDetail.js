import React from 'react'
import { useParams } from 'react-router-dom'

const UserDetail = () => {
    const {userId} = useParams()

    const userData = {
        1:{name:'Vikas', age:27},
        2:{name:'Aditya', age: 25},
        3:{name:'Monika', age: 30}
    }

    const user = userData[userId]
  return (
    <>
      <h2>User Details</h2>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
    </>
  )
}

export default UserDetail
