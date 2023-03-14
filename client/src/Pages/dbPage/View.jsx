import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

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

const navigate = useNavigate()
const handleClick = async e => {
  e.preventDefault()
  navigate('/db/update/' + user.id)
}
  return (
    <div>
      <h1>DB Users</h1>
      {user.map(user => (
        <div className="user" key={user.id}>
          <div><p2>{user.first_name}  |  </p2>
          <p2>{user.last_name}  |  </p2>
          <p2>{user.email}  |  </p2>
          <p2>{user.password}  |  </p2>
          <button><Link to={`/db/update/${user.id}`}> Update </Link></button>
        </div>
        </div>
      ))}
    </div>
  )
}

export default View