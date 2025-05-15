import React, { useEffect, useState } from "react";
import Floor1 from "./Floors/Floor1";
import Floor2 from "./Floors/Floor2";
import Floor3 from "./Floors/Floor3";
import './Responsive.css';
import base_url from "../api/myapi";
import axios from "axios";
import { toast } from "react-toastify";
// import { Link ,useParams } from "react-router-dom";
export default function Seats(props) {


    const [Svalue, setSvalue] = useState({});

    useEffect(()=>{
      axios.get(`${base_url}/Student`).then(
        (Response) => {
            alert("Data")
            setSvalue(Response.data);
        },
        (error) => {
          console.log("error");
          toast.error("Somting Went Wrong!");

        });
      
    
    },[]);



    const [activeFloor, setActiveFloor] = useState('First Floor');
    const outer_div = {
        overflowX: 'auto',
        paddingBottom: '4rem'
    }
    const area = {
        boxSizing: "border-box",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

    }
    const inner_area = {
        width: "60rem",
        backgroundColor: `${props.mode === "light" ? "#e6e4e1" : "#212529"}`,
        boxSizing: "border-box",
        position: "relative",
        borderRadius: "5px",
        boxShadow: "-1px 2px 20px 0px black",
    }
    const inner_area_one = {
        paddingTop: "5%",
    }
    const floors = {
        // height: "2rem",
        boxSizing: "border-box",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        color: "white"
    }

    let changeFloorpls = () => {
        let checkval = document.getElementById('checkme').value;
        if (checkval === 'First Floor') {
            setActiveFloor('Second Floor');
        }
        else if (checkval === 'Second Floor') {
            setActiveFloor('Third Floor');
        }

    }

    let changeFloormin = () => {
        let checkval = document.getElementById('checkme').value;
        if (checkval === 'Third Floor') {
            setActiveFloor('Second Floor');
        }
        else if (checkval === 'Second Floor') {
            setActiveFloor('First Floor');
        }


    }
    const firstOne = { ...inner_area, ...inner_area_one };

    return (

        <><div style={outer_div}>
            
            <div style={area}>
                <div style={firstOne} id="firstFloor" className={activeFloor === 'First Floor' ? "d-block inner_area" : "d-none inner_area"} >
                    <Floor1 mode={props.mode} Mystudents={Svalue} />
                </div>
                <div style={inner_area} id="SecondFloor" className={activeFloor === 'Second Floor' ? "d-block inner_area" : "d-none inner_area"}>
                    <Floor2 mode={props.mode} Mystudents={Svalue}/>
                </div>
                <div style={inner_area} id="ThirdFloor" className={activeFloor === 'Third Floor' ? "d-block inner_area" : "d-none inner_area"}>
                    <Floor3 mode={props.mode} Mystudents={Svalue}/>
                </div>
            </div>

            <div style={floors} className="container mt-1">
                <nav aria-label="Page navigation example">
                    <ul className="pagination">
                        <div className="input-group mb-3">
                            <span className="input-group-text"> <button className="btn btn-secondary " onClick={() => changeFloormin()} aria-label="Next">
                                <span aria-hidden="true">&laquo;</span>
                            </button></span>
                            <input type="text" id="checkme" className="form-control text-center" value={activeFloor} disabled />
                            <span className="input-group-text"><button className="btn btn-secondary" onClick={() => changeFloorpls()} aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                            </button></span>
                        </div>

                    </ul>
                </nav>

            </div>

            
        </div>

        </>
    );
}


