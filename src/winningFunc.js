export const winCheckFunc = (tileNumber, playMatrix) => {
  console.log(tileNumber, playMatrix);
  switch (tileNumber) {
    case "tile1":
      console.log(
        rowCheck(playMatrix, 1),
        columnCheck(playMatrix, 1),
        mainDiagonalCheck(playMatrix)
      );
      break;
    case "tile2":
      console.log(rowCheck(playMatrix, 1), columnCheck(playMatrix, 2));
      break;
    case "tile3":
      console.log(
        rowCheck(playMatrix, 1),
        columnCheck(playMatrix, 3),
        antiDiagonalCheck(playMatrix)
      );
      break;
    case "tile4":
      console.log(rowCheck(playMatrix, 2), columnCheck(playMatrix, 1));
      break;
    case "tile5":
      console.log(
        rowCheck(playMatrix, 2),
        columnCheck(playMatrix, 2),
        antiDiagonalCheck(playMatrix),
        mainDiagonalCheck(playMatrix)
      );
      break;
    case "tile6":
      console.log(rowCheck(playMatrix, 2), columnCheck(playMatrix, 3));
      break;
    case "tile7":
      console.log(
        rowCheck(playMatrix, 3),
        columnCheck(playMatrix, 1),
        antiDiagonalCheck(playMatrix)
      );
      break;
    case "tile8":
      console.log(rowCheck(playMatrix, 3), columnCheck(playMatrix, 2));
      break;
    case "tile9":
      console.log(
        rowCheck(playMatrix, 3),
        columnCheck(playMatrix, 3),
        mainDiagonalCheck(playMatrix)
      );
      break;
    default:
  }
};

const rowCheck = (playMatrix, k) => {
  //K is the number of row to check in playMatrix
  let sum = 1;
  for (let i = 0; i < 3; i++) {
    if (playMatrix[k - 1][i] === "X") {
      sum = sum * 2;
    } else if (playMatrix[k - 1][i] === "O") {
      sum = sum * 3;
    }
  }
  if (sum === 8) {
    return `X win on row${k}`;
  } else if (sum === 27) {
    return `O win on row${k}`;
  }
};

const columnCheck = (playMatrix, k) => {
  //K is the number of column to check in playMatrix
  let sum = 1;
  for (let i = 0; i < 3; i++) {
    if (playMatrix[i][k - 1] === "X") {
      sum = sum * 2;
    } else if (playMatrix[i][k - 1] === "O") {
      sum = sum * 3;
    }
  }
  if (sum === 8) {
    return `X win on column${k}`;
  } else if (sum === 27) {
    return `O win on column${k}`;
  }
};

const mainDiagonalCheck = (playMatrix) => {
  let sum = 1;
  for (let i = 0; i < 3; i++) {
    if (playMatrix[i][i] === "X") {
      sum = sum * 2;
    } else if (playMatrix[i][i] === "O") {
      sum = sum * 3;
    }
  }
  if (sum === 8) {
    return `X win on main diagonal`;
  } else if (sum === 27) {
    return `O win on main diagonal`;
  }
};
const antiDiagonalCheck = (playMatrix) => {
  let sum = 1;
  let k = 2;
  for (let i = 0; i < 3; i++) {
    if (playMatrix[i][k] === "X") {
      sum = sum * 2;
    } else if (playMatrix[i][k] === "O") {
      sum = sum * 3;
    }
    k = k - 1;
  }
  if (sum === 8) {
    return `X win on anti diagonal`;
  } else if (sum === 27) {
    return `O win on anti diagonal`;
  }
};
