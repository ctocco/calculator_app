import React, { FunctionComponent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { input_operator, sum, show_sum } from "../../../redux/actionsCreators";
import styles from "./operators.module.scss";

const CalcOperator = ({ operator }) => {
  const display = useSelector(state => state.display);
  const dispatch = useDispatch();

  const calculate = () => {
    if (!display.currentOperand) return;
    if (display.operation.includes(operator)) return;
    dispatch(input_operator(operator));
    let current = parseFloat(display.currentOperand.join(""));
    let previous = parseFloat(display.previousOperand);
    // const performCalculation = {
    //   "+" :  (firstOperand, secondOperand) => previous / secondOperand,
    //   "-" :  (firstOperand, secondOperand) => firstOperand / secondOperand,
    //   "/" :  (firstOperand, secondOperand) => firstOperand / secondOperand,
    //   "*" :  (firstOperand, secondOperand) => firstOperand / secondOperand,
    // }
    if (display.operation === "+")
      sumValue = parseFloat(previous) + parseFloat(current);
    if (display.operation === "-")
      sumValue = parseFloat(previous) - parseFloat(current);
    if (display.operation === "*")
      sumValue = parseFloat(previous) * parseFloat(current);
    if (display.operation === "/")
      sumValue = parseFloat(previous) / parseFloat(current);
    dispatch(sum(sumValue));
    if (operator === "=") {
      showResult();
    }
  };

  const showResult = () => {
    dispatch(show_sum(display.sum));
  };

  return (
    <div className={styles.operator}>
      <button className={styles.operator_function} onClick={calculate}>
        {operator}
      </button>
    </div>
  );
};

export default CalcOperator;
