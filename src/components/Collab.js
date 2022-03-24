import React, { useState } from 'react'

import { validateEmail } from '../utils/helpers'


// Create state variables for the fields in the form
// We are also setting their initial values to an empty string
const [email, setEmail] = useState('');
const [collabMessage, setCollabMessage] = useState('');
const [errorMessage, setErrorMessage] = useState('');


const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;  
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === email) {
        setEmail(inputValue)
    } else if (inputType === collabMessage) {
        setCollabMessage(inputValue)
    }
}

const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();
    
    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email)) {
        setErrorMessage('Email is invalid! Please use an valid email so we can collaborate.');
        // We want to exit out of this code block if something is wrong so that the user can correct it
        return;
    }

    alert(`Hello ${email}`);
    
    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setEmail('');
    setCollabMessage('')
}
    
export default class Collab {
    render() {
        return(
            <div className="collab-page">
                <h2>Collaborators Welcome</h2>
                <p>
                    As an active programmer, I am always open to new ideas and projects that will fix a real-world issue while also testing and enhancing my knowledge of coding.
                    Whether you are a programmer as well or a web user that wants to submit an idea or problem that needs a solution, please fill out the form below
                    and submit it to me. I will reach out to everyone on a first come, first serve basis. I look forward to working with you all. Happy Coding!
                </p>
                <form className="collab-form">
                    <input 
                        value={email}
                        name="email"
                        onChange={handleInputChange}
                        type="email"
                        placeholders="yourEmail@gmail.com"
                    />
                    <input
                        value={collabMessage}
                        name="collabMessage"
                        onChange={handleInputChange}
                        type="text"
                        placeholder="Ideas for solving go here!"
                    />
                    <button type="button" onClick={handleFormSubmit}>Submit</button>
                </form> 
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
            </div>
        
        )
    }
}
