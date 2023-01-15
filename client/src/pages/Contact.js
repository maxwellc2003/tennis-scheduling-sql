import React from "react";

import "../assets/css/contact.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
  return (
    <main>
      <form class="contact-form">
        <h2>CONTACT US</h2>
        <p type="Name:">
          <input placeholder="Write your name here.."></input>
        </p>
        <p type="Email:">
          <input placeholder="Let us know how to contact you back.."></input>
        </p>
        <p type="Message:">
          <input placeholder="What would you like to tell us.."></input>
        </p>
        <button>Send Message</button>
        <div>
        <FontAwesomeIcon icon={faEnvelope} />customerservice@tennisscheduling.com
        </div>
      </form>
    </main>
  );
};

export default Contact;
