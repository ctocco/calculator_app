import React, { FunctionComponent } from "react";
import styles from "./CalculatorDisplay.module.scss";
import { useSelector } from "react-redux";

const CalculatorDisplay: FunctionComponent<any> = (): JSX.Element => {
  const display: string[] = useSelector(
    (state: object) => state.display.initialValue
  );
  return (
    <div className={styles.calculator_display}>
      {display.length < 1 ? "0" : display}
    </div>
  );
};

export default CalculatorDisplay;
