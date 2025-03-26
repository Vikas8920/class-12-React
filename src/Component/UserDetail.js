import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const UserDetail = () => {
    const {userId} = useParams()
    const [UserDetail, setUserDetail] = useState(null)

    useEffect(()=>{
        fetch(`https://dummyjson.com/users/${userId}`)
        .then((response)=>response.json())
        .then((data)=>{setUserDetail(data)})
    }, [userId])
  return (
    <>
      <div className='container mt-3'>
        {UserDetail?(
            <div className='row mt-3'>
                <h2 className='text-center mb-2'>User Details</h2>
                <div className='col-md-6 border border-1 border-black rounded-1 d-flex justify-content-center align-items-center p-4'>
                    <img src={UserDetail.image} alt='' width={'200px'}/>
                </div>
                <div className='col-md-6 border border-1 border-black rounded-1 p-4 pt-5'>
                    <h5 className='card-title'>Full Name: {UserDetail.firstName + ' '+ UserDetail.lastName}</h5>
                   <h6 className='card-title'>Email: {UserDetail.email}</h6>
                   <h6 className='card-title'>Phone: {UserDetail.phone}</h6>
                   <h6 className='card-title'>Gender: {UserDetail.gender}</h6>
                   <h6 className='card-title'>DOB: {UserDetail.birthDate}</h6>
                </div>
            </div>
        ):(
            <div className='display-1'>Loading user Details...</div>
        )}
      </div>
    </>
  )
}

export default UserDetail
