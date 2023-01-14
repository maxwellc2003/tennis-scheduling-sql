import React, { useState } from "react";

import "../../assets/css/playercard.css";

import routeLink from "../../utils/route";

const PlayerCard = () => {
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
      <h1>...Coming Soon</h1>
      <div className="border"></div>
      <h2>Welcome, Player!</h2>
      <div className="border"></div>
      <button
        id="logout-button"
        className="button form-element"
        type="button"
        onClick={logout}
      >
        Logout
      </button>
    </div>
  );
};
export default PlayerCard;
