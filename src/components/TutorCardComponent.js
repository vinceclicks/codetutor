import React, { Component } from "react";
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button,
} from "reactstrap";
import ratings from "../shared/ratings.json";

class FetchRandomUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            people: [],
        };
    }

    async componentDidMount() {
        const url = "https://randomuser.me/api/?results=60";
        const response = await fetch(url);
        const data = await response.json();
        let merged = [];
        for (var i = 0; i < ratings.length; i++) {
            merged.push({ ...data.results[i], ...ratings[i] });
        }
        this.setState({ people: merged, loading: false });
        console.log(this.state.people);
    }

    render() {
        if (this.state.loading) {
            return <div>loading...</div>;
        }
        if (!this.state.people.length) {
            return <div>Tutor data not found.</div>;
        }
        var ski = "";
        const skills = (person) => {
            if (person.codeSkill.length < 2) {
                ski = "Skills: " + person.codeSkill;
                return ski;
            }
            if (person.codeSkill.length === 2) {
                ski =
                    "Skills: " +
                    person.codeSkill[0] +
                    ", " +
                    person.codeSkill[1];
                return ski;
            }
            if (person.codeSkill.length === 3) {
                ski =
                    "Skills: " +
                    person.codeSkill[0] +
                    ", " +
                    person.codeSkill[1] +
                    ", " +
                    person.codeSkill[2];
                return ski;
            } else {
                ski = "Skills: " + person.codeSkill;
                return ski;
            }
        };

        const stars = (rating) => {
            if (rating == 1) {
                return (
                    <>
                        <i className="fa fa-star"></i>
                        <i class="fa fa-star-o" aria-hidden="true"></i>
                        <i class="fa fa-star-o" aria-hidden="true"></i>
                        <i class="fa fa-star-o" aria-hidden="true"></i>
                        <i class="fa fa-star-o" aria-hidden="true"></i>
                    </>
                );
            }
            if (rating == 2) {
                return (
                    <>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i class="fa fa-star-o" aria-hidden="true"></i>
                        <i class="fa fa-star-o" aria-hidden="true"></i>
                        <i class="fa fa-star-o" aria-hidden="true"></i>
                    </>
                );
            }
            if (rating == 3) {
                return (
                    <>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i class="fa fa-star-o" aria-hidden="true"></i>
                        <i class="fa fa-star-o" aria-hidden="true"></i>
                    </>
                );
            }
            if (rating == 4) {
                return (
                    <>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i class="fa fa-star-o" aria-hidden="true"></i>
                    </>
                );
            }
            if (rating == 5) {
                return (
                    <>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                    </>
                );
            }
        };

        return (
            <div className="container">
                <div className="row">
                    {this.state.people.map((person, index) => (
                        <div
                            key={person.login.uuid}
                            className="mt-4 col-12 col-sm-6 col-md-4 col-lg-3"
                        >
                            <Card>
                                <CardImg
                                    top
                                    width="100%"
                                    src={person.picture.large}
                                    alt="Tutor Image"
                                />
                                <CardBody>
                                    <CardTitle tag="h5">
                                        {person.name.first +
                                            " " +
                                            person.name.last}
                                    </CardTitle>
                                    <CardSubtitle
                                        tag="h6"
                                        className="mb-2 text-muted"
                                    >
                                        {stars(person.rating)} {person.rating}(
                                        {person.ratings})
                                    </CardSubtitle>
                                    <CardText>{skills(person)}</CardText>
                                    <Button color="primary">Book</Button>
                                </CardBody>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default FetchRandomUser;
