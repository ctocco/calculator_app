import React from "react";
import styles from "./App.module.scss";
import CalculatorBody from "./CalculatorBody";
import CalculatorDisplay from "./CalculatorDisplay";

const App = (): JSX.Element => {
  return (
    <div className={styles.calculator}>
      <CalculatorDisplay />
      <CalculatorBody />
    </div>
  );
};

export default App;
