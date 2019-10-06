import React, { FunctionComponent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { input_operator } from "../../../redux/actionsCreators";
import styles from "./operators.module.scss";

const CalcOperator = ({ operator }) => {
  const display = useSelector(state => state.display);
  const dispatch = useDispatch();

  const calculate = () => {
    dispatch(input_operator(operator));
    let current = parseFloat(display.currentOperand.join(""));
    let previous = parseFloat(display.previousOperand);
    if (display.operation === "+") {
      console.log(previous + current);
    }
    if (display.operation === "-") {
      console.log(previous - current);
    }
    if (display.operation === "*") {
      console.log(previous * current);
    }
    if (display.operation === "/") {
      console.log(previous / current);
    }
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
