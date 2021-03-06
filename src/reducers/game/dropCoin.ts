import { BoardState } from "./board";
import { Color } from "../../types";

export function dropCoin(
  state: BoardState,
  column: number,
  color: Color
): BoardState {
  let validRow = null;

  for (let row = 0; row < state.length; row++) {
    if (state[row][column] === null) {
      validRow = row;
    }
  }

  if (validRow === null) {
    return state;
  }

  const newState = [...state];
  newState[validRow] = [...newState[validRow]];
  newState[validRow][column] = color;

  return newState;
}
