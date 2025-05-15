// import React, { useEffect, useState } from 'react'
// import Students from './Students';
// import StdFormPopup from './Popups/StdFormPopup';
// import StdUpdatePopup from './Popups/StdUpdatePopup';
// import { Link } from 'react-router-dom';
// export default function AllStudents(props) {
//     const [currentPage, setCurrentPage] = useState(1);
//     const [itemsPerPage, setItemsPerPage] = useState(10); // Number of items to display per page

    
//     const indexOfLastItem = currentPage * itemsPerPage;
//     // Calculate index of the first item on the current page
//     const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//     // Get current items to display
//     const currentStudents = updatedStudents.slice(indexOfFirstItem, indexOfLastItem);

//     // Change page
//     const paginate = (pageNumber) => setCurrentPage(pageNumber);
//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await axios.get('https://your-api-url/students');
//                 setStudents(response.data);
//                 setLoading(false);
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//             }
//         };

//         fetchData();
//     }, []);

//     const noStdStyle = {
//         fontSize: '20px',
//         display: "flex",
//         justifyContent: 'center'
//     }
//     const allstd = {
//         boxSizing: "border-box",
//         // padding: "1rem 1rem",
//         display: "flex",
//         flexWrap: "wrap",
//         alignItems: "center",
//         justifyContent: "space-evenly",
//         position: "relative",
//         overflow: "auto",
//         marginBottom: '3rem'
//     }
//     const Btn = {
//         width: '4rem',
//         position: 'fixed',
//         bottom: '4rem',
//         right: '1rem',
//         zIndex: '9',
//         borderRadius: '50%',
//         fontSize: '2rem',
//     }


//     return (
//         <div style={allstd}>
//             {/* <StdFormPopup id="form" head="Add" mode={props.mode} /> */}


//             <button type="button" style={Btn} className=" float-Start btn   btn-secondary text-light" >
//                 <Link className="nav-link" to="/StudentForm"> <i className="fa-solid fa-plus"></i></Link>
//             </button>


//             {/* {
//                 updatedStudents.length > 0 ?
//                     updatedStudents.map((item) =>
//                         <Students key={item.id} std={item} mode={props.mode}/>)
//                     : <div style={noStdStyle}>No Student Found...</div>
//             } */}

//             {currentStudents.length > 0 ? (
//                 currentStudents.map((item) => <Students key={item.id} std={item} mode={props.mode} />)
//             ) : (
//                 <div style={noStdStyle}>No Student Found...</div>
//             )}


//             {/* pagination */}

//             <nav>
//                 <ul className="pagination justify-content-center">
//                     {Array.from({ length: Math.ceil(updatedStudents.length / itemsPerPage) }).map((_, index) => (
//                         <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
//                             <button onClick={() => paginate(index + 1)} className="page-link">
//                                 {index + 1}
//                             </button>
//                         </li>
//                     ))}
//                 </ul>
//             </nav>


//         </div>
//     );
// }

import React, { useEffect, useState } from 'react';
import axios from 'axios';

import base_url from '../api/myapi';
import Students from './Students';
import StdFormPopup from './Popups/StdFormPopup';
import StdUpdatePopup from './Popups/StdUpdatePopup';
import { Link } from 'react-router-dom';

export default function AllStudents(props) {
    const [students, setStudents] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${base_url}/Student`);
                console.log('API response:', response.data);
                // alert("data")
                setStudents(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };
    
        fetchData();
    }, []);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentStudents = students.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const noStdStyle = {
        fontSize: '20px',
        display: 'flex',
        justifyContent: 'center'
    };

    const allstd = {
        boxSizing: 'border-box',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        position: 'relative',
        overflow: 'auto',
        marginBottom: '3rem'
    };

    const Btn = {
        width: '4rem',
        position: 'fixed',
        bottom: '4rem',
        right: '1rem',
        zIndex: '9',
        borderRadius: '50%',
        fontSize: '2rem'
    };

    return (
        <div style={allstd}>
            <button type="button" style={Btn} className="float-start btn btn-secondary text-light">
                <Link className="nav-link" to="/StudentForm">
                    <i className="fa-solid fa-plus"></i>
                </Link>
            </button>

            {loading ? (
                <div>Loading...</div>
            ) : (
                <>
                    {currentStudents.length > 0 ? (
                        currentStudents.map((item) => <Students key={item.id} std={item} mode={props.mode} />)
                    ) : (
                        <div style={noStdStyle}>No Student Found...</div>
                    )}
                    <nav>
                        <ul className="pagination justify-content-center">
                            {Array.from({ length: Math.ceil(students.length / itemsPerPage) }).map((_, index) => (
                                <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                                    <button onClick={() => paginate(index + 1)} className="page-link">
                                        {index + 1}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </>
            )}
        </div>
    );
}
