import React from "react";
export function Tosts(props) {
    return (
        <div aria-live="polite" aria-atomic="true" class="d-flex justify-content-center align-items-center w-100">

            <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
                <div class="toast-header">
                    <strong class="me-auto">{props.heading}</strong>
                    <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                </div>
                <div class="toast-body text-start">
                    {props.body}
                </div>
            </div>
        </div>
    );
}
export default function Alerts(props) {
    return (
        <div className="alert alert-warning alert-dismissible fade show" role="alert">
            {props.body}
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    );
}