import React from "react";
import styles from "./numbers.module.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  input_operand,
  next_displayValue
} from "../../../redux/actionsCreators";

const CalcNumbers = ({ CalculatorNumber }) => {
  const { waitingForSecondOperand } = useSelector(state => state.display);
  const dispatch = useDispatch();

  const operandActions = () => {
    console.log(waitingForSecondOperand);
    if (waitingForSecondOperand === true) {
      dispatch(next_displayValue(CalculatorNumber));
    } else {
      dispatch(input_operand(CalculatorNumber));
    }
  };

  return (
    <div className={styles[`calculatorBody_${CalculatorNumber}`]}>
      <button className="" onClick={operandActions}>
        {CalculatorNumber}
      </button>
    </div>
  );
};

export default CalcNumbers;
