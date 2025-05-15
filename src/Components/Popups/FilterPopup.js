import React from "react";
export default function FilterPopup(props) {
    return (
        <div className="modal fade" id={props.id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered ">
                <div className={`modal-content bg-${props.mode} text-${props.mode === "light" ? "dark" : "light"}`}>
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Filter</h5>
                        <button type="button" className={`btn-close btn-close-${props.mode === "light" ? "black" : "white"}`} data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        Body
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Filter</button>
                    </div>
                </div>
            </div>
        </div>
    );
}