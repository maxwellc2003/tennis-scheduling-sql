import React, { useState, useRef, useEffect } from "react";

import moment from "moment";

import routeLink from "../../utils/routeLink";

import weekDays from "../../utils/weekDays";

const CalendarEvents = (events) => {
  const [data, setData] = useState(events.data);

  // calendar date usage
  const [currentDate, setCurrentDate] = useState(moment());
  const [calendarDays, setCalendarDays] = useState(weekDays(currentDate));

  // pop up
  const [hidden, setHidden] = useState(true);
  const [status, setStatus] = useState("");
  const [playersOpen, setPlayersOpen] = useState(false);
  const [players, setPlayers] = useState([]);
  const [popUpInfo, setPopUpInfo] = useState({
    id: "",
    day: "",
    month: "",
    dayInMonth: "",
    time: "",
    location: "",
    min: "",
    max: "",
  });

  // filter
  const [filter, setFilter] = useState(null);
  const filterRef = useRef();

  useEffect(() => {
    if (filter) {
      setData(data.filter((data) => data.location === filter));
    }
  }, [filter]);

  const filterSubmit = function (e) {
    e.preventDefault();

    setFilter(filterRef.current.value);
  };

  return (
    <div className="calendar">
      <div className={`pop-up ${hidden ? "hidden" : ""}`}>
        <h2>
          {popUpInfo.day}, {popUpInfo.month} {popUpInfo.dayInMonth} @{" "}
          {popUpInfo.time}
        </h2>
        <h2>Location: {popUpInfo.location}</h2>
        <h4>
          Minimum {popUpInfo.min} to {popUpInfo.max} players
        </h4>
        <button onClick={() => rsvp(popUpInfo.id)}>RSVP</button>
        <a
          href="#"
          onClick={() => setPlayersOpen(true)}
          className="view-players"
        >
          (View Player List)
        </a>
        {playersOpen && (
          <ul className="player-list">
            {players[0].map((player) => (
              <li key={player.id}>
                {player.first} {player.last}
              </li>
            ))}
          </ul>
        )}
        <p>{status}</p>

        <div onClick={() => closePopUp()} href="#" className="close-pop-up">
          x
        </div>
      </div>
      <div className="calendar-header">
        <div className="calendar-header-left">
          <div className="dropdown">
            <button
              onClick={() => jumpDropDown()}
              id="dropdownBtn"
              className="dropbtn"
            >
              Help
            </button>
            <div id="myDropdown" className="help-drop dropdown-content">
              <p>Need help?</p>
              <p>More help options coming soon...</p>
            </div>
          </div>
        </div>
        <div className="calendar-header-date">
          <i className="arrow left" onClick={() => changeDateLeft()}></i>
          <h1 id="current-week-header" className="current-week">
            {currentDate.startOf("isoweek").format("MMM")}{" "}
            {currentDate.startOf("isoweek").format("DD")} -{" "}
            {currentDate.endOf("isoweek").format("MMM")}{" "}
            {currentDate.endOf("isoweek").format("DD")}
          </h1>
          <i className="arrow right" onClick={() => changeDateRight()}></i>
        </div>

        <div className="dropdown2">
          <button
            onClick={() => filterDropDown()}
            id="dropdownBtn2"
            className="dropbtn2"
            type="button"
          >
            Filter
          </button>
          <div id="myDropdown2" className="dropdown-content2">
            <form onSubmit={filterSubmit}>
              <label htmlFor="locations">Choose a Location:</label>
              <select ref={filterRef} name="locations" id="location">
                {events.data.map((event) => (
                  <option value={event.location} key={event.id}>
                    {event.location}
                  </option>
                ))}
              </select>
              <button type="submit" id="filterBtn" className="filterBtn">
                Go
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="calendar-content">
        <div className="calendar-row">
          <div id="weekDay1" className="week-day">
            <h2>Mon</h2>
            <h3>{calendarDays[0].slice(3, 5)}</h3>
          </div>
          <div id="monContainer" className="event-container">
            {data
              .filter((data) => data.date === calendarDays[0])
              .map((event) => (
                <div
                  className="card"
                  key={event.id}
                  onClick={() => openPopUp(event, calendarDays[0])}
                >
                  <p>{event.event_users.length}</p>
                  <div className="number-attending-icon"></div>
                  <h6>{event.time.slice(0, event.time.indexOf("-"))}</h6>
                </div>
              ))}
          </div>
        </div>
        <div className="calendar-row">
          <div id="weekDay2" className="week-day">
            <h2>Tue</h2>
            <h3>{calendarDays[1].slice(3, 5)}</h3>
          </div>
          <div id="tueContainer" className="event-container">
            {data
              .filter((data) => data.date === calendarDays[1])
              .map((event) => (
                <div
                  className="card"
                  key={event.id}
                  onClick={() => openPopUp(event, calendarDays[1])}
                >
                  <p>{event.event_users.length}</p>
                  <div className="number-attending-icon"></div>
                  <h6>{event.time.slice(0, event.time.indexOf("-"))}</h6>
                </div>
              ))}
          </div>
        </div>
        <div className="calendar-row">
          <div id="weekDay3" className="week-day">
            <h2>Wed</h2>
            <h3>{calendarDays[2].slice(3, 5)}</h3>
          </div>
          <div id="wedContainer" className="event-container">
            {data
              .filter((data) => data.date === calendarDays[2])
              .map((event) => (
                <div
                  className="card"
                  key={event.id}
                  onClick={() => openPopUp(event, calendarDays[2])}
                >
                  <p>{event.event_users.length}</p>
                  <div className="number-attending-icon"></div>
                  <h6>{event.time.slice(0, event.time.indexOf("-"))}</h6>
                </div>
              ))}
          </div>
        </div>
        <div className="calendar-row">
          <div id="weekDay4" className="week-day">
            <h2>Thu</h2>
            <h3>{calendarDays[3].slice(3, 5)}</h3>
          </div>
          <div id="thuContainer" className="event-container">
            {data
              .filter((data) => data.date === calendarDays[3])
              .map((event) => (
                <div
                  className="card"
                  key={event.id}
                  onClick={() => openPopUp(event, calendarDays[3])}
                >
                  <p>{event.event_users.length}</p>
                  <div className="number-attending-icon"></div>
                  <h6>{event.time.slice(0, event.time.indexOf("-"))}</h6>
                </div>
              ))}
          </div>
        </div>
        <div className="calendar-row">
          <div id="weekDay5" className="week-day">
            <h2>Fri</h2>
            <h3>{calendarDays[4].slice(3, 5)}</h3>
          </div>
          <div id="friContainer" className="event-container">
            {data
              .filter((data) => data.date === calendarDays[4])
              .map((event) => (
                <div
                  className="card"
                  key={event.id}
                  onClick={() => openPopUp(event, calendarDays[4])}
                >
                  <p>{event.event_users.length}</p>
                  <div className="number-attending-icon"></div>
                  <h6>{event.time.slice(0, event.time.indexOf("-"))}</h6>
                </div>
              ))}
          </div>
        </div>
        <div className="calendar-row">
          <div id="weekDay6" className="week-day">
            <h2>Sat</h2>
            <h3>{calendarDays[5].slice(3, 5)}</h3>
          </div>
          <div id="satContainer" className="event-container">
            {data
              .filter((data) => data.date === calendarDays[5])
              .map((event) => (
                <div
                  className="card"
                  key={event.id}
                  onClick={() => openPopUp(event, calendarDays[5])}
                >
                  <p>{event.event_users.length}</p>
                  <div className="number-attending-icon"></div>
                  <h6>{event.time.slice(0, event.time.indexOf("-"))}</h6>
                </div>
              ))}
          </div>
        </div>
        <div className="calendar-row">
          <div id="weekDay7" className="week-day">
            <h2>Sun</h2>
            <h3>{calendarDays[6].slice(3, 5)}</h3>
          </div>
          <div id="sunContainer" className="event-container">
            {data
              .filter((data) => data.date === calendarDays[6])
              .map((event) => (
                <div
                  className="card"
                  key={event.id}
                  onClick={() => openPopUp(event, calendarDays[6])}
                >
                  <p>{event.event_users.length}</p>
                  <div className="number-attending-icon"></div>
                  <h6>{event.time.slice(0, event.time.indexOf("-"))}</h6>
                </div>
              ))}
          </div>
        </div>
      </div>
      <div className="calendar-footer">
        <div className="calendar-footer-date">
          <i onClick={() => changeDateLeft()} className="arrow left"></i>
          <h1 id="current-week-footer" className="current-week">
            {currentDate.startOf("isoweek").format("MMM")}{" "}
            {currentDate.startOf("isoweek").format("DD")} -{" "}
            {currentDate.endOf("isoweek").format("MMM")}{" "}
            {currentDate.endOf("isoweek").format("DD")}
          </h1>
          <i onClick={() => changeDateRight()} className="arrow right"></i>
        </div>
      </div>
    </div>
  );

  async function rsvp(id) {
    try {
      const response = await fetch(routeLink + "/api/events/attend", {
        method: "post",
        body: JSON.stringify({
          event_id: id,
        }),
        credentials: "include",
        headers: { "Content-Type": "application/json" },
      });
      if (response.ok) {
        setStatus("Successfully added your name to the list!");
      } else {
        setStatus("You are not logged in or already on the list.");
      }
    } catch (e) {
      console.log(e);
      setStatus("Something went wrong");
    }
  }

  function openPopUp(data, date) {
    setHidden(false);

    setPlayers([data.event_users]);

    setPopUpInfo({
      id: data.id,
      day: moment(date).format("ddd"),
      month: moment(date).format("MMM"),
      dayInMonth: moment(date).format("Do"),
      time: data.time,
      location: data.location,
      min: data.min,
      max: data.max,
    });
  }

  function closePopUp() {
    setPlayersOpen(false);
    setHidden(true);
    setPlayers([]);
    setStatus("");
  }

  function changeDateLeft() {
    setCurrentDate(moment(currentDate.subtract(7, "days")));

    setCalendarDays(weekDays(currentDate));
  }

  function changeDateRight() {
    setCurrentDate(moment(currentDate.add(7, "days")));

    setCalendarDays(weekDays(currentDate));
  }
};

// drop downs

function jumpDropDown() {
  document.getElementById("myDropdown").classList.toggle("show");
  document.getElementById("dropdownBtn").classList.toggle("dropbtn-focus");
}

function filterDropDown() {
  document.getElementById("myDropdown2").classList.toggle("show2");
  document.getElementById("dropdownBtn2").classList.toggle("dropbtn-focus2");
}

export default CalendarEvents;
