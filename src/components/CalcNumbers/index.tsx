import React, { FunctionComponent } from "react";
import styles from "./numbers.module.scss";
import { useDispatch } from "react-redux";
import { update_display } from "../../redux/actionsCreators";

export interface Number {
  readonly number: string;
  addStringOfNumber: string;
}

const CalcNumbers: FunctionComponent<Number> = ({ number }): JSX.Element => {
  const dispatch = useDispatch();

  return (
    <div className={styles[`calculatorBody_${number}`]}>
      <button onClick={(): void => dispatch(update_display(number))}>
        {number}
      </button>
    </div>
  );
};

export default CalcNumbers;
