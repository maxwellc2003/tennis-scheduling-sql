import React, { useState } from "react";

import moment from "moment";

import weekDays from "../../utils/weekDays";

const CalendarEvents = (events) => {
  // calendar date usage
  const [currentDate, setCurrentDate] = useState(moment());
  const [calendarDays, setCalendarDays] = useState(weekDays(currentDate));

  // pop up
  const [hidden, setHidden] = useState(true);
  const [popUpInfo, setPopUpInfo] = useState({
    time: "",
    location: "",
    min: "",
    max: "",
  });

  return (
    <div className="calendar">
      <div className={`pop-up ${hidden ? "hidden" : ""}`}>
        <h2>{popUpInfo.time}</h2>
        <h2>Location: {popUpInfo.location}</h2>
        <h2>Minimum: {popUpInfo.min}</h2>
        <h2>Maximum: {popUpInfo.max}</h2>
        <button onClick={() => console.log("rsvp")}>RSVP</button>
        <a
          href="#"
          onClick={() => console.log("view players")}
          className="view-players"
        >
          (View Players)
        </a>

        <div onClick={() => setHidden(true)} href="#" className="close-pop-up">
          x
        </div>
      </div>
      <div className="calendar-header">
        <div className="calendar-header-left">
          <div className="dropdown">
            <button id="dropdownBtn" className="dropbtn">
              Jump To
            </button>
            <div id="myDropdown" className="dropdown-content">
              <form>
                <label htmlFor="months">Month</label>
                <select className="months" id="month" name="months">
                  <option value="01">January</option>
                  <option value="02">February</option>
                  <option value="03">March</option>
                  <option value="04">April</option>
                  <option value="05">May</option>
                  <option value="06">June</option>
                  <option value="07">July</option>
                  <option value="08">August</option>
                  <option value="09">September</option>
                  <option value="10">October</option>
                  <option value="11">November</option>
                  <option value="12">December</option>
                </select>
                <input
                  className=""
                  type="text"
                  id="day"
                  placeholder="Day (01...31)"
                />
                <button id="jumpToBtn" className="jumpToBtn">
                  Go
                </button>
              </form>
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
          <button id="dropdownBtn2" className="dropbtn2" type="button">
            Filter
          </button>
          <div id="myDropdown2" className="dropdown-content2">
            <form>
              <label htmlFor="locations">Choose a Location:</label>
              <select name="locations" id="location"></select>
              <button id="filterBtn" className="filterBtn">
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
            {events.data
              .filter((data) => data.date === calendarDays[0])
              .map((event) => (
                <div
                  className="card"
                  key={event.id}
                  onClick={() => setPopUp(event)}
                >
                  <p>{event.event_users.length}</p>
                  <div className="number-attending-icon"></div>
                  <h6>{event.time}</h6>
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
            {events.data
              .filter((data) => data.date === calendarDays[1])
              .map((event) => (
                <div
                  className="card"
                  key={event.id}
                  onClick={() => setPopUp(event)}
                >
                  <p>{event.event_users.length}</p>
                  <div className="number-attending-icon"></div>
                  <h6>{event.time}</h6>
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
            {events.data
              .filter((data) => data.date === calendarDays[2])
              .map((event) => (
                <div
                  className="card"
                  key={event.id}
                  onClick={() => setPopUp(event)}
                >
                  <p>{event.event_users.length}</p>
                  <div className="number-attending-icon"></div>
                  <h6>{event.time}</h6>
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
            {events.data
              .filter((data) => data.date === calendarDays[3])
              .map((event) => (
                <div
                  className="card"
                  key={event.id}
                  onClick={() => setPopUp(event)}
                >
                  <p>{event.event_users.length}</p>
                  <div className="number-attending-icon"></div>
                  <h6>{event.time}</h6>
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
            {events.data
              .filter((data) => data.date === calendarDays[4])
              .map((event) => (
                <div
                  className="card"
                  key={event.id}
                  onClick={() => setPopUp(event)}
                >
                  <p>{event.event_users.length}</p>
                  <div className="number-attending-icon"></div>
                  <h6>{event.time}</h6>
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
            {events.data
              .filter((data) => data.date === calendarDays[5])
              .map((event) => (
                <div
                  className="card"
                  key={event.id}
                  onClick={() => setPopUp(event)}
                >
                  <p>{event.event_users.length}</p>
                  <div className="number-attending-icon"></div>
                  <h6>{event.time}</h6>
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
            {events.data
              .filter((data) => data.date === calendarDays[6])
              .map((event) => (
                <div
                  className="card"
                  key={event.id}
                  onClick={() => setPopUp(event)}
                >
                  <p>{event.event_users.length}</p>
                  <div className="number-attending-icon"></div>
                  <h6>{event.time}</h6>
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

  function rsvp(event, auth) {}

  function setPopUp(data) {
    setHidden(false);

    setPopUpInfo({
      time: data.time,
      location: data.location,
      min: data.min,
      max: data.max,
    });
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

export default CalendarEvents;
