import React, { Component } from "react";
import TopNav from "./NavbarComponent";
import TutorCard from "./TutorCardComponent";
import Header from "./HeaderComponent";
import OptionSelect from "./SignUpComponent";

class Main extends Component {
    render() {
        return (
            <>
                <TopNav />
                <OptionSelect />
                {/* <Header />
                <TutorCard /> */}
            </>
        );
    }
}

export default Main;
