import { createSelector } from "@reduxjs/toolkit";

/** Selector **/
const counterSelector = (state) => state.counter;

const selectCounterSelector = createSelector(
    counterSelector,
    state => state.value);

/** function */
export const selectCounter = (state) => {
    return selectCounterSelector(state);
}
