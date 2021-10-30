import React, { Component } from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input,
    Button,
} from "reactstrap";
import { Link } from "react-router-dom";

class TopNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false,
            isModalOpen: false,
        };
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen,
        });
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen,
        });
    }

    render() {
        return (
            <div>
                <Navbar className="navbar" light>
                    <NavbarBrand href="/" className="ms-5">
                        <img
                            src="assets/Logocheck.png"
                            height="30"
                            width="24"
                        />{" "}
                        CodeTutor
                    </NavbarBrand>
                    <NavbarToggler
                        onClick={this.toggleNav}
                        className="me-5 navbar-toggle"
                    />
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav navbar>
                            <NavItem className="navlink">
                                <Link
                                    to="/signup"
                                    className="text-decoration-none text-dark"
                                    onClick={this.toggleNav}
                                >
                                    Sign Up
                                </Link>
                            </NavItem>
                            <NavItem className="navlink">
                                <Link
                                    to="/home"
                                    onClick={this.toggleModal}
                                    className="text-dark text-decoration-none"
                                >
                                    Login
                                </Link>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
                <Modal
                    isOpen={this.state.isModalOpen}
                    toggle={this.toggleModal}
                >
                    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                    <ModalBody>
                        <Form onSubmit>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input
                                    type="text"
                                    id="username"
                                    name="username"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input
                                    type="password"
                                    id="password"
                                    name="password"
                                />
                            </FormGroup>
                            <FormGroup check className="my-1">
                                <Label check>
                                    <Input type="checkbox" name="remember" />
                                    Remember me
                                </Label>
                            </FormGroup>
                            <Button
                                type="submit"
                                value="submit"
                                className="bg-primary"
                            >
                                Login
                            </Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

export default TopNav;
