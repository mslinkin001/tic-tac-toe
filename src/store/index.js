import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
  player1Name: "",
  player2Name: "",
  player1Symbol: "",
  player2Symbol: "",
  playerTurn: "player1",
  currentTile: "",
  winnerFound: false,
  playMatrix: [
    ["", "", ""], //00->tile1 01->tile2 02->tile3
    ["", "", ""], //10->tile4 11->tile5 12->tile6
    ["", "", ""], //20->tile7 21->tile8 22->tile9
  ],
  winningMatrix: [
    ["", "", ""], //X symbol's Weight is 2 and O symbol's Weight is 3
    ["", "", ""], //So the winning situation is:
    ["", "", ""], //for X symbol multiply of 2 three times = 8
    //for O symbol multiply of 3 three times = 27
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
    gameContinue(state, action) {
      switch (action.payload.position) {
        case "tile1":
          state.playMatrix[0][0] = action.payload.playerSymbol;
          state.currentTile = action.payload.position;
          break;
        case "tile2":
          state.playMatrix[0][1] = action.payload.playerSymbol;
          state.currentTile = action.payload.position;
          break;
        case "tile3":
          state.playMatrix[0][2] = action.payload.playerSymbol;
          state.currentTile = action.payload.position;
          break;
        case "tile4":
          state.playMatrix[1][0] = action.payload.playerSymbol;
          state.currentTile = action.payload.position;
          break;
        case "tile5":
          state.playMatrix[1][1] = action.payload.playerSymbol;
          state.currentTile = action.payload.position;
          break;
        case "tile6":
          state.playMatrix[1][2] = action.payload.playerSymbol;
          state.currentTile = action.payload.position;
          break;
        case "tile7":
          state.playMatrix[2][0] = action.payload.playerSymbol;
          state.currentTile = action.payload.position;
          break;
        case "tile8":
          state.playMatrix[2][1] = action.payload.playerSymbol;
          state.currentTile = action.payload.position;
          break;
        case "tile9":
          state.playMatrix[2][2] = action.payload.playerSymbol;
          state.currentTile = action.payload.position;
          break;
        default:
        // code block
      }
    },
    winningFound(state) {
      state.winnerFound = true;
    },
  },
});

const store = configureStore({
  reducer: { gameStartReducer: gameStartSlice.reducer },
});

export const gameStartActions = gameStartSlice.actions;

export default store;
