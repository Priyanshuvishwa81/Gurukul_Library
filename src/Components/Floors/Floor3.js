import React, { useEffect } from 'react';
import './Floor.css';
export default function Floor3(props) {

    const stairs = {
        backgroundColor: `${props.mode === "light" ? "white" : "#aba4a4"}`,
        boxShadow: "inset -1px -1px 8px black",
        position: "relative",
        borderRadius: " 0px 0px 10px 0px",
    }
    const seats = {

        boxShadow: "inset 1px 0px 0px 1px #5a5252",
        backgroundColor: `${props.mode === "light" ? "#d4d6d0" : "#c1c2c0"}`,
        color: `${props.mode === "light" ? "black" : "black"}`,
    }


    const updatedStudents = Array.isArray(props.Mystudents) ? props.Mystudents
    : [props.Mystudents];
// console.log(updatedStudents);
// useEffect(() => {
//     if (updatedStudents !== undefined) {
//         updatedStudents.forEach(element => {
//             const seatId = `A${element.stdSeat}`;
//             const seatElement = document.getElementById(seatId);

//             // if (seatElement) {
//                 // Apply a different style for occupied seats
            
//                 // seatElement.style.backgroundColor = 'yellow';
//                 // seatElement.innerText = element.stdName;

//                 // Create tooltip element
//         //         const tooltip = document.createElement('div');
//         //         tooltip.classList.add('tooltip');
//         //         tooltip.innerHTML = `
//         //   <div class="tooltiptext">
//         //     <p>Name: ${element.stdName}</p>
//         //   </div>
//         // `;

//                 // Add tooltip to the seat
//                 seatElement.appendChild(tooltip);

//                 // Show/hide tooltip on hover
//             //     seatElement.addEventListener('mouseover', function () {
//             //         tooltip.style.display = 'block';
//             //     });

//             //     seatElement.addEventListener('mouseout', function () {
//             //         tooltip.style.display = 'none';
//             //     });

//             // }
//         });

//     }

// },[updatedStudents]);




    return (
        <>

            <div className="TAC1"></div>
            <div className="TAC2"></div>
            <div className="area">
                <div className="area_top" style={stairs}>
                    <div className="door"></div>
                </div>
                <div className="area_top area_top_update">
                    <div className="area_top">
                        <div className="area_top_left" style={{ float: "left" }}>
                            <div id="A79" style={seats} className="seat_top"></div>
                            <div id="A80" style={seats} className="seat_top"></div>
                            <div id="A81" style={seats} className="seat_top"></div>
                            <div id="A82" style={seats} className="seat_top"></div>
                            <div id="A83" style={seats} className="seat_top"></div>
                        </div>
                        <div className="area_top_left" style={{ float: "right" }}>
                            <div id="A84" style={seats} className="seat_top"></div>
                            <div id="A85" style={seats} className="seat_top"></div>
                            <div id="A86" style={seats} className="seat_top"></div>
                            <div id="A87" style={seats} className="seat_top"></div>
                            <div id="A88" style={seats} className="seat_top"></div>
                        </div>
                    </div>
                    <div className="area_top">
                        <div className="area_top_left" style={{ float: "left" }}>
                            <div id="A89" style={seats} className="seat_top"></div>
                            <div id="A90" style={seats} className="seat_top"></div>
                            <div id="A91" style={seats} className="seat_top"></div>
                            <div id="A92" style={seats} className="seat_top"></div>
                            <div id="A93" style={seats} className="seat_top"></div>
                        </div>
                        <div className="area_top_left" style={{ float: "right" }}>
                            <div id="A94" style={seats} className="seat_top"></div>
                            <div id="A95" style={seats} className="seat_top"></div>
                            <div id="A96" style={seats} className="seat_top"></div>
                            <div id="A97" style={seats} className="seat_top"></div>
                            <div id="A98" style={seats} className="seat_top"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="area">
                <div style={{ width: "100%", height: "25%" }}>
                    <div className="area_bottom_top">
                        <div id="A99" style={seats} className="Top_bottom"></div>
                        <div id="A100" style={seats} className="Top_bottom"></div>
                        <div id="A101" style={seats} className="Top_bottom"></div>
                        <div id="A102" style={seats} className="Top_bottom"></div>
                    </div>
                </div>
                <div className="area_bottom_bottom">
                    <div id="A103" style={seats} className="Bottom_bottom"></div>
                    <div id="A104" style={seats} className="Bottom_bottom"></div>
                    <div id="A105" style={seats} className="Bottom_bottom"></div>
                    <div id="A106" style={seats} className="Bottom_bottom"></div>
                    <div id="A107" style={seats} className="Bottom_bottom"></div>
                    <div id="A108" style={seats} className="Bottom_bottom"></div>
                    <div id="A109" style={seats} className="Bottom_bottom"></div>
                    <div id="A110" style={seats} className="Bottom_bottom"></div>
                    <div id="A111" style={seats} className="Bottom_bottom"></div>
                    <div id="A112" style={seats} className="Bottom_bottom"></div>
                </div>
            </div>
        </>




    );
}