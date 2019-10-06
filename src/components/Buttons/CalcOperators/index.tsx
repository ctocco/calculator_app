import React, { FunctionComponent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { input_operator } from "../../../redux/actionsCreators";
import styles from "./operators.module.scss";

interface Operators {
  readonly operator: string;
}
const CalcOperator: FunctionComponent<Operators> = ({
  operator
}): JSX.Element => {
  const display: string[] = useSelector((state: object) => state.display);
  const dispatch = useDispatch();
  return (
    <div className={styles.operator}>
      <button
        className={styles.operator_function}
        onClick={(): void => {
          dispatch(input_operator(operator));
        }}
      >
        {operator}
      </button>
    </div>
  );
};

export default CalcOperator;
