import React, { useEffect } from 'react'

import ToolTip from '../ToolTip';
export default function Floor1(props) {

    const seats = {
        width: "100%",
        height: "9%",
        boxShadow: "inset 1px 0px 0px 1px #5a5252",
        backgroundColor: `${props.mode === "light" ? "#d4d6d0" : "#c1c2c0"}`,
        color: `${props.mode === "light" ? "black" : "black"}`,

        boxSizing: "border-box",
        fontSize: "small",
        textAlign: "center"
    }
    const rows = {
        float: "left",
        boxSizing: "border-box",
        width: "50%",
        height: "100%",
    }
    const left = {
        float: "left",
        height: "100%",
        width: "30%",
    }
    const right = {
        float: "right",
        height: "100%",
        width: "30%",
    }




    const updatedStudents = Array.isArray(props.Mystudents) ? props.Mystudents
        : [props.Mystudents];
    // console.log(updatedStudents);
    // const [selectedSeat, setSelectedSeat] = useState(null);
    // const [selectedStudentData, setSelectedStudentData] = useState({});


    const tooltip = document.createElement('div');
    tooltip.classList.add('tooltip');
    document.body.appendChild(tooltip);


    useEffect(()=>{
        if (updatedStudents!==undefined) {
           updatedStudents.forEach(element => {
           if (element.stdSeatNo !== 0 && element.stdSeatNo !== undefined && element.stdSeatNo !== null) {
            const seatId = `A${element.stdSeatNo}`;
       
            const seatElement = document.getElementById(seatId);
            // alert(seatId)
            let value =   `<p > <span style='font-weight: bold;background-color: rgba(255, 255, 255, 0.9);'>${element.stdSeatNo}</span>  ${element.stdName} </p>`;
             
            seatElement.innerHTML = value;
            // Create tooltip element
            // tooltip.innerHTML = `
            // ${<ToolTip/>}
            // `;
            // <ToolTip/>
            // tooltip.innerHTML = `
            //   <div class="tooltiptext">
            //     <p>Name: ${element.stdName}</p>
            //     <p>Other information: ...</p>
            //   </div>
            // `;

          
          
           }
             });
        }
         
    });







   

    return (
        <>
            <div style={rows}>
                <div style={left} >
                    {/* <button id="A1" style={seats} onClick={() => handleSeatClick("1")}></button>
                    <button id="A2" style={seats} onClick={() => handleSeatClick("2")}></button>
               */}
                    <div id="A1" style={seats} ></div>
                    <div id="A2" style={seats} ></div>
                    <div id="A3" style={seats} ></div>
                    <div id="A4" style={seats} ></div>
                    <div id="A5" style={seats} ></div>
                    <div id="A6" style={seats} ></div>
                    <div id="A7" style={seats} ></div>
                    <div id="A8" style={seats} ></div>
                    <div id="A9" style={seats} ></div>
                    <div id="A10" style={seats} ></div>
                    <div id="A11" style={seats} ></div>
                </div>
                <div style={right}>
                    <div id="A12" style={seats}></div>
                    <div id="A13" style={seats}></div>
                    <div id="A14" style={seats}></div>
                    <div id="A15" style={seats}></div>
                    <div id="A16" style={seats}></div>
                    <div id="A17" style={seats}></div>
                    <div id="A18" style={seats}></div>
                    <div id="A19" style={seats}></div>
                    <div id="A20" style={seats}></div>
                    <div id="A21" style={seats}></div>
                    <div id="A22" style={seats}></div>
                </div>
            </div>
            <div style={rows}>
                <div style={left}>
                    <div id="A23" style={seats}></div>
                    <div id="A24" style={seats}></div>
                    <div id="A25" style={seats}></div>
                    <div id="A26" style={seats}></div>
                    <div id="A27" style={seats}></div>
                    <div id="A28" style={seats}></div>
                    <div id="A29" style={seats}></div>
                    <div id="A30" style={seats}></div>
                    <div id="A31" style={seats}></div>
                    <div id="A32" style={seats}></div>
                    <div id="A33" style={seats}></div>
                </div>
                <div style={right}>
                    <div id="A34" style={seats}></div>
                    <div id="A35" style={seats}></div>
                    <div id="A36" style={seats}></div>
                    <div id="A37" style={seats}></div>
                    <div id="A38" style={seats}></div>
                    <div id="A39" style={seats}></div>
                    <div id="A40" style={seats}></div>
                    <div id="A41" style={seats}></div>
                    <div id="A42" style={seats}></div>
                    <div id="A43" style={seats}></div>
                    <div id="A44" style={seats}></div>
                </div>
            </div>

        </>
    );
}

    














// import React, { useEffect, useState } from 'react';
// import './ToolTip.css';
// import base_url from '../../api/myapi';

// export default function Floor1(props) {
//   const [selectedSeat, setSelectedSeat] = useState(null);
//   const [selectedStudentData, setSelectedStudentData] = useState(null);

//   const fetchStudentData = async (seatId) => {
//     // Replace 'your_api_endpoint' with the actual API endpoint
//     const apiEndpoint = `${base_url}/${seatId}`;
    
//     try {
//       const response = await fetch(apiEndpoint);
//       const data = await response.json();

//       setSelectedStudentData(data);
//     } catch (error) {
//       console.error('Error fetching student data:', error);
//     }
//   };

//   const handleSeatClick = (seatId) => {
//     setSelectedSeat(seatId);
//     fetchStudentData(seatId);
//   };

//   return (
//     <>
//       <div className="floor-container">
//         {[...Array(44)].map((_, index) => {
//           const seatId = `A${index + 1}`;

//           return (
//             <div
//               key={seatId}
//               className="seat"
//               style={{
//                 backgroundColor: props.mode === 'light' ? '#d4d6d0' : '#c1c2c0',
//               }}
//               onClick={() => handleSeatClick(seatId)}
//             >
//               {selectedSeat === seatId && (
//                 <div className="tooltip">
//                   <div className="tooltiptext">
//                     {selectedStudentData ? (
//                       <>
//                         <p>Name: {selectedStudentData.name}</p>
//                         {/* Add other information as needed */}
//                       </>
//                     ) : (
//                       <p>Loading student data...</p>
//                     )}
//                   </div>
//                 </div>
//               )}
//             </div>
//           );
//         })}
//       </div>
//     </>
//   );
// }