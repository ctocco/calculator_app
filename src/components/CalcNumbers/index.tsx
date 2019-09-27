import React, { useState } from "react";
import styles from "./numbers.module.scss";

export interface Number {
  readonly number: string;
  addStringOfNumber: string;
}

const CalcNumbers: React.FunctionComponent<Number> = ({
  number,
  addStringOfNumber
}: Number): JSX.Element => {
  return (
    <div className={styles[`calculatorBody_${number}`]}>
      <button onClick={(): string => addStringOfNumber(number)}>
        {number}
      </button>
    </div>
  );
};

export default CalcNumbers;
