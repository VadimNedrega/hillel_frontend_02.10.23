import React, { useState, useEffect } from "react";
import { ContactForm } from "./ContactForm";

export function Contacts() {
    const [contacts, setContacts] = useState([]);
    const [isFormVisible, setIsFormVisible] = useState(false);

    useEffect(() => {
        const getContacts = async () => {
            try {
                const resp = await fetch("https://jsonplaceholder.typicode.com/users");
                const data = await resp.json();
                setContacts(data);
            } catch (error) {
                console.error("Error loading contacts:", error);
            }
        };
        getContacts().catch(e => console.error(e));
    }, []);

    const toggleFormVisibility = () => {
        setIsFormVisible((prevIsFormVisible) => !prevIsFormVisible);
    };

    const handleAddContact = (newContact) => {
        setContacts((prevContacts) => [...prevContacts, newContact]);
        setIsFormVisible(false);
    };

    const handleDeleteContact = (index) => {
        const updatedContacts = [...contacts];
        updatedContacts.splice(index, 1);
        setContacts(updatedContacts);
    };

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
                {contacts.map((contact, index) => {
                    let [firstName, lastName] = "";

                    if (contact.name != null) {
                        [firstName, lastName] = contact.name.split(" ");
                    }

                    return (
                        <tr key={index}>
                            <td>{contact.firstName != null ? contact.firstName : firstName}</td>
                            <td>{contact.lastName != null ? contact.lastName : lastName}</td>
                            <td>{contact.phone}</td>
                            <td>
                                <button onClick={() => handleDeleteContact(index)}>Delete</button>
                            </td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
            <button onClick={toggleFormVisibility}>
                {isFormVisible ? "Cancel" : "Add Contact"}
            </button>
            {isFormVisible && (
                <ContactForm
                    onAddContact={handleAddContact}
                    onCancel={toggleFormVisibility}
                />
            )}
        </div>
    );
}