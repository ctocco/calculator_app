import React, { FunctionComponent, useState } from "react";
import CalcNumbers from "./components/CalcNumbers";
import CalcOperators from "./components/CalcOperators";
import styles from "./CalculatorBody.module.scss";
import uuid from "uuid/v1";

const CalculatorBody: FunctionComponent<any> = (): JSX.Element => {
  const [calculatorNumbers] = useState([
    "C",
    "7",
    "8",
    "9",
    "4",
    "5",
    "6",
    "1",
    "2",
    "3",
    "0",
    "."
  ]);
  const [calculatorOperators] = useState(["/", "*", "-", "+", "="]);
  const [arrayOfNumbersAndOperators, setarrayOfNumbersAndOperators] = useState(
    []
  );
  const [sumOfArray, setSumOfArray] = useState([]);

  const addStringOfNumber = (numberValue: string): void => {
    setarrayOfNumbersAndOperators([...arrayOfNumbersAndOperators, numberValue]);
  };

  const addStringOfOperator = (operatorValue: string): void => {
    setarrayOfNumbersAndOperators([]);
    parseStrings(operatorValue);
  };

  const parseStrings = operatorValue => {
    let parsedNumber = parseInt(arrayOfNumbersAndOperators.join(""), 10);
    setSumOfArray([...sumOfArray, parsedNumber]);
    console.log(sumOfArray);
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
