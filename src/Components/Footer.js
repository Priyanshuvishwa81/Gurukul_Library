import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Responsive.css'

export default function Footer(props) {
    const addStyle = {
        padding: '0px,2px',
        borderRadius:'20px',
        backgroundColor : 'rgb(207,205,202,0.3)',
        transition: 'background-color 0.6s ease-in-out', // Add transition for background color
  
        
      }
      const deleteStyle = {
      }
    
    
      const [activeLink, setActiveLink] = useState('');
    
      const handleSetActiveLink = (link) => {
          setActiveLink(link);
      };
    
    
    let footer = {
        position: 'fixed',
        bottom: '0px',
        backgroundColor: '#30406e',
        height: '3rem',
        width: '100%',
        borderTop: '1px solid #c0c2c0',
        zIndex:"20"
    }
    let ul = {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around'
    }
    let li = {
        height: '100%',
        width: '20%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '1.5rem',
        color: '#d7dff7',
    }
    return (
        <div style={footer} className={` bg-${props.mode === "dark" ? "dark" : "dark"}  text-${props.mode === "light" ? "dark" : "light"} footer`}>
            <ul style={ul} className="nav justify-content-center">
                <Link style={{ ...li,  ...activeLink === '/' ? addStyle : deleteStyle}} className="nav-link" to="/" onClick={() => handleSetActiveLink('/')}><i className="fa-solid fa-house"></i></Link>
                
                <Link  style={{ ...li,  ...activeLink === 'Payments' ? addStyle : deleteStyle}} className="nav-link" to="/Payments" onClick={() => handleSetActiveLink('Payments')}><i className="fa-solid fa-indian-rupee-sign"></i></Link>
                <Link style={{ ...li,  ...activeLink === 'AllStudents' ? addStyle : deleteStyle}} className="nav-link" to="/AllStudents"  onClick={() => handleSetActiveLink('AllStudents')}><i className="fa-solid fa-magnifying-glass"></i></Link>
                <Link style={{ ...li,  ...activeLink === 'Seats' ? addStyle : deleteStyle}} className="nav-link" to="/Seats"  onClick={() => handleSetActiveLink('Seats')}><i className="fa-solid fa-chair"></i></Link>
                <Link style={{ ...li,  ...activeLink === 'Attendance' ? addStyle : deleteStyle}} className="nav-link" to="/"  onClick={() => handleSetActiveLink('Attendance')}><i className="fa-solid fa-ellipsis-vertical"></i></Link>
                
            </ul>
        </div>
    );
}