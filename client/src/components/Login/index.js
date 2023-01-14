import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../../assets/css/login.css";

import routeLink from "../../utils/route";

const Login = () => {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);

    const email = formState.email;
    const password = formState.password;

    try {
      await fetch(routeLink + "/api/users/login", {
        method: "post",
        body: JSON.stringify({
          email,
          password,
        }),
        credentials: "include",
        headers: { "Content-Type": "application/json" },
      });
    } catch (e) {
      console.log(e);
      setError(true);
      return;
    } finally {
      document.location.reload();
    }
  };

  return (
    <div className="form-wrapper">
      <h1>Player Login/Register</h1>
      <div>
        <form onSubmit={handleFormSubmit} className="login-form">
          <input
            className="form-element email"
            name="email"
            type="email"
            id="email"
            placeholder="Email"
            value={formState.email}
            onChange={handleChange}
          />
          <input
            className="form-element password"
            name="password"
            type="password"
            id="password"
            value={formState.password}
            onChange={handleChange}
            placeholder="Password"
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
        {loading && <div>Loading...</div>}
        {error && <div>Login unsuccessful</div>}
      </div>
    </div>
  );
};

export default Login;
