import React, { FunctionComponent, useState, useEffect } from "react";
import CalcNumbers from "./components/CalcNumbers";
import CalcOperators from "./components/CalcOperators";
import styles from "./CalculatorBody.module.scss";
import uuid from "uuid/v1";

import { numbersAndClear, operators } from "./helpers/hardCodedValues";
const CalculatorBody: FunctionComponent<any> = (): JSX.Element => {
  const [calculatorNumbers, setCalculatorNumbers] = useState([]);
  const [calculatorOperators, setCalculatorOperators] = useState([]);
  const [arrayOfNumbersAndOperators, setarrayOfNumbersAndOperators] = useState(
    []
  );
  const [operator, setOperator] = useState("");
  const [sumOfArray, setSumOfArray] = useState([]);

  // set intial values for calculator UI
  useEffect(() => {
    setCalculatorNumbers(numbersAndClear);
    setCalculatorOperators(operators);
  }, []);

  // add string of numbers
  const addStringOfNumber = (numberValue: string): void => {
    setarrayOfNumbersAndOperators([...arrayOfNumbersAndOperators, numberValue]);
  };

  // with operator firs
  const addStringOfOperator = (operatorValue: string): void => {
    setOperator(operatorValue);
    setarrayOfNumbersAndOperators([]);
    parseStrings();
    console.log(operator);
  };

  const parseStrings = (): void => {
    let parsedNumber: number = parseInt(
      arrayOfNumbersAndOperators.join(""),
      10
    );
    setSumOfArray([...sumOfArray, parsedNumber]);
  };

  const getSum = (): void => {
    if (operator === "+") {
      let sum = sumOfArray[0] + sumOfArray[1];
    }
  };

  return (
    <section className={styles.calculatorBody}>
      <div className={styles.calculatorBody_numbers}>
        {calculatorNumbers.map(CalculatorNumber => (
          <CalcNumbers
            number={CalculatorNumber}
            addStringOfNumber={addStringOfNumber}
            key={uuid()}
          />
        ))}
      </div>
      <div className={styles.calculatorBody_operators}>
        {calculatorOperators.map(CalculatorOperator => (
          <CalcOperators
            operator={CalculatorOperator}
            addStringOfOperator={addStringOfOperator}
            key={uuid()}
          />
        ))}
      </div>
    </section>
  );
};

export default CalculatorBody;
