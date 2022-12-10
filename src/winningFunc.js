export const winCheckFunc = (tileNumber, playMatrix) => {
  console.log(tileNumber, playMatrix);
  switch (tileNumber) {
    case "tile1":
      rowCheck(playMatrix, 1);
      const s = columnCheck(playMatrix, 1);
      console.log(s);
      mainDiagonalCheck(playMatrix);
      break;
    case "tile2":
      break;
    case "tile3":
      break;
    case "tile4":
      break;
    case "tile5":
      break;
    case "tile6":
      break;
    case "tile7":
      break;
    case "tile8":
      break;
    case "tile9":
      break;
    default:
  }
};

const rowCheck = (playMatrix, k) => {
  //K is the number of row to check in playMatrix
  let sum = 0;
  for (let i = 0; i < 3; i++) {
    if (playMatrix[k - 1][i] === "X") {
      sum = sum + 1;
    } else if (playMatrix[k - 1][i] === "O") {
      sum = sum + 2;
    }
  }
  if (sum === 3) {
    return `X win on row${k}`;
  } else if (sum === 6) {
    return `O win on row${k}`;
  }
};

const columnCheck = (playMatrix, k) => {
  //K is the number of column to check in playMatrix
  let sum = 0;
  for (let i = 0; i < 3; i++) {
    if (playMatrix[i][k - 1] === "X") {
      sum = sum + 1;
    } else if (playMatrix[i][k - 1] === "O") {
      sum = sum + 2;
    }
  }
  if (sum === 3) {
    return `X win on column${k}`;
  } else if (sum === 6) {
    return `O win on column${k}`;
  }
};

const mainDiagonalCheck = (playMatrix) => {
  let sum = 0;
  for (let i = 0; i < 3; i++) {
    if (playMatrix[i][i] === "X") {
      sum = sum + 1;
    } else if (playMatrix[i][i] === "O") {
      sum = sum + 2;
    }
  }
  if (sum === 3) {
    return `X win on main diagonal`;
  } else if (sum === 6) {
    return `O win on main diagonal`;
  }
};
const antiDiagonalCheck = (playMatrix) => {
  let sum = 0;
  let k = 2;
  for (let i = 0; i < 3; i++) {
    if (playMatrix[i][k] === "X") {
      sum = sum + 1;
    } else if (playMatrix[i][k] === "O") {
      sum = sum + 2;
    }
    k = k - 1;
  }
  if (sum === 3) {
    return `X win on anti diagonal`;
  } else if (sum === 6) {
    return `O win on anti diagonal`;
  }
};
