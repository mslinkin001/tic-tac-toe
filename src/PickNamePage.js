import React, { useRef, useState } from "react";
import "./PickNamePage.css";

function PickNamePage(props) {
  const [isSelectClassChange, setSelectClassChange] = useState(false);
  const [isSelectClassChange2, setSelectClassChange2] = useState(false);

  const enteredName1 = useRef();
  const enteredName2 = useRef();
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
          <select
            style={isSelectClassChange ? { color: "red" } : {}}
            onChange={selectChangeHandler}
          >
            <option className="inner-X">X</option>
            <option className="inner-O">O</option>
          </select>
          <label>Player #2 Name:</label>
          <label>Choose Symbol:</label>

          <input type="text" ref={enteredName2} />
          <select
            style={isSelectClassChange2 ? { color: "red" } : {}}
            onChange={selectChangeHandler2}
          >
            <option className="inner-X">X</option>
            <option className="inner-O">O</option>
          </select>
        </div>

        <button onClick={clickHandler}>START</button>
      </div>
    </>
  );
}

export default PickNamePage;
