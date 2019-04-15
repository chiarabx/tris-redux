import { updateCell, changeTurn, updateScore } from "./Cell/redux/Cell.action";

export const checkWinner = (array, el) => {
  if (array.indexOf("") === -1) {
    updateScore("tie");
  }
  if (el[0] !== "") {
    if ((el[0] === el[1]) & (el[0] === el[2])) {
      if (el[0] === "⭕️") updateScore("⭕️CIRCLE⭕️");
      else updateScore("❌CROSS❌");
    }
  }
};

export const play = (arr, idx, turn) => {
  updateCell(arr, idx, turn);
  changeTurn(turn);
  let combos = [
    [arr[0], arr[1], arr[2]],
    [arr[3], arr[4], arr[5]],
    [arr[6], arr[7], arr[8]],
    [arr[0], arr[3], arr[6]],
    [arr[1], arr[4], arr[7]],
    [arr[2], arr[5], arr[8]],
    [arr[0], arr[4], arr[8]],
    [arr[6], arr[4], arr[2]]
  ];
  combos.forEach(element => checkWinner(arr, element));
};

export const empty = () => {
  updateCell(["", "", "", "", "", "", "", "", ""]);
  updateScore(null);
};
