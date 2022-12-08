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

  const playClickHandler = (e) => {
    console.log(e.target.id);
  };

  return (
    <>
      <div>
        {player1Name} {player2Name}
      </div>
      <section className="container">
        <div className="tile" onClick={playClickHandler} id="tile1">
          1
        </div>
        <div className="tile" onClick={playClickHandler} id="tile2">
          2
        </div>
        <div className="tile" onClick={playClickHandler} id="tile3">
          3
        </div>
        <div className="tile" onClick={playClickHandler} id="tile4">
          4
        </div>
        <div className="tile" onClick={playClickHandler} id="tile5">
          5
        </div>
        <div className="tile" onClick={playClickHandler} id="tile6">
          6
        </div>
        <div className="tile" onClick={playClickHandler} id="tile7">
          7
        </div>
        <div className="tile" onClick={playClickHandler} id="tile8">
          8
        </div>
        <div className="tile" onClick={playClickHandler} id="tile9">
          9
        </div>
      </section>
    </>
  );
}

export default PlayGround;
