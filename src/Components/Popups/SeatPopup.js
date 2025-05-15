import React, { useState } from "react";
import Seats from "../Seats";

export default function SeatPopup(props) {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <div className={`btn btn-outline-info text-${props.mode === "dark" ? "white" : ""}`} onClick={openModal} >
                <i className="fas fa-chair"></i>
            </div>
            <div>

                {isModalOpen && (
                    <div className="modal show" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
                        <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                            <div className={`modal-content text-${props.mode} bg-${props.mode === "light" ? "dark" : "light"}`}>
                                <div className="modal-header">
                                    <button type="button" className={`btn-close btn-close-${props.mode === "light" ? "white" : ""}`} onClick={closeModal}>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <Seats />
                                </div>

                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}




