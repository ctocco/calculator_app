import React, { FunctionComponent } from "react";
import styles from "./CalculatorDisplay.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { sum_total } from "../../redux/actionsCreators";

const CalculatorDisplay: FunctionComponent<any> = (): JSX.Element => {
  const display: string[] = useSelector(
    (state: object) => state.display.initialValue
  );
  const displaySum: object = useSelector(
    (state: object): object => state.display
  );

  return (
    <div className={styles.calculator_display}>
      {display.length < 1 ? "0" : display}
    </div>
  );
};

export default CalculatorDisplay;
