import React, { FunctionComponent } from "react";
import styles from "./numbers.module.scss";
import { useDispatch } from "react-redux";
import { input_operand } from "../../../redux/actionsCreators";

export interface Number {
  readonly CalculatorNumber: string;
}

const CalcNumbers: FunctionComponent<Number> = ({
  CalculatorNumber
}): JSX.Element => {
  const dispatch = useDispatch();

  return (
    <div className={styles[`calculatorBody_${CalculatorNumber}`]}>
      <button
        className=""
        onClick={(): void => dispatch(input_operand(CalculatorNumber))}
      >
        {CalculatorNumber}
      </button>
    </div>
  );
};

export default CalcNumbers;
