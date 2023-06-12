import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'



const Update = () => {
  const [user, setUser] = useState({
    id: null,
    first_name: '',
    last_name: '',
    email: '',
    password: '',
  })

  const navigate = useNavigate()
  const location = useLocation()

  const userId = location.pathname.split('/')[3]


  const handleClick = async e => {
    e.preventDefault()
    try{
      axios.put('http://localhost:5000/db/update/' + userId, user)
      navigate('/db')
    }catch(err){
      console.log(err)
    }
  }

  const handleChange = (e) => {
    setUser((prev) => ({...prev, [e.target.name]: e.target.value}))
  }

  useEffect(()=>{
    navigate('/student')
  })

  return (
    <div>
      {/* <input type='text' placeholder='First Name' onChange={handleChange} name='first_name'/>
      <input type='text' placeholder='Last Name' onChange={handleChange} name='last_name'/>
      <input type='text' placeholder='Email' onChange={handleChange} name='email'/>
      <input type='text' placeholder='Password' onChange={handleChange} name='password'/>
      <button onClick={handleClick}>Update</button> */}
    </div>
    
  )
}

export default Update