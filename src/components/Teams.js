import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Flip from "react-reveal/Flip";
import axios from "axios";

function Teams() {
  const [teams, setTeams] = useState([]);
  const [filterTeams, setFilterTeams] = useState([]);
  const [keyword, setKeyword] = useState("");
  const URL_TEAMS = "https://frozen-journey-27456.herokuapp.com/teams";

  useEffect(() => {
    getTeams();
  }, []);

  const getTeams = () => {
    axios
      .get(`${URL_TEAMS}`)
      .then(res => {
        setTeams(res.data);
        setFilterTeams(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const renderTeamList = () => {
    return filterTeams.map(item => {
      return (
        <Link to={`/team/${item.name}`} key={item.id} className="team_item">
          <Flip right>
            <img src={`/Images/teams/${item.logo}`} alt={item.name} />
          </Flip>
        </Link>
      );
    });
  };

  const searchTerm = e => {
    const keyword = e.target.value;
    setKeyword(keyword);
    if (keyword !== "") {
      const list = teams.filter(item => {
        return item.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
      });
      setFilterTeams(list);
    } else {
      setFilterTeams(teams);
    }
  };

  return (
    <div className="teams_component">
      <div className="teams_input">
        <input
          type="text"
          placeholder="Search for a Team"
          value={keyword}
          onChange={searchTerm}
        />
      </div>
      <div className="teams_container">
        <div>{renderTeamList()}</div>
      </div>
    </div>
  );
}

export default Teams;
