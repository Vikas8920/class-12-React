import React, { useEffect, useState } from 'react'

const DisplayData = () => {
    const [users, setUsers] = useState([])

    useEffect(()=>{
        fetch('https://dummyjson.com/users')
        .then((response)=>response.json())
        .then((data)=>setUsers(data.users))
    }, [])
  return (
    <>
      {users.map((user)=>(
        <div key={user.id}>
            <h6>Full Name: {user.firstName +' '+ user.lastName}</h6>
            <h6>Email:{user.email}</h6>
            <h6>Phone:{user.phone}</h6>
            <hr/>
        </div>
      ))}
    </>
  )
}

export default DisplayData
