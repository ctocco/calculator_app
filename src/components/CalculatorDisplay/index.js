import React, { FunctionComponent } from "react";
import styles from "./CalculatorDisplay.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { sum_total } from "../../redux/actionsCreators";

const CalculatorDisplay = () => {
  const display = useSelector(state => state.display.display);

  return (
    <div className={styles.calculator_display}>{!display ? "0" : display}</div>
  );
};

export default CalculatorDisplay;
