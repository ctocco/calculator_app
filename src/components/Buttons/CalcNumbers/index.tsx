import React, { FunctionComponent } from "react";
import styles from "./numbers.module.scss";
import { useDispatch } from "react-redux";
import { input_operand, displayNumbers } from "../../../redux/actionsCreators";

export interface Number {
  readonly CalculatorNumber: string;
}

const CalcNumbers: FunctionComponent<Number> = ({
  CalculatorNumber
}): JSX.Element => {
  const dispatch = useDispatch();

  const operandActions = () => {
    dispatch(input_operand(CalculatorNumber));
    dispatch(displayNumbers(CalculatorNumber));
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
