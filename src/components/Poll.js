import React, { useState, useEffect } from "react";
import axios from "axios";

const Poll = () => {
  const [pollTeams, setPollTeams] = useState([]);
  const [voted, setVoted] = useState(false);
  const [votedAlert, setVotedAlert] = useState(false);

  const URL_TEAMS = "https://frozen-journey-27456.herokuapp.com/teams";

  useEffect(() => {
    getPoll();
  }, []);

  const getPoll = () => {
    axios
      .get(`${URL_TEAMS}?poll=true&_sort=count&_order=desc`)
      .then(res => {
        setPollTeams(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const addPollCount = (count, id) => {
    if (!voted) {
      axios
        .patch(`${URL_TEAMS}/${id}`, {
          count: count + 1
        })
        .then(() => {
          getPoll();
          setVoted(!voted);
          setVotedAlert(!votedAlert);
          clearVotedMessage();
        })
        .catch(err => {
          console.log(err);
        });
    }
  };

  const renderPoll = () => {
    const position = ["1ST", "2ND", "3RD"];
    return pollTeams.map((item, index) => {
      return (
        <div
          key={item.id}
          className="poll_item"
          onClick={() => addPollCount(item.count, item.id)}
        >
          <img src={`/Images/teams/${item.logo}`} alt={item.name} />
          <h4>{position[index]}</h4>
          <div>{item.count} Votes</div>
        </div>
      );
    });
  };

  const clearVotedMessage = () => {
    setTimeout(() => {
      setVotedAlert(false);
    }, 3000);
  };

  return (
    <div className="home_poll">
      <h3>Who will be the next champion?</h3>
      <h5>{votedAlert ? `Thanks for voting!` : null}</h5>
      <div className="poll_container">{renderPoll()}</div>
    </div>
  );
};

export default Poll;
