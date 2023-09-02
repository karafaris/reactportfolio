// Import necessary dependencies and styles
import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import './contact.css';
import emailjs from '@emailjs/browser';

// Import a helper function to validate email addresses
import { validateEmail } from '../../utils/helpers';

// Define the ContactForm functional component
function ContactForm() {
  // Create state variables for the form fields, with initial values set to empty strings
  const form = useRef();
  const [username, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Function to handle input changes
  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Update the state based on the input type
    if (inputType === 'username') {
      setName(inputValue);
    } 
    if (inputType === 'email') {
      setEmail(inputValue);
    } 
    if (inputType === 'message') {
      setMessage(inputValue);
    }
  };

  // Function to send an email
  const sendEmail = () => {
    emailjs.sendForm('service_58eeuha', 'template_eaoiirp', form.current, '7moyyXkvrDcFvYmwA')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  // Function to handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Check if the form inputs are valid
    if (!username || !validateEmail(email) || !message) {
      setErrorMessage('Name, Email, or Message is invalid');
      return;
    } else {
      setErrorMessage('Message sent!');
    }

    // Send the email and clear the form inputs
    sendEmail();
    setName('');
    setEmail('');
    setMessage('');
  };

  // Render the contact form
  return (
    <div className='contact-container'>
      <div className='main-title'>
        <h2 className='contact-heading'>Contact Me</h2>
        <p className='text'>Please complete the form below to send me an email</p>
      </div>
      <form ref={form} className="form">
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <input
          className='form-control'
          value={username}
          name="username"
          onChange={handleInputChange}
          type="text"
          placeholder="Name"
        />
        <input
          className='form-control'
          value={email}
          name="email"
          onChange={handleInputChange}
          type="text"
          placeholder="Email"
        />
        <textarea
          className='form-control'
          value={message}
          name="message"
          onChange={handleInputChange}
          type="text"
          placeholder="Message"
        />
        <button className='submit' type="button" onClick={handleFormSubmit}>
          Send<span><FontAwesomeIcon icon={faPaperPlane}/></span>
        </button>
      </form>
    </div>
  );
}

// Export the ContactForm component for use in other parts of the application
export default ContactForm;
