import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { gameStartActions } from "./store/index";
import { winCheckFunc } from "./winningFunc";

import "./PlayGround.css";

function PlayGround() {
  const [tileClicked, setTileClicked] = useState(false);
  const [gameOverMsg, setGameOverMsg] = useState("");

  const dispatch = useDispatch(gameStartActions);
  const winnerFound = useSelector(
    (state) => state.gameStartReducer.winnerFound
  );
  const player1Name = useSelector(
    (state) => state.gameStartReducer.player1Name
  );
  const currentTile = useSelector(
    (state) => state.gameStartReducer.currentTile
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
  const wholestore = useSelector((state) => state.gameStartReducer);

  // console.log(playMatrix, currentTile);
  const gameEndsDraw = (playMatrix) => {
    let sum = 0;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (playMatrix[i][j] !== "") {
          sum = sum + 1;
        }
      }
    }
    if (sum === 9) {
      return true;
    } else {
      return false;
    }
  };

  const endsDraw = gameEndsDraw(playMatrix);

  console.log(endsDraw);
  useEffect(() => {
    const result = winCheckFunc(currentTile, playMatrix);
    if (result) {
      //result indicates that the game is over
      dispatch(gameStartActions.winningFound());
      setGameOverMsg(result);
    }
    console.log(result);
  });

  const playProcess = (tileClicked, tileInnerHTML, playerSymbol) => {
    switch (tileClicked) {
      case "tile1":
        if (!tileInnerHTML) {
          dispatch(
            gameStartActions.gameContinue({
              position: "tile1",
              playerSymbol: playerSymbol,
            })
          );

          setTileClicked(tileClicked);
        }
        break;
      case "tile2":
        if (!tileInnerHTML) {
          dispatch(
            gameStartActions.gameContinue({
              position: "tile2",
              playerSymbol: playerSymbol,
            })
          );
          setTileClicked(tileClicked);
        }
        break;
      case "tile3":
        if (!tileInnerHTML) {
          dispatch(
            gameStartActions.gameContinue({
              position: "tile3",
              playerSymbol: playerSymbol,
            })
          );
          setTileClicked(tileClicked);
        }
        break;
      case "tile4":
        if (!tileInnerHTML) {
          dispatch(
            gameStartActions.gameContinue({
              position: "tile4",
              playerSymbol: playerSymbol,
            })
          );
          setTileClicked(tileClicked);
        }
        break;
      case "tile5":
        if (!tileInnerHTML) {
          dispatch(
            gameStartActions.gameContinue({
              position: "tile5",
              playerSymbol: playerSymbol,
            })
          );
          setTileClicked(tileClicked);
        }
        break;
      case "tile6":
        if (!tileInnerHTML) {
          dispatch(
            gameStartActions.gameContinue({
              position: "tile6",
              playerSymbol: playerSymbol,
            })
          );
          setTileClicked(tileClicked);
        }
        break;
      case "tile7":
        if (!tileInnerHTML) {
          dispatch(
            gameStartActions.gameContinue({
              position: "tile7",
              playerSymbol: playerSymbol,
            })
          );
          setTileClicked(tileClicked);
        }
        break;
      case "tile8":
        if (!tileInnerHTML) {
          dispatch(
            gameStartActions.gameContinue({
              position: "tile8",
              playerSymbol: playerSymbol,
            })
          );
          setTileClicked(tileClicked);
        }
        break;
      case "tile9":
        if (!tileInnerHTML) {
          dispatch(
            gameStartActions.gameContinue({
              position: "tile9",
              playerSymbol: playerSymbol,
            })
          );
          setTileClicked(tileClicked);
        }
        break;
      default:
      // code block
    }
  };

  const playClickHandler = (e) => {
    e.preventDefault();
    if (!e.target.innerHTML) {
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
        console.log(playMatrix, e.target.id);
      }
      console.log(wholestore);
    }
  };

  const restartHandler = (e) => {
    e.preventDefault();
    dispatch(gameStartActions.gameRestart());
  };
  return (
    <>
      <div className="players-info">
        <span
          className={`players-name ${
            player1Symbol === "X" ? "tile-X" : "tile-O"
          }`}
        >
          {player1Name}
        </span>
        {"    "}
        vs.
        <span
          className={`players-name ${
            player2Symbol === "X" ? "tile-X" : "tile-O"
          }`}
        >
          {"    "}
          {player2Name}
        </span>
      </div>
      <div className="play-wrapper">
        <section
          style={{ pointerEvents: winnerFound ? "none" : "" }} //this will disable the playground when a player wins
          className="container"
        >
          <div
            className={`tile ${playMatrix[0][0] === "X" ? "tile-X" : "tile-O"}`}
            onClick={playClickHandler}
            id="tile1"
          >
            {tileClicked ? playMatrix[0][0] : ""}
          </div>
          <div
            className={`tile ${playMatrix[0][1] === "X" ? "tile-X" : "tile-O"}`}
            onClick={playClickHandler}
            id="tile2"
          >
            {tileClicked ? playMatrix[0][1] : ""}
          </div>
          <div
            className={`tile ${playMatrix[0][2] === "X" ? "tile-X" : "tile-O"}`}
            onClick={playClickHandler}
            id="tile3"
          >
            {tileClicked ? playMatrix[0][2] : ""}
          </div>
          <div
            className={`tile ${playMatrix[1][0] === "X" ? "tile-X" : "tile-O"}`}
            onClick={playClickHandler}
            id="tile4"
          >
            {tileClicked ? playMatrix[1][0] : ""}
          </div>
          <div
            className={`tile ${playMatrix[1][1] === "X" ? "tile-X" : "tile-O"}`}
            onClick={playClickHandler}
            id="tile5"
          >
            {tileClicked ? playMatrix[1][1] : ""}
          </div>
          <div
            className={`tile ${playMatrix[1][2] === "X" ? "tile-X" : "tile-O"}`}
            onClick={playClickHandler}
            id="tile6"
          >
            {tileClicked ? playMatrix[1][2] : ""}
          </div>
          <div
            className={`tile ${playMatrix[2][0] === "X" ? "tile-X" : "tile-O"}`}
            onClick={playClickHandler}
            id="tile7"
          >
            {tileClicked ? playMatrix[2][0] : ""}
          </div>
          <div
            className={`tile ${playMatrix[2][1] === "X" ? "tile-X" : "tile-O"}`}
            onClick={playClickHandler}
            id="tile8"
          >
            {tileClicked ? playMatrix[2][1] : ""}
          </div>
          <div
            className={`tile ${playMatrix[2][2] === "X" ? "tile-X" : "tile-O"}`}
            onClick={playClickHandler}
            id="tile9"
          >
            {tileClicked ? playMatrix[2][2] : ""}
          </div>
        </section>
        <section className="play-info">
          {endsDraw && !winnerFound ? (
            <>
              {" "}
              <span className="remained-text">Draw, please Start Over</span>
              <button className="reset-btn" onClick={restartHandler}>
                Restart the game
              </button>
            </>
          ) : winnerFound && gameOverMsg ? (
            <>
              <span className="remained-text">
                {player1Symbol === gameOverMsg[0]
                  ? player1Name + " wins the game"
                  : player2Name + " wins the game"}
              </span>
              <button className="reset-btn" onClick={restartHandler}>
                Restart the game
              </button>
            </>
          ) : (
            <>
              <span className="remained-text">Now it's </span>
              <span
                className={`players-name ${
                  playerTurn === "player1"
                    ? `tile-` + player1Symbol
                    : `tile-` + player2Symbol
                }`}
              >
                {playerTurn === "player1" ? player1Name : player2Name}
              </span>
              <span className="remained-text-turn"> Turn</span>
            </>
          )}
        </section>
      </div>
    </>
  );
}

export default PlayGround;
