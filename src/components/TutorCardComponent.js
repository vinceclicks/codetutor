import React, { Component } from "react";
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input,
    CustomInput,
    ButtonDropdown,
    ButtonGroup,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from "reactstrap";
import ratings from "../shared/ratings.json";
import StarComponent from "./StarComponent";
import SkillsComponent from "./SkillsComponent";

class FetchRandomUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            people: [],
            original: [],
            selected: "",
            isModalOpen: false,
            dropdown1Open: false,
            dropdown2Open: false,
            dropdown3Open: false,
        };
        this.selectedTutor = this.selectedTutor.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.sortByReviews = this.sortByReviews.bind(this);
        this.sortByRating = this.sortByRating.bind(this);
    }

    selectedTutor(person) {
        this.setState({
            selected: person,
        });
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen,
        });
    }

    sortByRating(people) {
        const newarr = people.slice();
        const sortedrating = newarr.sort((a, b) => b.rating - a.rating);
        this.setState({ people: sortedrating });
    }

    sortByReviews(people) {
        const newarr2 = people.slice();
        const sortedreviews = newarr2.sort((a, b) => b.ratings - a.ratings);
        this.setState({ people: sortedreviews });
    }

    async componentDidMount() {
        const url = "https://randomuser.me/api/?results=60&seed=who";
        const response = await fetch(url);
        const data = await response.json();
        const merged = [];
        //for loop that pushes every indexed item together into merged from the two object array data sets
        for (var i = 0; i < ratings.length; i++) {
            merged.push({ ...data.results[i], ...ratings[i] });
        }
        //changes state to stop showing loading and to change the state of people to the merged data set
        this.setState({ people: merged, loading: false });
        this.setState({ original: merged.slice() });
    }

    render() {
        if (this.state.loading) {
            return <div>loading...</div>;
        }
        if (!this.state.people.length) {
            return (
                <div className="d-flex justify-content-center">
                    Tutor data not found.{"  "}
                    <Button
                        onClick={() => {
                            this.setState({
                                people: this.state.original,
                            });
                        }}
                    >
                        Reset
                    </Button>
                </div>
            );
        }

        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="col-12 mt-auto justify-content-center justify-content-md-start align-items-center d-flex">
                            <ButtonGroup>
                                <ButtonDropdown
                                    isOpen={this.state.dropdown1Open}
                                    toggle={() => {
                                        this.setState({
                                            dropdown1Open:
                                                !this.state.dropdown1Open,
                                        });
                                    }}
                                >
                                    <DropdownToggle
                                        caret
                                        outline
                                        color="primary"
                                    >
                                        Sort
                                    </DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem header>
                                            Sort by:
                                        </DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem
                                            onClick={() => {
                                                this.sortByRating(
                                                    this.state.people
                                                );
                                            }}
                                        >
                                            Rating
                                        </DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem
                                            onClick={() => {
                                                this.sortByReviews(
                                                    this.state.people
                                                );
                                            }}
                                        >
                                            # of Reviews
                                        </DropdownItem>
                                    </DropdownMenu>
                                </ButtonDropdown>
                                <ButtonDropdown
                                    isOpen={this.state.dropdown2Open}
                                    toggle={() => {
                                        this.setState({
                                            dropdown2Open:
                                                !this.state.dropdown2Open,
                                        });
                                    }}
                                >
                                    <DropdownToggle
                                        caret
                                        outline
                                        color="primary"
                                    >
                                        Rating
                                    </DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem header>
                                            Filter by rating:
                                        </DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem
                                            onClick={() => {
                                                const five =
                                                    this.state.original.filter(
                                                        (person) =>
                                                            person.rating >= 5
                                                    );
                                                this.setState({ people: five });
                                            }}
                                        >
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem
                                            onClick={() => {
                                                const four =
                                                    this.state.original.filter(
                                                        (person) =>
                                                            person.rating >= 4
                                                    );
                                                this.setState({ people: four });
                                            }}
                                        >
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i> & Up
                                        </DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem
                                            onClick={() => {
                                                const three =
                                                    this.state.original.filter(
                                                        (person) =>
                                                            person.rating >= 3
                                                    );
                                                this.setState({
                                                    people: three,
                                                });
                                            }}
                                        >
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i> & Up
                                        </DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem
                                            onClick={() => {
                                                const two =
                                                    this.state.original.filter(
                                                        (person) =>
                                                            person.rating >= 2
                                                    );
                                                this.setState({ people: two });
                                            }}
                                        >
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i> & Up
                                        </DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem
                                            onClick={() => {
                                                const one =
                                                    this.state.original.filter(
                                                        (person) =>
                                                            person.rating >= 1
                                                    );
                                                this.setState({ people: one });
                                            }}
                                        >
                                            <i className="fa fa-star"></i> & Up
                                        </DropdownItem>
                                    </DropdownMenu>
                                </ButtonDropdown>
                                <ButtonDropdown
                                    isOpen={this.state.dropdown3Open}
                                    toggle={() => {
                                        this.setState({
                                            dropdown3Open:
                                                !this.state.dropdown3Open,
                                        });
                                    }}
                                >
                                    <DropdownToggle
                                        caret
                                        outline
                                        color="primary"
                                    >
                                        Language
                                    </DropdownToggle>
                                    <DropdownMenu
                                        modifiers={{
                                            setMaxHeight: {
                                                enabled: true,
                                                order: 890,
                                                fn: (data) => {
                                                    return {
                                                        ...data,
                                                        styles: {
                                                            ...data.styles,
                                                            overflow: "auto",
                                                            maxHeight: "100px",
                                                        },
                                                    };
                                                },
                                            },
                                        }}
                                    >
                                        <DropdownItem header>
                                            Filter by Language:
                                        </DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem
                                            onClick={() => {
                                                const react =
                                                    this.state.original.filter(
                                                        (person) =>
                                                            person.codeSkill.includes(
                                                                "React"
                                                            )
                                                    );
                                                this.setState({
                                                    people: react,
                                                });
                                            }}
                                        >
                                            React
                                        </DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem
                                            onClick={() => {
                                                const js =
                                                    this.state.original.filter(
                                                        (person) =>
                                                            person.codeSkill.includes(
                                                                "Javascript"
                                                            )
                                                    );
                                                this.setState({
                                                    people: js,
                                                });
                                            }}
                                        >
                                            Javascript
                                        </DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem
                                            onClick={() => {
                                                const ang =
                                                    this.state.original.filter(
                                                        (person) =>
                                                            person.codeSkill.includes(
                                                                "Angular"
                                                            )
                                                    );
                                                this.setState({
                                                    people: ang,
                                                });
                                            }}
                                        >
                                            Angular
                                        </DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem
                                            onClick={() => {
                                                const cplus =
                                                    this.state.original.filter(
                                                        (person) =>
                                                            person.codeSkill.includes(
                                                                "C++"
                                                            )
                                                    );
                                                this.setState({
                                                    people: cplus,
                                                });
                                            }}
                                        >
                                            C++
                                        </DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem
                                            onClick={() => {
                                                const pyth =
                                                    this.state.original.filter(
                                                        (person) =>
                                                            person.codeSkill.includes(
                                                                "Python"
                                                            )
                                                    );
                                                this.setState({
                                                    people: pyth,
                                                });
                                            }}
                                        >
                                            Python
                                        </DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem
                                            onClick={() => {
                                                const css =
                                                    this.state.original.filter(
                                                        (person) =>
                                                            person.codeSkill.includes(
                                                                "CSS"
                                                            )
                                                    );
                                                this.setState({
                                                    people: css,
                                                });
                                            }}
                                        >
                                            CSS
                                        </DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem
                                            onClick={() => {
                                                const html =
                                                    this.state.original.filter(
                                                        (person) =>
                                                            person.codeSkill.includes(
                                                                "HTML"
                                                            )
                                                    );
                                                this.setState({
                                                    people: html,
                                                });
                                            }}
                                        >
                                            HTML
                                        </DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem
                                            onClick={() => {
                                                const c =
                                                    this.state.original.filter(
                                                        (person) =>
                                                            person.codeSkill.includes(
                                                                "C"
                                                            )
                                                    );
                                                this.setState({
                                                    people: c,
                                                });
                                            }}
                                        >
                                            C
                                        </DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem
                                            onClick={() => {
                                                const java =
                                                    this.state.original.filter(
                                                        (person) =>
                                                            person.codeSkill.includes(
                                                                "Java"
                                                            )
                                                    );
                                                this.setState({
                                                    people: java,
                                                });
                                            }}
                                        >
                                            Java
                                        </DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem
                                            onClick={() => {
                                                const php =
                                                    this.state.original.filter(
                                                        (person) =>
                                                            person.codeSkill.includes(
                                                                "PHP"
                                                            )
                                                    );
                                                this.setState({
                                                    people: php,
                                                });
                                            }}
                                        >
                                            PHP
                                        </DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem
                                            onClick={() => {
                                                const sql =
                                                    this.state.original.filter(
                                                        (person) =>
                                                            person.codeSkill.includes(
                                                                "SQL"
                                                            )
                                                    );
                                                this.setState({
                                                    people: sql,
                                                });
                                            }}
                                        >
                                            SQL
                                        </DropdownItem>
                                    </DropdownMenu>
                                </ButtonDropdown>
                                <Button
                                    outline
                                    onClick={() => {
                                        this.setState({
                                            people: this.state.original,
                                        });
                                    }}
                                >
                                    Reset
                                </Button>
                            </ButtonGroup>
                        </div>
                        {this.state.people.map((person) => (
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
                                            {StarComponent(person.rating)}{" "}
                                            {person.rating}({person.ratings})
                                        </CardSubtitle>
                                        <CardText>
                                            {SkillsComponent(person)}
                                        </CardText>
                                        <Button
                                            color="primary"
                                            onClick={() => {
                                                this.toggleModal();
                                                this.selectedTutor(person);
                                            }}
                                        >
                                            Book
                                        </Button>
                                    </CardBody>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
                {Boolean(this.state.isModalOpen) && (
                    <>
                        <Modal
                            isOpen={this.state.isModalOpen}
                            toggle={this.toggleModal}
                        >
                            <ModalHeader toggle={this.toggleModal}>
                                Book {this.state.selected.name.first}{" "}
                                {this.state.selected.name.last}{" "}
                                <img
                                    src="assets/Logocheck.png"
                                    height="30"
                                    width="24"
                                />
                            </ModalHeader>
                            <ModalBody>
                                <Form
                                    onSubmit={(event) => {
                                        alert(
                                            this.state.selected.name.first +
                                                " will be notified and will contact you soon to schedule your session."
                                        );
                                        event.preventDefault();
                                        this.toggleModal();
                                    }}
                                >
                                    <FormGroup className="mb-2">
                                        <Label htmlFor="phone">
                                            Phone Number
                                        </Label>
                                        <Input
                                            type="telnum"
                                            id="phone"
                                            name="phone"
                                            placeholder="Phone Number"
                                            required
                                        />
                                    </FormGroup>
                                    <FormGroup className="mb-2">
                                        <Label for="email">Email</Label>
                                        <Input
                                            type="email"
                                            name="email"
                                            id="email"
                                            placeholder="Email"
                                            required
                                        />
                                    </FormGroup>
                                    <FormGroup className="mb-2">
                                        <Label
                                            classname="col-12"
                                            for="languageSelect"
                                        >
                                            Select Skill
                                        </Label>
                                        <CustomInput
                                            className="col-12"
                                            type="select"
                                            name="select"
                                            id="languageSelect"
                                            required
                                        >
                                            <option value="">Select</option>
                                            {this.state.selected.codeSkill.map(
                                                (skill) => (
                                                    <option>{skill}</option>
                                                )
                                            )}
                                        </CustomInput>
                                    </FormGroup>
                                    <FormGroup className="mb-2">
                                        <Label for="description">
                                            Brief Description
                                        </Label>
                                        <Input
                                            type="textarea"
                                            name="description"
                                            id="description"
                                            required
                                        />
                                    </FormGroup>
                                    <Button
                                        type="submit"
                                        value="submit"
                                        className="bg-primary"
                                    >
                                        Submit
                                    </Button>
                                </Form>
                            </ModalBody>
                        </Modal>
                    </>
                )}
            </>
        );
    }
}

export default FetchRandomUser;

//['React', 'Javascript', 'Angular', 'C++', 'Python', 'CSS', 'HTML', 'C', 'Java', 'PHP', 'SQL']
//need to filter by rating, number of reviews, and skills
