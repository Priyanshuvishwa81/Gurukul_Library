
import axios from "axios";
import React from "react";
import base_url from "../../api/myapi";
import { toast } from "react-toastify";
import Modal from 'react-bootstrap/Modal';


function MyVerticallyCenteredModal(props) {
    const deleteStudent = () => {

        axios.delete(`${base_url}/Student/${props.id.id}`).then(
            (Response) => {
                toast.success("Student Deleted Successfully!")
                props.onHide();

            },
            (error) => {
                toast.error("Somting Went Wrong!", error);
                console.log(error);
                props.onHide();

            }
        )

    }
    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className={`${props.mode === "dark" ? "modal-dark" : ""}`}
        >

            <Modal.Header closeButton  >
                <Modal.Title id="contained-modal-title-vcenter " className="text-danger">
                    Warning!!
                </Modal.Title>
            </Modal.Header>
            <Modal.Body  className={`text-${props.mode === "dark" ? "dark" : "dark"}`}>
                This Will Delete All Data Of {`${props.id.stdName}`}
            </Modal.Body>
            <Modal.Footer>
                <button className=" btn btn-primary offset-7" onClick={props.onHide} >Cancel</button>
                <button className=" btn btn-danger offset-1" onClick={deleteStudent} >Delete</button>
            </Modal.Footer>
        </Modal>
    );
}



export default function DeletePopup(props) {

    const [modalShow, setModalShow] = React.useState(false);


    return (
        <>
            <div className={`text-${props.mode === "dark" ? "white" : ""}`} onClick={() => setModalShow(true)} >
                <i id="clickable" className="fs-5 fa-solid fa-close" ></i>
            </div>
            <>

                <MyVerticallyCenteredModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    id={props.id}
                    mode={props.mode}
                />

            </>

        </>
    );
}












