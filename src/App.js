import React, { useState } from "react";
import PickNamePage from "./PickNamePage";
import PlayGround from "./PlayGround";
import Wrapper from "./Wrapper";

function App() {
  const [isPicked, setIsPicked] = useState(false);
  const userSubmitHandler = () => {};
  return (
    <>
      <Wrapper>
        {!isPicked ? (
          <PickNamePage submitHandler={userSubmitHandler} />
        ) : (
          <PlayGround />
        )}
      </Wrapper>
    </>
  );
}

export default App;
