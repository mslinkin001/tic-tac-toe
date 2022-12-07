import React from "react";
import "./Wrapper.css";

function Wrapper(props) {
  return (
    <div className="whole-wrapper">
      <div className="main-wrapper">{props.children}</div>
    </div>
  );
}

export default Wrapper;
