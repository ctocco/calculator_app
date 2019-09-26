import React, { FunctionComponent, useState } from "react";
import CalcNumbers from "./components/CalcNumbers";
import styles from "./CalculatorBody.module.scss";

const CalculatorBody: FunctionComponent<any> = (): JSX.Element => {
  const [calculatorNumbers] = useState([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, -1]);

  return (
    <section className={styles.calculatorBody}>
      <div className={styles.calculatorBody_numbers}>
        {calculatorNumbers.map(CalculatorNumber => (
          <CalcNumbers number={CalculatorNumber} />
        ))}
      </div>
      <div className={styles.calculatorBody_operators} />
    </section>
  );
};

export default CalculatorBody;
