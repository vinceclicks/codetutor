import React, { Component } from 'react'

export default class FilterComponent extends Component {
    render() {
        return (
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
                                            onClick={() => {const sql = this.state.original.filter((person) => person.codeSkill.includes("SQL")
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
        )
    }
}
