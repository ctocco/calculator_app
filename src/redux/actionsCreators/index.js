import { SHOW_SUM, UPDATE_DISPLAY } from "../actionTypes";

export function increment(numbers_operators) {
  return {
    type: UPDATE_DISPLAY,
    payload: numbers_operators
  };
}

export function decrement(sum_total) {
  return {
    type: SHOW_SUM,
    payload: sum_total
  };
}
