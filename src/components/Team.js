import React, { useState, useEffect } from "react";
import axios from "axios";

function Team(props) {
  const [data, setData] = useState([]);
  const URL_TEAM = "https://frozen-journey-27456.herokuapp.com/teams";

  useEffect(() => {
    axios.get(`${URL_TEAM}?name=${props.match.params.id}`).then(res => {
      setData(res.data);
      console.log(res.data);
    });
  }, []);

  const renderData = () => {
    return data.map(item => {
      return (
        <div key={item.id} className="team_data_wrapper">
          <div className="left">
            <img src={`/Images/teams/${item.logo}`} alt={item.name} />
          </div>
          <div className="right">
            <h1>{item.name}</h1>
            <p>{item.description}</p>
            <br />
            <hr />
            <div className="squad">{renderSquad(item.squad)}</div>
          </div>
        </div>
      );
    });
  };

  const renderSquad = squad => {
    return squad.map(player => {
      return (
        <div key={player.name} className="item player_wrapper">
          <img
            src={"/Images/teams/player_profile/defaultprofile.png"}
            alt={player.person.fullName}
          />
          <h4>{player.person.fullName}</h4>
          <div className="details">
            <span>Number: {player.jerseyNumber}</span>
          </div>
          <div className="details">
            <span>Position: {player.position.name}</span>
          </div>
          <div className="details">
            <span>{player.position.type}</span>
          </div>
        </div>
      );
    });
  };

  return <div className="team_data">{renderData()}</div>;
}

export default Team;
