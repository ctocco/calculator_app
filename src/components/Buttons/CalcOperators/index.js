import React, { FunctionComponent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  input_operator,
  store_firstOperand
} from "../../../redux/actionsCreators";
import styles from "./operators.module.scss";

const CalcOperator = ({ operator }) => {
  const { firstOperand, displayValue, operation } = useSelector(
    state => state.display
  );
  const dispatch = useDispatch();

  const handleOperator = () => {
    console.log(firstOperand, displayValue, operation);
    let inputValue = parseFloat(displayValue);

    if (firstOperand === null) {
      dispatch(store_firstOperand(inputValue));
    }
    dispatch(input_operator(operator));
  };

  const performCalculation = {
    "+": (firstOperand, secondOperand) => firstOperand / secondOperand,
    "-": (firstOperand, secondOperand) => firstOperand / secondOperand,
    "/": (firstOperand, secondOperand) => firstOperand / secondOperand,
    "*": (firstOperand, secondOperand) => firstOperand / secondOperand
  };

  return (
    <div className={styles.operator}>
      <button className={styles.operator_function} onClick={handleOperator}>
        {operator}
      </button>
    </div>
  );
};

export default CalcOperator;
