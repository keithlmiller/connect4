import { Combination } from "../../../config";
import { BoardState } from "../board";
import { Color } from "../../../types";

export function testCombinationAt(
  state: BoardState,
  combination: Combination,
  row: number,
  column: number
): Color {
  // this is the original cell color, we'll confirm that every
  // cell referred by the combination is the same
  const cell = state[row][column];

  for (const [x, y] of combination) {
    const nextRow = row + x;
    const nextColumn = column + y;

    // if the next cell falls outside the board or the next cell
    // does not contain a color, we consider the combination to be invalid
    if (!state[nextRow] || !state[nextRow][nextColumn]) {
      return null;
    }

    // if we found a different color the combination is also invalid
    if (cell !== state[nextRow][nextColumn]) {
      return null;
    }
  }

  return cell;
}
