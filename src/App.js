import React, { useState } from "react";
import PickNamePage from "./PickNamePage";
import PlayGround from "./PlayGround";
import Wrapper from "./Wrapper";

function App() {
  const [isPicked, setIsPicked] = useState(false);
  const [enteredName, setenteredName] = useState({ player1: "", player2: "" });

  const userSubmitHandler = (enteredName1, enteredName2) => {
    setIsPicked(true);
    setenteredName({ player1: enteredName1, player2: enteredName2 });
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
