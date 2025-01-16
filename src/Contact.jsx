
import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import LocationButton from "./LocationButton";

    

function Contact() {
    const email = "aravindpaulthurai";
    const subject = "Hello from Scope";
    const body = "This is a sample email composed from a button.";

    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    

    return (
        <div>
            <nav>
                <Link to="/home">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">contact</Link>
            </nav>
            <h1>Contact Page</h1>
            <button
                onClick={() => {
                    window.location.href = mailtoLink;
                }}   >
                Compose Email
            </button>
            <h1>Google Maps Redirect</h1>
            {/* <LocationButton latitude={37.7749} longitude={-122.4194} /> */}
            <LocationButton placeName="Statue of Liberty" />
            <h1>Phone Number</h1>
            <input type='Number'></input>
        </div>
    )
}



export default Contact