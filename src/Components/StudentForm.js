import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import base_url from "../api/myapi";
import axios from "axios";



export default function StudentForm(props) {


    const { state } = props.location ||{};
    const { stdData } = state ||{};
    // console.log(stdData);
    // alert(stdData)


    const [Student, setStudent] = useState({});
    const [selectedValue, setSelectedValue] = useState('0');

    const currentDate = new Date();
    const currentMonth = `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1)
        .toString()
        .padStart(2, '0')}`;

    const [selectedMonth, setSelectedMonth] = useState(currentMonth);


    const show_and_hide = (event) => {
        setSelectedValue(event.target.value);

    };

    const resetBtn = useRef(null);

    // SubmitForm  function
    const SubmitForm = (e) => {
        const updatedStudent = { ...Student, monthAndYear: selectedMonth };
        PostStudentFromServer(updatedStudent)
        e.preventDefault();
    }

    const PostStudentFromServer = (data) => {

        axios.post(`${base_url}/Student`, data).then(
            (Response) => {
                if (resetBtn.current) {
                    resetBtn.current.click();
                }
                setStudent(Response.data);
                toast.success("Student Added Successfully!")

            },
            (error) => {
                toast.error("Somting Went Wrong!");
            }
        )
    }


    const stl = {
        backgroundColor: '#dee0df',
    }

    const allstd = {
        boxSizing: "border-box",
        padding: "1rem 1rem",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-evenly",
        position: "relative",
        overflow: "auto",
        marginBottom: '3rem',

    }

    return (

        <>

            <div style={allstd}>
                <div className="header">
                    <h5 className={`modal-title text-${props.mode === "light" ? "dark" : "light"}`} id="exampleModalLabel">
                        {props.head}Add Student <i className={`fa-solid text-primary fa-user-plus me-2`}></i>
                    </h5>
                </div>
                <div>
                    <form onSubmit={SubmitForm} className="row g-3 needs-validation" action="saveme"
                        method="post" >
                        <div className="col-md-6">
                            <label htmlFor="inputEmail4" className={`form-label text-${props.mode === "light" ? "dark" : "light"}`}>Name</label>
                            <input type="text" name="studentName" style={stl} className="form-control" onChange={(e) => {
                                setStudent({ ...Student, stdName: e.target.value });
                            }} required />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputPassword4" className={`form-label text-${props.mode === "light" ? "dark" : "light"}`}>Adhar
                                No</label> <input type="number" style={stl} className="form-control" name="studentAdhar"
                                    onChange={(e) => {
                                        setStudent({ ...Student, stdAdharNo: e.target.value });
                                    }}
                            />
                        </div>
                        <div className="col-12">
                            <label htmlFor="inputAddress" name="studentAddress"
                                className={`form-label text-${props.mode === "light" ? "dark" : "light"}`}>Address</label> <input
                                type="text" name="studentAddress" style={stl} className="form-control"
                                onChange={(e) => {
                                    setStudent({ ...Student, stdAddress: e.target.value });
                                }} required
                            />
                        </div>
                        <div className="col-md-5">
                            <label htmlFor="inputAddress2" className={`form-label text-${props.mode === "light" ? "dark" : "light"}`}>Phone
                                No</label> <input type="number" style={stl} name="phoneNumber" className="form-control"
                                    onChange={(e) => {
                                        setStudent({ ...Student, stdPhoneNo: e.target.value });
                                    }} required
                            />
                        </div>

                        <div className="col-md-7">
                            <label htmlFor="inputAddress2" className={`form-label text-${props.mode === "light" ? "dark" : "light"}`}>Email
                                ID</label>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" style={stl} name="emailId"
                                    onChange={(e) => {
                                        setStudent({ ...Student, stdEmailID: e.target.value });
                                    }}
                                /> <span
                                    className="input-group-text">@gmail.com</span>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="inputAddress2" id="label"
                                className={`form-label text-${props.mode === "light" ? "dark" : "light"}`}>Seat Status </label>
                            <select  defaultValue={false} className="form-select" style={stl} name="Plan" 
                             onChange={(e) => {
                                setStudent({ ...Student, stdSeatStatus: e.target.value });
                            }}>
                                
                                <option value={false}>Not Fix</option>
                                <option value={true} >Fix</option>
                            </select>
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="inputAddress2" className={`form-label text-${props.mode === "light" ? "dark" : "light"}`}>Timing</label>
                            <div className="input-group mb-3">
                                <input type="time" name="timingFrom" style={stl} className="form-control" />
                                <span className="input-group-text">To</span> <input type="time"
                                    name="timingTo" style={stl} className="form-control" />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="inputAddress2" className={`form-label text-${props.mode === "light" ? "dark" : "light"}`}>Seat</label>
                            <div className="input-group mb-3">
                                <input type="int" name="Seat" style={stl} className="form-control"
                                    onChange={(e) => {
                                        setStudent({ ...Student, stdSeatNo: e.target.value });
                                    }}
                                />



                                <Link className="nav-link active" to={`/Seats`} >
                                    <div className={`btn btn-outline-info text-${props.mode === "dark" ? "white" : ""}`} >
                                        <i className="fas fa-chair"></i>
                                    </div>
                                </Link>



                            </div>
                        </div>


                        <div className="col-md-4">
                            <label htmlFor="inputAddress2" className={`form-label text-${props.mode === "light" ? "dark" : "light"}`}>Monthly Pay</label>
                            <div className="input-group mb-3">
                                <span className="input-group-text">&#8377;</span>
                                <input type="text" className="form-control" style={stl} name="monthlyRupees"
                                    onChange={(e) => {
                                        setStudent({ ...Student, monthlyRupees: e.target.value });
                                    }} required

                                />
                                <select defaultValue="1" style={stl} onChange={show_and_hide} className="form-select" >
                                    <option value="1" >Not Pay</option>
                                    <option value="2" >Paid</option>
                                </select>
                            </div>
                        </div>

                        {/* hide and show */}

                        {selectedValue === '2' && (
                            <>
                                <div className="col-md-4">
                                    <label htmlFor="inputAddress2" className={`form-label text-${props.mode === "light" ? "dark" : "light"}`}>Paid Ammount</label>
                                    <div className="input-group mb-3">
                                        <span className="input-group-text">$</span>
                                        <input style={stl} type="text" className="form-control" id="formGroupExampleInput" placeholder="Rupees"
                                        onChange={(e) => {
                                            setStudent({ ...Student, paidAmmount: e.target.value });
                                        }}
                                        required />
                                        <input style={stl} type="month" className="form-control" value={selectedMonth}
                                            onChange={(e) => {
                                                setSelectedMonth(e.target.value);
                                            }}
                                            
                                            />
                                    </div>
                                </div>
                            </>

                        )}





                        <div className="col-12">
                            <button style={{ float: "right", margin: "10px" }} type="submit" className="btn btn-primary">
                                Submit</button>

                            <button style={{ float: "right", margin: "10px" }} type="reset"
                                className="btn btn-danger" >Reset</button>

                        </div>
                    </form>


                </div>
            </div>

        </>
    );

}