import React, { Component } from "react";
import { ContactForm } from "./ContactForm";

export class Contacts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: [],
            isFormVisible: false
        };
    }

    componentDidMount() {
        const getContacts = async () => {
            const resp = await fetch("https://jsonplaceholder.typicode.com/users");
            const data = await resp.json();
            console.log(data)

            this.setState({ contacts: data });
        };


        getContacts().catch(e => console.error(e));
    }

    toggleFormVisibility = () => {
        // Переключаем видимость формы
        this.setState((prevState) => ({
            isFormVisible: !prevState.isFormVisible,
        }));
    };

    handleAddContact = (newContact) => {
        this.setState({
            contacts: [...this.state.contacts, newContact],
            isFormVisible: false,
        });
    };

    handleDeleteContact = (index) => {
        const updatedContacts = [...this.state.contacts];
        updatedContacts.splice(index, 1);
        this.setState({
            contacts: updatedContacts,
        });
    };

    render() {
        return (
            <div>
                <h1>Contacts</h1>
                <table>
                    <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Phone</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.contacts.map((contact, index) => {
                        let [firstName, lastName] = "";

                        if (contact.name != null){
                            [firstName, lastName] = contact.name.split(" ");
                        }

                        return (
                            <tr key={index}>
                                <td>{contact.firstName != null ? contact.firstName : firstName}</td>
                                <td>{contact.lastName != null ? contact.lastName : lastName}</td>
                                <td>{contact.phone}</td>
                                <td>
                                    <button onClick={() => this.handleDeleteContact(index)}>Delete</button>
                                </td>
                            </tr>
                        );
                    })}
                    </tbody>
                </table>
                <button onClick={this.toggleFormVisibility}>
                    {this.state.isFormVisible ? "Cancel" : "Add Contact"}
                </button>
                {this.state.isFormVisible && (
                    <ContactForm onAddContact={this.handleAddContact} onCancel={this.toggleFormVisibility} />
                )}
            </div>
        );
    }
}