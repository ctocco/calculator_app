import {
  INPUT_OPERAND,
  INPUT_OPERATOR,
  INPUT_DOT,
  CLEAR_DISPLAY
} from "../actionTypes";

// in the future make the functions camelCase

export function input_operand(numbers_operators) {
  return {
    type: INPUT_OPERAND,
    payload: numbers_operators
  };
}

export function input_operator(operator) {
  return {
    type: INPUT_OPERATOR,
    payload: operator
  };
}

export function input_dot(dot) {
  return {
    type: INPUT_DOT,
    payload: dot
  };
}

export function clear_display() {
  return {
    type: CLEAR_DISPLAY
  };
}

export function displayNumbers() {
  return {
    type: "DISPLAY"
  };
}
