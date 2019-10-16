import React, { FunctionComponent } from "react";
import styles from "./numbers.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../../redux/reducers";
import {
  input_operand,
  next_displayValue
} from "../../../redux/actionsCreators";

interface calculatornumber {
  CalculatorNumber: string;
}

const CalcNumbers: FunctionComponent<calculatornumber> = ({
  CalculatorNumber
}) => {
  const { waitingForSecondOperand } = useSelector(
    (state: AppState) => state.display
  );
  const dispatch = useDispatch();

  const operandActions = () => {
    if (waitingForSecondOperand === true) {
      dispatch(next_displayValue(CalculatorNumber));
    } else {
      dispatch(input_operand(CalculatorNumber));
    }
  };

  return (
    <div className={styles[`calculatorBody_${CalculatorNumber}`]}>
      <button
        className={styles.calculatorBody_numbers}
        onClick={operandActions}
      >
        {CalculatorNumber}
      </button>
    </div>
  );
};

export default CalcNumbers;
