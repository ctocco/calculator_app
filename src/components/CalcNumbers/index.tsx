import React, { useState } from "react";
import styles from "./numbers.module.scss";

export interface Number {
  readonly number: number;
}

const CalcNumbers: React.FunctionComponent<Number> = ({
  number
}: Number): JSX.Element => {
  const [value, setValue] = useState("ten");

  const showNumber = () => {
    let stringNumber: string = `${number}`;
  };

  return (
    <div className={styles[`calculatorBody_${number}`]}>
      <button onClick={showNumber}>{number}</button>
    </div>
  );
};

export default CalcNumbers;
