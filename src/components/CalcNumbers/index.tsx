import React, { FunctionComponent, useState, useEffect } from "react";
import styles from "./numbers.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { input_operand } from "../../redux/actionsCreators";

export interface Number {
  readonly CalculatorNumber: string;
}

const CalcNumbers: FunctionComponent<Number> = ({
  CalculatorNumber
}): JSX.Element => {
  const dispatch = useDispatch();

  return (
    <div className={styles[`calculatorBody_${CalculatorNumber}`]}>
      <button onClick={(): void => dispatch(input_operand(CalculatorNumber))}>
        {CalculatorNumber}
      </button>
    </div>
  );
};

export default CalcNumbers;
