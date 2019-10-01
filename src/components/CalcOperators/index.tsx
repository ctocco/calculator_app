import React, { FunctionComponent, useState } from "react";
import { useDispatch } from "react-redux";
import { input_operand } from "../../redux/actionsCreators";
import styles from "./operators.module.scss";

interface Operators {
  readonly operator: string;
  addStringOfOperator(operator: string): void;
}

const CalcOperator: FunctionComponent<Operators> = ({
  operator
}): JSX.Element => {
  const dispatch = useDispatch();
  return (
    <div>
      <button
        onClick={(): void => {
          dispatch(input_operand(operator));
        }}
      >
        {operator}
      </button>
    </div>
  );
};

export default CalcOperator;
