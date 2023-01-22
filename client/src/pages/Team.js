import React from "react";

import "../assets/css/team.css";
import JosephBallard from "../assets/images/josephballardteam.png"

const Team = () => {
  return (
    <main>
      <div className="team">
        <div class="team-card"><img src={JosephBallard} alt="picture of joseph with a writing of his role and goal"></img></div>
        <div class="team-card"><img src={JosephBallard}></img></div>
      </div>
    </main>
  );
};

export default Team;
