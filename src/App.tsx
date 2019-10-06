import React from "react";
import styles from "./App.module.scss";
import CalculatorBody from "../src/components/CalculatorBody";
import CalculatorDisplay from "../src/components/CalculatorDisplay";

const App = (): JSX.Element => {
  return (
    <div className={styles.calculator}>
      <CalculatorDisplay />
      <CalculatorBody />
    </div>
  );
};

export default App;
