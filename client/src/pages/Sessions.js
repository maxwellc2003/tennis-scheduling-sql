import React, { useEffect, useState } from "react";

import "../assets/css/calendar.css";
import routeLink from "../utils/routeLink";

import Login from "../components/Login";
import PlayerCard from "../components/PlayerCard";
import SessionForm from "../components/SessionForm";
import Calendar from "../components/Calendar";

import Auth from "../utils/checkAuth";

const Sessions = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    Auth().then(setLoggedIn);

    const fetchData = async () => {
      setLoading(true);

      try {
        const response = await fetch(routeLink + "/api/events");
        const parsedData = await response.json();

        setData(parsedData);
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <main>
      <div className="main-left">
        <div className="calendar-wrapper">
          {loading ? <div>Loading...</div> : <Calendar data={data} />}
        </div>
      </div>
      <div className="main-right">
        {!loggedIn && <Login />}
        {loggedIn && <PlayerCard />}
        {loggedIn && <SessionForm />}
      </div>
    </main>
  );
};

export default Sessions;
