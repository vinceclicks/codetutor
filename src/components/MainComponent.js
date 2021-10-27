import React, { Component } from "react";
import TopNav from "./NavbarComponent";
import TutorCard from "./TutorCardComponent";
import Header from "./HeaderComponent";

class Main extends Component {
    render() {
        return (
            <>
                <TopNav />
                <Header />
                <TutorCard />
            </>
        );
    }
}

export default Main;
