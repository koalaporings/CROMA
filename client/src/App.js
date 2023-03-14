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
import Add from './Pages/dbPage/Add.jsx';
import Update from './Pages/dbPage/Update.jsx';
import View from './Pages/dbPage/View.jsx';


function App() {

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
            {/* BACKEND ROUTE FOR TESTING ENDS HERE*/}
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
