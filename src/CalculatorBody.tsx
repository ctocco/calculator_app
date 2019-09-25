import React, { FunctionComponent, useState } from "react";
import CalcNumbers from "./components/CalcNumbers";
import styles from "./CalculatorBody.module.scss";

const CalculatorBody: FunctionComponent<any> = (): JSX.Element => {
  const [calculatorNumbers] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  return (
    <div className={styles.CalculatorBody}>
      {calculatorNumbers.map(CalculatorNumber => (
        <CalcNumbers number={CalculatorNumber} />
      ))}
    </div>
  );
};

export default CalculatorBody;
