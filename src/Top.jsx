import React from "react";
import { CgGirl } from "react-icons/cg";
function Top() {
  return (
    <div className="Top-info">
      <img src="./20220318_195758.png" className="image" />
      <h1>Beedhan Bhuwai</h1>
      <h3>Full Stack Developer</h3>
      <p>Since 2000</p>
      <button className="Button">
        <CgGirl /> <p> About</p>
      </button>
    </div>
  );
}
export default Top;
