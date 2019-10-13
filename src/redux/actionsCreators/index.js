import {
  INPUT_OPERAND,
  INPUT_OPERATOR,
  INPUT_DOT,
  CLEAR_DISPLAY,
  STORE_FIRSTOPERAND,
  STORE_NEXT_VALUE,
  SHOW_RESULT
} from "../actionTypes/actionTypes";

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

export function store_firstOperand(inputValue) {
  return {
    type: STORE_FIRSTOPERAND,
    payload: inputValue
  };
}

export function next_displayValue(nextInput_value) {
  return {
    type: STORE_NEXT_VALUE,
    payload: nextInput_value
  };
}

export function show_result(result) {
  return {
    type: SHOW_RESULT,
    payload: result
  };
}
