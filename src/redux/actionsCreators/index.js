export function input_operand(numbers_operators) {
  return {
    type: "INPUT_OPERAND",
    payload: numbers_operators
  };
}

export function clear_display(numbers_operators) {
  return {
    type: "CLEAR_DISPLAY"
  };
}

export function sum_total(sum_total) {
  return {
    type: "SHOW_SUM",
    payload: sum_total
  };
}
