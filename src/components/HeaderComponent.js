import React, { useState } from "react";
import { Jumbotron } from "reactstrap";

const Header = () => {
    return (
        <Jumbotron>
            <div className="container mt-5 mb-5">
                <div className="row row-header justify-content-evenly">
                    <div className="col-12 order-last order-md-first col-md-6 d-flex">
                        <div className="row">
                            <div className="col-12 mt-5 justify-content-center justify-content-md-start d-flex align-items-end">
                                <h1>CodeTutor</h1>
                            </div>
                            <div className="col-12 text-center text-md-start">
                                <p>
                                    The place to go when you're struggling to
                                    code. CodeTutor has tutors available that
                                    are highly knowledgeable in a variety of
                                    coding languages and frameworks. Scroll down
                                    to book a session with a tutor today!
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 order-first order-md-last col-md-6 d-flex justify-content-center">
                        <img
                            src="https://github.com/vinceclicks/codetutor/blob/gh-pages/assets/Logo.png?raw=true"
                            alt="Logo"
                        />
                    </div>
                </div>
            </div>
        </Jumbotron>
    );
};

export default Header;
