import React, { useRef } from "react";
import "./PickNamePage.css";

function PickNamePage(props) {
  const enteredName = useRef();
  const clickHandler = (e) => {
    e.preventDefault();
    console.log(enteredName.current.value);
    props.submitHandler(enteredName.current.value);
  };
  return (
    <>
      <div>
        <input type="text" ref={enteredName} />
        <button onClick={clickHandler}>pressme</button>PickNamePage
      </div>
    </>
  );
}

export default PickNamePage;
