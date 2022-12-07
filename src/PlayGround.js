import React from "react";
import "./PlayGround.css";

function PlayGround(props) {
  return (
    <>
      <div>
        {props.enteredName.player1} {props.enteredName.player2}
      </div>
      <section className="container">
        <div className="tile"></div>
        <div className="tile"></div>
        <div className="tile"></div>
        <div className="tile"></div>
        <div className="tile"></div>
        <div className="tile"></div>
        <div className="tile"></div>
        <div className="tile"></div>
        <div className="tile"></div>
      </section>
    </>
  );
}

export default PlayGround;
