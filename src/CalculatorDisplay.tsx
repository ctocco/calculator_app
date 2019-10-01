import React, { FunctionComponent, useState } from "react";
import styles from "./CalculatorDisplay.module.scss";
import { useSelector } from "react-redux";

const CalculatorDisplay = (): JSX.Element => {
  const display = useSelector(state => state.display.initialValue);
  return (
    <div className={styles.calculator_display}>
      {display.length < 1 ? "0" : display}
    </div>
  );
};

export default CalculatorDisplay;
