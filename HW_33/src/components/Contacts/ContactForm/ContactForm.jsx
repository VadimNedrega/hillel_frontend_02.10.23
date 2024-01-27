import React, { useState } from "react";

export function ContactForm({ onAddContact }) {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        phone: "",
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prevFormData) => ({...prevFormData, [name]: value}));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const {firstName, lastName, phone} = formData;
        const newContact = {
            firstName,
            lastName,
            phone,
        };

        onAddContact(newContact);

        setFormData({
            firstName: "",
            lastName: "",
            phone: "",
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                First Name:
                <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                />
            </label>
            <label>
                Last Name:
                <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                />
            </label>
            <label>
                Phone:
                <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                />
            </label>
            <button type="submit">Add Contact</button>
        </form>
    );
}