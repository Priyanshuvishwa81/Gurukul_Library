import React, { useState } from 'react'

import './App.css';
import AllStudents from './Components/AllStudents';
import Navbar from './Components/Navbar';
import Payment from './Components/Payment';
import Seats from './Components/Seats';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Components/HomePage';
import Footer from './Components/Footer';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import StudentForm from './Components/StudentForm';

function App() {



  const [studentData, setstudentData] = useState([]);
  // const [getdata,setdata] = useState({});
  const stdval = (studentData) =>{
    setstudentData(studentData);
  }


  const [mode, setmode] = useState("light");
 
 

  const customStyle = {
    bottom: '50px', // Add 50px space from the bottom
  };
  const changeMode = () => {
    if (mode === "light") {
      document.body.style.backgroundColor = '#373839';
      document.body.style.color = 'white';
      setmode("dark");

    } else {
      document.body.style.backgroundColor = 'white';
      document.body.style.color = '#373839';
      setmode("light");
    }
  }
  return (
    <div>
      <Router>
        <ToastContainer position="bottom-center" style={customStyle} />
        <Navbar mode={mode} toggle={changeMode} setvals={stdval} />
        <Routes>
          <Route path='/' element={<HomePage mode={mode} Mystudents={studentData} />} />
          <Route path='/AllStudents' element={<AllStudents mode={mode} setvals={stdval} Mystudents={studentData} />} />
          <Route path='/Seats' element={<Seats mode={mode} />} />
          <Route path='/Payments' element={<Payment mode={mode}  Mystudents={studentData}/>} />
          <Route path='/StudentForm' element={<StudentForm mode={mode} Mystudents={studentData}  />} />
        </Routes>
        <Footer />
      </Router>

    </div>

  );
}

export default App;
