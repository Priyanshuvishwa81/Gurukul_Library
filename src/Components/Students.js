import React, { useState } from 'react'
import studentImage from './studentIMG.png';
import PayPopup from './Popups/PayPopup';

import { Link } from 'react-router-dom';

import DeletePopup from './Popups/DeletePopup';
export default function Students(props) {
    return (
        <>
            {/* <StdUpdatePopup id="details" head="Update" mode={props.mode} std={props.std} /> */}
            <div className={`card float-start container m-3 shadow-lg bg-${props.mode}  text-${props.mode === "light" ? "dark" : "light"} placeholder-glow `}
                style={{ width: "20rem" }}>
                <div className="row">

                    <div className="col-5 m-1">
                        <img src={studentImage} className="img-fluid card-img-top"
                            alt="" style={{ width: "100%", height: "100%" }} />

                    </div>
                    <div className="col-5 m-1 d-flex flex-column justify-content-center"
                        style={{ fontSize: "12px" }}>
                        <div className="row ">
                            <div className="col-7 ">Seat:-</div>
                            <div className="col-5 ">
                                <span>{props.std.stdSeat}</span> <a href="/"><span className="lnk"> <i className="fa-solid fa-expand"></i>
                                </span>
                                </a>
                            </div>
                        </div>
                        <div className="row ">
                            <div className="col-7 ">Last Pay:-</div>
                            <div className="col-5 ">
                                <span>{props.std.Pay}</span> <a href="/">
                                    <span className="lnk"> <i className="fa-solid fa-expand"></i>
                                    </span>
                                </a>
                            </div>
                        </div>

                    </div>
                    <div className="col-1 mt-2"
                        style={{ fontSize: "10px" }}>
                        <DeletePopup id={props.std} mode={props.mode} />

                    </div>

                </div>
                <div className="card-body row">
                    <h4 className="card-title col-md-12">{props.std.stdName}</h4>
                    <h6 className="col-md-12 card-title">{props.std.stdAddress}</h6>
                    <h6 className="col-md-12 card-title">{props.std.stdPhoneNo}</h6>

                </div>

                <div className='row d-flex justify-content-center'>
                    <button className="col-4 btn btn-primary  m-1" >
                        <PayPopup id="pay" std={props.std} mode={props.mode} />
                    </button>

                    <div className='col-4 m-1'>
                    <Link to={{ pathname: '/StudentForm', state: { stdData: 'data' } }}>
                        <button className='btn btn-secondary  '>
                            Detail
                        </button>
                        </Link>
                        {/* <Link to={{ pathname: '/StudentForm', state: { stdData: 'data' } }}>
                            <button className='btn '>
                                Detail
                            </button>
                            </Link> */}
                    </div>

                </div>




            </div>
        </>
    );
}