const performCalculation: any = {
  "+": (firstOperand: number, secondOperand: number) =>
    firstOperand + secondOperand,
  "-": (firstOperand: number, secondOperand: number) =>
    firstOperand - secondOperand,
  "/": (firstOperand: number, secondOperand: number) =>
    firstOperand / secondOperand,
  "*": (firstOperand: number, secondOperand: number) =>
    firstOperand * secondOperand,
  "=": (firstOperand: void, secondOperand: number) => secondOperand
};

export { performCalculation };
