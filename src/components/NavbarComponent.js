import React, { Component } from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from "reactstrap";
import { Link } from "react-router-dom";

class TopNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false,
        };
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen,
        });
    }

    render() {
        return (
            <div>
                <Navbar color="warning" light>
                    <NavbarBrand href="/" className="ms-5">
                        <img
                            src="assets/Logocheck.png"
                            height="30"
                            width="24"
                        />{" "}
                        CodeTutor
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggleNav} className="me-5" />
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav navbar>
                            <NavItem>
                                <Link to="/signup" onClick={this.toggleNav}>
                                    Sign Up
                                </Link>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://github.com/reactstrap/reactstrap">
                                    Login
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default TopNav;
