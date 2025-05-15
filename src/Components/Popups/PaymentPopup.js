import React, { useState } from "react";
export function Setme(props) {
    return (
        <div className="row">
            <div className="col-4 offset-1">{props.month}</div>
            <div className="col-2">:-</div>
            <div className={`col-4 text-${props.monthDetail === "Paid" ? "success" : "danger"} `}> {props.monthDetail}</div>
        </div>
    );
}
export default function PaymentPopup(props) {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <div  className={`text-${props.mode === "dark" ? "white" : ""}`} onClick={openModal} >
                {props.details.stdName}
            </div>
            <div>

                {isModalOpen && (
                    <div className="modal show" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
                        <div className="modal-dialog modal-dialog-centered" role="document">
                            <div className={`modal-content text-${props.mode} bg-${props.mode === "light" ? "dark" : "light"}`}>
                                <div className="modal-header">
                                    <h5 className="modal-title"> {props.details.stdName}</h5>
                                    <button type="button" className={`btn-close btn-close-${props.mode === "light" ? "white" : ""}`} onClick={closeModal}></button>
                                </div>
                                <div className="modal-body">
                                    <Setme month="January" monthDetail={props.details.Jan} />
                                    <Setme month="February" monthDetail={props.details.Feb} />
                                    <Setme month="March" monthDetail={props.details.Mar} />
                                    <Setme month="April" monthDetail={props.details.Apr} />
                                    <Setme month="May" monthDetail={props.details.May} />
                                    <Setme month="June" monthDetail={props.details.Jun} />
                                    <Setme month="July" monthDetail={props.details.Jul} />
                                    <Setme month="August" monthDetail={props.details.Aug} />
                                    <Setme month="September" monthDetail={props.details.Sep} />
                                    <Setme month="October" monthDetail={props.details.Oct} />
                                    <Setme month="November" monthDetail={props.details.Nov} />
                                    <Setme month="December" monthDetail={props.details.Dec} />
                                </div>
                                
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}




