import React, { useEffect, useState } from "react";

import "../assets/css/calendar.css";
import routeLink from "../utils/route";

import Login from "../components/Login";
import PlayerCard from "../components/PlayerCard";
import SessionForm from "../components/SessionForm";
import CalendarEvents from "../components/CalendarEvents";

import Auth from "../utils/auth";

const Calendar = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
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
    Auth().then(setLoggedIn);
    fetchData();
  }, []);

  return (
    <main>
      <div className="main-left">
        <div className="calendar-wrapper">
          {loading ? <div>Loading...</div> : <CalendarEvents data={data} />}
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

export default Calendar;
