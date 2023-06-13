import './App.css';
import React, {  useEffect, useState } from 'react';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { Navigate } from 'react-router-dom';

import Login from './Pages/Login/Login.jsx';
import AdminLanding from './Pages/Admin Portal/Admin Landing.jsx';
import StudentLanding from './Pages/Student Portal/Student Landing.jsx';
import SignatoryLanding from './Pages/Signatory Portal/Signatory Landing.jsx';
import SignatoryLanding2 from './Pages/Signatory Portal/Signatory Landing 2.jsx';
import ClerkLanding from './Pages/Clerk Portal/Clerk Landing.jsx';
import AnnouncementPage from './Pages/Announcements/Announcements';
import AnnouncementSigPage from './Pages/Announcements/Announcements Signatory';
import AnnouncementStudPage from './Pages/Announcements/Announcements Student';
import AnnouncementClerkPage from './Pages/Announcements/Announcements Clerk';
import AddAnnouncement from './Pages/Announcements/Add Announcement';
import HistoryPage from './Pages/History/History Admin';
import TrackingPage from './Pages/Tracking Page/Tracking';
import Add from './Pages/dbPage/Add.jsx';
import Update from './Pages/dbPage/Update.jsx';
import View from './Pages/dbPage/View.jsx';
import GetUser from './Pages/dbPage/GetUser.jsx';
import LoginTest from './Pages/dbPage/LoginTest.jsx';
import StudentTrackingPage from './Pages/History/History Student';
import ClerkTrackingPage from './Pages/History/History Clerk';
import ViewAnnouncementPage from './Pages/Announcements/View Announcement';
import ViewSignatoryAnnouncementPage from './Pages/Announcements/View Announcement Signatory';
import ViewClerkAnnouncementPage from './Pages/Announcements/View Announcement Clerk';
import ViewAdminAnnouncementPage from './Pages/Announcements/View Announcement Admin';
import Register from './Pages/Register/Register';
import User from './Pages/Admin Portal/Users.jsx';


// Forms
import Form1 from './Pages/Forms/Form 1';
import Form2 from './Pages/Forms/Form 2';
import Form3 from './Pages/Forms/Form 3';
import Form4 from './Pages/Forms/Form 4';
import Form5 from './Pages/Forms/Form 5';
import Form6 from './Pages/Forms/Form 6';
import Form7 from './Pages/Forms/Form 7';
import Form8 from './Pages/Forms/Form 8';
import Form9 from './Pages/Forms/Form 9';
import Form10 from './Pages/Forms/Form 10';
import Form11 from './Pages/Forms/Form 11';
import Form12 from './Pages/Forms/Form 12';
import Form13 from './Pages/Forms/Form 13';
import Form14 from './Pages/Forms/Form 14';
import Form15 from './Pages/Forms/Form 15';
import Form16 from './Pages/Forms/Form 16';
import Form17 from './Pages/Forms/Form 17';
import Form18 from './Pages/Forms/Form 18';
import Form20 from './Pages/Forms/Form 20';
import Form21 from './Pages/Forms/Form 21';
import { BsEmojiExpressionless } from 'react-icons/bs';

