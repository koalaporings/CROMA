import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'

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
// const handleClick = async e => {
//   e.preventDefault()
//   navigate('/db/update/' + user.id)
// }

const handleDelete = async id =>{
  try{
    axios.delete('http://localhost:5000/db/delete/' + id)
    window.location.reload()
  }catch(err){
    console.log(err)
  }
}



  return (
    <div>
      <h1>DB Users</h1>
      {user.map(user => (
        <div className="user" key={user.id}>
          <p2>{user.id}  |  </p2>
          <p2>{user.first_name}  |  </p2>
          <p2>{user.last_name}  |  </p2>
          <p2>{user.email}  |  </p2>
          <p2>{user.password}  |  </p2>
          <button><Link to={`/db/update/${user.id}`}> Update </Link></button>
          <p2>  |  </p2>
          <button> <Link to={`/db/get/${user.id}`}> Get Data Solo</Link> </button>
          <p2>  |  </p2>
          <button> <Link to={`/db/logintest/${user.id}`}> Log In</Link> </button>
          <p2>  |  </p2>
          <button type="submit" onClick = {()=> handleDelete(user.id)}> Delete</button>
        </div>
      ))}
      <button><Link to={'/db/add'}> Add </Link></button>
      
    </div>
    
  )
}

export default View