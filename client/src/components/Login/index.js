import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";

import "../../assets/css/login.css";

import routeLink from "../../utils/route";

const Login = () => {
  const [status, setStatus] = useState("");

  const emailRef = useRef();
  const passwordRef = useRef();

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    setStatus("Loading...");

    try {
      const response = await fetch(routeLink + "/api/users/login", {
        method: "post",
        body: JSON.stringify({
          email : emailRef.current.value,
          password : passwordRef.current.value,
        }),
        credentials: "include",
        headers: { "Content-Type": "application/json" },
      });
      if (response.ok) {
        document.location.reload();
      } else {
        setStatus("Login failed");
      }
    } catch (e) {
      console.log(e);
      setStatus("An error occurred");
    }
  };

  return (
    <div className="form-wrapper">
      <h1>Player Login/Register</h1>
      <div>
        <form onSubmit={handleFormSubmit} className="login-form">
          <input
            className="form-element email"
            type="email"
            placeholder="Email"
            ref={emailRef}
          />
          <input
            className="form-element password"
            type="password"
            placeholder="Password"
            ref={passwordRef}
          />
          <div className="remember-or-forgot">
            <div>
              <input
                type="checkbox"
                id="remember-me"
                name="remember-me"
              ></input>
              <label className="remember-me-label" htmlFor="remember-me">
                Remember Me
              </label>
            </div>
            <div>
              <p className="forgot-login">Forgot login?</p>
            </div>
          </div>
          <div className="login-form-button-container">
            <button
              id="login-button"
              className="login-form-button"
              type="submit"
            >
              Login
            </button>
            <Link to="/signup" className="login-form-button">
              Register
            </Link>
          </div>
        </form>
        {status}
      </div>
    </div>
  );
};

export default Login;
