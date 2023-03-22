import React, { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const LoginTest  = () => {
  
    const [user, setName] = useState([{
        'permission': null
}])
    const userId = useLocation().pathname.split('/')[3]
    const navigate = useNavigate()
    useEffect (() =>{
        const fetchUser = async id =>{
        try{
            const response = await axios.get('http://localhost:5000/db/logintest/' + id)
            setName(response.data)
            
        }catch(err){
            console.log(err)
        }
        }
        fetchUser(userId)
        
    }, [])

    
    return (
        
        <div className='form'>
            loading
            {console.log(user)}
            {user[0].role === 'admin' &&
                    navigate('/admin')
            }
            {user[0].role === 'clerk' &&
                    navigate('/clerk')
            }
            {user[0].role === 'signatory' &&
                    navigate('/signatory')
            }
            {user[0].role === 'student' &&
                    navigate('/student')
            }
        </div>
)
}
export default LoginTest