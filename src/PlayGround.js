import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { gameStartActions } from "./store/index";

import "./PlayGround.css";

function PlayGround(props) {
  const dispatch = useDispatch(gameStartActions);
  const player1Name = useSelector(
    (state) => state.gameStartReducer.player1Name
  );
  const player2Name = useSelector(
    (state) => state.gameStartReducer.player2Name
  );

  return (
    <>
      <div>
        {player1Name} {player2Name}
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
