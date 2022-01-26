import React from "react";
import "../App.css";
import one from '../assets/one.jpg';
import two from '../assets/two.jpg';
import three from '../assets/three.jpg';
import four from '../assets/one.jpg';

export default function Dashboard() {
  return (
    <div className="movie-container">
      <div>
        {" "}
        <img className="imgStyle" src={one} alt="One" />
        <p>COMMUNICATE & LISTEN</p>
      </div>
      <div>
        {" "}
        <img className="imgStyle" src={two} alt="One" />
        <p> Acknowledge Goodness</p>
      </div>
      <div>
        {" "}
        <img className="imgStyle" src={three} alt="One" />
        <p>Prioritize Bonding Time</p>
      </div>
      <div>
        {" "}
        <img className="imgStyle" src={four} alt="One" />
        <p>Laugh.</p>
      </div>
    </div>
  );
}
