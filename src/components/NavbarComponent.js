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
                        CodeTutor
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggleNav} className="me-5" />
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink href="/components/">
                                    Components
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://github.com/reactstrap/reactstrap">
                                    GitHub
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
