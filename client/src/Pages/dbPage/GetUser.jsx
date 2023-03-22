import React, { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const GetUser  = () => {
  
    const [user, setName] = useState([])
    const userId = useLocation().pathname.split('/')[3]
    useEffect (() =>{
        const fetchUser = async id =>{
        try{
            const response = await axios.get('http://localhost:5000/db/get/' + id)
            setName(response.data)
            console.log(response)
        }catch(err){
            console.log(err)
        }
        }
        fetchUser(userId)
    }, [])
    
    return (
    <div className='form'>
          {user.map(user => (
        <div className="user" key={user.id}>
          <p2>{user.id}  |  </p2>
          <p2>{user.first_name}  |  </p2>
          <p2>{user.last_name}  |  </p2>
          <p2>{user.email}  |  </p2>
          <p2>{user.password}  |  </p2>
          <button> <Link to={`/db`}> Back</Link> </button>
          <p2>  |  </p2>
        </div>
      ))}
    </div>
  )
}

export default GetUser