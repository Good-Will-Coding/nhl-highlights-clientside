import React, { useState, useEffect } from "react";
import Featured from "./Featured";
import Subscriptions from './Subscriptions';
import ImageGrid from './ImageGrid';
import Poll from './Poll';
import axios from "axios";
const URL_HOME = "https://frozen-journey-27456.herokuapp.com/home";

function Home() {
  const [home, setHome] = useState("");

  useEffect(() => {
    axios
      .get(URL_HOME)
      .then(res => {
        setHome(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Featured slides={home.slider} />
      <Subscriptions />
      <ImageGrid images={home.blocks} />
      <Poll />
    </div>
  );
}

export default Home;
