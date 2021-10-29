import React, { Component } from "react";
import TopNav from "./NavbarComponent";
import TutorCard from "./TutorCardComponent";
import Header from "./HeaderComponent";
import OptionSelect from "./SignUpComponent";
import TutorSignUp from "./TutorSignUpComponent";
import StudentSignUp from "./StudentSignUpComponent";
import { Switch, Route, Redirect } from "react-router-dom";

class Main extends Component {
    render() {
        return (
            <>
                <TopNav />

                {/* <Header />
                <TutorCard /> */}
                <Switch>
                    <Route
                        path="/home"
                        component={() => (
                            <>
                                <Header />
                                <TutorCard />
                            </>
                        )}
                    />
                    <Route path="/signup" component={() => <OptionSelect />} />
                    <Route
                        path="/tutorsignup"
                        component={() => <TutorSignUp />}
                    />
                    <Route
                        path="/studentsignup"
                        component={() => <StudentSignUp />}
                    />
                    <Redirect to="/home" />
                </Switch>
            </>
        );
    }
}

export default Main;
