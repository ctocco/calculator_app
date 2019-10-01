import React, { FunctionComponent, useState, useEffect } from "react";
import styles from "./numbers.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { input_operand } from "../../redux/actionsCreators";

export interface Number {
  readonly number: string;
  addStringOfNumber: string;
}

const CalcNumbers: FunctionComponent<Number> = ({ number }): JSX.Element => {
  const dispatch = useDispatch();

  return (
    <div className={styles[`calculatorBody_${number}`]}>
      <button onClick={(): void => dispatch(input_operand(number))}>
        {number}
      </button>
    </div>
  );
};

export default CalcNumbers;
