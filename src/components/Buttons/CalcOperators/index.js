import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  input_operator,
  store_firstOperand,
  show_result
} from "../../../redux/actionsCreators";
import styles from "./operators.module.scss";

const CalcOperator = ({ operator }) => {
  const { firstOperand, displayValue, operation } = useSelector(
    state => state.display
  );
  const dispatch = useDispatch();

  const handleOperator = () => {
    let inputValue = parseFloat(displayValue);

    if (firstOperand === null) {
      dispatch(store_firstOperand(inputValue));
    }
    if (operation) {
      const result = performCalculation[operation](firstOperand, inputValue);
      dispatch(show_result(result));
    }
    dispatch(input_operator(operator));
  };

  const performCalculation = {
    "+": (firstOperand, secondOperand) => firstOperand + secondOperand,
    "-": (firstOperand, secondOperand) => firstOperand - secondOperand,
    "/": (firstOperand, secondOperand) => firstOperand / secondOperand,
    "*": (firstOperand, secondOperand) => firstOperand * secondOperand,
    "=": (firstOperand, secondOperand) => secondOperand
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
