import React, { useEffect, useState } from "react";
import YearChart from "./YearChart";
import './Responsive.css';
import axios from "axios";
import { toast } from "react-toastify";
import base_url from "../api/myapi";

export default function HomePage(props) {


    const [InfoVal, setInfoVal] = useState({});

    useEffect(() => {
        axios.get(`${base_url}/Info`).then(
            (Response) => {
                if (Response.data != null) {
                    setInfoVal(Response.data);
                    console.log(Response.data);
                }
            },
            (error) => {
                console.log("error");
                toast.error("Somting Went Wrong!");
            });


    }, []);

    // const [Student, setStudent] = useState({});

    //function to call server





    return (
        <>
            {/* <YearChart id='chart1' mode={props.mode} />
            <YearChart id='chart2' mode={props.mode} />
            <YearChart id='chart3' mode={props.mode} /> */}


            <div className="p-3  mb-5 scrollme container ">
                <div className="row">

                    <div className="col-12">
                        <button className="btn btn-light float-end position-relative"> Notification
                            <span className="position-absolute top-5 start-95 translate-middle badge rounded-pill bg-danger">19</span>
                        </button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <h3 className="text-success">Students &nbsp;&nbsp;&nbsp;&nbsp;
                            <span className="position-absolute top-5 start-95 translate-middle badge rounded-pill bg-success">{InfoVal.totalStudents}</span>
                        </h3>
                    </div>
                    <hr />
                </div>
                <br />
                <div className="row">
                    <div className="col-10"><h4>Added Students</h4></div>
                    <div className="col-2">{InfoVal.addedStudents}</div>
                </div>
                <div className="row">
                    <div className="col-10"><h4>Deleted Students</h4></div>
                    <div className="col-2 ">{InfoVal.deletedStudents}</div>
                    <div className="col-12"><button type="button" className="btn float-end  btn-outline-success"  data-bs-target="#chart1">View Chart</button></div>
                </div>
                <div className="row mt-4">
                    <div className="col-12">
                        <h3 className="text-success">Seats &nbsp;&nbsp;&nbsp;&nbsp;
                            <span className="position-absolute top-5 start-95 translate-middle badge rounded-pill bg-success">{InfoVal.totalSeats}</span>
                        </h3>
                    </div><hr />

                </div>



                
                <div className="row">
                    <div className="col-10"><h4>Fixed Seats</h4></div>
                    <div className="col-2">{InfoVal.fixedSeats}</div>
                </div>
                <div className="row">
                    <div className="col-10"><h4>Not Fixed Seats</h4></div>
                    <div className="col-2">{InfoVal.notFixedSeats}</div>
                   </div>
                <div className="row">
                    <div className="col-10"><h4>Empty Seats</h4></div>
                    <div className="col-2">{InfoVal.empitySeats}</div>
                    <div className="col-12"><button type="button" className="btn float-end  btn-outline-success" data-bs-target="#chart2">View Chart</button></div>
            
                </div>

                <div className="row mt-4">
                    <div className="col-12"><h2>Payments</h2></div><hr />
                    <div className="col-10"><h4>Fees Paid</h4></div>
                    <div className="col-2">50</div>
                </div>
                <div className="row">
                    <div className="col-10"><h4>Not Paid</h4></div>
                    <div className="col-2">25</div>
                    <div className="col-12"><button type="button" className="btn float-end   btn-outline-success"  data-bs-target="#chart3">View Chart</button></div>

                </div>









            </div>


            {/* <div className="text-start ">
                        <Alerts body='hii this is my first alert box' />
                        <Alerts body='hii this is my first alert box' />
                        <Alerts body='hii this is my first alert box' />
                        <Alerts body='hii this is my first alert box' />
                        <Alerts body='hii this is my first alert box' />
                        <Alerts body='hii this is my first alert box' />
                        <Alerts body='hii this is my first alert box' />
                        <Alerts body='hii this is my first alert box' />
                        <Alerts body='hii this is my first alert box' />
                    </div> */}



        </>
    );
}