import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Add  = () => {
  const [user, setUser] = useState({
    first_name:"",
    last_name:"",
    email:"",
    password:"",    
  });

  const navigate = useNavigate()

  const handleChange = (e) => {
    setUser(prev=>({...prev, [e.target.name]: e.target.value }))
  };

  const handleClick = async e => {
    e.preventDefault()
    try{
      await axios.post('http://localhost:5000/db', user)
      navigate('/db')
    }catch(err){
      console.log(err)
    }
  }

    return (
    <div className='form'>
      <h1>Add New Book</h1>
      <input type='text' placeholder='First Name' onChange={handleChange} name='first_name'/>
      <input type='text' placeholder='Last Name' onChange={handleChange} name='last_name'/>
      <input type='text' placeholder='Email' onChange={handleChange} name='email'/>
      <input type='text' placeholder='Password' onChange={handleChange} name='password'/>
      <button onClick={handleClick}>Add</button>
    </div>
  )
}

export default Add