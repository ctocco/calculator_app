import React, { FunctionComponent, useState, useEffect } from "react";
import CalcNumbers from "../Buttons/CalcNumbers";
import CalcOperators from "../Buttons/CalcOperators";
import Clear from "../Buttons/Clear";
import Dot from "../Buttons/Dot";
import styles from "./CalculatorBody.module.scss";

import uuid from "uuid/v1";

import { numbers, operators, clear, dot } from "../../helpers/hardCodedValues";

const CalculatorBody = () => {
  //UI
  const [calculatorNumbers, setCalculatorNumbers] = useState([]);
  const [calculatorOperators, setCalculatorOperators] = useState([]);

  // set intial values for calculator UI
  useEffect(() => {
    setCalculatorNumbers(numbers);
    setCalculatorOperators(operators);
  }, []);

  return (
    <section className={styles.calculatorBody}>
      <div className={styles.calculatorBody_numbers}>
        <Clear clear={clear} />
        {calculatorNumbers.map(CalculatorNumber => (
          <CalcNumbers
            CalculatorNumber={CalculatorNumber}
            // addStringOfNumber={addStringOfNumber}
            key={uuid()}
          />
        ))}
        <Dot dot={dot} />
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
