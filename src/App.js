import React, { useState } from "react";
import PickNamePage from "./PickNamePage";
import PlayGround from "./PlayGround";
import Wrapper from "./Wrapper";

function App() {
  const [isPicked, setIsPicked] = useState(false);
  const [enteredName, setenteredName] = useState(false);

  const userSubmitHandler = (enteredName) => {
    console.log(enteredName);
    setIsPicked(true);
    setenteredName(enteredName);
  };
  return (
    <>
      <Wrapper>
        {!isPicked ? (
          <PickNamePage submitHandler={userSubmitHandler} />
        ) : (
          <PlayGround enteredName={enteredName} />
        )}
      </Wrapper>
    </>
  );
}

export default App;
