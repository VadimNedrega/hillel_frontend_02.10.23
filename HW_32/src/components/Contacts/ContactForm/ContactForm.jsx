import React, { Component } from "react";

export class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            phone: "",
        };
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };

    handleSubmit = (e) => {
        e.preventDefault();

        const { firstName, lastName, phone } = this.state;
        const newContact = {
            firstName,
            lastName,
            phone,
        };

        this.props.onAddContact(newContact);

        this.setState({
            firstName: "",
            lastName: "",
            phone: "",
        });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    First Name:
                    <input
                        type="text"
                        name="firstName"
                        value={this.state.firstName}
                        onChange={this.handleChange}
                    />
                </label>
                <label>
                    Last Name:
                    <input
                        type="text"
                        name="lastName"
                        value={this.state.lastName}
                        onChange={this.handleChange}
                    />
                </label>
                <label>
                    Phone:
                    <input
                        type="text"
                        name="phone"
                        value={this.state.phone}
                        onChange={this.handleChange}
                    />
                </label>
                <button type="submit">Add Contact</button>
            </form>
        );
    }
}