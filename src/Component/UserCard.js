import React from 'react'
import { Link } from 'react-router-dom'

const UserCard = ({user}) => {
  return (
    <>
          <div class="card">
              <img src={user.image} class="card-img-top" alt={user.firstName} height={'200px'} />
              <div class="card-body">
                  <h5 class="card-title">Full Name: {user.firstName + ' '+ user.lastName}</h5>
                   <h6 className='card-title'>Email: {user.email}</h6>
                   <h6 className='card-title'>Phone: {user.phone}</h6>
                   <h6 className='card-title'>Gender: {user.gender}</h6>
                   <h6 className='card-title'>DOB: {user.birthDate}</h6>
                   <Link to={`/users/${user.id}`} className='btn btn-primary mt-2'>Show Details</Link>
              </div>
          </div>
    </>
  )
}

export default UserCard
