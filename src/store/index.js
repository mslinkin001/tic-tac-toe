import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
  player1Name: "",
  player2Name: "",
  player1Symbole: "",
  player2Symbol: "",
  winner: "",
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
  },
});

const store = configureStore({
  reducer: { gameStartReducer: gameStartSlice.reducer },
});

export const gameStartActions = gameStartSlice.actions;

export default store;
