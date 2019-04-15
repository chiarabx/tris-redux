export const UPDATE_CELLS = "UPDATE_CELLS";

export const changeTurn = turn => {
  turn = -turn;
  return { type: "CHANGE_TURN", payload: turn };
};

export const updateCells = (arr, idx, turn) => {
  if (turn === 1) {
    arr[idx] = "⭕️";

    return { type: "UPDATE_CELLS", payload: arr };
  } else {
    arr[idx] = "❌";

    return { type: "UPDATE_CELLS", payload: arr };
  }
};

export const updateScore = score => {
  return { type: "UPDATE_SCORE", payload: score };
};
