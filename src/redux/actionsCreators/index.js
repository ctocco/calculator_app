export function update_display(numbers_operators) {
  return {
    type: "UPDATE_DISPLAY",
    payload: numbers_operators
  };
}

export function sum_total(sum_total) {
  return {
    type: "SHOW_SUM",
    payload: sum_total
  };
}
