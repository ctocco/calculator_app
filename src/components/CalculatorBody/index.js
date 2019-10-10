import React, { useState, useEffect } from "react";
import CalcNumbers from "../Buttons/CalcNumbers";
import CalcOperators from "../Buttons/CalcOperators";
import Clear from "../Buttons/Clear";
import Dot from "../Buttons/Dot";
import styles from "./CalculatorBody.module.scss";

import uuid from "uuid/v1";

import {
  Numbers,
  Operators,
  ClearString,
  DotString
} from "../../helpers/hardCodedValues";

const CalculatorBody = () => {
  //UI
  const [calculatorNumbers, setCalculatorNumbers] = useState([]);
  const [calculatorOperators, setCalculatorOperators] = useState([]);

  // set intial values for calculator UI
  useEffect(() => {
    setCalculatorNumbers(Numbers);
    setCalculatorOperators(Operators);
  }, []);

  return (
    <section className={styles.calculatorBody}>
      <div className={styles.calculatorBody_numbers}>
        <Clear clear={ClearString} />
        {calculatorNumbers.map(CalculatorNumber => (
          <CalcNumbers CalculatorNumber={CalculatorNumber} key={uuid()} />
        ))}
        <Dot dot={DotString} />
      </div>
      <div className={styles.calculatorBody_operators}>
        {calculatorOperators.map(CalculatorOperator => (
          <CalcOperators operator={CalculatorOperator} key={uuid()} />
        ))}
      </div>
    </section>
  );
};

export default CalculatorBody;
