import React, { useState, useEffect } from "react";

import "../../assets/css/playercard.css";

import routeLink from "../../utils/routeLink";

const PlayerCard = () => {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState("");
  const [welcomeStatus, setWelcomeStatus] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setStatus("Loading...");

      try {
        const response = await fetch(routeLink + "/api/users/me", {
          method: "get",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
        });
        if (response.ok) {
          setStatus("");
          const parsedData = await response.json();

          setWelcomeStatus("Welcome, " + parsedData.first);
        } else {
          setStatus("Something went wrong");
        }
      } catch (e) {
        console.log(e);
        setStatus("An error occurred");
      }
    };

    fetchData();
  }, []);

  const logout = (event) => {
    event.preventDefault();

    try {
      fetch(routeLink + "/api/users/logout", {
        method: "post",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
      });
    } catch (e) {
      console.log(e);
    } finally {
      document.location.reload();
    }
  };

  return (
    <div className="form-wrapper">
      <h1>{welcomeStatus}</h1>
      <div className="border"></div>
      <h2>Coming soon...</h2>
      <div className="border"></div>
      <button
        id="logout-button"
        className="button form-element"
        type="button"
        onClick={logout}
      >
        Logout
      </button>
      {status}
    </div>
  );
};
export default PlayerCard;
