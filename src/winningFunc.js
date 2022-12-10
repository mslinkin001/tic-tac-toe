export const winCheckFunc = (tileNumber, playMatrix) => {
  console.log(tileNumber, playMatrix);
  switch (tileNumber) {
    case "tile1":
      const result1 = rowCheck(playMatrix, 1);
      const result2 = columnCheck(playMatrix, 1);
      const result3 = mainDiagonalCheck(playMatrix);
      if (result1) {
        return result1;
      } else if (result2) {
        return result2;
      } else if (result3) {
        return result3;
      }

      break;
    case "tile2":
      const result4 = rowCheck(playMatrix, 1);
      const result5 = columnCheck(playMatrix, 2);
      if (result4) {
        return result4;
      } else if (result5) {
        return result5;
      }
      break;
    case "tile3":
      const result6 = rowCheck(playMatrix, 1);
      const result7 = columnCheck(playMatrix, 3);
      const result8 = antiDiagonalCheck(playMatrix);
      if (result6) {
        return result6;
      } else if (result7) {
        return result7;
      } else if (result8) {
        return result8;
      }

      break;
    case "tile4":
      const result9 = rowCheck(playMatrix, 2);
      const result10 = columnCheck(playMatrix, 1);
      if (result9) {
        return result9;
      } else if (result10) {
        return result10;
      }
      break;
    case "tile5":
      const result11 = rowCheck(playMatrix, 2);
      const result12 = columnCheck(playMatrix, 2);
      const result13 = antiDiagonalCheck(playMatrix);
      const result14 = mainDiagonalCheck(playMatrix);
      if (result11) {
        return result11;
      } else if (result12) {
        return result12;
      } else if (result13) {
        return result13;
      } else if (result14) {
        return result14;
      }

      break;
    case "tile6":
      const result15 = rowCheck(playMatrix, 2);
      const result16 = columnCheck(playMatrix, 3);
      if (result15) {
        return result15;
      } else if (result16) {
        return result16;
      }
      break;
    case "tile7":
      const result17 = rowCheck(playMatrix, 3);
      const result18 = columnCheck(playMatrix, 1);
      const result19 = antiDiagonalCheck(playMatrix);
      if (result17) {
        return result17;
      } else if (result18) {
        return result18;
      } else if (result19) {
        return result19;
      }

      break;
    case "tile8":
      const result20 = rowCheck(playMatrix, 3);
      const result21 = columnCheck(playMatrix, 2);
      if (result20) {
        return result20;
      } else if (result21) {
        return result21;
      }
      break;
    case "tile9":
      const result22 = rowCheck(playMatrix, 3);
      const result23 = columnCheck(playMatrix, 3);
      const result24 = mainDiagonalCheck(playMatrix);
      if (result22) {
        return result22;
      } else if (result23) {
        return result23;
      } else if (result24) {
        return result24;
      }

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
