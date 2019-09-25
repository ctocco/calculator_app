import * as React from "react";

export interface Number {
  readonly number: number;
}

const CalcNumbers: React.FunctionComponent<Number> = ({
  number
}: Number): JSX.Element => {
  return (
    <React.Fragment>
      <button>{number}</button>
    </React.Fragment>
  );
};

export default CalcNumbers;
