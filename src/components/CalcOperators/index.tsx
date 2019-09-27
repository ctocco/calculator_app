import React, { FunctionComponent, useState } from "react";
import styles from "./operators.module.scss";

interface Operator {
  readonly operator: string;
  addStringOfOperator(operator: string): void;
}

const CalcOperator: FunctionComponent<Operator> = ({
  operator,
  addStringOfOperator
}): JSX.Element => {
  return (
    <div>
      <button
        onClick={(): void => {
          addStringOfOperator(operator);
        }}
      >
        {operator}
      </button>
    </div>
  );
};

export default CalcOperator;
