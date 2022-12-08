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
        <p>Choose player's name and symbol</p>
        <div className="inner-grid">
          <label>Player #1 Name:</label>
          <label>Choose Symbol:</label>

          <input type="text" ref={enteredName1} />
          <select>
            <option>X</option>
            <option>O</option>
          </select>
          <label>Player #2 Name:</label>
          <label>Choose Symbol:</label>

          <input type="text" ref={enteredName2} />
          <select>
            <option>X</option>
            <option>O</option>
          </select>
        </div>

        <button onClick={clickHandler}>START</button>
      </div>
    </>
  );
}

export default PickNamePage;
