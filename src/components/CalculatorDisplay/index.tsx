import React, { FunctionComponent } from "react";
import { AppState } from "../../redux/reducers";
import styles from "./CalculatorDisplay.module.scss";
import { useSelector } from "react-redux";

const CalculatorDisplay: FunctionComponent = () => {
  const calculator = useSelector(
    (state: AppState): JSX.Element => state.display.displayValue
  );

  return (
    <div className={styles.calculator_display}>
      {!calculator ? "0" : calculator}
    </div>
  );
};

export default CalculatorDisplay;
