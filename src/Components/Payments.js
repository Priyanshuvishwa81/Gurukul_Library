import React from 'react'
import './Payments.css'
import PaymentPopup from './Popups/PaymentPopup';
import FeeReceipt from './Popups/FeeReceipt';
export function Tdset(props) {
    return (
        <td >
            <FeeReceipt mode={props.mode} month={props.month} name={props.name} status={props.status} />
        </td>
    );
}
export default function Payments(props) {

    return (
        <>

            <tr >
                <th scope="row" >
                    <PaymentPopup details={props.details} mode={props.mode} />
                </th>

                <Tdset mode={props.mode} name={props.name} month="January" status={props.details.Jan} />
                <Tdset mode={props.mode} name={props.name} month="Febuary" status={props.details.Feb} />
                <Tdset mode={props.mode} name={props.name} month="March" status={props.details.Mar} />
                <Tdset mode={props.mode} name={props.name} month="April" status={props.details.Apr} />
                <Tdset mode={props.mode} name={props.name} month="May" status={props.details.May} />
                <Tdset mode={props.mode} name={props.name} month="June" status={props.details.Jun} />
                <Tdset mode={props.mode} name={props.name} month="July" status={props.details.Jul} />
                <Tdset mode={props.mode} name={props.name} month="August" status={props.details.Aug} />
                <Tdset mode={props.mode} name={props.name} month="September" status={props.details.Sep} />
                <Tdset mode={props.mode} name={props.name} month="October" status={props.details.Oct} />
                <Tdset mode={props.mode} name={props.name} month="November" status={props.details.Nov} />
                <Tdset mode={props.mode} name={props.name} month="December" status={props.details.Dec} />
            </tr>


        </>
    );
}