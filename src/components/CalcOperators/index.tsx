import React, { FunctionComponent, useState } from "react";
import { useDispatch } from "react-redux";
import { update_display } from "../../redux/actionsCreators";
import styles from "./operators.module.scss";

interface Operator {
  readonly operator: string;
  addStringOfOperator(operator: string): void;
}

const CalcOperator: FunctionComponent<Operator> = ({
  operator
}): JSX.Element => {
  const dispatch = useDispatch();
  return (
    <div>
      <button
        onClick={(): void => {
          dispatch(update_display(operator));
        }}
      >
        {operator}
      </button>
    </div>
  );
};

export default CalcOperator;
