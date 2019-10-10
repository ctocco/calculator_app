import React, { FunctionComponent } from "react";
import styles from "./CalculatorDisplay.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { sum_total } from "../../redux/actionsCreators";

const CalculatorDisplay = () => {
  const calculator = useSelector(state => state.display);

  return (
    <div className={styles.calculator_display}>
      {!calculator.displayValue ? "0" : calculator.displayValue}
    </div>
  );
};

export default CalculatorDisplay;
