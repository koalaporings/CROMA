import './App.css';
import React, {  useEffect, useState } from 'react';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Pages/Login/Login.jsx';
import AdminLanding from './Pages/Admin Portal/Admin Landing.jsx';
import StudentLanding from './Pages/Student Portal/Student Landing.jsx';
import SignatoryLanding from './Pages/Signatory Portal/Signatory Landing.jsx';
import ClerkLanding from './Pages/Clerk Portal/Clerk Landing.jsx';
import AnnouncementPage from './Pages/Announcements/Announcements';
import AnnouncementSigPage from './Pages/Announcements/Announcements Signatory';
import AnnouncementStudPage from './Pages/Announcements/Announcements Student';
import AnnouncementClerkPage from './Pages/Announcements/Announcements Clerk';
import HistoryPage from './Pages/History/History';
import TrackingPage from './Pages/Tracking Page/Tracking';
import Add from './Pages/dbPage/Add.jsx';
import Update from './Pages/dbPage/Update.jsx';
import View from './Pages/dbPage/View.jsx';
import GetUser from './Pages/dbPage/GetUser.jsx';
import LoginTest from './Pages/dbPage/LoginTest.jsx';
import StudentTrackingPage from './Pages/History/History Student';
import ClerkTrackingPage from './Pages/History/History Clerk';


// Forms
import Form1 from './Pages/Forms/Form 1';
import Form2 from './Pages/Forms/Form 2';
import Form3 from './Pages/Forms/Form 3';

function App() {

  document.title = "Automated Request System";

  // BACKEND TESTING, DO NOT DELETE, CONSOLE TEST ONLY
  // BACKEND TESTING, DO NOT DELETE, CONSOLE TEST ONLY

  return (
    
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route 
              path="/" 
              element={<Login/>}  
            />
            <Route 
              path="/admin" 
              element={<AdminLanding/>}  
            />
            <Route 
              path="/student" 
              element={<StudentLanding/>}  
            />
            <Route 
              path="/signatory" 
              element={<SignatoryLanding/>}  
            />
            <Route 
              path="/clerk" 
              element={<ClerkLanding/>}  
            />
            <Route 
              path="/announcements" 
              element={<AnnouncementPage/>}  
            />
            {/* TEMPORARY ONLY WHILE NO API YET*/}
            <Route 
              path="/signatory/announcements" 
              element={<AnnouncementSigPage/>}  
            /> 
            <Route 
              path="/student/announcements" 
              element={<AnnouncementStudPage/>}  
            />
            <Route 
              path="/clerk/announcements" 
              element={<AnnouncementClerkPage/>}  
            />
            <Route 
              path="/history" 
              element={<HistoryPage/>}  
            />
            <Route 
              path="/tracking" 
              element={<TrackingPage/>}  
            />
            <Route 
              path="/student/history" 
              element={<StudentTrackingPage/>}  
            />
            <Route 
              path="/clerk/history" 
              element={<ClerkTrackingPage/>}  
            />

            {/* FORM REQUESTS */}

            <Route 
              path="/student/request/1" 
              element={<Form1/>}  
            />
            <Route 
              path="/student/request/2" 
              element={<Form2/>}  
            />
            <Route 
              path="/student/request/3" 
              element={<Form3/>}  
            />

            {/* BACKEND ROUTE FOR TESTING PLS DON'T DELETE UWU */}
            <Route 
              path="/db" 
              element={<View/>}  
            />
            <Route 
              path="/db/add" 
              element={<Add/>}  
            />
            <Route 
              path="/db/update/:id" 
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
