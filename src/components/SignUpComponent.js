import { render } from "@testing-library/react";
import React, { Component } from "react";
import {
    Button,
    Card,
    Form,
    FormGroup,
    Label,
    Input,
    CustomInput,
    FormText,
} from "reactstrap";
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
                            <Button className="subut btn-lg bg-primary">
                                Tutor
                            </Button>
                        </div>
                        <div className="col-6 d-flex pe-md-5 justify-content-center">
                            <Button className="subut btn-lg bg-primary">
                                Student
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const SkillOptions = () => {
    return (
        <>
            <option value="">Select</option>
            <option value="React">React</option>
            <option value="Javascript">Javascript</option>
            <option value="Angular">Angular</option>
            <option value="C++">C++</option>
            <option value="Python">Python</option>
            <option value="CSS">CSS</option>
            <option value="HTML">HTML</option>
            <option value="C">C</option>
            <option value="Java">Java</option>
            <option value="PHP">PHP</option>
            <option value="SQL">SQL</option>
        </>
    );
};

const TutorSignUp = () => {
    return (
        <div className="container mt-2">
            <div className="row">
                <div className="col-8 m-auto mt-5">
                    <h5 className="text-center fs-2 text-decoration-underline mb-5">
                        Tutor Sign Up
                    </h5>
                    <Form
                        onSubmit={(event) => {
                            alert("Application Submitted");
                            event.preventDefault();
                        }}
                    >
                        <FormGroup className="mb-2 col-6 pe-1 pe-md-3 d-inline-block">
                            <Label htmlFor="first">First Name</Label>
                            <Input
                                type="text"
                                id="first"
                                name="first"
                                placeholder="First Name"
                                required
                            />
                        </FormGroup>
                        <FormGroup className="mb-2 col-6 ps-1 ps-md-3 d-inline-block">
                            <Label htmlFor="last">Last Name</Label>
                            <Input
                                type="text"
                                id="last"
                                name="last"
                                placeholder="Last Name"
                                required
                            />
                        </FormGroup>
                        <FormGroup className="mb-2">
                            <Label htmlFor="phone">Phone Number</Label>
                            <Input
                                type="telnum"
                                id="phone"
                                name="phone"
                                placeholder="Phone Number"
                                required
                            />
                        </FormGroup>
                        <FormGroup className="mb-2 d-lg-inline-block pe-lg-3 col-lg-6">
                            <Label for="email">Email Address</Label>
                            <Input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Email Address"
                                required
                            />
                        </FormGroup>
                        <FormGroup className="mb-2 d-lg-inline-block ps-lg-3 col-lg-6">
                            <Label for="password">Password</Label>
                            <Input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Password"
                                required
                            />
                        </FormGroup>
                        <FormGroup className="mb-2 col-md-4 pe-md-2 d-md-inline-block">
                            <Label for="languageSelect">Skill 1</Label>
                            <CustomInput
                                className="col-12"
                                type="select"
                                name="select"
                                id="languageSelect"
                            >
                                {SkillOptions()}
                            </CustomInput>
                        </FormGroup>
                        <FormGroup className="mb-2 col-md-4 pe-md-2 d-md-inline-block">
                            <Label for="languageSelect">Skill 2</Label>
                            <CustomInput
                                className="col-12"
                                type="select"
                                name="select"
                                id="languageSelect"
                            >
                                {SkillOptions()}
                            </CustomInput>
                        </FormGroup>
                        <FormGroup className="mb-2 col-md-4 d-md-inline-block">
                            <Label for="languageSelect">Skill 3</Label>
                            <CustomInput
                                className="col-12"
                                type="select"
                                name="select"
                                id="languageSelect"
                            >
                                {SkillOptions()}
                            </CustomInput>
                        </FormGroup>
                        <FormGroup className="mb-3 mb-md-2 mt-3">
                            <Input
                                className="col-12 d-flex"
                                type="file"
                                name="profilepic"
                                id="profilepic"
                            />
                            <FormText color="muted" className="col-12 d-flex">
                                Upload a profile picture.
                            </FormText>
                        </FormGroup>
                        <Button
                            type="submit"
                            value="submit"
                            className="bg-primary m-auto d-flex"
                        >
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    );
};

const StudentSignUp = () => {
    return (
        <div className="container mt-2">
            <div className="row">
                <div className="col-8 m-auto mt-5">
                    <h5 className="text-center fs-2 text-decoration-underline mb-5">
                        Student Sign Up
                    </h5>
                    <Form
                        onSubmit={(event) => {
                            alert("Application Submitted");
                            event.preventDefault();
                        }}
                    >
                        <FormGroup className="mb-2 col-6 pe-1 pe-md-3 d-inline-block">
                            <Label htmlFor="first">First Name</Label>
                            <Input
                                type="text"
                                id="first"
                                name="first"
                                placeholder="First Name"
                                required
                            />
                        </FormGroup>
                        <FormGroup className="mb-2 col-6 ps-1 ps-md-3 d-inline-block">
                            <Label htmlFor="last">Last Name</Label>
                            <Input
                                type="text"
                                id="last"
                                name="last"
                                placeholder="Last Name"
                                required
                            />
                        </FormGroup>
                        <FormGroup className="mb-2">
                            <Label htmlFor="phone">Phone Number</Label>
                            <Input
                                type="telnum"
                                id="phone"
                                name="phone"
                                placeholder="Phone Number"
                                required
                            />
                        </FormGroup>
                        <FormGroup className="mb-2 d-lg-inline-block pe-lg-3 col-lg-6">
                            <Label for="email">Email Address</Label>
                            <Input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Email Address"
                                required
                            />
                        </FormGroup>
                        <FormGroup className="mb-2 d-lg-inline-block ps-lg-3 col-lg-6">
                            <Label for="password">Password</Label>
                            <Input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Password"
                                required
                            />
                        </FormGroup>
                        <FormGroup className="mb-3 mb-md-2 mt-3">
                            <Input
                                className="col-12 d-flex"
                                type="file"
                                name="profilepic"
                                id="profilepic"
                            />
                            <FormText color="muted" className="col-12 d-flex">
                                Upload a profile picture.
                            </FormText>
                        </FormGroup>
                        <Button
                            type="submit"
                            value="submit"
                            className="bg-primary m-auto d-flex"
                        >
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    );
};

const SignUp = () => {};

// I will need state somewhere to tell if button has been pressed I think

export default TutorSignUp;
