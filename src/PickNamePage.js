import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { gameStartActions } from "./store/index";
import "./PickNamePage.css";

function PickNamePage(props) {
  const dispatch = useDispatch(gameStartActions);

  const [isSelectClassChange, setSelectClassChange] = useState(false);
  const [isSelectClassChange2, setSelectClassChange2] = useState(false);
  const [isErrorMsg, setIsErrorMsg] = useState({
    isError: false,
    errorMsg: "",
  });
  /* 👇keeps the names that players entered👇*/
  const enteredName1 = useRef();
  const enteredName2 = useRef();

  /* 👇keeps the symbols that players chose*👇*/
  const player1SelectRef = useRef();
  const player2SelectRef = useRef();

  const selectChangeHandler = (e) => {
    const targetValue = e.target.value;
    if (targetValue === "O") {
      setSelectClassChange(true);
    } else {
      if (isSelectClassChange) setSelectClassChange(false);
    }
  };
  const selectChangeHandler2 = (e) => {
    const targetValue = e.target.value;
    if (targetValue === "O") {
      setSelectClassChange2(true);
    } else {
      if (isSelectClassChange2) setSelectClassChange2(false);
    }
  };

  const clickHandler = (e) => {
    e.preventDefault();
    console.log(player1SelectRef.current.value, player2SelectRef.current.value);
    if (
      enteredName1.current.value.trim() === "" ||
      enteredName2.current.value.trim() === ""
    ) {
      setIsErrorMsg({
        isError: true,
        errorMsg: "Select Name for both Players",
      });
    } else if (
      player1SelectRef.current.value === player2SelectRef.current.value
    ) {
      setIsErrorMsg({
        isError: true,
        errorMsg: "Players can not have same symbols",
      });
    } else {
      dispatch(
        gameStartActions.gameStart({
          player1Nameparam: enteredName1.current.value.trim(),
          player2Nameparam: enteredName2.current.value.trim(),
          player1Symbolparam: player1SelectRef.current.value,
          player2Symbolparam: player2SelectRef.current.value,
        })
      );
      props.submitHandler();
    }
  };
  return (
    <>
      <div className="pickname-container">
        <p>TIC TAC TOE GAME</p>
        <p>Choose player's name and symbol</p>
        <div className="inner-grid">
          <label>Player#1 Name:</label>
          <label>Choose Symbol:</label>

          <input type="text" ref={enteredName1} />
          <select
            style={isSelectClassChange ? { color: "red" } : {}}
            onChange={selectChangeHandler}
            ref={player1SelectRef}
          >
            <option className="inner-X">X</option>
            <option className="inner-O">O</option>
          </select>
          <label>Player#2 Name:</label>
          <label>Choose Symbol:</label>

          <input type="text" ref={enteredName2} />
          <select
            style={isSelectClassChange2 ? { color: "red" } : {}}
            onChange={selectChangeHandler2}
            ref={player2SelectRef}
          >
            <option className="inner-X">X</option>
            <option className="inner-O">O</option>
          </select>
        </div>
        {isErrorMsg.isError ? (
          <p className="error-msg">{isErrorMsg.errorMsg}</p>
        ) : (
          ""
        )}
        <button onClick={clickHandler}>START</button>
      </div>
    </>
  );
}

export default PickNamePage;
