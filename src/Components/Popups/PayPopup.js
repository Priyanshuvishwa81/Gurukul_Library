
import axios from "axios";
import React, { useRef, useState } from "react";
import base_url from "../../api/myapi";
import { toast } from "react-toastify";
export default function PayPopup(props) {
    const [Payment, setPayment] = useState({});

    const resetBtn = useRef(null);


    const currentDate = new Date();
    const currentMonth = `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1)
        .toString()
        .padStart(2, '0')}`;

    const [selectedMonth, setSelectedMonth] = useState(currentMonth);


    // SubmitForm  function
    const SubmitForm = (e) => {
        const updatedPayment = { ...Payment, stdId: props.std.id  ,  monthAndYear: selectedMonth };
        PostStudentFromServer(updatedPayment);
        e.preventDefault();
    }

    // 
    // console.log(props.details);

    const PostStudentFromServer = (data) => {

        axios.post(`${base_url}/Payment`, data).then(
            (Response) => {
                if (resetBtn.current) {
                    resetBtn.current.click();
                }
                setPayment(Response.data);
                toast.success("Payment Done Successfully!")
                setIsModalOpen(false);


            },
            (error) => {
                toast.error("Somting Went Wrong!");
                setIsModalOpen(false);
            }
        )
    }

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    const stl = {
        textAlign: "left",

    }

    return (
        <>
            <div className={`text-${props.mode === "dark" ? "white" : ""}`} onClick={openModal} >
                Pay
            </div>
            {isModalOpen && (
                <form onSubmit={SubmitForm} style={stl} className="row needs-validation" action="saveme"
                    method="post" >
                    <div className="modal show" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
                        <div className="modal-dialog modal-dialog-centered">
                            <div className={`modal-content bg-${props.mode} text-${props.mode === "light" ? "dark" : "light"}`}>
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">{props.std.stdName}</h5>
                                    <button onClick={closeModal} type="button" className={`btn-close btn-close-${props.mode === "light" ? "black" : "white"}`}></button>
                                </div>

                                <div className="modal-body">
                                    <div className="mb-2">
                                        <label htmlFor="exampleFormControlInput1" className="form-label">Address</label>
                                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder={props.std.stdAddress} disabled />
                                    </div>


                                    <div className="input-group mt-2">
                                        <span className="input-group-text">$</span>
                                        <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Rupees"
                                            onChange={(e) => {
                                                setPayment({ ...Payment, paidAmmount: e.target.value });
                                            }}
                                            required />
                                        <input type="month" className="form-control" value={selectedMonth}
                                            onChange={(e) => {
                                                setSelectedMonth(e.target.value);
                                            }}
                                            required />
                                    </div>
                                    <div className="form-check mt-3">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                        <label className="form-check-label" htmlFor="flexCheckChecked">
                                            Send Message To Student
                                        </label>
                                    </div>
                                    <div className="form-check mt-1">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        <label className="form-check-label" htmlFor="flexCheckDefault">
                                            I Agree
                                        </label>
                                    </div>

                                </div>
                                <div className="modal-footer">
                                    <button type="reset" className="btn btn-secondary">Close</button>
                                    <button className="btn btn-primary" type="submit" >Pay</button>
                                </div>

                            </div>
                        </div>

                    </div>
                </form>
            )}
        </>
    );
}












