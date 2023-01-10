import React, { useState } from "react";
import moment from "moment";

import "../../assets/css/sessionform.css";

const EventForm = () => {
  const [formState, setFormState] = useState({
    month: "01",
    day: "01",
    eventLocation: "",
    startTime: "4:00AM",
    endTime: "4:00AM",
    eventMax: "01",
  });

  const [error, setError] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const year = moment().format("yy").slice(2, 4);

    const date = formState.month + "/" + formState.day + "/" + year;
    const time = formState.startTime + "-" + formState.endTime;
    const location = formState.eventLocation;
    const max = parseInt(formState.eventMax);

    try {
      const response = await fetch("http://localhost:3001/api/events", {
        method: "post",
        body: JSON.stringify({
          date,
          time,
          location,
          max,
        }),
        headers: { "Content-Type": "application/json" },
      });
      if (response.ok) {
        console.log("Event Added Successfully");
      }
    } catch (err) {
      setError(true);
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="post-form-wrapper">
      <h1>Add Session</h1>
      <form className="post-form" onSubmit={handleSubmit}>
        <div className="sessionEl">
          <h4>Date:</h4>
          <div className="sessionFormOption">
            <select
              name="month"
              value={formState.month}
              onChange={handleChange}
            >
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
            <select name="day" value={formState.day} onChange={handleChange}>
              <option value="01">01</option>
              <option value="02">02</option>
              <option value="03">03</option>
              <option value="04">04</option>
              <option value="05">05</option>
              <option value="06">06</option>
              <option value="07">07</option>
              <option value="08">08</option>
              <option value="09">09</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
              <option value="16">16</option>
              <option value="17">17</option>
              <option value="18">18</option>
              <option value="19">19</option>
              <option value="20">20</option>
              <option value="21">21</option>
              <option value="22">22</option>
              <option value="23">23</option>
              <option value="24">24</option>
              <option value="25">25</option>
              <option value="26">26</option>
              <option value="27">27</option>
              <option value="28">28</option>
              <option value="29">29</option>
              <option value="30">30</option>
              <option value="31">31</option>
            </select>
          </div>
        </div>
        <div className="sessionEl">
          <h4>Start Time:</h4>
          <div className="sessionFormOption">
            <select
              name="startTime"
              value={formState.startTime}
              onChange={handleChange}
            >
              <option value="4:00A">4:00A</option>
              <option value="4:15A">4:15A</option>
              <option value="4:30A">4:30A</option>
              <option value="4:45A">4:45A</option>
              <option value="5:00A">5:00A</option>
              <option value="5:15A">5:15A</option>
              <option value="5:30A">5:30A</option>
              <option value="5:45A">5:45A</option>
              <option value="6:00A">6:00A</option>
              <option value="6:15A">6:15A</option>
              <option value="6:30A">6:30A</option>
              <option value="6:45A">6:45A</option>
              <option value="7:00A">7:00A</option>
              <option value="7:15A">7:15A</option>
              <option value="7:30A">7:30A</option>
              <option value="7:45A">7:45A</option>
              <option value="8:00A">8:00A</option>
              <option value="8:15A">8:15A</option>
              <option value="8:30A">8:30A</option>
              <option value="8:45A">8:45A</option>
              <option value="9:00A">9:00A</option>
              <option value="9:15A">9:15A</option>
              <option value="9:30A">9:30A</option>
              <option value="9:45A">9:45A</option>
              <option value="10:00A">10:00A</option>
              <option value="10:15A">10:15A</option>
              <option value="10:30A">10:30A</option>
              <option value="10:45A">10:45A</option>
              <option value="11:00A">11:00A</option>
              <option value="11:15A">11:15A</option>
              <option value="11:30A">11:30A</option>
              <option value="11:45A">11:45A</option>
              <option value="12:00P">12:00P</option>
              <option value="12:15P">12:15P</option>
              <option value="12:30P">12:30P</option>
              <option value="12:45P">12:45P</option>
              <option value="1:00P">1:00P</option>
              <option value="1:15P">1:15P</option>
              <option value="1:30P">1:30P</option>
              <option value="1:45P">1:45P</option>
              <option value="2:00P">2:00P</option>
              <option value="2:15P">2:15P</option>
              <option value="2:30P">2:30P</option>
              <option value="2:45P">2:45P</option>
              <option value="3:00P">3:00P</option>
              <option value="3:15P">3:15P</option>
              <option value="3:30P">3:30P</option>
              <option value="3:45P">3:45P</option>
              <option value="4:00P">4:00P</option>
              <option value="4:15P">4:15P</option>
              <option value="4:30P">4:30P</option>
              <option value="4:45P">4:45P</option>
              <option value="5:00P">5:00P</option>
              <option value="5:15P">5:15P</option>
              <option value="5:30P">5:30P</option>
              <option value="5:45P">5:45P</option>
              <option value="6:00P">6:00P</option>
              <option value="6:15P">6:15P</option>
              <option value="6:30P">6:30P</option>
              <option value="6:45P">6:45P</option>
              <option value="7:00P">7:00P</option>
              <option value="7:15P">7:15P</option>
              <option value="7:30P">7:30P</option>
              <option value="7:45P">7:45P</option>
              <option value="8:00P">8:00P</option>
              <option value="8:15P">8:15P</option>
              <option value="8:30P">8:30P</option>
              <option value="8:45P">8:45P</option>
              <option value="9:00P">9:00P</option>
              <option value="9:15P">9:15P</option>
              <option value="9:30P">9:30P</option>
              <option value="9:45P">9:45P</option>
              <option value="10:00P">10:00P</option>
              <option value="10:15P">10:15P</option>
              <option value="10:30P">10:30P</option>
              <option value="10:45P">10:45P</option>
              <option value="11:00P">11:00P</option>
            </select>
          </div>

          <h4>End Time:</h4>
          <div className="sessionFormOption">
            <select
              name="endTime"
              value={formState.endTime}
              onChange={handleChange}
            >
                            <option value="4:00A">4:00A</option>
              <option value="4:15A">4:15A</option>
              <option value="4:30A">4:30A</option>
              <option value="4:45A">4:45A</option>
              <option value="5:00A">5:00A</option>
              <option value="5:15A">5:15A</option>
              <option value="5:30A">5:30A</option>
              <option value="5:45A">5:45A</option>
              <option value="6:00A">6:00A</option>
              <option value="6:15A">6:15A</option>
              <option value="6:30A">6:30A</option>
              <option value="6:45A">6:45A</option>
              <option value="7:00A">7:00A</option>
              <option value="7:15A">7:15A</option>
              <option value="7:30A">7:30A</option>
              <option value="7:45A">7:45A</option>
              <option value="8:00A">8:00A</option>
              <option value="8:15A">8:15A</option>
              <option value="8:30A">8:30A</option>
              <option value="8:45A">8:45A</option>
              <option value="9:00A">9:00A</option>
              <option value="9:15A">9:15A</option>
              <option value="9:30A">9:30A</option>
              <option value="9:45A">9:45A</option>
              <option value="10:00A">10:00A</option>
              <option value="10:15A">10:15A</option>
              <option value="10:30A">10:30A</option>
              <option value="10:45A">10:45A</option>
              <option value="11:00A">11:00A</option>
              <option value="11:15A">11:15A</option>
              <option value="11:30A">11:30A</option>
              <option value="11:45A">11:45A</option>
              <option value="12:00P">12:00P</option>
              <option value="12:15P">12:15P</option>
              <option value="12:30P">12:30P</option>
              <option value="12:45P">12:45P</option>
              <option value="1:00P">1:00P</option>
              <option value="1:15P">1:15P</option>
              <option value="1:30P">1:30P</option>
              <option value="1:45P">1:45P</option>
              <option value="2:00P">2:00P</option>
              <option value="2:15P">2:15P</option>
              <option value="2:30P">2:30P</option>
              <option value="2:45P">2:45P</option>
              <option value="3:00P">3:00P</option>
              <option value="3:15P">3:15P</option>
              <option value="3:30P">3:30P</option>
              <option value="3:45P">3:45P</option>
              <option value="4:00P">4:00P</option>
              <option value="4:15P">4:15P</option>
              <option value="4:30P">4:30P</option>
              <option value="4:45P">4:45P</option>
              <option value="5:00P">5:00P</option>
              <option value="5:15P">5:15P</option>
              <option value="5:30P">5:30P</option>
              <option value="5:45P">5:45P</option>
              <option value="6:00P">6:00P</option>
              <option value="6:15P">6:15P</option>
              <option value="6:30P">6:30P</option>
              <option value="6:45P">6:45P</option>
              <option value="7:00P">7:00P</option>
              <option value="7:15P">7:15P</option>
              <option value="7:30P">7:30P</option>
              <option value="7:45P">7:45P</option>
              <option value="8:00P">8:00P</option>
              <option value="8:15P">8:15P</option>
              <option value="8:30P">8:30P</option>
              <option value="8:45P">8:45P</option>
              <option value="9:00P">9:00P</option>
              <option value="9:15P">9:15P</option>
              <option value="9:30P">9:30P</option>
              <option value="9:45P">9:45P</option>
              <option value="10:00P">10:00P</option>
              <option value="10:15P">10:15P</option>
              <option value="10:30P">10:30P</option>
              <option value="10:45P">10:45P</option>
              <option value="11:00P">11:00P</option>
            </select>
          </div>
        </div>
        <div className="sessionEl">
          <h4>Location:</h4>
          <div className="sessionFormOption">
            <input
              name="eventLocation"
              type="text"
              id="eventLocation"
              value={formState.eventLocation}
              onChange={handleChange}
              placeholder="Maximum 24 Characters"
            />
          </div>
        </div>
        <div className="sessionEl">
          <h4>Maximum Players:</h4>
          <div className="sessionFormOption">
            <select
              name="eventMax"
              value={formState.eventMax}
              onChange={handleChange}
            >
              <option value="01">01</option>
              <option value="02">02</option>
              <option value="03">03</option>
              <option value="04">04</option>
              <option value="05">05</option>
              <option value="06">06</option>
              <option value="07">07</option>
              <option value="08">08</option>
              <option value="09">09</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
              <option value="16">16</option>
              <option value="17">17</option>
              <option value="18">18</option>
              <option value="19">19</option>
              <option value="20">20</option>
              <option value="21">21</option>
              <option value="22">22</option>
              <option value="23">23</option>
              <option value="24">24</option>
              <option value="25">25</option>
              <option value="26">26</option>
              <option value="27">27</option>
              <option value="28">28</option>
              <option value="29">29</option>
              <option value="30">30</option>
              <option value="31">31</option>
              <option value="32">32</option>
            </select>
          </div>
        </div>
        <button className="sessionSubmit" type="submit">
          Submit
        </button>
      </form>
      {error && <span>Something went wrong...</span>}
    </div>
  );
};

export default EventForm;
