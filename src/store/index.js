import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
  player1Name: "",
  player2Name: "",
  player1Symbole: "",
  player2Symbol: "",
  playerTurn: "player1",
};

const gameStartSlice = createSlice({
  name: "gameInfo",
  initialState: initialState,
  reducers: {
    gameStart(state, action) {
      console.log(action.payload);
      state.player1Name = action.payload.player1Nameparam;
      state.player2Name = action.payload.player2Nameparam;
      state.player1Symbole = action.payload.player1Symbolparam;
      state.player2Symbole = action.payload.player2Symbolparam;
    },
    changeTurn(state, action) {
      state.playerTurn = action.payload.playerTurnparam;
    },
  },
});

const store = configureStore({
  reducer: { gameStartReducer: gameStartSlice.reducer },
});

export const gameStartActions = gameStartSlice.actions;

export default store;
