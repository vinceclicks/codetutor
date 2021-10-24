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
    state = {
        loading: true,
        people: [],
    };

    async componentDidMount() {
        const url = "https://randomuser.me/api/?results=60";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ people: data.results, loading: false });
    }

    render() {
        if (this.state.loading) {
            return <div>loading...</div>;
        }
        if (!this.state.people.length) {
            return <div>Tutor data not found.</div>;
        }

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
                                        Code Tutor (rating)
                                    </CardSubtitle>
                                    <CardText>
                                        Replace this section with skills?
                                    </CardText>
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
