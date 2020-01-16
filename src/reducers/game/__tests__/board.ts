import { reducer, initialState, BoardState } from "../board"
import { resetGame } from "../../../actions/resetGame"


it("resets the game board to the initial state", () => {
    const state: BoardState = [
        [null, null, null, null, null, "yellow", null],
        [null, null, null, null, null, "red", null],
        [null, null, null, null, null, "yellow", null],
        [null, null, null, null, null, "red", null],
        [null, null, null, null, null, "yellow", null],
        [null, null, null, null, null, "red", null]
    ];

    const newState = reducer(state, resetGame());

    expect(newState).not.toBe(state);
    expect(newState).toEqual(initialState);
});