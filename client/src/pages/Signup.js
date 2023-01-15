import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";

import "../assets/css/signup.css";
import "../assets/css/captcha.css";
import randomText from "../utils/randomText";
import routeLink from "../utils/route";

const Signup = () => {
  // captcha
  const [captchaText, setCaptchaText] = useState(randomText());
  const [inputText, setInputText] = useState("");
  const [captchaStatus, setcaptchaStatus] = useState("Incomplete");

  const captchaChange = (event) => {
    const { value } = event.target;

    setInputText(value);
  };

  const captchaRefresh = () => {
    setInputText("");
    setcaptchaStatus("");
    setCaptchaText(randomText());
  };

  const captchaSubmit = () => {
    if (inputText === "") {
      setcaptchaStatus("Type your guess.");
      return;
    }

    if (inputText === captchaText) {
      setcaptchaStatus("Correct");
    } else {
      setInputText("");
      setcaptchaStatus("Incorrect");
    }
  };

  // privacy terms agreement
  const [agreement, setAgreement] = useState(false);

  const handleChange = (event) => {
    setAgreement(event.target.checked);
  };

  // submit form
  const [status, setStatus] = useState("");

  const emailRef = useRef();
  const phoneRef = useRef();
  const usernameRef = useRef();
  const firstRef = useRef();
  const lastRef = useRef();
  const utrRef = useRef();
  const ustaRef = useRef();
  const passwordRef = useRef();

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (captchaStatus === "Correct") {
      setStatus("Loading...");

      try {
        const response = await fetch(routeLink + "/api/users", {
          method: "post",
          body: JSON.stringify({
            email: emailRef.current.value,
            phone: phoneRef.current.value,
            username: usernameRef.current.value,
            first: firstRef.current.value,
            last: lastRef.current.value,
            utr: parseInt(utrRef.current.value),
            usta: parseInt(ustaRef.current.value),
            password: passwordRef.current.value,
          }),
          credentials: "include",
          headers: { "Content-Type": "application/json" },
        });
        if (response.ok) {
          document.location.replace("/");
        } else {
          setStatus("Signup failed");
        }
      } catch (e) {
        console.log(e);
        setStatus("An error occurred");
      }
    }
  };

  return (
    <main>
      <div className="signup-form-container">
        <h1>New User Registration</h1>
        <form className="signup-form" onSubmit={handleFormSubmit}>
          <input
            className="signup-input"
            type="email"
            placeholder="Email (Required)"
            ref={emailRef}
          />
          <input
            className="signup-input"
            type="text"
            placeholder="Phone Number"
            ref={phoneRef}
          />
          <input
            className="signup-input"
            type="username"
            placeholder="Username (Required)"
            ref={usernameRef}
          />
          <input
            className="signup-input"
            type="text"
            placeholder="First Name (Required)"
            ref={firstRef}
          />
          <input
            className="signup-input"
            type="text"
            placeholder="Last Name (Required)"
            ref={lastRef}
          />
          <input
            className="signup-input"
            type="number"
            placeholder="UTR Level"
            ref={utrRef}
          />
          <input
            className="signup-input"
            type="number"
            placeholder="USTA Level"
            ref={ustaRef}
          />
          <input
            type="password"
            className="signup-input"
            placeholder="Password (Required)"
            ref={passwordRef}
          />
          <div className="signup-input">
            <input type="checkbox" id="checkbox1" value="" />
            Would you like to recieve notifications? (Coming Soon)
          </div>
          <div className="signup-input">
            <input
              type="checkbox"
              id="checkbox3"
              name="agreement"
              onChange={handleChange}
            />
            I accept the privacy terms
          </div>
          <div id="captchaBackground">
            <div id="captcha">{captchaText}</div>
            <input
              id="textBox"
              name="userText"
              value={inputText}
              onChange={captchaChange}
            />
            <div id="buttons">
              <button
                onClick={() => captchaSubmit()}
                id="submitButton"
                type="button"
              >
                Submit
              </button>
              <button
                onClick={() => captchaRefresh()}
                id="refreshButton"
                type="button"
              >
                Refresh
              </button>
            </div>
            {captchaStatus}
          </div>
          <div className="signup-or-cancel">
            <button
              disabled={!agreement}
              id="signup-button"
              className="signup-button"
              type="submit"
            >
              Sign Up
            </button>
            <Link to="/" id="cancel-button" className="signup-button">
              Cancel
            </Link>
          </div>
        </form>
        {status}
      </div>
    </main>
  );
};

export default Signup;
