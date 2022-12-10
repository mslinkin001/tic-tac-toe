import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
  player1Name: "",
  player2Name: "",
  player1Symbol: "",
  player2Symbol: "",
  playerTurn: "player1",
  gameStart: false,
  currentTile: "",
  winnerFound: false,
  endGameMessage: "",
  playMatrix: [
    ["", "", ""], //00->tile1 01->tile2 02->tile3
    ["", "", ""], //10->tile4 11->tile5 12->tile6
    ["", "", ""], //20->tile7 21->tile8 22->tile9
  ],
  //X symbol's Weight is 2 and O symbol's Weight is 3
  //So the winning situation is:
  //for X symbol multiply of 2 * 2 * 2 = 8
  //for O symbol multiply of 3 * 3 * 3 = 27
  //in each row and column and also in main diagonal and the anti diagonal
  //the mentioned conditions must meet for a player to win the game
};

const gameStartSlice = createSlice({
  name: "gameInfo",
  initialState: initialState,
  reducers: {
    gameStartTriggrer(state) {
      state.gameStart = true;
    },
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
    gameRestart(state) {
      state.player1Name = "";
      state.player2Name = "";
      state.player1Symbol = "";
      state.player2Symbol = "";
      state.playerTurn = "player1";
      state.gameStart = false;
      state.currentTile = "";
      state.winnerFound = false;
      state.endGameMessage = "";
      state.playMatrix = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
      ];
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
