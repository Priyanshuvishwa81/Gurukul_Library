import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import base_url from "../api/myapi";
import axios from "axios";
import { toast } from "react-toastify";

function YearChart(props) {


    const [InfoVal, setInfoVal] = useState([]);

    useEffect(() => {
        axios.get(`${base_url}/AllInfo`).then(
            (Response) => {
                if (Response.data != null) {
                    setInfoVal(Response.data);
                }
            },
            (error) => {
                console.log("error");
                toast.error("Somting Went Wrong!");
            });


    }, []);


    const data = {

        series: [
            {
                name: "",
                data: [],
            },
            {
                name: "",
                data: [],
            }
        ],
        options: {
            chart: {
                height: 300,
                type: "bar",
                zoom: {
                    enabled: false,
                },
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                curve: "straight",
            },
            title: {
                text: "Students chart ",
                align: "left",
            },
            grid: {
                row: {
                    colors: ["#f3f3f3", "transparent"],
                    opacity: 0.5,
                },
            },
            xaxis: {
                categories: [
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                    "Sep",
                    "Oct",
                    "Nov",
                    "Dec"
                ],
            },
        },
    };



    InfoVal.forEach(element => {
      if (props.id==="chart1") {
        data.options.title.text = "Students";
        data.series[0].name = "Added Student";
        data.series[0].data.push(element.addedStudent);
        data.series[1].name = "Deleted Student";
        data.series[1].data.push(element.deletedStudent);
      }
      else if (props.id==="chart2") {
        data.options.title.text = "Seats";
        data.series[0].name = "Fixed Seats";
        data.series[0].data.push(element.fixedSeats);
        data.series[1].name = "Not Fixd Feats";
        data.series[1].data.push(element.unfixedSeats);
      }
      else if (props.id==="chart3") {
        data.options.title.text = "Payment";
        data.series[0].name = "Paid Fees";
        data.series[0].data.push(element.feesPaid);
        data.series[1].name = "Not Paid";
        data.series[1].data.push(element.notPaid);
      }
    });

    return (
        <div className="modal fade" id={props.id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered ">
                <div className={`modal-content bg-${props.mode === "light" ? "light" : "dark-subtle"} text-${props.mode === "light" ? "dark" : "dark"}`}>

                    <div className="modal-body p-0">

                        <div>
                            {/* <Chart
                                options={data.options}
                                series={data.series}
                                type="bar"
                                height={350}
                            /> */}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
export default YearChart;

