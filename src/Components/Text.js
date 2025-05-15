<div className="modal fade" id={props.id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-fullscreen">
                    <div className={`modal-content bg-${props.mode} text-${props.mode}`}>
                        <div className="modal-header">
                            <h5 className={`modal-title text-${props.mode === "light" ? "dark" : "light"}`} id="exampleModalLabel">
                                {props.head} Student<i className={`fa-solid text-primary fa-user-plus me-3`}></i>
                            </h5>
                            <button type="button" className={`btn-close btn-close-${props.mode === "light" ? "black" : "white"}`} data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form className="row g-3 needs-validation" action="saveme"
                                method="post" >
                                <div className="col-md-6">
                                    <label htmlFor="inputEmail4" className={`form-label text-${props.mode === "light" ? "dark" : "light"}`}>Name</label>
                                    <input type="text" name="studentName" style={stl} className="form-control" required />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="inputPassword4" className={`form-label text-${props.mode === "light" ? "dark" : "light"}`}>Adhar
                                        No</label> <input type="number" style={stl} className="form-control" name="studentAdhar" />
                                </div>
                                <div className="col-12">
                                    <label htmlFor="inputAddress" name="studentAddress"
                                        className={`form-label text-${props.mode === "light" ? "dark" : "light"}`}>Address</label> <input
                                        type="text" name="studentAddress" style={stl} className="form-control" required />
                                </div>
                                <div className="col-md-5">
                                    <label htmlFor="inputAddress2" className={`form-label text-${props.mode === "light" ? "dark" : "light"}`}>Phone
                                        No</label> <input type="number" style={stl} name="phoneNumber" className="form-control"
                                            required />
                                </div>

                                <div className="col-md-7">
                                    <label htmlFor="inputAddress2" className={`form-label text-${props.mode === "light" ? "dark" : "light"}`}>Email
                                        ID</label>
                                    <div className="input-group mb-3">
                                        <input type="text" className="form-control" style={stl} name="emailId" /> <span
                                            className="input-group-text">@gmail.com</span>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <label htmlFor="inputAddress2" id="label"
                                        className={`form-label text-${props.mode === "light" ? "dark" : "light"}`}>Seat Status </label>
                                    <select className="form-select" style={stl} name="Plan">
                                        <option value="Fix" >Fix</option>
                                        <option value="Not_Fix">Not Fix</option>
                                    </select>
                                </div>
                                <div className="col-md-4">
                                    <label htmlFor="inputAddress2" className={`form-label text-${props.mode === "light" ? "dark" : "light"}`}>Timing</label>
                                    <div className="input-group mb-3">
                                        <input type="time" name="timingFrom" style={stl} className="form-control" />
                                        <span className="input-group-text">To</span> <input type="time"
                                            name="timingTo" style={stl} className="form-control" />
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <label htmlFor="inputAddress2" className={`form-label text-${props.mode === "light" ? "dark" : "light"}`}>Seat</label>
                                    <div className="input-group mb-3">
                                        <input type="text" name="Seat" style={stl} className="form-control" />
                                        {/* <button className="btn btn-outline-primary" */}
                                        {/* type="button" id="button-addon2"> */}

                                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#seats">
                                            seat
                                        </button>

                                        {/* </button> */}

                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <label htmlFor="inputAddress2" className={`form-label text-${props.mode === "light" ? "dark" : "light"}`}>Rupees</label>
                                    <div className="input-group mb-3">
                                        <span className="input-group-text">&#8377;</span> <input type="text"
                                            className="form-control" style={stl} name="monthlyRupees" required />
                                        <select defaultValue="1" style={stl} className="form-select" >
                                            <option value="1" >Paid(This Month)</option>
                                            <option value="2">Not Pay</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="col-12">
                                    <button style={{ float: "right", margin: "10px" }} type="submit" className="btn btn-primary">
                                        {props.head}</button>

                                    <button style={{ float: "right", margin: "10px" }} type="reset"
                                        className="btn btn-danger">Reset</button>
                                </div>
                            </form>

                        </div>


                    </div>

                </div>
            </div>