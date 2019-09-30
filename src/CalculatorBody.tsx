import React, { FunctionComponent, useState, useEffect } from "react";
import CalcNumbers from "./components/CalcNumbers";
import CalcOperators from "./components/CalcOperators";
import styles from "./CalculatorBody.module.scss";
import uuid from "uuid/v1";

import { numbersAndClear, operators } from "./helpers/hardCodedValues";
const CalculatorBody: FunctionComponent<any> = (): JSX.Element => {
  //UI
  const [calculatorNumbers, setCalculatorNumbers] = useState([]);
  const [calculatorOperators, setCalculatorOperators] = useState([]);

  // set intial values for calculator UI
  useEffect(() => {
    setCalculatorNumbers(numbersAndClear);
    setCalculatorOperators(operators);
  }, []);

  return (
    <section className={styles.calculatorBody}>
      <div className={styles.calculatorBody_numbers}>
        {calculatorNumbers.map(CalculatorNumber => (
          <CalcNumbers
            number={CalculatorNumber}
            // addStringOfNumber={addStringOfNumber}
            key={uuid()}
          />
        ))}
      </div>
      <div className={styles.calculatorBody_operators}>
        {calculatorOperators.map(CalculatorOperator => (
          <CalcOperators
            operator={CalculatorOperator}
            // addStringOfOperator={addStringOfOperator}
            key={uuid()}
          />
        ))}
      </div>
    </section>
  );
};

export default CalculatorBody;
