import { render } from "@testing-library/react";
import React from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
//lets add react animation slide left here

const OptionSelect = () => {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-12 d-flexjustify-content-center mt-4">
                    <h1 class="fw-bold text-center text-decoration-underline">
                        Sign Up
                    </h1>
                </div>
                <div className="col-12 d-flex fs-4 justify-content-center mt-5">
                    <p>I am a...</p>
                </div>
                <div className="container mt-1">
                    <div className="row">
                        <div className="col-6 d-flex ps-md-5 border-end border-2 tall justify-content-center">
                            <Link to="/tutorsignup">
                                <Button className="subut btn-lg bg-primary">
                                    Tutor
                                </Button>
                            </Link>
                        </div>
                        <div className="col-6 d-flex pe-md-5 justify-content-center">
                            <Link to="/studentsignup">
                                <Button className="subut btn-lg bg-primary">
                                    Student
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OptionSelect;
