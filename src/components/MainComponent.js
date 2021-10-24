import React, { Component } from "react";
import TopNav from "./NavbarComponent";
import TutorCard from "./TutorCardComponent";

class Main extends Component {
    render() {
        return (
            <>
                <TopNav />
                <TutorCard />
            </>
        );
    }
}

export default Main;