function App() {
  document.title = "Automated Request System";

  const [userName, setUserName] = useState(" ");
  const [lastName, setLastName] = useState(" ");
  const [email, setEmail] = useState(" ");
  const [role, setRole] = useState("");
  const [id, setID] = useState("")
  // const [userId, setUserID] = useState(0);

    // async function decodeToken() {
    //     const token = sessionStorage.getItem("token")

    //     const data = jwt_decode(token.toString())
    //     setUserName(data.given_name)
    //     setLastName(data.family_name)
    //     setEmail(data.email)
    //     // getUserID(data.email)
    //     // getRole(data.email)
        
    //     // setUserName(data.first_name.toString())
    //     // console.log(userName)
    // }

    // useEffect (() =>{
    //     decodeToken()
    //     }, [])

    console.log(sessionStorage.getItem("role"))

    // async function getUserID(data){
    //     const response = await axios.get('http://localhost:5000/id_api/student_id/' + data)
    //     console.log(response.data[0].user_id) 
    //     sessionStorage.setItem("id", response.data[0].user_id)
    //     getRegistered(response.data[0].user_id)
    // }

    // async function getRole(data){
    //   const response = await axios.get('http://localhost:5000/login_api/getRole/' + data)
    //   sessionStorage.setItem("role", response.data[0].role)
    // }

    // async function getRegistered(data){
    //     const response = await axios.get('http://localhost:5000/student_api/getDetails/'+ data)
    //     sessionStorage.setItem("registered", response.data[0].registered)

    // }

    const getData = (fetched_role, fetched_id) => {
      setRole(fetched_role)

      console.log(role)
    }
    
  return (


    <div className="App">
      {console.log(sessionStorage.getItem("role"))}
        <BrowserRouter>
          <Routes>
            <Route 
              path="/" 
              element={<Login fetchData={getData}/>}
            />
            <Route 
              path="/student/info" 
              element={(sessionStorage.getItem("role")==="student") ? <Register/> : <Navigate to={"/"+sessionStorage.getItem("role")}/>}     
            />
            <Route 
              path="/admin" 
              element={(sessionStorage.getItem("role")==="admin") ? <AdminLanding userName={userName}/> : <Navigate to={"/"+sessionStorage.getItem("role")}/>} 
            />
            <Route 
              path="/student" 
              element={(sessionStorage.getItem("role")==="student") ? <StudentLanding userId={sessionStorage.getItem("id")} userName={userName}/> : <Navigate to={"/"+sessionStorage.getItem("role")}/>} 
              // element={<StudentLanding userId={sessionStorage.getItem("id")} userName={sessionStorage.getItem("role")}/>}  
            />
            <Route 
              path="/signatory" 
              element={(sessionStorage.getItem("role")==="signatory") ? <SignatoryLanding userId={sessionStorage.getItem("id")} userName={userName} lastName={lastName}/> : <Navigate to={"/"+sessionStorage.getItem("role")}/>}  
            />
            <Route 
              path="/signatory/2" 
              element={<SignatoryLanding2/>}  
            />
            <Route 
              path="/clerk" 
              element={(sessionStorage.getItem("role")==="clerk") ? <ClerkLanding userId={sessionStorage.getItem("id")} userName={userName}/> : <Navigate to={"/"+sessionStorage.getItem("role")}/>}  
            />
            <Route 
              path="/admin/announcements" 
              element={(sessionStorage.getItem("role")==="admin") ? <AnnouncementPage/> : <Navigate to={"/"+sessionStorage.getItem("role")+"/announcements"}/>}  
            />

            <Route 
              path="/admin/users" 
              element={(sessionStorage.getItem("role")==="admin") ? <User userName={userName}/> : <Navigate to={"/"+sessionStorage.getItem("role")}/>}  
            />

            <Route
              path='/register'
              element={<Register/>}
            />
            
            <Route 
              path="/signatory/announcements" 
              element={(sessionStorage.getItem("role")==="signatory") ? <AnnouncementSigPage/> : <Navigate to={"/"+sessionStorage.getItem("role")+"/announcements"}/>}  
            /> 
            <Route 
              path="/student/announcements" 
              element={(sessionStorage.getItem("role")==="student") ? <AnnouncementStudPage/> : <Navigate to={"/"+sessionStorage.getItem("role")+"/announcements"}/>}  
            />
            <Route 
              path="/clerk/announcements" 
              element={(sessionStorage.getItem("role")==="clerk") ? <AnnouncementClerkPage/> : <Navigate to={"/"+sessionStorage.getItem("role")+"/announcements"}/>}  
            />
            <Route 
              path="/student/announcements/view/:id" 
              element={(sessionStorage.getItem("role")==="student") ? <ViewAnnouncementPage/> : <Navigate to={"/"+sessionStorage.getItem("role")+"/announcements/view/:id"}/>}   
            />
            <Route 
              path="/signatory/announcements/view/:id" 
              element={(sessionStorage.getItem("role")==="signatory") ? <ViewSignatoryAnnouncementPage/> : <Navigate to={"/"+sessionStorage.getItem("role")+"/announcements/view/:id"}/>}   
            />
            <Route 
              path="/clerk/announcements/view/:id" 
              element={(sessionStorage.getItem("role")==="clerk") ? <ViewClerkAnnouncementPage/> : <Navigate to={"/"+sessionStorage.getItem("role")+"/announcements/view/:id"}/>}   
            />
            <Route 
              path="/announcements/view/:id" 
              element={(sessionStorage.getItem("role")==="admin") ? <ViewAdminAnnouncementPage/> : <Navigate to={"/"+sessionStorage.getItem("role")+"/announcements/view/:id"}/>}   
            />

            <Route 
              path="/admin/history" 
              element={(sessionStorage.getItem("role")==="admin") ? <HistoryPage/> : <Navigate to={"/"+sessionStorage.getItem("role")}/>}   
            />
            <Route 
              path="/student/tracking" 
              element={(sessionStorage.getItem("role")==="student") ? <TrackingPage userId={sessionStorage.getItem("id")}/> : <Navigate to={"/"+sessionStorage.getItem("role")}/>}  
            />
            <Route 
              path="/student/history" 
              element={(sessionStorage.getItem("role")==="student") ? <StudentTrackingPage userId={sessionStorage.getItem("id")} /> : <Navigate to={"/"+sessionStorage.getItem("role")}/>}   
            />
            <Route 
              path="/clerk/history" 
              element={(sessionStorage.getItem("role")==="clerk") ? <ClerkTrackingPage/> : <Navigate to={"/"+sessionStorage.getItem("role")}/>}    
            />

            {/* FORM REQUESTS */}

            <Route 
              path="/student/request/1" 
              element={(sessionStorage.getItem("role")==="student") ? <Form1 userId={sessionStorage.getItem("id")}/> : <Navigate to={"/"+sessionStorage.getItem("role")}/>}  
            />
            <Route 
              path="/student/request/2" 
              element={(sessionStorage.getItem("role")==="student") ? <Form2 userId={sessionStorage.getItem("id")}/> : <Navigate to={"/"+sessionStorage.getItem("role")}/>}  
            />
            <Route 
              path="/student/request/3" 
              element={(sessionStorage.getItem("role")==="student") ? <Form3 userId={sessionStorage.getItem("id")}/> : <Navigate to={"/"+sessionStorage.getItem("role")}/>}  
            />

            <Route 
              path="/student/request/4" 
              // path="/student/request/17" 
              element={(sessionStorage.getItem("role")==="student") ? <Form4 userId={sessionStorage.getItem("id")}/> : <Navigate to={"/"+sessionStorage.getItem("role")}/>} 
            />

            <Route 
              path="/student/request/5" 
              // path="/student/request/14" 
              element={(sessionStorage.getItem("role")==="student") ? <Form5 userId={sessionStorage.getItem("id")}/> : <Navigate to={"/"+sessionStorage.getItem("role")}/>} 
            />
            <Route 
              path="/student/request/6" 
              // path="/student/request/16" 
              element={(sessionStorage.getItem("role")==="student") ? <Form6 userId={sessionStorage.getItem("id")}/> : <Navigate to={"/"+sessionStorage.getItem("role")}/>}  
            />
            <Route 
              path="/student/request/7" 
              // path="/student/request/10" 
              element={(sessionStorage.getItem("role")==="student") ? <Form7 userId={sessionStorage.getItem("id")}/> : <Navigate to={"/"+sessionStorage.getItem("role")}/>}
            />

            <Route 
              path="/student/request/8" 
              // path="/student/request/13" 
              element={(sessionStorage.getItem("role")==="student") ? <Form8 userId={sessionStorage.getItem("id")}/> : <Navigate to={"/"+sessionStorage.getItem("role")}/>}
            />

            <Route 
              path="/student/request/9" 
              // path="/student/request/4" 
              element={(sessionStorage.getItem("role")==="student") ? <Form9 userId={sessionStorage.getItem("id")}/> : <Navigate to={"/"+sessionStorage.getItem("role")}/>}
            />

            <Route 
              path="/student/request/10" 
              // path="/student/request/18" 
              element={(sessionStorage.getItem("role")==="student") ? <Form10 userId={sessionStorage.getItem("id")}/> : <Navigate to={"/"+sessionStorage.getItem("role")}/>} 
            />

            <Route 
              path="/student/request/11" 
              // path="/student/request/20" 
              element={(sessionStorage.getItem("role")==="student") ? <Form11 userId={sessionStorage.getItem("id")}/> : <Navigate to={"/"+sessionStorage.getItem("role")}/>}
            />

            <Route 
              path="/student/request/12" 
              // path="/student/request/5" 
              element={(sessionStorage.getItem("role")==="student") ? <Form12 userId={sessionStorage.getItem("id")}/> : <Navigate to={"/"+sessionStorage.getItem("role")}/>}
            />

            <Route 
              path="/student/request/13" 
              // path="/student/request/7" 
              element={(sessionStorage.getItem("role")==="student") ? <Form13 userId={sessionStorage.getItem("id")}/> : <Navigate to={"/"+sessionStorage.getItem("role")}/>}
            />

            <Route 
              path="/student/request/14" 
              // path="/student/request/6" 
              element={(sessionStorage.getItem("role")==="student") ? <Form14 userId={sessionStorage.getItem("id")}/> : <Navigate to={"/"+sessionStorage.getItem("role")}/>}  
            />

            <Route 
              path="/student/request/15" 
              // path="/student/request/12" 
              element={(sessionStorage.getItem("role")==="student") ? <Form15 userId={sessionStorage.getItem("id")}/> : <Navigate to={"/"+sessionStorage.getItem("role")}/>}
            />

            <Route 
              path="/student/request/16" 
              // path="/student/request/19" 
              element={(sessionStorage.getItem("role")==="student") ? <Form16 userId={sessionStorage.getItem("id")}/> : <Navigate to={"/"+sessionStorage.getItem("role")}/>}
            />
  
            <Route 
              path="/student/request/17" 
              // path="/student/request/21" 
              element={(sessionStorage.getItem("role")==="student") ? <Form17 userId={sessionStorage.getItem("id")}/> : <Navigate to={"/"+sessionStorage.getItem("role")}/>}
            />

            <Route 
              path="/student/request/18" 
              element={(sessionStorage.getItem("role")==="student") ? <Form18 userId={sessionStorage.getItem("id")}/> : <Navigate to={"/"+sessionStorage.getItem("role")}/>}
            />

          <Route 
              path="/student/request/20"
              element={(sessionStorage.getItem("role")==="student") ? <Form20 userId={sessionStorage.getItem("id")}/> : <Navigate to={"/"+sessionStorage.getItem("role")}/>}
            />

            <Route 
              path="/student/request/21" 
              element={(sessionStorage.getItem("role")==="student") ? <Form21 userId={sessionStorage.getItem("id")}/> : <Navigate to={"/"+sessionStorage.getItem("role")}/>} 
            />







            {/* BACKEND ROUTE FOR TESTING PLS DON'T DELETE UWU */}
            <Route 
              path="/loading" 
              element={<View email={email}/>}  
            />
            <Route 
              path="/db/add" 
              element={<Add/>}  
            />
            <Route 
              path="/loadingg" 
              element={<Update/>}  
            />
            <Route
              path="/db/get/:id"
              element={<GetUser/>}
            />
            <Route
              path="/db/logintest/:id"
              element={<LoginTest/>}
            />
            {/* BACKEND ROUTE FOR TESTING ENDS HERE*/}
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
