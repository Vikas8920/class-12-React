import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <div className='container mt-4'>
        <ul className='list-group list-group-horizontal'>
            <li className='list-group-item'>
                <Link to='/' className='nav-link text-dark fw-bolder fs-4'>Home</Link>
            </li>
            <li className='list-group-item'>
                <Link to='/users' className='nav-link text-dark fw-bolder fs-4'>Users</Link>
            </li>
        </ul>
      </div>
    </>
  )
}

export default Navbar
