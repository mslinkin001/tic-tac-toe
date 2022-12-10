import React from "react";
import PickNamePage from "./PickNamePage";
import PlayGround from "./PlayGround";
import Wrapper from "./Wrapper";
import { useSelector, useDispatch } from "react-redux";
import { gameStartActions } from "./store/index";

function App() {
  const dispatch = useDispatch(gameStartActions);
  const gameStart = useSelector((state) => state.gameStartReducer.gameStart);

  const userSubmitHandler = () => {
    dispatch(gameStartActions.gameStartTriggrer());
  };
  return (
    <>
      <Wrapper>
        {!gameStart ? (
          <PickNamePage submitHandler={userSubmitHandler} />
        ) : (
          <PlayGround />
        )}
      </Wrapper>
    </>
  );
}

export default App;
