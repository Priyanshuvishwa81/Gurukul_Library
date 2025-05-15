import React, { useState } from "react";
// import Text from "../Test";
import '../text.css'

export default function FeeReceipt(props) {

    const [isModalOpen, setIsModalOpen] = useState(false);

 
      

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    const printMe = () =>{
        window.print();
    }

    return (
        <>
            <span className={`text-${props.status === "Paid" ? "success" : "danger"} `} onClick={openModal} >
                {props.status}
            </span>
            <div>

                {isModalOpen && props.status === 'Paid' && (
                    <div id="fees" className={`modal show`} tabIndex="-1" role="dialog" style={{ display: 'block' }}>
                        <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
                            <div className={`modal-content text-${props.mode} bg-${props.mode === "light" ? "dark" : "light"}`}>

                                <div className="modal-body ">

                                    <div className="row text-center">
                                        <div className="col-1 text-start" onClick={printMe}><i className="fa-solid fa-print"></i></div>
                                        <div className="col-6 offset-2" style={{ fontSize: '10px' }}>FEE RECIEPT</div>
                                        <div className="col-3 text-end"><button type="button" className={`btn-close btn-close-${props.mode === "light" ? "white" : ""}`} onClick={closeModal}></button></div>
                                        <div className="col-12 ">GURUKUL LIBRARY</div>
                                        <div className="col-12 "> Shantipuran Chauraha Near Prachi Hospital, Prayagraj</div>
                                        <div className="col-12 ">Phone No:- 9369075651,7753820036</div>
                                    </div>

                                    <div className="row mt-2">
                                        <div className="col-6">Reciept No :- _____ </div>
                                        <div className="col-6 text-end">Date:- {props.month}</div>
                                    </div>

                                    <div className="row mt-3">
                                        <div className="col-6">Name:-</div>
                                        <div className="col-6 ">{props.name}</div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-6">Adhar No :-</div>
                                        <div className="col-6 ">XXXXXXXX8392</div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-6">Address :-</div>
                                        <div className="col-6 "> Prayagraj</div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-6">Phone No :-</div>
                                        <div className="col-6 ">XXXXXX8394</div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-6">Timing :-</div>
                                        <div className="col-6 ">10:00 To 06:00</div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-6">Amount Recieved (in words) :-</div>
                                        <div className="col-5 ">Eight Hundread</div>
                                    </div> <div className="row mt-3">
                                        <div className="col-5 ms-2 p-2 bg-secondary"><span className="fw-bold"> Rupees :- </span><span className="ms-3">900</span></div>
                                        <div className="col-5  p-2 offset-1 bg-secondary"><span className="fw-bold"> Sign :-</span><span className="ms-3"></span></div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>


                )}
            </div >
        </>
    );
}




