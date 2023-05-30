import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'
// import { response } from '../../../../server/server'

const View = () => {
  const [user, setName] = useState([])
  const [uploadStatus, setUploadStatus] = useState('')
  const [image, setImage] = useState('');

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

  useEffect(() => {
    const getImage = async () => {
      try{
      const data = await axios.get('http://localhost:5000/api/image/get')
      setImage('https://localhost:5000/' + data.data.image)
      console.log(data)
      }catch(err){
        console.log(err)
      }
    }
    getImage()
  })

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

const pdfHandler = async e => {
  const file = e.target.files[0];
  const formData = new FormData()
  formData.append('pdf', file)

  try{
    const res = await axios.post('http://localhost:5000/api/image', formData)
    setUploadStatus(res.data.msg)
    console.log(res.data.msg)
  }catch(err){
    console.log(err)
  }
}



  return (
    <div>
      <h1>DB Users</h1>
      <input type="file" name="image" accept="pdf" multiple={false} onChange={pdfHandler} />
      <h2>{uploadStatus}</h2>
      {/* {user.map(user => (
        <div className="user" key={user.user_id}>
          <p2>{user.user_id}  |  </p2>
          <p2>{user.email}  |  </p2>
          <p2>{user.password}  |  </p2>
          <button><Link to={`/db/update/${user.user_id}`}> Update </Link></button>
          <p2>  |  </p2>
          <button> <Link to={`/db/get/${user.user_id}`}> Get Data Solo</Link> </button>
          <p2>  |  </p2>
          <button> <Link to={`/db/logintest/${user.user_id}`}> Log In</Link> </button>
          <p2>  |  </p2>
          <button type="submit" onClick = {()=> handleDelete(user.id)}> Delete</button>
        </div>
      ))}
      <button><Link to={'/db/add'}> Add </Link></button> */}
      
    </div>
    
  )
}

export default View