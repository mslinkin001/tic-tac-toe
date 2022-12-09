import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
  player1Name: "",
  player2Name: "",
  player1Symbol: "",
  player2Symbol: "",
  playerTurn: "player1",
  playMatrix: [
    ["", "", ""], //00->tile1 01->tile2 02->tile3
    ["", "", ""], //10->tile4 11->tile5 12->tile6
    ["", "", ""], //20->tile7 21->tile8 22->tile9
  ],
};

const gameStartSlice = createSlice({
  name: "gameInfo",
  initialState: initialState,
  reducers: {
    gameStart(state, action) {
      console.log(action.payload);
      state.player1Name = action.payload.player1Nameparam;
      state.player2Name = action.payload.player2Nameparam;
      state.player1Symbol = action.payload.player1Symbolparam;
      state.player2Symbol = action.payload.player2Symbolparam;
    },
    changeTurn(state, action) {
      state.playerTurn = action.payload.playerTurnparam;
    },
    winningCheck(state, action) {
      switch (action.payload.position) {
        case "tile1":
          state.playMatrix[0][0] = action.payload.playerSymbol;

          break;
        case "tile2":
          // code block
          break;
        default:
        // code block
      }
    },
  },
});

const store = configureStore({
  reducer: { gameStartReducer: gameStartSlice.reducer },
});

export const gameStartActions = gameStartSlice.actions;

export default store;
