import React, { useRef } from "react";
import "./PickNamePage.css";

function PickNamePage(props) {
  const enteredName1 = useRef();
  const enteredName2 = useRef();

  const clickHandler = (e) => {
    e.preventDefault();
    console.log(enteredName1.current.value);
    props.submitHandler(enteredName1.current.value, enteredName2.current.value);
  };
  return (
    <>
      <div className="pickname-container">
        <p>TIC TAC TOE GAME</p>
        <p>Choose player's names and symbols</p>
        <label>Player #1 Name:</label>
        <input type="text" ref={enteredName1} />

        <label>Player #2 Name:</label>
        <input type="text" ref={enteredName2} />

        <button onClick={clickHandler}>Play</button>
      </div>
    </>
  );
}

export default PickNamePage;
