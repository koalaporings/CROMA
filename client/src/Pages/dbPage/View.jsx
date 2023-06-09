import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'
// import { response } from '../../../../server/server'

const View = (email) => {
  const [user, setName] = useState([])
  const [uploadStatus, setUploadStatus] = useState('')
  const [image, setImage] = useState();

  const [counter, setCounter] = useState(0);

    // useEffect (() =>{
    //   const fetchAllUsers = async ()=>{
    //     try{
    //       const response = await axios.get('http://localhost:5000/db')
    //       setName(response.data)
    //       console.log(response)
    //     }catch(err){
    //       console.log(err)
    //     }
    //   }
    //   fetchAllUsers()
    // }, [])

  // useEffect(() => {
  //   const getImage = async () => {
  //     try{
  //     const data = await axios.get('http://localhost:5000/api/image/get')
  //     setImage('https://localhost:5000/' + data.data.image)
  //     console.log(data)
  //     }catch(err){
  //       console.log(err)
  //     }
  //   }
  //   getImage()
  // })

  console.log(counter)
if (counter < 2) {
  setCounter(counter+1)

}

const navigate = useNavigate()
// const handleClick = async e => {
//   e.preventDefault()
//   navigate('/db/update/' + user.id)
// }

const handleDelete = async id =>{
  try{
    axios.delete('http://localhost:5000/db/delete/' + id)
  }catch(err){
    console.log(err)
  }
}

const getImagevalue = async () => {
  const response = await axios.get('http://localhost:5000/form_api/get/' + 123060723591000)
  console.log(response)
  return response.data
  
}


useEffect(() => {
  async function stuffget(){
    console.log(email)
  // const response1 = await axios.get('http://localhost:5000/login_api/getRole/' + sessionStorage.getItem("email"))
  //       console.log(response1)
  //       sessionStorage.setItem("role", response1.data[0].role)
  //       const responses = await axios.get('http://localhost:5000/id_api/student_id/' + sessionStorage.getItem("email"))
  //       console.log(responses)
  //       sessionStorage.setItem("id", responses.data[0].user_id)
  // const response = await axios.get('http://localhost:5000/student_api/getDetails/'+ sessionStorage.getItem("id"))
  // sessionStorage.setItem("registered", response.data[0].registered)
  }

  stuffget()
  window.location.reload()
  const url = sessionStorage.getItem("role")
  navigate("/student")
},[])

// useEffect(() => {
//   async function getvalue() {
//     const response = await getImagevalue()
//     console.log(response)
//     setImage(response)
//   }getvalue()
// },[])

const pdfHandler = async e => {
  const file = e.target.files[0]
  const formData = new FormData()
  formData.append('image', file)

  try{
    const res = await axios.post('http://localhost:5000/form_api/upload_image', formData)
    if(res.data.status === 'Success'){
      console.log("yes")
    }
    // window.location.reload()
  }catch(err){
    console.log(err)
  }
}

function deleteALL() {
  axios.delete('http://localhost:5000/admin_api/deleteAll')
}

console.log(image)

  return (
    <div>
      <h1>DB Users</h1>
      <input type="file" name="image" accept="pd" multiple={false} onChange={pdfHandler} />
      <h2>{uploadStatus}</h2>
      {/* {image && <img src={`http://localhost:5000/public/uploads/` + image[0].file.toString()}></img>} */}
      <button onClick={deleteALL}>DELETE ALL</button>
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