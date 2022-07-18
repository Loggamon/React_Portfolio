import React, { useState } from 'react';

import { validateEmail } from '../../utils/helpers';

export default function Contact() {

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {

        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'email') {
            setEmail(inputValue);
        } else if (inputType === 'name') {
            setName(inputValue);
        } else {
            setMessage(inputValue);
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if(!validateEmail(email)) {
            setErrorMessage('Please enter a valid email');
            return;
        }
        if(!name) {
            setErrorMessage('Please leave a name');
            return;
        }
        if(!message) {
            setErrorMessage('Please leave a response');
            return;
        }
        alert(`Thank you, ${name}!`)

        setEmail('');
        setName('');
        setMessage('');
    };

    return (
        <div>
            <h1>Contact Me...</h1>
            <p>
                This is where I will be linking my contact form.
            </p>
            <form>
                <input
                    value={name}
                    name="name"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="name"
                />
                <input
                    value={email}
                    name="email"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="email"
                />
                <input
                    value={message}
                    name="text"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="message"
                />
                <button type='button' onClick={handleFormSubmit}>Submit</button>
            </form>
            {errorMessage && (
                <div>
                    <p>{errorMessage}</p>
                </div>
            )}
        </div>
    );
}