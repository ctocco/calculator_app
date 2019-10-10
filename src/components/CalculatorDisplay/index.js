import React from "react";
import styles from "./CalculatorDisplay.module.scss";
import { useSelector } from "react-redux";

const CalculatorDisplay = () => {
  const calculator = useSelector(state => state.display);

  return (
    <div className={styles.calculator_display}>
      {!calculator.displayValue ? "0" : calculator.displayValue}
    </div>
  );
};

export default CalculatorDisplay;
