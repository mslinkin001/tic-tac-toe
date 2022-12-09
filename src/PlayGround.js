import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { gameStartActions } from "./store/index";

import "./PlayGround.css";

function PlayGround(props) {
  const [tileClicked, setTileClicked] = useState(false);

  const dispatch = useDispatch(gameStartActions);
  const player1Name = useSelector(
    (state) => state.gameStartReducer.player1Name
  );
  const player2Name = useSelector(
    (state) => state.gameStartReducer.player2Name
  );
  const playerTurn = useSelector((state) => state.gameStartReducer.playerTurn);
  const player1Symbol = useSelector(
    (state) => state.gameStartReducer.player1Symbol
  );
  const player2Symbol = useSelector(
    (state) => state.gameStartReducer.player2Symbol
  );
  const playMatrix = useSelector((state) => state.gameStartReducer.playMatrix);

  console.log(playMatrix);

  const playProcess = (tileClicked, tileInnerHTML, playerSymbol) => {
    switch (tileClicked) {
      case "tile1":
        if (!tileInnerHTML) {
          dispatch(
            gameStartActions.winningCheck({
              position: "tile1",
              playerSymbol: playerSymbol,
            })
          );
          setTileClicked(tileClicked);
        }
        break;
      case "tile2":
        // code block
        break;
      default:
      // code block
    }
  };

  const playClickHandler = (e) => {
    console.log(e.target.id);
    console.log(e.target.innerHTML);

    if (playerTurn === "player1") {
      playProcess(e.target.id, e.target.innerHTML, player1Symbol);
    } else {
    }
  };

  return (
    <>
      <div>
        {player1Name} {player2Name}
      </div>
      <section className="container">
        <div className="tile" onClick={playClickHandler} id="tile1">
          {tileClicked ? playMatrix[0][0] : ""}
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
