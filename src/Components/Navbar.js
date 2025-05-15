import React, { useEffect, useState } from 'react'
import './Responsive.css';
import { Link } from 'react-router-dom';
import FilterPopup from './Popups/FilterPopup';
import axios from 'axios';
import base_url from '../api/myapi';
import { toast } from 'react-toastify';

export default function Navbar(props) {
  const [Svalue, setSvalue] = useState();

  const addStyle = {
    borderRadius: '20px',
    backgroundColor: 'rgb(207,205,202,0.3)',

  }
  const deleteStyle = {
  }


  const [activeLink, setActiveLink] = useState('');

  const handleSetActiveLink = (link) => {
    setActiveLink(link);
  };


  useEffect(() => {
    axios.get(`${base_url}/Student`).then(
      (Response) => {
        props.setvals(Response.data);
      },
      (error) => {
        console.log(error.Response);
        toast.error("Somting Went Wrong!");
      });


  }, []);


  // const [Student, setStudent] = useState({});

  //function to call server
  const getAllStudentFromServer = (event) => {
    console.log(event);
    let searchval = event.target.value;
    setSvalue(searchval);
    let theURL = `${base_url}/Student`;
    if (searchval != null && searchval !== "") {
      theURL = `${base_url}/Student/${searchval}`
    }
    axios.get(theURL).then(
      (Response) => {
        if (Response.data!=null) {
          props.setvals(Response.data);
        }
        // setStudent(Response.data);
      },
      (error) => {
        console.log("error");
        toast.error("Not Found");
      }
    )
  }


  return (
    <>
      <FilterPopup id="filter" mode={props.mode} />
      {/* filter */}
      <div style={{ height: '5rem' }}></div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} `} style={{ position: 'fixed', top: "0px", zIndex: '7', width: "100%" }}>
        <div className="container-fluid">
          <Link className="navbar-brand LinkD" to="/" onClick={() => handleSetActiveLink('')}>Gurukul Library</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="  collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="header navbar-nav me-auto mb-2 mb-lg-0">

              <li className='nav-item' style={activeLink === 'AllStudents' ? addStyle : deleteStyle} >
                <Link className="nav-link active" to="/AllStudents" onClick={() => handleSetActiveLink('AllStudents')}>Students</Link>
              </li>
              <li className='nav-item' style={activeLink === 'Payments' ? addStyle : deleteStyle}>
                <Link className="nav-link active" to="/Payments" onClick={() => handleSetActiveLink('Payments')}>Payments</Link>
              </li>
              <li className='nav-item' style={activeLink === 'Seats' ? addStyle : deleteStyle}>
                <Link className="nav-link active" to="/Seats" onClick={() => handleSetActiveLink('Seats')}>Seats</Link>
              </li>
              <li className='nav-item' style={activeLink === 'Attendance' ? addStyle : deleteStyle}>
                <Link className="nav-link active" to="/" onClick={() => handleSetActiveLink('Attendance')}>Attendance</Link>
              </li>


            </ul>
            <div className="form-check form-switch m-2">
              <input className="form-check-input" type="checkbox" onClick={props.toggle} role="switch" id="flexSwitchCheckDefault" />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
            </div>
            <form className="d-flex m-2" role="search">
              <input onChange={getAllStudentFromServer} value={Svalue} className="form-control me-2" type="search" placeholder="" aria-label="Search" />
              <button type="submit" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#filter">
                Filter
              </button>
            </form>

          </div>
        </div>
      </nav>
    </>
  );
}