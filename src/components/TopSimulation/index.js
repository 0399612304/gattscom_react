import React from "react";
import "./style.css";
import simulation_1 from "../../asset/images/top/simulation_bg.jpg";
import simulation_2 from "../../asset/images/top/simulation_img.png";
import simulation_mobile from "../../asset/images/top/simulation_mobile.png";
const Simulation = () => {
  return (
    <section className="top-simulation">
      <img
        className="top-simulation-background"
        src={simulation_1}
        alt="img"
      ></img>
      <a href="/simulation">
        <img
          className="top-simulation-background-in"
          src={simulation_2}
          alt="img"
        ></img>
        <img
          className="simulation-mobile"
          src={simulation_mobile}
          alt="img"
        ></img>
      </a>
    </section>
  );
};

export default Simulation;
