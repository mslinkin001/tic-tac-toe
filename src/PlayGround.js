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
      dispatch(
        gameStartActions.changeTurn({
          playerTurnparam: "player2",
        })
      );
    } else if (playerTurn === "player2") {
      playProcess(e.target.id, e.target.innerHTML, player2Symbol);
      dispatch(
        gameStartActions.changeTurn({
          playerTurnparam: "player1",
        })
      );
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
          {tileClicked ? playMatrix[0][1] : ""}
        </div>
        <div className="tile" onClick={playClickHandler} id="tile3">
          {tileClicked ? playMatrix[0][2] : ""}
        </div>
        <div className="tile" onClick={playClickHandler} id="tile4">
          {tileClicked ? playMatrix[1][0] : ""}
        </div>
        <div className="tile" onClick={playClickHandler} id="tile5">
          {tileClicked ? playMatrix[1][1] : ""}
        </div>
        <div className="tile" onClick={playClickHandler} id="tile6">
          {tileClicked ? playMatrix[1][2] : ""}
        </div>
        <div className="tile" onClick={playClickHandler} id="tile7">
          {tileClicked ? playMatrix[2][0] : ""}
        </div>
        <div className="tile" onClick={playClickHandler} id="tile8">
          {tileClicked ? playMatrix[2][1] : ""}
        </div>
        <div className="tile" onClick={playClickHandler} id="tile9">
          {tileClicked ? playMatrix[2][2] : ""}
        </div>
      </section>
    </>
  );
}

export default PlayGround;
