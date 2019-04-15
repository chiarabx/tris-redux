import { UPDATE_CELLS } from "./Cell.action";

export const cellReducer = (
  state = ["", "", "", "", "", "", "", "", ""],
  action
) => {
  switch (action.type) {
    case UPDATE_CELLS:
      return action.payload;
    default:
      return state;
  }
};

export const changeTurnReducer = (state = 1, action) => {
  switch (action.type) {
    case "CHANGE_TURN":
      return action.payload;
    default:
      return state;
  }
};

export const scoreReducer = (state = null, action) => {
  switch (action.type) {
    case "UPDATE_SCORE":
      return action.payload;
    default:
      return state;
  }
};
