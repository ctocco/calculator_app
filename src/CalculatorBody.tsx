import React, { FunctionComponent, useState } from "react";
import styles from "./CalculatorBody.module.scss";

const CalculatorBody: FunctionComponent<{ initial?: number[] }> = ({
  initial = []
}) => {
  const [calculatorNumbers, setCalculatorNumbers] = useState(initial);

  console.log(initial);
  return <div className={styles.CalculatorBody}>"hello"</div>;
};

export default CalculatorBody;
