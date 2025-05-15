import React from 'react';
import './Floor.css';
export default function Floor2(props) {

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


    return (

        <>
            <div className="SAC1"></div>
            <div className="area">
                <div className="area_top" style={stairs}>
                    <div className="door"></div>
                </div>
                <div className="area_top area_top_update">
                    <div className="area_top">
                        <div className="area_top_left" style={{ float: "left" }}>
                            <div id="A45" style={seats} className="seat_top"></div>
                            <div id="A46" style={seats} className="seat_top"></div>
                            <div id="A47" style={seats} className="seat_top"></div>
                            <div id="A48" style={seats} className="seat_top"></div>
                            <div id="A49" style={seats} className="seat_top"></div>
                        </div>
                        <div className="area_top_left" style={{ float: "right" }}>
                            <div id="A50" style={seats} className="seat_top"></div>
                            <div id="A51" style={seats} className="seat_top"></div>
                            <div id="A52" style={seats} className="seat_top"></div>
                            <div id="A53" style={seats} className="seat_top"></div>
                            <div id="A54" style={seats} className="seat_top"></div>
                        </div>
                    </div>
                    <div className="area_top">
                        <div className="area_top_left" style={{ float: "left" }}>
                            <div id="A55" style={seats} className="seat_top"></div>
                            <div id="A56" style={seats} className="seat_top"></div>
                            <div id="A57" style={seats} className="seat_top"></div>
                            <div id="A58" style={seats} className="seat_top"></div>
                            <div id="A59" style={seats} className="seat_top"></div>
                        </div>
                        <div className="area_top_left" style={{ float: "right" }}>
                            <div id="A60" style={seats} className="seat_top"></div>
                            <div id="A61" style={seats} className="seat_top"></div>
                            <div id="A62" style={seats} className="seat_top"></div>
                            <div id="A63" style={seats} className="seat_top"></div>
                            <div id="A64" style={seats} className="seat_top"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="area">
                <div style={{ width: "100%", height: "25%" }}>
                    <div className="area_bottom_top">
                        <div id="A65"  style={seats} className="Top_bottom"></div>
                        <div id="A66" style={seats} className="Top_bottom"></div>
                        <div id="A67" style={seats} className="Top_bottom"></div>
                        <div id="A68" style={seats} className="Top_bottom"></div>
                    </div>
                </div>
                <div className="area_bottom_bottom">
                    <div id="A69" style={seats} className="Bottom_bottom"></div>
                    <div id="A70" style={seats} className="Bottom_bottom"></div>
                    <div id="A71" style={seats} className="Bottom_bottom"></div>
                    <div id="A72" style={seats} className="Bottom_bottom"></div>
                    <div id="A73" style={seats} className="Bottom_bottom"></div>
                    <div id="A74" style={seats} className="Bottom_bottom"></div>
                    <div id="A75" style={seats} className="Bottom_bottom"></div>
                    <div id="A76" style={seats} className="Bottom_bottom"></div>
                    <div id="A77" style={seats} className="Bottom_bottom"></div>
                    <div id="A78" style={seats} className="Bottom_bottom"></div>
                </div>
            </div>
        </>




    );
}