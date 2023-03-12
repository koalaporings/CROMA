import React, { useEffect, useState } from 'react'
import axios from 'axios'

const View = () => {
  const [user, setName] = useState([])

  useEffect (() =>{
    const fetchAllUsers = async ()=>{
      try{
        const response = await axios.get('http://localhost:5000/db')
        setName(response.data)
        console.log(response)
      }catch(err){
        console.log(err)
      }
    }
    fetchAllUsers()
  }, [])
  return (
    <div>
      <h1>DB Users</h1>
      {user.map(user => (
        <div className="user" key={user.id}>
          <p2>{user.first_name}</p2>
          <p2>{user.last_name}</p2>
          <p2>{user.email}</p2>
          <p2>{user.password}</p2>
        </div>
      ))}
    </div>
  )
}

export default View