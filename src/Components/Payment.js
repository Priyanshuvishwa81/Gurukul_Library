import React, { useEffect, useState } from 'react'
import Payments from './Payments'
import axios from 'axios';
import base_url from '../api/myapi';
import { toast } from 'react-toastify';
export default function Payment(props) {



  const [Svalue, setSvalue] = useState({});

  useEffect(() => {
    axios.get(`${base_url}/Payment`).then(
      (Response) => {
        setSvalue(Response.data);
      },
      (error) => {
        console.log("error");
        toast.error("Somting Went Wrong!");


      });


  }, []);


  const updatedStudents = Array.isArray(props.Mystudents) ? props.Mystudents
    : [props.Mystudents];


  const table = {
    width: "100rem"
  }
  const noStdStyle = {
    fontSize: '20px',
    display: "flex",
    justifyContent: 'center'
  }
  const th = {
    width: "8%"
  }
  const Detail = {
    name: "Priyanshu",
    Jan: "Paid",
    Feb: "Paid",
    Mar: "Paid",
    Apr: "Paid",
    May: "Paid",
    Jun: "Not Paid",
    Jul: "",
    Aug: "",
    Sep: "",
    Oct: "",
    Nov: "",
    Dec: "",
  }
  const data = false;




  return (
    <>

      <div style={{ overflowX: 'auto' }}>

        <table className={`table table-${props.mode} table-striped  `} style={table}>
          <thead>
            <tr>
              <th style={th} scope="col">2023</th>
              <th style={th} scope="col">January</th>
              <th style={th} scope="col">February</th>
              <th style={th} scope="col">March</th>
              <th style={th} scope="col">April</th>
              <th style={th} scope="col">May</th>
              <th style={th} scope="col">June</th>
              <th style={th} scope="col">July</th>
              <th style={th} scope="col">August</th>
              <th style={th} scope="col">September</th>
              <th style={th} scope="col">October</th>
              <th style={th} scope="col">November</th>
              <th style={th} scope="col">December</th>

            </tr>
          </thead>

          <tbody>
           


            {
              updatedStudents.map((item) =>
                <Payments key={item.id} mode={props.mode} name={Detail.name} details={item} />)
            }


          </tbody>
        </table>



      </div>



    </>
  );
}
